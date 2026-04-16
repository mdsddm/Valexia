import { useEffect, useState, useRef } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate, useParams } from "react-router";
import Navbar from "../components/Navbar";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../components/ProblemDescription";
import OutputPanel from "../components/OutputPanel";
import CodeEditorPanel from "../components/CodeEditorPanel";

import toast from "react-hot-toast";
import confetti from "canvas-confetti";
import FullScreenLoader from "../components/FullScreenLoader.jsx";
import { API_BASE_URL } from "../lib/api";

const API = API_BASE_URL;
const PROBLEMS_CACHE_KEY = "valexia-problems-cache";
const PROBLEMS_CACHE_TTL_MS = 30 * 60 * 1000;
const PROBLEM_DETAIL_CACHE_KEY = "valexia-problem-detail-cache";
const PROBLEM_DETAIL_CACHE_LIMIT = 6;
const PROBLEM_DETAIL_CACHE_TTL_MS = 30 * 60 * 1000;

const getCachedProblemsList = () => {
  if (typeof window === "undefined") return [];

  try {
    const cached = localStorage.getItem(PROBLEMS_CACHE_KEY);
    const parsed = cached ? JSON.parse(cached) : null;

    if (Array.isArray(parsed)) {
      localStorage.setItem(
        PROBLEMS_CACHE_KEY,
        JSON.stringify({
          problems: parsed,
          cachedAt: Date.now(),
        }),
      );

      return parsed;
    }

    if (!parsed || !Array.isArray(parsed.problems)) {
      return [];
    }

    if (typeof parsed.cachedAt === "number") {
      const age = Date.now() - parsed.cachedAt;
      if (age > PROBLEMS_CACHE_TTL_MS) {
        localStorage.removeItem(PROBLEMS_CACHE_KEY);
        return [];
      }
    }

    return parsed.problems;
  } catch {
    return [];
  }
};

const getCachedProblemDetail = (problemId) => {
  if (typeof window === "undefined" || !problemId) return null;

  try {
    const cached = localStorage.getItem(PROBLEM_DETAIL_CACHE_KEY);
    const parsed = cached ? JSON.parse(cached) : { order: [], items: {} };
    const order = Array.isArray(parsed.order) ? parsed.order : [];
    const items =
      parsed.items && typeof parsed.items === "object" ? parsed.items : {};
    const key = String(problemId);
    const entry = items[key] || null;
    const problem = entry?.problem ?? entry ?? null;

    if (!problem) return null;

    const cachedAt = entry?.cachedAt;
    if (typeof cachedAt === "number") {
      const age = Date.now() - cachedAt;
      if (age > PROBLEM_DETAIL_CACHE_TTL_MS) {
        const nextOrder = order.filter((item) => item !== key);
        const nextItems = nextOrder.reduce((accumulator, itemId) => {
          const existingEntry = items[itemId];
          if (existingEntry?.problem) {
            accumulator[itemId] = existingEntry;
          } else if (existingEntry) {
            accumulator[itemId] = {
              problem: existingEntry,
              cachedAt: Date.now(),
            };
          }
          return accumulator;
        }, {});

        localStorage.setItem(
          PROBLEM_DETAIL_CACHE_KEY,
          JSON.stringify({ order: nextOrder, items: nextItems }),
        );

        return null;
      }
    }

    const nextOrder = [key, ...order.filter((item) => item !== key)].slice(
      0,
      PROBLEM_DETAIL_CACHE_LIMIT,
    );

    localStorage.setItem(
      PROBLEM_DETAIL_CACHE_KEY,
      JSON.stringify({
        order: nextOrder,
        items: nextOrder.reduce((accumulator, itemId) => {
          const existingEntry = items[itemId];
          if (!existingEntry) {
            return accumulator;
          }

          if (itemId === key) {
            accumulator[itemId] = {
              problem,
              cachedAt: Date.now(),
            };
            return accumulator;
          }

          if (existingEntry?.problem) {
            accumulator[itemId] = existingEntry;
            return accumulator;
          }

          accumulator[itemId] = {
            problem: existingEntry,
            cachedAt: Date.now(),
          };
          return accumulator;
        }, {}),
      }),
    );

    return problem;
  } catch {
    return null;
  }
};

