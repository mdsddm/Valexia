import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../data/problems";
import Navbar from "../components/Navbar";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../components/ProblemDescription";
import OutputPanel from "../components/OutputPanel";
import CodeEditorPanel from "../components/CodeEditorPanel";
import { executeCode } from "../lib/piston";

import toast from "react-hot-toast";
import confetti from "canvas-confetti";

function ProblemPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(
    PROBLEMS[currentProblemId].starterCode.javascript,
  );
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const currentProblem = PROBLEMS[currentProblemId];

  useEffect(() => {
    function callUseEffect() {
      if (id && PROBLEMS[id]) {
        setCurrentProblemId(id);
        setCode(PROBLEMS[id].starterCode[selectedLanguage]);
        setOutput(null);
      }
    }
    callUseEffect();
  }, [id, selectedLanguage]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    setCode(currentProblem.starterCode[newLang]);
    setOutput(null);
  };

  const handleProblemChange = (newProblemId) =>
    navigate(`/problem/${newProblemId}`);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
    });

    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.8, y: 0.6 },
    });
  };

  const normalizeOutput = (output) => {
    // normalize output for comparison (trim whitespace, handle different spacing)
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          // remove spaces after [ and before ]
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          // normalize spaces around commas to single space after comma
          .replace(/\s*,\s*/g, ","),
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

  const checkIfTestsPassed = (actualOutput, expectedOutput) => {
    const normalizedActual = normalizeOutput(actualOutput);
    const normalizedExpected = normalizeOutput(expectedOutput);

    return normalizedActual == normalizedExpected;
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);

    const result = await executeCode(selectedLanguage, code);
    setOutput(result);
    setIsRunning(false);

    // check if code executed successfully and matches expected output

    if (result.success) {
      const expectedOutput = currentProblem.expectedOutput[selectedLanguage];
      const testsPassed = checkIfTestsPassed(result.output, expectedOutput);

      if (testsPassed) {
        triggerConfetti();
        toast.success("All tests passed! Great job!");
      } else {
        toast.error("Tests failed. Check your output!");
      }
    } else {
      toast.error("Code execution failed!");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-base-100 overflow-hidden">
      <Navbar />

      {/* IMPORTANT: prevent global scroll */}
      <div className="flex-1 overflow-hidden">
        <PanelGroup direction="horizontal" className="h-full">
          {/* LEFT PANEL */}
          <Panel defaultSize={40} minSize={30} className="flex overflow-hidden">
            <ProblemDescription
              problem={currentProblem}
              currentProblemId={currentProblemId}
              onProblemChange={handleProblemChange}
              allProblems={Object.values(PROBLEMS)}
            />
          </Panel>

          <PanelResizeHandle className="relative w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize flex items-center justify-center">
            <div className="flex flex-col gap-1">
              <div className="w-0.75 h-0.75 bg-base-content rounded-full" />
              <div className="w-0.75 h-0.75 bg-base-content rounded-full" />
              <div className="w-0.75 h-0.75 bg-base-content rounded-full" />
            </div>
          </PanelResizeHandle>

          {/* RIGHT PANEL */}
          <Panel defaultSize={60} minSize={30} className="flex overflow-hidden">
            <PanelGroup direction="vertical" className="h-full">
              {/* CODE EDITOR */}
              <Panel defaultSize={70} minSize={30} className="flex flex-col">
                <CodeEditorPanel
                  selectedLanguage={selectedLanguage}
                  code={code}
                  isRunning={isRunning}
                  onLanguageChange={handleLanguageChange}
                  onCodeChange={setCode}
                  onRunCode={handleRunCode}
                />
              </Panel>

              <PanelResizeHandle className="relative h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-0.75 h-0.75 bg-base-content rounded-full" />
                  <div className="w-0.75 h-0.75 bg-base-content rounded-full" />
                  <div className="w-0.75 h-0.75 bg-base-content rounded-full" />
                </div>
              </PanelResizeHandle>

              {/* OUTPUT */}
              <Panel
                defaultSize={30}
                minSize={20}
                className="flex bg-base-300 "
              >
                <OutputPanel output={output} />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

export default ProblemPage;
