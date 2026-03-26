import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import Navbar from "../components/Navbar";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../components/ProblemDescription";
import OutputPanel from "../components/OutputPanel";
import CodeEditorPanel from "../components/CodeEditorPanel";

import toast from "react-hot-toast";
import confetti from "canvas-confetti";
import FullScreenLoader from "../components/FullScreenLoader.jsx";

const API = import.meta.env.VITE_API_URL;

function ProblemPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [problems, setProblems] = useState([]);
  const [currentProblem, setCurrentProblem] = useState(null);

  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [isMax, setIsMax] = useState(
    localStorage.getItem("ifProblemMax") === "true",
  );

  const horizontalPanelRef = useRef(null);
  const verticalPanelRef = useRef(null);

  // FETCH ALL PROBLEMS
  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const res = await fetch(`${API}/problems`);
        const data = await res.json();
        setProblems(data.problems);
      } catch {
        toast.error("Failed to load problems");
      }
    };

    fetchProblems();
  }, []);

  // FETCH SINGLE PROBLEM
  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const res = await fetch(`${API}/problems/${id}`);
        const data = await res.json();
        setCurrentProblem(data.problem);
        const starter = data.problem.starterCode[selectedLanguage] || "";

        setCode(starter);
      } catch {
        toast.error("Problem not found");
      }
    };

    if (id) fetchProblem();
  }, [id, selectedLanguage]);

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
      const res = await fetch(`${API}/execute`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: selectedLanguage,
          code,
          problemId: currentProblem._id,
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
    <div className="h-screen flex flex-col bg-base-100 overflow-hidden">
      <Navbar />

      <div className="flex-1 min-h-0 overflow-hidden">
        <PanelGroup
          ref={horizontalPanelRef}
          direction="horizontal"
          className="h-full"
        >
          <Panel
            defaultSize={40}
            minSize={30}
            collapsible
            className="flex flex-col min-h-0"
          >
            <ProblemDescription
              problem={currentProblem}
              currentProblemId={currentProblem._id}
              onProblemChange={handleProblemChange}
              allProblems={problems}
            />
          </Panel>

          {!isMax && (
            <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary" />
          )}

          <Panel defaultSize={60} minSize={30}>
            <PanelGroup
              ref={verticalPanelRef}
              direction="vertical"
              className="h-full"
            >
              <Panel defaultSize={70} minSize={30}>
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

              <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary" />

              <Panel defaultSize={30} minSize={20}>
                <OutputPanel output={output} isSuccess={isSuccess} />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

export default ProblemPage;
