import { useEffect, useRef, useState } from "react";
import { CheckCircle2Icon, XCircleIcon, AlertTriangleIcon } from "lucide-react";

function OutputPanel({ output, isSuccess, customInput, setCustomInput }) {
  const isError = output?.error || !output?.success && output && !output?.passed && !output?.expected && output?.error !== undefined;
  
  // if output is from code run and has passed status natively, fallback to passing
  const isPassed = output?.passed || isSuccess; 
  
  const bottomRef = useRef(null);
  const [activeTab, setActiveTab] = useState("result"); // testcase, result

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    if (output) {
      setActiveTab("result");
    }
  }, [output]);

  // Determine status
  let statusStr = "Run code to see output...";
  let statusColor = "text-base-content/50";
  let StatusIcon = null;

  if (output) {
    if (isError || (output.success === false && output.error)) {
      statusStr = "Compile/Runtime Error";
      statusColor = "text-error";
      StatusIcon = AlertTriangleIcon;
    } else if (isPassed) {
      statusStr = "Accepted";
      statusColor = "text-success";
      StatusIcon = CheckCircle2Icon;
    } else {
      statusStr = "Wrong Answer";
      statusColor = "text-error";
      StatusIcon = XCircleIcon;
    }
  }

  return (
    <div className={`shadow-md border border-base-300 h-full w-full flex flex-col bg-base-100`}>
      {/* Header Tabs */}
      <div className="flex border-b border-base-300 bg-base-200/50 pt-2 px-2 shrink-0">
        <button
          onClick={() => setActiveTab("testcase")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "testcase"
              ? "border-primary text-primary"
              : "border-transparent text-base-content/60 hover:text-base-content"
          }`}
        >
          Testcases
        </button>
        <button
          onClick={() => setActiveTab("result")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "result"
              ? "border-primary text-primary"
              : "border-transparent text-base-content/60 hover:text-base-content"
          }`}
        >
          Test Result
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 relative">
        {!output ? (
          <div className="flex flex-col items-center justify-center h-full text-base-content/40 space-y-3">
             <p className="text-sm font-medium">You must run your code first</p>
          </div>
        ) : activeTab === "testcase" ? (
          <div className="h-full flex flex-col pt-1">
            <div className="flex items-center justify-between mb-3">
               <span className="text-sm font-medium text-base-content/70">
                 Custom Input
               </span>
               {customInput && (
                  <button onClick={() => setCustomInput("")} className="text-xs text-base-content/50 hover:text-error transition-colors">Clear</button>
               )}
            </div>
            <textarea
              className="textarea textarea-bordered w-full flex-1 font-mono text-sm resize-none bg-base-200/50 focus:bg-base-200"
              placeholder="Enter standard input values here..."
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              spellCheck={false}
            />
          </div>
        ) : (
          <div className="space-y-6">
            {/* Status Heading */}
            <div className={`flex items-center gap-2 text-2xl font-bold ${statusColor}`}>
               {StatusIcon && <StatusIcon className="size-6 shrink-0" />}
               {statusStr}
            </div>

            {/* Error UI */}
            {isError || (output.success === false && output.error) ? (
              <div className="bg-error/10 border border-error/20 p-4 rounded-xl font-mono text-sm space-y-2">
                <p className="text-error font-semibold whitespace-pre-wrap break-words">
                  {output.error?.message || output.error}
                </p>
                {output.error?.line && (
                  <p className="text-error/80 text-xs mt-2">
                    📍 Line: {output.error.line}
                  </p>
                )}
              </div>
            ) : (
              // Success / Wrong Answer UI
              <div className="space-y-4 pb-4">
                {/* User Output */}
                <div>
                   <span className="text-xs font-semibold uppercase opacity-60 ml-1">Your Output</span>
                   <div className="mt-1.5 bg-base-200/70 border border-base-300 p-4 rounded-xl font-mono text-sm whitespace-pre-wrap break-words text-base-content/90 min-h-[60px]">
                      {output.output || "No output generated"}
                   </div>
                </div>

                {/* Expected Output */}
                {output.expected && (
                  <div>
                     <span className="text-xs font-semibold uppercase opacity-60 ml-1">Expected Output</span>
                     <div className="mt-1.5 bg-base-200/70 border border-base-300 p-4 rounded-xl font-mono text-sm whitespace-pre-wrap break-words text-base-content/90 min-h-[60px]">
                        {output.expected}
                     </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Scroll anchor */}
        <div ref={bottomRef} className="h-1" />
      </div>
    </div>
  );
}

export default OutputPanel;