const storeProblemDetail = (problem) => {
  if (typeof window === "undefined" || !problem?._id) return;

  try {
    const cached = localStorage.getItem(PROBLEM_DETAIL_CACHE_KEY);
    const parsed = cached ? JSON.parse(cached) : { order: [], items: {} };
    const order = Array.isArray(parsed.order) ? parsed.order : [];
    const items =
      parsed.items && typeof parsed.items === "object" ? parsed.items : {};
    const key = String(problem._id);

    const nextOrder = [key, ...order.filter((item) => item !== key)].slice(
      0,
      PROBLEM_DETAIL_CACHE_LIMIT,
    );
    const nextItems = nextOrder.reduce((accumulator, itemId) => {
      const existingEntry = items[itemId];

      if (itemId === key) {
        accumulator[itemId] = {
          problem,
          cachedAt: Date.now(),
        };
        return accumulator;
      }

      if (!existingEntry) {
        return accumulator;
      }

      if (existingEntry?.problem) {
        accumulator[itemId] = existingEntry;
        return accumulator;
      }

      accumulator[itemId] = {
        problem: existingEntry,
        cachedAt: Date.now(),
      };
      return accumulator;
    }, {});

    localStorage.setItem(
      PROBLEM_DETAIL_CACHE_KEY,
      JSON.stringify({ order: nextOrder, items: nextItems }),
    );
  } catch {
    // Ignore cache write failures.
  }
};

