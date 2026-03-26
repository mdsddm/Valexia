import { useEffect, useRef } from "react";

function OutputPanel({ output, isSuccess }) {
  const isError = output?.error;
  const bottomRef = useRef(null);

  // 🔽 Auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  return (
    <div
      className={`shadow-md border border-base-300 h-full w-full flex flex-col
      ${isSuccess ? "bg-primary/10 border-primary/40" : "bg-base-100"}
      `}
    >
      {/* Header */}
      <div
        className={`px-6 py-4 border-b border-base-300 font-semibold
        ${isSuccess ? "text-primary" : "text-base-content"}
        `}
      >
        Output
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 bg-base-200/40">
        {output ? (
          isError ? (
            // ❌ Error UI
            <div className="font-mono text-sm space-y-2">
              <p className="text-error font-semibold">
                ❌ {output.error.message}
              </p>

              {output.error.line && (
                <p className="text-warning text-xs">
                  📍 Line: {output.error.line}
                </p>
              )}
            </div>
          ) : (
            // ✅ Success Output
            <pre className="whitespace-pre-wrap wrap-break-word font-mono text-sm leading-relaxed text-primary">
              {output.output}
            </pre>
          )
        ) : (
          <p className="text-base-content/50 text-sm">
            Run code to see output...
          </p>
        )}

        {/* Scroll anchor */}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default OutputPanel;
