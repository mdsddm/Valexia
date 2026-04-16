import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useUser } from "@clerk/clerk-react";
import {
  ArrowLeft,
  BarChart3,
  Brain,
  ChevronDown,
  ChartPie,
  ClipboardCheck,
  FileText,
  LineChart,
  Maximize2,
  Minimize2,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import FullScreenLoader from "../components/FullScreenLoader.jsx";
import {
  useGenerateSessionAnalysis,
  useSessionAnalysis,
  useSubmitManualSessionAnalysis,
} from "../hooks/useSessions.js";

function ScoreBar({ label, score = 0 }) {
  const safeScore = Number.isFinite(score)
    ? Math.max(0, Math.min(100, score))
    : 0;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="font-semibold">{safeScore}/100</span>
      </div>
      <div className="w-full h-2.5 rounded-full bg-base-300 overflow-hidden">
        <div
          className="h-full rounded-full bg-linear-to-r from-primary via-secondary to-accent"
          style={{ width: `${safeScore}%` }}
        />
      </div>
    </div>
  );
}

const RUBRIC_META = [
  { key: "problemSolving", label: "Problem Solving", color: "#3b82f6" },
  { key: "codeQuality", label: "Code Quality", color: "#14b8a6" },
  { key: "communication", label: "Communication", color: "#f59e0b" },
  { key: "debugging", label: "Debugging", color: "#ef4444" },
  { key: "timeManagement", label: "Time Management", color: "#8b5cf6" },
];

