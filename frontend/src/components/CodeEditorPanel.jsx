import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon, Maximize, Minimize } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";
import { useEffect, useState } from "react";

function CodeEditorPanel({
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
    updateEditorTheme();
    window.addEventListener("theme-change", updateEditorTheme);

    return () => {
      window.removeEventListener("theme-change", updateEditorTheme);
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 bg-base-300">
      {/* 🔥 Toolbar */}
      <div
        className="px-4 py-3 bg-base-100 border-b border-base-300
                flex items-center gap-3 overflow-hidden rounded"
      >
        {/* Left Side (Icon + Select) */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <img
            src={LANGUAGE_CONFIG[selectedLanguage].icon}
            alt={LANGUAGE_CONFIG[selectedLanguage].name}
            className="size-6 shrink-0"
          />

          <select
            className="select select-sm w-full max-w-37.5 min-w-0"
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

        <div className="flex gap-6">
          {/* Run Button */}
          <button
            className="btn btn-primary btn-sm gap-1.5 shrink-0 whitespace-nowrap hover:scale-105"
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
            className="mr-2 text-primary shrink-0 hover:scale-110"
            onClick={() => {
              toggleIsMax();
            }}
          >
            {isMax ? <Minimize /> : <Maximize />}
          </button>
        </div>
      </div>

      {/* 🔥 Monaco Editor */}
      <div className="flex-1 overflow-hidden rounded-b-2xl">
        <Editor
          key={isMax ? "max" : "normal"}
          height="100%"
          language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
          value={code}
          onChange={onCodeChange}
          theme={editorTheme}
          onMount={(editor) => {
            setTimeout(() => editor.layout(), 0);
          }}
          options={{
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: isMax ? 18 : 14,
            lineHeight: 22,
            mouseWheelZoom: true,
          }}
        />
      </div>
    </div>
  );
}

export default CodeEditorPanel;
