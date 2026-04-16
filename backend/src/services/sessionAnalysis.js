import { ENV } from "../lib/env.js";

function normalizeScore(value) {
  const parsed = Number(value);
  if (Number.isNaN(parsed)) return 0;
  return Math.min(100, Math.max(0, Math.round(parsed)));
}

function trimStringArray(values, max = 6) {
  if (!Array.isArray(values)) return [];
  return values
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean)
    .slice(0, max);
}

function normalizeRecommendation(value) {
  const allowed = new Set([
    "hire",
    "lean_hire",
    "no_hire",
    "insufficient_data",
  ]);
  return allowed.has(value) ? value : "insufficient_data";
}

function buildPromptPayload(session) {
  return {
    sessionId: session._id?.toString(),
    sessionName: session.name,
    status: session.status,
    durationMinutes: session.duration,
    startedAt: session.startedAt,
    createdAt: session.createdAt,
    availableTopics: session.available_topic || [],
    chosenTopics: session.chosen_topic || [],
    problems: (session.problems || []).map((p) => ({
      title: p.title,
      difficulty: p.difficulty,
      topics: p.tags || p.topics || [],
    })),
    candidate: {
      id: session.participant?._id?.toString(),
      name: session.participant?.name || "Unknown Candidate",
      email: session.participant?.email || "",
    },
    analytics: session.analytics || {},
    monitoringLogs: (session.monitoringLogs || []).map((log) => ({
      type: log.type,
      timestamp: log.timestamp,
    })),
    codeSnapshotsCount: Array.isArray(session.codeSnapshots)
      ? session.codeSnapshots.length
      : 0,
    feedback: session.feedback || {},
  };
}

function fallbackAnalysis() {
  return {
    overallScore: 0,
    recommendation: "insufficient_data",
    summary:
      "Insufficient reliable session data to produce a fair candidate assessment.",
    strengths: [],
    improvements: [
      "Collect more coding activity and execution outcomes in the session.",
    ],
    rubric: {
      problemSolving: 0,
      codeQuality: 0,
      communication: 0,
      debugging: 0,
      timeManagement: 0,
    },
    redFlags: [],
  };
}

function safeJsonParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export async function generateSessionAnalysis(session) {
  if (!ENV.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is missing");
  }

  const model = ENV.OPENAI_MODEL || "gpt-4.1-mini";
  const promptPayload = buildPromptPayload(session);

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ENV.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You are an expert technical interviewer. Return strictly valid JSON only. Evaluate candidate performance from the given interview session telemetry. Be fair and conservative when data is sparse.",
        },
        {
          role: "user",
          content: `Analyze this interview session and return JSON with keys: overallScore (0-100), recommendation (hire|lean_hire|no_hire|insufficient_data), summary (string), strengths (string[]), improvements (string[]), rubric { problemSolving, codeQuality, communication, debugging, timeManagement } each 0-100, redFlags (string[]).\n\nSession data:\n${JSON.stringify(promptPayload)}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`OpenAI request failed: ${response.status} ${errorBody}`);
  }

  const body = await response.json();
  const content = body?.choices?.[0]?.message?.content || "";
  const parsed = safeJsonParse(content);

  if (!parsed || typeof parsed !== "object") {
    throw new Error("OpenAI response was not valid JSON");
  }

  const normalized = {
    overallScore: normalizeScore(parsed.overallScore),
    recommendation: normalizeRecommendation(parsed.recommendation),
    summary:
      typeof parsed.summary === "string" && parsed.summary.trim()
        ? parsed.summary.trim().slice(0, 1200)
        : fallbackAnalysis().summary,
    strengths: trimStringArray(parsed.strengths, 8),
    improvements: trimStringArray(parsed.improvements, 8),
    rubric: {
      problemSolving: normalizeScore(parsed?.rubric?.problemSolving),
      codeQuality: normalizeScore(parsed?.rubric?.codeQuality),
      communication: normalizeScore(parsed?.rubric?.communication),
      debugging: normalizeScore(parsed?.rubric?.debugging),
      timeManagement: normalizeScore(parsed?.rubric?.timeManagement),
    },
    redFlags: trimStringArray(parsed.redFlags, 6),
    model,
  };

  return normalized;
}

export function generateFallbackSessionAnalysis(session, reason = "") {
  const analytics = session?.analytics || {};
  const totalRuns = Number(analytics.totalRunCount || 0);
  const successfulRuns = Number(analytics.successfulRuns || 0);
  const errorCount = Number(analytics.errorCount || 0);

  const runQuality = totalRuns > 0 ? (successfulRuns / totalRuns) * 100 : 35;
  const errorPenalty = Math.min(25, errorCount * 2);
  const overallScore = Math.max(
    20,
    Math.min(100, Math.round(runQuality - errorPenalty + 25)),
  );

  const recommendation =
    overallScore >= 80 ? "hire" : overallScore >= 65 ? "lean_hire" : "no_hire";

  const redFlags = [];
  if (errorCount >= 5)
    redFlags.push("High error frequency during coding attempts.");
  if (totalRuns > 0 && successfulRuns === 0) {
    redFlags.push("No successful code runs were recorded.");
  }

  if (reason) {
    redFlags.push(`AI provider unavailable: ${reason.slice(0, 160)}`);
  }

  return {
    overallScore,
    recommendation,
    summary:
      "Generated using telemetry fallback because AI analysis provider was unavailable. Score is based on run success and error trends.",
    strengths:
      successfulRuns > 0
        ? [
            "Demonstrated at least one successful execution during the interview.",
          ]
        : ["Stayed engaged through coding attempts during the session."],
    improvements: [
      "Improve correctness before submission by validating edge cases.",
      "Reduce compile/runtime errors through incremental testing.",
    ],
    rubric: {
      problemSolving: Math.max(25, Math.min(95, overallScore - 5)),
      codeQuality: Math.max(20, Math.min(95, overallScore - 8)),
      communication: 60,
      debugging: Math.max(20, Math.min(95, overallScore - 10)),
      timeManagement: Math.max(25, Math.min(95, overallScore - 3)),
    },
    redFlags,
    model: "telemetry-fallback",
  };
}