function RubricChart({
  rubric,
  chartMode,
  onChartModeChange,
  isExpanded,
  onToggleExpand,
}) {
  const items = RUBRIC_META.map((item) => {
    const raw = Number(rubric?.[item.key]);
    const score = Number.isFinite(raw) ? Math.max(0, Math.min(100, raw)) : 0;
    return {
      ...item,
      score,
    };
  });

  const total = items.reduce((sum, item) => sum + item.score, 0);
  const average = Math.round(total / items.length);
  const highest = [...items].sort((a, b) => b.score - a.score)[0];
  const lowest = [...items].sort((a, b) => a.score - b.score)[0];
  const scoreSpread = Math.max(0, (highest?.score || 0) - (lowest?.score || 0));
  const readiness =
    average >= 80 ? "Strong" : average >= 65 ? "Moderate" : "Needs Improvement";

  const chartWidth = isExpanded ? 900 : 420;
  const chartHeight = isExpanded ? 380 : 220;
  const stepX = chartWidth / Math.max(items.length - 1, 1);
  const toY = (score) => chartHeight - (score / 100) * (chartHeight - 24) - 12;
  const linePoints = items
    .map((item, index) => `${index * stepX},${toY(item.score)}`)
    .join(" ");
  const areaPoints = `${linePoints} ${chartWidth},${chartHeight - 12} 0,${chartHeight - 12}`;

  let currentAngle = 0;
  const pieGradient =
    total > 0
      ? items
          .map((item) => {
            const portion = (item.score / total) * 360;
            const start = currentAngle;
            const end = currentAngle + portion;
            currentAngle = end;
            return `${item.color} ${start}deg ${end}deg`;
          })
          .join(", ")
      : "#cbd5e1 0deg 360deg";

  return (
    <div
      className={`bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm space-y-5 ${
        isExpanded ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Rubric Scores</h2>
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex rounded-xl border border-base-300 bg-base-200 p-1">
            <button
              type="button"
              onClick={() => onChartModeChange("bar")}
              title="Bar chart"
              aria-label="Bar chart"
              className={`inline-flex items-center rounded-lg text-xs font-semibold transition ${
                chartMode === "bar"
                  ? "bg-base-100 text-base-content shadow-sm"
                  : "text-base-content/70"
              } ${isExpanded ? "gap-1.5 px-3 py-1.5" : "justify-center px-2.5 py-1.5"}`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              {isExpanded && <span>Bar</span>}
            </button>
            <button
              type="button"
              onClick={() => onChartModeChange("pie")}
              title="Pie chart"
              aria-label="Pie chart"
              className={`inline-flex items-center rounded-lg text-xs font-semibold transition ${
                chartMode === "pie"
                  ? "bg-base-100 text-base-content shadow-sm"
                  : "text-base-content/70"
              } ${isExpanded ? "gap-1.5 px-3 py-1.5" : "justify-center px-2.5 py-1.5"}`}
            >
              <ChartPie className="w-3.5 h-3.5" />
              {isExpanded && <span>Pie</span>}
            </button>
            <button
              type="button"
              onClick={() => onChartModeChange("line")}
              title="Line chart"
              aria-label="Line chart"
              className={`inline-flex items-center rounded-lg text-xs font-semibold transition ${
                chartMode === "line"
                  ? "bg-base-100 text-base-content shadow-sm"
                  : "text-base-content/70"
              } ${isExpanded ? "gap-1.5 px-3 py-1.5" : "justify-center px-2.5 py-1.5"}`}
            >
              <LineChart className="w-3.5 h-3.5" />
              {isExpanded && <span>Line</span>}
            </button>
            <button
              type="button"
              onClick={() => onChartModeChange("area")}
              title="Area chart"
              aria-label="Area chart"
              className={`inline-flex items-center rounded-lg text-xs font-semibold transition ${
                chartMode === "area"
                  ? "bg-base-100 text-base-content shadow-sm"
                  : "text-base-content/70"
              } ${isExpanded ? "gap-1.5 px-3 py-1.5" : "justify-center px-2.5 py-1.5"}`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              {isExpanded && <span>Area</span>}
            </button>
          </div>

          <button
            type="button"
            onClick={onToggleExpand}
            className="btn btn-ghost btn-xs"
            title={isExpanded ? "Minimize chart" : "Maximize chart"}
            aria-label={isExpanded ? "Minimize chart" : "Maximize chart"}
          >
            {isExpanded ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {chartMode === "bar" ? (
        <div className="space-y-4">
          {items.map((item) => (
            <ScoreBar key={item.key} label={item.label} score={item.score} />
          ))}
        </div>
      ) : chartMode === "pie" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="flex justify-center">
            <div
              className={`relative rounded-full ${
                isExpanded ? "h-72 w-72" : "h-44 w-44"
              }`}
              style={{ background: `conic-gradient(${pieGradient})` }}
            >
              <div
                className={`absolute rounded-full bg-base-100 border border-base-300 flex flex-col items-center justify-center ${
                  isExpanded ? "inset-8" : "inset-5"
                }`}
              >
                <span className="text-xs text-base-content/60">Average</span>
                <span
                  className={`font-bold text-primary ${
                    isExpanded ? "text-4xl" : "text-2xl"
                  }`}
                >
                  {Number.isFinite(average) ? average : 0}
                </span>
                <span className="text-xs text-base-content/60">/100</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.key}
                className="flex items-center justify-between gap-3 rounded-lg border border-base-300 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-base-content/80">
                    {item.label}
                  </span>
                </div>
                <span className="text-sm font-semibold">{item.score}/100</span>
              </div>
            ))}
          </div>
        </div>
      ) : chartMode === "line" ? (
        <div className="space-y-4">
          <div className="rounded-xl border border-base-300 bg-base-200/45 p-3">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className={`w-full ${isExpanded ? "h-72 md:h-80" : "h-44 md:h-56"}`}
              preserveAspectRatio="none"
            >
              {[20, 40, 60, 80, 100].map((tick) => (
                <line
                  key={tick}
                  x1="0"
                  y1={toY(tick)}
                  x2={chartWidth}
                  y2={toY(tick)}
                  stroke="currentColor"
                  strokeOpacity="0.12"
                />
              ))}
              <polyline
                fill="none"
                stroke="#3b82f6"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={linePoints}
              />
              {items.map((item, index) => (
                <circle
                  key={item.key}
                  cx={index * stepX}
                  cy={toY(item.score)}
                  r="5"
                  fill={item.color}
                />
              ))}
            </svg>

            <div className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-2">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="rounded-lg border border-base-300 bg-base-100 px-2.5 py-2 text-xs"
                >
                  <p className="text-base-content/65 truncate">{item.label}</p>
                  <p className="font-semibold text-sm mt-0.5">
                    {item.score}/100
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="rounded-xl border border-base-300 bg-base-200/45 p-3">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className={`w-full ${isExpanded ? "h-72 md:h-80" : "h-44 md:h-56"}`}
              preserveAspectRatio="none"
            >
              {[20, 40, 60, 80, 100].map((tick) => (
                <line
                  key={tick}
                  x1="0"
                  y1={toY(tick)}
                  x2={chartWidth}
                  y2={toY(tick)}
                  stroke="currentColor"
                  strokeOpacity="0.12"
                />
              ))}
              <polygon
                points={areaPoints}
                fill="#3b82f6"
                fillOpacity="0.18"
                stroke="none"
              />
              <polyline
                fill="none"
                stroke="#3b82f6"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={linePoints}
              />
              {items.map((item, index) => (
                <circle
                  key={item.key}
                  cx={index * stepX}
                  cy={toY(item.score)}
                  r="5"
                  fill={item.color}
                />
              ))}
            </svg>

            <div className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-2">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="rounded-lg border border-base-300 bg-base-100 px-2.5 py-2 text-xs"
                >
                  <p className="text-base-content/65 truncate">{item.label}</p>
                  <p className="font-semibold text-sm mt-0.5">
                    {item.score}/100
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 pt-1">
          <div className="rounded-xl border border-base-300 bg-base-200/45 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.08em] text-base-content/55">
              Average
            </p>
            <p className="text-2xl font-bold text-primary mt-1">
              {average}/100
            </p>
          </div>
          <div className="rounded-xl border border-base-300 bg-base-200/45 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.08em] text-base-content/55">
              Strongest Area
            </p>
            <p className="text-sm font-semibold mt-1">{highest?.label}</p>
            <p className="text-xs text-base-content/65">{highest?.score}/100</p>
          </div>
          <div className="rounded-xl border border-base-300 bg-base-200/45 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.08em] text-base-content/55">
              Weakest Area
            </p>
            <p className="text-sm font-semibold mt-1">{lowest?.label}</p>
            <p className="text-xs text-base-content/65">{lowest?.score}/100</p>
          </div>
          <div className="rounded-xl border border-base-300 bg-base-200/45 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.08em] text-base-content/55">
              Score Spread
            </p>
            <p className="text-sm font-semibold mt-1">{scoreSpread} points</p>
            <p className="text-xs text-base-content/65">
              Difference between strongest and weakest rubric area.
            </p>
          </div>
          <div className="rounded-xl border border-base-300 bg-base-200/45 px-4 py-3 md:col-span-2 xl:col-span-4">
            <p className="text-xs uppercase tracking-[0.08em] text-base-content/55">
              Readiness Insight
            </p>
            <p className="text-sm font-semibold mt-1">
              {readiness} overall signal based on rubric distribution.
            </p>
            <p className="text-xs text-base-content/65 mt-1">
              Use this with summary notes and question outcomes for final
              decision.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function FieldLabel({ children }) {
  return (
    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-base-content/55">
      {children}
    </span>
  );
}

function SessionAnalysisPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();

  const { data, isLoading, refetch } = useSessionAnalysis(id);
  const generateAnalysisMutation = useGenerateSessionAnalysis();
  const submitManualAnalysisMutation = useSubmitManualSessionAnalysis();
  const [analysisMode, setAnalysisMode] = useState(null);
  const [hostChartMode, setHostChartMode] = useState("bar");
  const [candidateChartMode, setCandidateChartMode] = useState("pie");
  const [hostChartExpanded, setHostChartExpanded] = useState(false);
  const [candidateChartExpanded, setCandidateChartExpanded] = useState(true);

  const [manualForm, setManualForm] = useState({
    overallScore: 70,
    recommendation: "lean_hire",
    summary: "",
    strengths: "",
    improvements: "",
    redFlags: "",
    manualDetails: {
      confidence: 70,
      interviewerNotes: "",
      questionOutcomes: [],
    },
    rubric: {
      problemSolving: 70,
      codeQuality: 70,
      communication: 70,
      debugging: 70,
      timeManagement: 70,
    },
  });

  const session = data?.session;
  const analysis = data?.analysis;
  const currentUserId = user?.id || null;
  const isHost =
    Boolean(currentUserId) && session?.host?.clerkId === currentUserId;
  const isCandidate =
    Boolean(currentUserId) && session?.participant?.clerkId === currentUserId;
  const rubricChartMode = isHost ? hostChartMode : candidateChartMode;
  const isRubricExpanded = isHost ? hostChartExpanded : candidateChartExpanded;
  const hasAnalysis = analysis?.status === "generated";
  const hasManualAnalysis = hasAnalysis && analysis?.model === "manual-review";
  const requiresManualAnalysis =
    !hasAnalysis &&
    /insufficient_quota|quota/i.test(analysis?.errorMessage || "");
  const isCompleted = session?.status === "completed";

  const recommendationLabel = {
    hire: "Hire",
    lean_hire: "Lean Hire",
    no_hire: "No Hire",
    insufficient_data: "Insufficient Data",
  };

  const canShowManualForm = isHost && isCompleted && analysisMode === "manual";
  const canAnalyze =
    isHost && isCompleted && !generateAnalysisMutation.isPending;
  const inputClass =
    "input input-bordered h-11 bg-base-100 border-base-300 rounded-xl px-3.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const selectClass =
    "select select-bordered h-11 bg-base-100 border-base-300 rounded-xl px-3.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const textareaClass =
    "textarea textarea-bordered w-full bg-base-100 border-base-300 rounded-xl px-3.5 py-3 leading-relaxed resize-y focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-base-content/45";

  useEffect(() => {
    if (!analysis && !session?.problems) return;

    const existingOutcomes = Array.isArray(
      analysis?.manualDetails?.questionOutcomes,
    )
      ? analysis.manualDetails.questionOutcomes
      : [];

    const sessionProblemOutcomes = (session?.problems || []).map((problem) => {
      const existing = existingOutcomes.find(
        (item) =>
          (item?.problemId || "").toString() ===
          (problem?._id || "").toString(),
      );

      return {
        problemId: problem?._id || existing?.problemId || "",
        title: problem?.title || existing?.title || "Problem",
        solved: existing?.solved || "no",
        notes: existing?.notes || "",
      };
    });

    setManualForm((prev) => ({
      ...prev,
      overallScore: analysis?.overallScore ?? prev.overallScore,
      recommendation: analysis?.recommendation || prev.recommendation,
      summary:
        analysis?.model === "manual-review" && analysis?.summary
          ? analysis.summary
          : prev.summary,
      strengths:
        analysis?.model === "manual-review" &&
        Array.isArray(analysis?.strengths)
          ? analysis.strengths.join("\n")
          : prev.strengths,
      improvements:
        analysis?.model === "manual-review" &&
        Array.isArray(analysis?.improvements)
          ? analysis.improvements.join("\n")
          : prev.improvements,
      redFlags:
        analysis?.model === "manual-review" && Array.isArray(analysis?.redFlags)
          ? analysis.redFlags.join("\n")
          : prev.redFlags,
      manualDetails: {
        confidence:
          analysis?.manualDetails?.confidence ?? prev.manualDetails.confidence,
        interviewerNotes:
          analysis?.model === "manual-review" &&
          analysis?.manualDetails?.interviewerNotes
            ? analysis.manualDetails.interviewerNotes
            : prev.manualDetails.interviewerNotes,
        questionOutcomes:
          sessionProblemOutcomes.length > 0
            ? sessionProblemOutcomes
            : prev.manualDetails.questionOutcomes,
      },
      rubric: {
        problemSolving:
          analysis?.rubric?.problemSolving ?? prev.rubric.problemSolving,
        codeQuality: analysis?.rubric?.codeQuality ?? prev.rubric.codeQuality,
        communication:
          analysis?.rubric?.communication ?? prev.rubric.communication,
        debugging: analysis?.rubric?.debugging ?? prev.rubric.debugging,
        timeManagement:
          analysis?.rubric?.timeManagement ?? prev.rubric.timeManagement,
      },
    }));
  }, [analysis, session?.problems]);

  useEffect(() => {
    if (requiresManualAnalysis && !hasManualAnalysis) {
      setAnalysisMode("manual");
    }
  }, [requiresManualAnalysis, hasManualAnalysis]);

  const handleGenerateAi = async () => {
    if (!id) return;
    setAnalysisMode("ai");
    try {
      await generateAnalysisMutation.mutateAsync(id);
      refetch();
    } catch {
      // Toast is already shown in the mutation onError handler.
    }
  };

  const handleSelectManual = () => {
    setAnalysisMode("manual");
  };

  const handleManualSubmit = async (e) => {
    e.preventDefault();
    if (!id) return;

    const payload = {
      overallScore: Number(manualForm.overallScore),
      recommendation: manualForm.recommendation,
      summary: manualForm.summary,
      strengths: manualForm.strengths,
      improvements: manualForm.improvements,
      redFlags: manualForm.redFlags,
      manualDetails: {
        confidence: Number(manualForm.manualDetails.confidence),
        interviewerNotes: manualForm.manualDetails.interviewerNotes,
        questionOutcomes: manualForm.manualDetails.questionOutcomes,
      },
      rubric: {
        problemSolving: Number(manualForm.rubric.problemSolving),
        codeQuality: Number(manualForm.rubric.codeQuality),
        communication: Number(manualForm.rubric.communication),
        debugging: Number(manualForm.rubric.debugging),
        timeManagement: Number(manualForm.rubric.timeManagement),
      },
    };

    try {
      await submitManualAnalysisMutation.mutateAsync({ id, payload });
      setAnalysisMode(null);
      await refetch();
    } catch {
      // mutation onError already shows toast
    }
  };

  const updateQuestionOutcome = (problemId, field, value) => {
    setManualForm((prev) => ({
      ...prev,
      manualDetails: {
        ...prev.manualDetails,
        questionOutcomes: prev.manualDetails.questionOutcomes.map((item) =>
          item.problemId?.toString() === problemId?.toString()
            ? { ...item, [field]: value }
            : item,
        ),
      },
    }));
  };

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-base-200 to-base-100">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => navigate("/dashboard")}
            className="btn btn-ghost btn-sm gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>

          {isHost ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className={`btn btn-primary btn-sm gap-2 ${!canAnalyze ? "btn-disabled" : ""}`}
              >
                {generateAnalysisMutation.isPending ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    {hasAnalysis ? "Re-Analyze" : "Analyze"}
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </label>

              {canAnalyze && !generateAnalysisMutation.isPending && (
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-56 z-20 border border-base-300"
                >
                  <li>
                    <button onClick={handleGenerateAi}>Use AI Analysis</button>
                  </li>
                  <li>
                    <button onClick={handleSelectManual}>
                      {hasManualAnalysis
                        ? "Edit Manual Analysis"
                        : "Manual Analysis"}
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : isCandidate ? (
            <div className="badge badge-outline p-3">Candidate view</div>
          ) : null}
        </div>

        <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-base-content/50">
                Session Analysis
              </p>
              <h1 className="text-2xl font-bold mt-1">
                {session?.name || "Interview Session"}
              </h1>
              <p className="text-sm text-base-content/60 mt-1">
                Candidate: {session?.participant?.name || "Not Assigned"}
              </p>
            </div>

            {hasAnalysis ? (
              <div className="text-right">
                <p className="text-xs text-base-content/60">Overall Score</p>
                <div className="text-4xl font-extrabold text-primary leading-none">
                  {analysis?.overallScore ?? 0}
                </div>
                <p className="text-xs mt-1 badge badge-outline">
                  {recommendationLabel[analysis?.recommendation] ||
                    "Insufficient Data"}
                </p>
              </div>
            ) : (
              <div className="badge badge-warning badge-outline p-3">
                Analysis not generated yet
              </div>
            )}
          </div>

          {session?.status !== "completed" && (
            <div className="alert alert-warning">
              <ShieldCheck className="w-4 h-4" />
              <span>End the session first, then generate analysis.</span>
            </div>
          )}
        </div>

        {canShowManualForm && (
          <form
            onSubmit={handleManualSubmit}
            className="bg-linear-to-br from-base-100 to-base-200/45 border border-base-300 rounded-2xl p-6 shadow-sm space-y-6"
          >
            <div className="flex items-center justify-between gap-3 pb-2 border-b border-base-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ClipboardCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Manual Analysis</h2>
                  <p className="text-xs text-base-content/60">
                    Fill a structured interviewer report with evidence.
                  </p>
                </div>
              </div>
              {requiresManualAnalysis && (
                <span className="badge badge-warning badge-outline">
                  AI quota exceeded
                </span>
              )}
            </div>

            <div className="bg-base-100 rounded-xl p-4 border border-base-300 shadow-sm">
              <h3 className="text-sm font-semibold mb-3">Decision</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="block space-y-2.5">
                  <FieldLabel>Overall Score (0-100)</FieldLabel>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    className={inputClass}
                    value={manualForm.overallScore}
                    onChange={(e) =>
                      setManualForm((prev) => ({
                        ...prev,
                        overallScore: e.target.value,
                      }))
                    }
                  />
                </label>

                <label className="block space-y-2.5 md:col-span-2">
                  <FieldLabel>Recommendation</FieldLabel>
                  <select
                    className={selectClass}
                    value={manualForm.recommendation}
                    onChange={(e) =>
                      setManualForm((prev) => ({
                        ...prev,
                        recommendation: e.target.value,
                      }))
                    }
                  >
                    <option value="hire">Hire</option>
                    <option value="lean_hire">Lean Hire</option>
                    <option value="no_hire">No Hire</option>
                    <option value="insufficient_data">Insufficient Data</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="bg-base-100 rounded-xl p-4 border border-base-300 shadow-sm">
              <h3 className="text-sm font-semibold mb-3">
                Reviewer Confidence
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block space-y-2.5">
                  <FieldLabel>Confidence In Final Decision (0-100)</FieldLabel>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    className={inputClass}
                    value={manualForm.manualDetails.confidence}
                    onChange={(e) =>
                      setManualForm((prev) => ({
                        ...prev,
                        manualDetails: {
                          ...prev.manualDetails,
                          confidence: e.target.value,
                        },
                      }))
                    }
                  />
                </label>

                <label className="block space-y-2.5">
                  <FieldLabel>Interviewer Notes</FieldLabel>
                  <textarea
                    className={`${textareaClass} min-h-28`}
                    value={manualForm.manualDetails.interviewerNotes}
                    onChange={(e) =>
                      setManualForm((prev) => ({
                        ...prev,
                        manualDetails: {
                          ...prev.manualDetails,
                          interviewerNotes: e.target.value,
                        },
                      }))
                    }
                    placeholder="Interview observations, communication quality, edge-case handling, collaboration"
                  />
                </label>
              </div>
            </div>

            <div className="bg-base-100 rounded-xl p-4 border border-base-300 shadow-sm space-y-3">
              <h3 className="text-sm font-semibold">Question Outcomes</h3>
              {manualForm.manualDetails.questionOutcomes.length > 0 ? (
                manualForm.manualDetails.questionOutcomes.map(
                  (question, index) => (
                    <div
                      key={`${question.problemId || question.title}-${index}`}
                      className="border border-base-300 bg-base-100 rounded-xl p-4 space-y-3"
                    >
                      <div className="font-medium text-sm flex items-center gap-2">
                        <FileText className="w-4 h-4 text-base-content/60" />Q
                        {index + 1}: {question.title}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {[
                          ["yes", "Solved"],
                          ["partial", "Partial"],
                          ["no", "Not Solved"],
                        ].map(([value, label]) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() =>
                              updateQuestionOutcome(
                                question.problemId,
                                "solved",
                                value,
                              )
                            }
                            className={`btn btn-sm rounded-lg ${question.solved === value ? "btn-primary" : "btn-outline"}`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>

                      <label className="block space-y-2.5">
                        <FieldLabel>Question Notes</FieldLabel>
                        <textarea
                          className={`${textareaClass} min-h-24 w-full`}
                          value={question.notes}
                          onChange={(e) =>
                            updateQuestionOutcome(
                              question.problemId,
                              "notes",
                              e.target.value,
                            )
                          }
                          placeholder="Approach quality, complexity discussion, mistakes, hints needed"
                        />
                      </label>
                    </div>
                  ),
                )
              ) : (
                <p className="text-sm text-base-content/60">
                  No problems were found for this session.
                </p>
              )}
            </div>

            <div className="bg-base-100 rounded-xl p-4 border border-base-300 shadow-sm space-y-4">
              <label className="block space-y-2.5">
                <FieldLabel>Summary</FieldLabel>
                <textarea
                  className={`${textareaClass} min-h-28`}
                  value={manualForm.summary}
                  onChange={(e) =>
                    setManualForm((prev) => ({
                      ...prev,
                      summary: e.target.value,
                    }))
                  }
                  placeholder="Write overall interview summary"
                  required
                />
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block space-y-2.5">
                  <FieldLabel>Strengths (one per line)</FieldLabel>
                  <textarea
                    className={`${textareaClass} min-h-28`}
                    value={manualForm.strengths}
                    onChange={(e) =>
                      setManualForm((prev) => ({
                        ...prev,
                        strengths: e.target.value,
                      }))
                    }
                  />
                </label>

                <label className="block space-y-2.5">
                  <FieldLabel>Areas To Improve (one per line)</FieldLabel>
                  <textarea
                    className={`${textareaClass} min-h-28`}
                    value={manualForm.improvements}
                    onChange={(e) =>
                      setManualForm((prev) => ({
                        ...prev,
                        improvements: e.target.value,
                      }))
                    }
                  />
                </label>
              </div>

              <label className="block space-y-2.5">
                <FieldLabel>Risk Signals (one per line)</FieldLabel>
                <textarea
                  className={`${textareaClass} min-h-24`}
                  value={manualForm.redFlags}
                  onChange={(e) =>
                    setManualForm((prev) => ({
                      ...prev,
                      redFlags: e.target.value,
                    }))
                  }
                />
              </label>
            </div>

            <div className="bg-base-100 rounded-xl p-4 border border-base-300 shadow-sm">
              <h3 className="text-sm font-semibold mb-3">Rubric Scores</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {[
                  ["problemSolving", "Problem Solving"],
                  ["codeQuality", "Code Quality"],
                  ["communication", "Communication"],
                  ["debugging", "Debugging"],
                  ["timeManagement", "Time Management"],
                ].map(([key, label]) => (
                  <label className="block space-y-2.5" key={key}>
                    <FieldLabel>{label}</FieldLabel>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      className={inputClass}
                      value={manualForm.rubric[key]}
                      onChange={(e) =>
                        setManualForm((prev) => ({
                          ...prev,
                          rubric: {
                            ...prev.rubric,
                            [key]: e.target.value,
                          },
                        }))
                      }
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="btn btn-primary rounded-xl px-6"
                disabled={submitManualAnalysisMutation.isPending}
              >
                {submitManualAnalysisMutation.isPending
                  ? "Saving..."
                  : "Save Manual Analysis"}
              </button>
            </div>
          </form>
        )}

        {!hasAnalysis && !canShowManualForm && (
          <div className="bg-base-100 border border-base-300 rounded-2xl p-8 text-center shadow-sm">
            <Brain className="w-10 h-10 mx-auto text-primary/70 mb-3" />
            <p className="font-semibold">
              {isHost ? "No analysis report yet" : "Score Pending"}
            </p>
            <p className="text-sm text-base-content/60 mt-1">
              {isHost
                ? "Click Analyze and choose Use AI Analysis or Manual Analysis."
                : "The host will provide your interview score and analysis soon."}
            </p>
          </div>
        )}

        {hasAnalysis && (
          <>
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
              <div className="xl:col-span-8 bg-linear-to-br from-base-100 to-base-200/45 border border-base-300 rounded-2xl p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.14em] text-base-content/55 mb-2">
                  Overview
                </p>
                <h2 className="text-xl font-semibold">Interview Summary</h2>
                <p className="text-base-content/80 leading-relaxed mt-3">
                  {analysis.summary}
                </p>
              </div>

              <div className="xl:col-span-4 grid grid-cols-2 xl:grid-cols-1 gap-3">
                <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
                  <p className="text-[11px] uppercase tracking-widest text-base-content/55">
                    Decision
                  </p>
                  <p className="text-sm font-semibold mt-1">
                    {recommendationLabel[analysis?.recommendation] ||
                      "Insufficient Data"}
                  </p>
                </div>
                <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
                  <p className="text-[11px] uppercase tracking-widest text-base-content/55">
                    Strength Signals
                  </p>
                  <p className="text-sm font-semibold mt-1">
                    {analysis?.strengths?.length || 0} points
                  </p>
                </div>
                <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
                  <p className="text-[11px] uppercase tracking-widest text-base-content/55">
                    Improve Signals
                  </p>
                  <p className="text-sm font-semibold mt-1">
                    {analysis?.improvements?.length || 0} points
                  </p>
                </div>
                <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
                  <p className="text-[11px] uppercase tracking-widest text-base-content/55">
                    Risk Signals
                  </p>
                  <p className="text-sm font-semibold mt-1">
                    {analysis?.redFlags?.length || 0} items
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`grid grid-cols-1 gap-6 ${isRubricExpanded ? "" : "xl:grid-cols-12"}`}
            >
              <div className={isRubricExpanded ? "" : "xl:col-span-7"}>
                <RubricChart
                  rubric={analysis?.rubric}
                  chartMode={rubricChartMode}
                  onChartModeChange={
                    isHost ? setHostChartMode : setCandidateChartMode
                  }
                  isExpanded={isRubricExpanded}
                  onToggleExpand={() =>
                    isHost
                      ? setHostChartExpanded((prev) => !prev)
                      : setCandidateChartExpanded((prev) => !prev)
                  }
                />
              </div>

              {!isRubricExpanded && (
                <div className="xl:col-span-5 xl:h-full grid grid-cols-1 gap-6 xl:grid-rows-2">
                  <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm h-full flex flex-col">
                    <h2 className="text-lg font-semibold mb-3">Strengths</h2>
                    {analysis?.strengths?.length ? (
                      <ul className="list-disc ml-5 space-y-2 text-sm text-base-content/80">
                        {analysis.strengths.map((item, index) => (
                          <li key={`${item}-${index}`}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-base-content/60">
                        No strengths captured.
                      </p>
                    )}
                  </div>

                  <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm h-full flex flex-col">
                    <h2 className="text-lg font-semibold mb-3">
                      Areas To Improve
                    </h2>
                    {analysis?.improvements?.length ? (
                      <ul className="list-disc ml-5 space-y-2 text-sm text-base-content/80">
                        {analysis.improvements.map((item, index) => (
                          <li key={`${item}-${index}`}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-base-content/60">
                        No improvement items captured.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
              {analysis?.redFlags?.length > 0 && (
                <div className="xl:col-span-4 bg-base-100 border border-error/30 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-error mb-3">
                    Risk Signals
                  </h2>
                  <ul className="list-disc ml-5 space-y-2 text-sm text-base-content/80">
                    {analysis.redFlags.map((item, index) => (
                      <li key={`${item}-${index}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {Array.isArray(analysis?.manualDetails?.questionOutcomes) &&
                analysis.manualDetails.questionOutcomes.length > 0 && (
                  <div
                    className={`${analysis?.redFlags?.length > 0 ? "xl:col-span-8" : "xl:col-span-12"} bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm space-y-4`}
                  >
                    <h2 className="text-lg font-semibold">Question Outcomes</h2>
                    <div className="space-y-3">
                      {analysis.manualDetails.questionOutcomes.map(
                        (item, index) => (
                          <div
                            key={`${item.problemId || item.title}-${index}`}
                            className="rounded-lg border border-base-300 p-4"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                              <p className="font-medium text-sm">
                                Q{index + 1}: {item.title || "Problem"}
                              </p>
                              <span className="badge badge-outline capitalize">
                                {item.solved === "yes"
                                  ? "Solved"
                                  : item.solved === "partial"
                                    ? "Partially Solved"
                                    : "Not Solved"}
                              </span>
                            </div>
                            {item.notes && (
                              <p className="text-sm text-base-content/75">
                                {item.notes}
                              </p>
                            )}
                          </div>
                        ),
                      )}
                    </div>

                    {(analysis?.manualDetails?.interviewerNotes ||
                      analysis?.manualDetails?.confidence) && (
                      <div className="pt-2 border-t border-base-300 space-y-2">
                        {typeof analysis?.manualDetails?.confidence ===
                          "number" && (
                          <p className="text-sm">
                            <span className="font-medium">Confidence:</span>{" "}
                            {analysis.manualDetails.confidence}/100
                          </p>
                        )}
                        {analysis?.manualDetails?.interviewerNotes && (
                          <p className="text-sm text-base-content/75">
                            <span className="font-medium text-base-content">
                              Interviewer Notes:
                            </span>{" "}
                            {analysis.manualDetails.interviewerNotes}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SessionAnalysisPage;
