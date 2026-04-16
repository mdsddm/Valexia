import { chatClient, streamClient } from "../lib/stream.js";
import Session from "../models/Session.js";
import Problem from "../models/Problem.js";
import bcrypt from "bcryptjs";
import {
  generateSessionAnalysis,
  generateFallbackSessionAnalysis,
} from "../services/sessionAnalysis.js";

function hasSessionAccess(session, userId) {
  const targetId = userId?.toString();
  const hostId = (session.host?._id || session.host)?.toString();
  const participantId = (
    session.participant?._id || session.participant
  )?.toString();

  return hostId === targetId || participantId === targetId;
}

function isInsufficientQuotaError(errorMessage = "") {
  return /insufficient_quota|quota/i.test(errorMessage);
}

function parseListInput(value, maxItems = 8) {
  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === "string" ? item.trim() : ""))
      .filter(Boolean)
      .slice(0, maxItems);
  }

  if (typeof value === "string") {
    return value
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean)
      .slice(0, maxItems);
  }

  return [];
}

function clampScore(value) {
  const parsed = Number(value);
  if (Number.isNaN(parsed)) return 0;
  return Math.max(0, Math.min(100, Math.round(parsed)));
}

function normalizeSolvedStatus(value) {
  return ["yes", "partial", "no"].includes(value) ? value : "no";
}

function parseQuestionOutcomes(value, maxItems = 10) {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => ({
      problemId: item?.problemId || null,
      title:
        typeof item?.title === "string" ? item.title.trim().slice(0, 120) : "",
      solved: normalizeSolvedStatus(item?.solved),
      notes:
        typeof item?.notes === "string" ? item.notes.trim().slice(0, 500) : "",
    }))
    .slice(0, maxItems);
}

