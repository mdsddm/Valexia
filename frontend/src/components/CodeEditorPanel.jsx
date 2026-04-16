import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon, Maximize, Minimize } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";
import { useEffect, useState } from "react";
import { socket } from "../lib/socket";
import { CodeEditorSkeleton } from "./AppSkeletons.jsx";
function CodeEditorPanel({
  sessionId,
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
  isMax,
  toggleIsMax,
}) {
  const [editorTheme, setEditorTheme] = useState("vs-dark");

  const updateEditorTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const lightThemes = ["corporate", "lofi", "caramellatte", "lemonade"];

    if (currentTheme === "black") {
      setEditorTheme("hc-black");
    } else if (lightThemes.includes(currentTheme)) {
      setEditorTheme("vs");
    } else {
      setEditorTheme("vs-dark");
    }
  };

  useEffect(() => {
    function callUseEffect() {
      updateEditorTheme();
      window.addEventListener("theme-change", updateEditorTheme);

      return () => {
        window.removeEventListener("theme-change", updateEditorTheme);
      };
    }
    callUseEffect();
  }, [code, isMax]);
  useEffect(() => {
    if (!sessionId) return;

    socket.emit("join-session", sessionId);

    socket.on("code-update", (newCode) => {
      onCodeChange(newCode);
    });

    return () => {
      socket.off("code-update");
    };
  }, [onCodeChange, sessionId]);

  return (
    <div className="flex flex-col flex-1 min-h-0 bg-base-100 w-full h-full relative">
      {/* 🔥 Toolbar */}
      <div className="px-5 py-3 bg-base-100/80 backdrop-blur-md border-b border-base-300 flex items-center justify-between z-10 transition-colors">
        {/* Left Side (Icon + Select) */}
        <div className="flex items-center gap-3">
          <img
            src={LANGUAGE_CONFIG[selectedLanguage]?.icon}
            alt={LANGUAGE_CONFIG[selectedLanguage]?.name || selectedLanguage}
            className="size-6 shrink-0"
          />

          <select
            className="select select-bordered select-sm w-40 min-w-0 font-medium text-sm bg-base-100 text-base-content hover:bg-base-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={selectedLanguage}
            onChange={onLanguageChange}
          >
            {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
              <option key={key} value={key}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          {/* Run Button */}
          <button
            className="btn btn-primary btn-sm gap-2 shrink-0 whitespace-nowrap shadow-md shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
            disabled={isRunning}
            onClick={onRunCode}
          >
            {isRunning ? (
              <>
                <Loader2Icon className="size-4 text-primary animate-spin" />
                <span className="text-primary hidden md:inline">
                  Running...
                </span>
              </>
            ) : (
              <>
                <PlayIcon className="size-4" />
                <span className="hidden md:inline">Run Code</span>
              </>
            )}
          </button>
          <button
            className="text-base-content/60 hover:text-primary transition-all p-1.5 rounded-lg hover:bg-primary/10"
            onClick={() => {
              toggleIsMax();
            }}
          >
            {isMax ? <Minimize /> : <Maximize />}
          </button>
        </div>
      </div>

      {/* 🔥 Monaco Editor */}
      <div className="flex-1 min-h-0 overflow-hidden">
        {code ? (
          <Editor
            key={`${selectedLanguage}-${isMax}`}
            height="100%"
            language={
              LANGUAGE_CONFIG[selectedLanguage]?.monacoLang || selectedLanguage
            }
            value={code}
            onChange={(value) => {
              const updated = value ?? "";
              onCodeChange(updated);

              socket.emit("code-change", {
                sessionId,
                code: updated,
              });
            }}
            theme={editorTheme}
            onMount={(editor) => {
              requestAnimationFrame(() => editor.layout());
            }}
            options={{
              automaticLayout: true,
              minimap: { enabled: false },
              fontSize: isMax ? 18 : 14,
              lineHeight: 22,
              mouseWheelZoom: true,
            }}
          />
        ) : (
          <CodeEditorSkeleton />
        )}
      </div>
    </div>
  );
}

export default CodeEditorPanel;
