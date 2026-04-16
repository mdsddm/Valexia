import Editor from "@monaco-editor/react";
import {
  Loader2Icon,
  PlayIcon,
  Maximize,
  Minimize,
  ShieldAlert,
} from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";
import { useEffect, useRef, useState } from "react";
import { socket } from "../lib/socket";
import { CodeEditorSkeleton } from "./AppSkeletons.jsx";
import toast from "react-hot-toast";

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
  antiCheatEnabled = false,
}) {
  const LIGHT_THEME = "caramellatte";
  const [editorTheme, setEditorTheme] = useState("vs-dark");
  const antiCheatCleanupRef = useRef(null);
  const lastWarningTimeRef = useRef(0);

  const showAntiCheatToast = (message) => {
    const now = Date.now();
    if (now - lastWarningTimeRef.current < 1200) return;
    lastWarningTimeRef.current = now;

    toast.custom(
      (t) => (
        <div
          className={`pointer-events-auto flex items-start gap-3 rounded-xl border border-warning/30 bg-base-100 px-4 py-3 shadow-lg transition-all duration-200 ${
            t.visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <div className="mt-0.5 rounded-lg bg-warning/15 p-1.5 text-warning">
            <ShieldAlert className="size-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-base-content">
              Anti-Cheat Active
            </p>
            <p className="text-xs text-base-content/70 mt-0.5">{message}</p>
          </div>
        </div>
      ),
      {
        id: "anti-cheat-warning",
        duration: 1800,
        position: "top-center",
      },
    );
  };

  useEffect(() => {
    const updateEditorTheme = (event) => {
      const nextTheme =
        event?.detail?.theme ||
        document.documentElement.getAttribute("data-theme") ||
        "forest";

      setEditorTheme(nextTheme === LIGHT_THEME ? "vs" : "vs-dark");
    };

    updateEditorTheme();
    window.addEventListener("theme-change", updateEditorTheme);

    return () => {
      window.removeEventListener("theme-change", updateEditorTheme);
    };
  }, []);
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

  useEffect(() => {
    return () => {
      antiCheatCleanupRef.current?.();
    };
  }, []);

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
          {antiCheatEnabled && (
            <div className="badge badge-warning badge-outline hidden md:inline-flex">
              Paste Blocked
            </div>
          )}

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
            onMount={(editor, monaco) => {
              antiCheatCleanupRef.current?.();

              if (antiCheatEnabled) {
                const domNode = editor.getDomNode();

                const preventPasteAction = (event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  showAntiCheatToast(
                    "Pasting code is disabled for this interview.",
                  );
                };

                const preventDropAction = (event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  showAntiCheatToast(
                    "Drag and drop is disabled in interview mode.",
                  );
                };

                const blockPasteCommand = editor.addCommand(
                  monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyV,
                  () =>
                    showAntiCheatToast(
                      "Pasting code is disabled for this interview.",
                    ),
                );

                const blockPasteHistoryCommand = editor.addCommand(
                  monaco.KeyMod.CtrlCmd |
                    monaco.KeyMod.Shift |
                    monaco.KeyCode.KeyV,
                  () =>
                    showAntiCheatToast(
                      "Pasting code is disabled for this interview.",
                    ),
                );

                domNode?.addEventListener("paste", preventPasteAction, true);
                domNode?.addEventListener("drop", preventDropAction, true);

                antiCheatCleanupRef.current = () => {
                  domNode?.removeEventListener(
                    "paste",
                    preventPasteAction,
                    true,
                  );
                  domNode?.removeEventListener("drop", preventDropAction, true);

                  if (typeof blockPasteCommand === "function") {
                    blockPasteCommand();
                  }
                  if (typeof blockPasteHistoryCommand === "function") {
                    blockPasteHistoryCommand();
                  }
                };
              }

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