function ProblemPage() {
  const { getToken } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialCachedProblem] = useState(() => getCachedProblemDetail(id));

  const [problems, setProblems] = useState(() => getCachedProblemsList());
  const [currentProblem, setCurrentProblem] = useState(initialCachedProblem);
  const currentProblemIdRef = useRef(initialCachedProblem?._id || null);
  const loadingProblemIdRef = useRef(null);

  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(
    initialCachedProblem?.starterCode?.javascript || "",
  );
  const [customInput, setCustomInput] = useState("");
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [isMax, setIsMax] = useState(
    localStorage.getItem("ifProblemMax") === "true",
  );

  const horizontalPanelRef = useRef(null);
  const verticalPanelRef = useRef(null);

  useEffect(() => {
    currentProblemIdRef.current = currentProblem?._id || null;
  }, [currentProblem]);

  // FETCH ALL PROBLEMS
  useEffect(() => {
    if (problems.length > 0) return;

    const fetchProblems = async () => {
      try {
        const token = await getToken();
        const res = await fetch(`${API}/problems`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        if (Array.isArray(data.problems)) {
          setProblems(data.problems);
          localStorage.setItem(
            PROBLEMS_CACHE_KEY,
            JSON.stringify({
              problems: data.problems,
              cachedAt: Date.now(),
            }),
          );
        }
      } catch {
        toast.error("Failed to load problems");
      }
    };

    fetchProblems();
  }, [getToken, problems.length]);

  // FETCH SINGLE PROBLEM
  useEffect(() => {
    if (!id) return;

    if (currentProblemIdRef.current === id) {
      setCode(currentProblem?.starterCode?.[selectedLanguage] || "");
      return;
    }

    const cachedProblem = getCachedProblemDetail(id);

    if (cachedProblem) {
      setCurrentProblem(cachedProblem);
      setCode(cachedProblem.starterCode?.[selectedLanguage] || "");
      return;
    }

    if (loadingProblemIdRef.current === id) {
      return;
    }

    setCurrentProblem(null);
    loadingProblemIdRef.current = id;

    const fetchProblem = async () => {
      try {
        const token = await getToken();
        const res = await fetch(`${API}/problems/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        if (!data.problem) {
          throw new Error("Problem not found");
        }

        setCurrentProblem(data.problem);
        setCode(data.problem.starterCode?.[selectedLanguage] || "");
        storeProblemDetail(data.problem);
      } catch {
        toast.error("Problem not found");
      } finally {
        loadingProblemIdRef.current = null;
      }
    };

    fetchProblem();
  }, [id, selectedLanguage, getToken, currentProblem?.starterCode]);

  // PANEL LAYOUT
  useEffect(() => {
    if (!horizontalPanelRef.current || !verticalPanelRef.current) return;

    if (isMax) {
      horizontalPanelRef.current.setLayout([0, 100]);
      verticalPanelRef.current.setLayout([100, 0]);
    } else {
      horizontalPanelRef.current.setLayout([40, 60]);
      verticalPanelRef.current.setLayout([70, 30]);
    }

    localStorage.setItem("ifProblemMax", isMax);
  }, [isMax]);

  const toggleIsMax = () => setIsMax((prev) => !prev);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);

    if (currentProblem) {
      setCode(currentProblem.starterCode[lang] || "");
    }

    setOutput(null);
  };

  const handleProblemChange = (newId) => {
    navigate(`/problem/${newId}`);
  };

  const triggerConfetti = () => {
    confetti({ particleCount: 80, spread: 250, origin: { x: 0.2, y: 0.6 } });
    confetti({ particleCount: 80, spread: 250, origin: { x: 0.8, y: 0.6 } });
  };

  // RUN CODE
  const handleRunCode = async () => {
    if (!currentProblem) return;

    setIsRunning(true);
    setOutput(null);
    setIsSuccess(false);

    try {
      const token = await getToken();
      const res = await fetch(`${API}/execute`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          language: selectedLanguage,
          code,
          problemId: currentProblem._id,
          customInput,
        }),
      });

      const result = await res.json();

      setOutput(result);

      if (!result.success) {
        toast.error(
          result.error?.message
            ? `${result.error.message}${
                result.error.line ? ` (Line ${result.error.line})` : ""
              }`
            : "Execution failed",
        );
        return;
      }

      if (result.passed) {
        setIsSuccess(true);
        triggerConfetti();

        toast.success("All tests passed!");
      } else {
        toast.error("Some tests failed");
      }
    } catch {
      toast.error("Execution error");
    } finally {
      setIsRunning(false);
    }
  };

  if (!currentProblem) return <FullScreenLoader />;

  return (
    <div className="h-screen flex flex-col bg-base-300 overflow-hidden">
      <Navbar />

      <div className="flex-1 min-h-0 overflow-hidden p-2">
        <PanelGroup
          ref={horizontalPanelRef}
          direction="horizontal"
          className="h-full gap-px"
        >
          <Panel
            defaultSize={40}
            minSize={30}
            collapsible
            className="flex flex-col min-h-0 bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300/50"
          >
            <ProblemDescription
              problem={currentProblem}
              currentProblemId={currentProblem._id}
              onProblemChange={handleProblemChange}
              allProblems={problems}
            />
          </Panel>

          {!isMax && (
            <PanelResizeHandle className="w-2 relative group cursor-col-resize flex items-center justify-center">
              <div className="w-1 h-8 rounded-full bg-base-content/10 group-hover:bg-primary/50 transition-colors" />
            </PanelResizeHandle>
          )}

          <Panel
            defaultSize={60}
            minSize={30}
            className="flex flex-col min-h-0"
          >
            <PanelGroup
              ref={verticalPanelRef}
              direction="vertical"
              className="h-full gap-px"
            >
              <Panel
                defaultSize={70}
                minSize={30}
                className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300/50"
              >
                <CodeEditorPanel
                  selectedLanguage={selectedLanguage}
                  code={code}
                  isRunning={isRunning}
                  onLanguageChange={handleLanguageChange}
                  onCodeChange={setCode}
                  onRunCode={handleRunCode}
                  isMax={isMax}
                  toggleIsMax={toggleIsMax}
                />
              </Panel>

              <PanelResizeHandle className="h-2 relative group cursor-row-resize flex items-center justify-center">
                <div className="h-1 w-8 rounded-full bg-base-content/10 group-hover:bg-primary/50 transition-colors" />
              </PanelResizeHandle>

              <Panel
                defaultSize={30}
                minSize={20}
                className="bg-base-100 rounded-2xl overflow-hidden shadow-sm border border-base-300/50"
              >
                <OutputPanel
                  output={output}
                  isSuccess={isSuccess}
                  customInput={customInput}
                  setCustomInput={setCustomInput}
                />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

export default ProblemPage;