// =======================
// CREATE SESSION
// =======================
export async function createSession(req, res) {
  try {
    if (!chatClient || !streamClient) {
      return res
        .status(503)
        .json({ message: "Stream service is not configured" });
    }

    const {
      type = "live",
      scheduledAt,
      questionCount = 2,
      duration = 30,
      password,
      available_topic,
      topics,
      name,
    } = req.body;

    const userId = req.user?._id;
    const clerkId = req.user?.clerkId;

    if (!userId || !clerkId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // ✅ support both fields
    const finalTopics = available_topic || topics;

    if (!finalTopics || finalTopics.length === 0) {
      return res.status(400).json({ message: "Topics required" });
    }

    if (type === "scheduled" && !scheduledAt) {
      return res.status(400).json({ message: "scheduledAt required" });
    }

    let hashedPassword = null;
    if (password?.trim()) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    const callId = `session_${Date.now()}_${Math.random()
      .toString(36)
      .substring(7)}`;

    const session = await Session.create({
      host: userId,
      name: name || "Interview Session",
      questionCount: Number(questionCount) || 2,
      scheduledAt: type === "scheduled" ? new Date(scheduledAt) : null,
      duration,
      type,
      callId,
      available_topic: finalTopics,
      password: hashedPassword,
    });

    try {
      await streamClient.video.call("default", callId).getOrCreate({
        data: {
          created_by_id: clerkId,
          custom: {
            sessionId: session._id.toString(),
          },
        },
      });

      const channel = chatClient.channel("messaging", callId, {
        name: "Interview Session",
        created_by_id: clerkId,
        members: [clerkId],
      });

      await channel.create();
    } catch (err) {
      console.log("❌ STREAM ERROR:", err);

      await Session.findByIdAndDelete(session._id);

      return res.status(500).json({
        message: "Stream setup failed",
        error: err.message,
      });
    }

    return res.status(201).json({ session });
  } catch (error) {
    console.log("❌ createSession error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

// =======================
// GET ACTIVE + SCHEDULED
// =======================
export async function getActiveSessions(req, res) {
  try {
    const sessions = await Session.find({
      status: { $in: ["active", "scheduled"] },
    })
      .populate("host", "name profileImage email clerkId")
      .populate("participant", "name profileImage email clerkId")
      .populate("problems")
      .sort({ createdAt: -1 })
      .limit(20);

    return res.status(200).json({ sessions });
  } catch (error) {
    console.log("getActiveSessions error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

// =======================
// GET MY RECENT SESSIONS
// =======================
export async function getMyRecentSessions(req, res) {
  try {
    const userId = req.user._id;

    const sessions = await Session.find({
      status: "completed",
      $or: [{ host: userId }, { participant: userId }],
    })
      .populate("problems")
      .sort({ createdAt: -1 })
      .limit(20);

    return res.status(200).json({ sessions });
  } catch (error) {
    console.log("getMyRecentSessions error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

// =======================
// GET SESSION BY ID
// =======================
export async function getSessionById(req, res) {
  try {
    const { id } = req.params;

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId")
      .populate("problems");

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    return res.status(200).json({ session });
  } catch (error) {
    console.log("getSessionById error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

// =======================
// JOIN SESSION
// =======================
export async function joinSession(req, res) {
  try {
    if (!chatClient) {
      return res
        .status(503)
        .json({ message: "Stream service is not configured" });
    }

    const { id } = req.params;
    const { password, topics } = req.body;

    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    const session = await Session.findById(id).select("+password");

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    // ❌ completed
    if (session.status === "completed") {
      return res.status(400).json({ message: "Session completed" });
    }

    // ❌ host cannot join
    if (session.host.toString() === userId.toString()) {
      return res.status(400).json({ message: "Host cannot join" });
    }

    // ❌ early join restriction
    if (session.type === "scheduled") {
      const now = Date.now();
      const start = new Date(session.scheduledAt).getTime();

      if (now < start - 5 * 60 * 1000) {
        return res.status(400).json({ message: "Too early to join" });
      }
    }

    // 🔐 password check
    if (session.isProtected) {
      if (!password) {
        return res.status(400).json({ message: "Password required" });
      }

      const isMatch = await bcrypt.compare(password, session.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Incorrect password" });
      }
    }

    // ⚡ atomic join (prevents race condition)
    const problems = await Problem.aggregate([
      // If we want to strictly match topics, un-comment the next line.
      // For now, randomly select based on questionCount to fulfill the generic requirements:
      { $sample: { size: session.questionCount || 2 } },
    ]);
    const problemIds = problems.map((p) => p._id);

    const updatedSession = await Session.findOneAndUpdate(
      { _id: id, participant: null },
      {
        participant: userId,
        status: "active",
        chosen_topic: topics,
        problems: problemIds,
        startedAt: Date.now(),
      },
      { new: true, runValidators: true },
    );

    if (!updatedSession) {
      return res.status(409).json({ message: "Session full" });
    }

    // 💬 add to chat
    const channel = chatClient.channel("messaging", updatedSession.callId);
    await channel.addMembers([clerkId]);

    return res.status(200).json({ session: updatedSession });
  } catch (error) {
    console.log("joinSession error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

// =======================
// END SESSION
// =======================
export async function endSession(req, res) {
  try {
    if (!chatClient || !streamClient) {
      return res
        .status(503)
        .json({ message: "Stream service is not configured" });
    }

    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    const isHost = session.host?.toString() === userId.toString();
    const isParticipant = session.participant?.toString() === userId.toString();

    if (!isHost && !isParticipant) {
      return res
        .status(403)
        .json({ message: "Only host or candidate allowed" });
    }

    if (session.status === "completed") {
      return res.status(400).json({ message: "Already ended" });
    }

    // 🎥 delete video call
    await streamClient.video
      .call("default", session.callId)
      .delete({ hard: true });

    // 💬 delete chat
    await chatClient.channel("messaging", session.callId).delete();

    session.status = "completed";
    await session.save({ validateModifiedOnly: true });

    return res.status(200).json({
      message: "Session ended successfully",
      session,
    });
  } catch (error) {
    console.log("endSession error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

// =======================
// DELETE SESSION
// =======================
export async function deleteSession(req, res) {
  try {
    if (!chatClient || !streamClient) {
      return res
        .status(503)
        .json({ message: "Stream service is not configured" });
    }

    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    if (session.host.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only host allowed" });
    }

    try {
      if (session.callId) {
        await streamClient.video
          .call("default", session.callId)
          .delete({ hard: true });
        await chatClient.channel("messaging", session.callId).delete();
      }
    } catch (err) {
      console.log("Stream delete error (non-fatal):", err.message);
    }

    await Session.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Session deleted successfully",
    });
  } catch (error) {
    console.log("deleteSession error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

// =======================
// GENERATE SESSION ANALYSIS
// =======================
export async function analyzeSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId")
      .populate("problems", "title difficulty tags topics");

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    if (!hasSessionAccess(session, userId)) {
      return res.status(403).json({ message: "Access denied" });
    }

    if (session.status !== "completed") {
      return res.status(400).json({ message: "Session must be completed" });
    }

    try {
      const analysis = await generateSessionAnalysis(session);

      session.aiAnalysis = {
        ...session.aiAnalysis,
        ...analysis,
        status: "generated",
        errorMessage: "",
        generatedAt: new Date(),
      };

      await session.save({ validateModifiedOnly: true });

      return res.status(200).json({
        message: "Analysis generated",
        analysis: session.aiAnalysis,
      });
    } catch (error) {
      if (isInsufficientQuotaError(error.message)) {
        session.aiAnalysis = {
          ...session.aiAnalysis,
          status: "failed",
          errorMessage:
            "OpenAI quota exceeded. Manual analysis is required for this session.",
          generatedAt: new Date(),
        };

        await session.save({ validateModifiedOnly: true });

        return res.status(200).json({
          message: "Manual analysis required",
          manualRequired: true,
          analysis: session.aiAnalysis,
        });
      }

      const fallbackAnalysis = generateFallbackSessionAnalysis(
        session,
        error.message,
      );

      session.aiAnalysis = {
        ...session.aiAnalysis,
        ...fallbackAnalysis,
        status: "generated",
        errorMessage: `AI provider failed, fallback used: ${error.message}`,
        generatedAt: new Date(),
      };
      await session.save({ validateModifiedOnly: true });

      return res.status(200).json({
        message: "Analysis generated with fallback",
        analysis: session.aiAnalysis,
        warning: error.message,
      });
    }
  } catch (error) {
    console.log("analyzeSession error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

// =======================
// SAVE MANUAL SESSION ANALYSIS
// =======================
export async function saveManualSessionAnalysis(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId")
      .populate("problems", "title")
      .select(
        "name status aiAnalysis host participant problems updatedAt createdAt",
      );

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    if (!hasSessionAccess(session, userId)) {
      return res.status(403).json({ message: "Access denied" });
    }

    if (session.status !== "completed") {
      return res.status(400).json({ message: "Session must be completed" });
    }

    const {
      overallScore,
      recommendation,
      summary,
      strengths,
      improvements,
      redFlags,
      rubric,
      manualDetails,
    } = req.body || {};

    if (!summary || typeof summary !== "string" || !summary.trim()) {
      return res.status(400).json({ message: "Summary is required" });
    }

    const normalizedRecommendation = [
      "hire",
      "lean_hire",
      "no_hire",
      "insufficient_data",
    ].includes(recommendation)
      ? recommendation
      : "insufficient_data";

    session.aiAnalysis = {
      ...session.aiAnalysis,
      status: "generated",
      overallScore: clampScore(overallScore),
      recommendation: normalizedRecommendation,
      summary: summary.trim().slice(0, 1200),
      strengths: parseListInput(strengths, 8),
      improvements: parseListInput(improvements, 8),
      redFlags: parseListInput(redFlags, 8),
      rubric: {
        problemSolving: clampScore(rubric?.problemSolving),
        codeQuality: clampScore(rubric?.codeQuality),
        communication: clampScore(rubric?.communication),
        debugging: clampScore(rubric?.debugging),
        timeManagement: clampScore(rubric?.timeManagement),
      },
      manualDetails: {
        confidence: clampScore(manualDetails?.confidence),
        interviewerNotes:
          typeof manualDetails?.interviewerNotes === "string"
            ? manualDetails.interviewerNotes.trim().slice(0, 1200)
            : "",
        questionOutcomes: parseQuestionOutcomes(
          manualDetails?.questionOutcomes,
          10,
        ),
      },
      model: "manual-review",
      errorMessage: "",
      generatedAt: new Date(),
    };

    await session.save({ validateModifiedOnly: true });

    return res.status(200).json({
      message: "Manual analysis saved",
      analysis: session.aiAnalysis,
    });
  } catch (error) {
    console.log("saveManualSessionAnalysis error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

// =======================
// GET SESSION ANALYSIS
// =======================
export async function getSessionAnalysis(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId")
      .populate("problems", "title")
      .select(
        "name status aiAnalysis host participant problems updatedAt createdAt",
      );

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    if (!hasSessionAccess(session, userId)) {
      return res.status(403).json({ message: "Access denied" });
    }

    return res.status(200).json({
      session: {
        _id: session._id,
        name: session.name,
        status: session.status,
        host: session.host,
        participant: session.participant,
        problems: session.problems,
        createdAt: session.createdAt,
        updatedAt: session.updatedAt,
      },
      analysis: session.aiAnalysis,
    });
  } catch (error) {
    console.log("getSessionAnalysis error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
