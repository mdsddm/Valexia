function OutputPanel({ output }) {
  const isError = output?.error;

  return (
    <div className="flex flex-col flex-1 bg-base-100 rounded-2xl shadow-md overflow-hidden border border-base-300">
      {/* Header */}
      <div className="px-6 py-4 bg-base-100 border-b border-base-300 font-semibold text-base-content">
        Output
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 bg-base-200/40">
        {output ? (
          <pre
            className={`whitespace-pre-wrap wrap-break-words font-mono text-sm leading-relaxed ${
              isError ? "text-error" : "text-base-content"
            }`}
          >
            {output.output || output.error}
          </pre>
        ) : (
          <p className="text-base-content/50 text-sm">
            Run code to see output...
          </p>
        )}
      </div>
    </div>
  );
}

export default OutputPanel;
