import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemDescription({
  problem,
  currentProblemId,
  onProblemChange,
  allProblems,
}) {
  return (
    <div className="flex flex-col flex-1 min-h-0 h-full">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-base-100/80 backdrop-blur-md border-b border-base-300 px-6 py-5">
        <div className="flex justify-between items-start">
          {" "}
          <div>
            <h1 className="text-2xl font-bold text-base-content tracking-tight mb-1">
              {problem.title}
            </h1>
            <p className="text-sm font-medium text-base-content/60">
              {problem.category}
            </p>
          </div>
          <span
            className={`badge badge-md shadow-sm border-0 font-medium ${getDifficultyBadgeClass(problem.difficulty)}`}
          >
            {problem.difficulty}
          </span>
        </div>
        <select
          className="select select-bordered select-sm w-full font-medium text-sm mt-5 bg-base-200/50 hover:bg-base-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
          value={currentProblemId}
          onChange={(e) => onProblemChange(e.target.value)}
        >
          {allProblems.map((p) => (
            <option key={p._id} value={p._id}>
              {p.title}
            </option>
          ))}
        </select>
      </div>
      {/* Scrollable Body */}
      <div className="flex-1 min-h-0 overflow-y-auto px-6 py-8 space-y-10">
        {/* Description */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-base-content">Description</h2>
          <div className="space-y-4 text-base leading-relaxed text-base-content/90 prose prose-invert max-w-none">
            <p className="text-justify mb-6">{problem.description.text}</p>

            {problem.description.notes?.map((note, idx) => (
              <p key={idx} className="mt-4 text-sm text-base-content/70 italic border-l-2 border-primary/50 pl-3">Note: {note}</p>
            ))}
          </div>
        </section>

        {/* Examples */}
        <section>
          <h2 className="text-xl font-semibold mb-5 text-base-content">Examples</h2>

          {problem.examples?.map((example, idx) => (
            <div
              key={idx}
              className="bg-base-200/40 px-6 py-5 rounded-2xl border border-base-300 shadow-sm mb-6"
            >
              <div className="font-semibold text-base-content mb-3 text-sm uppercase tracking-wider opacity-70">Example {idx + 1}</div>

              <div className="font-mono text-sm space-y-3">
                <div className="bg-base-100/50 p-3 rounded-lg border border-base-300/50">
                  <span className="font-semibold text-base-content/70">Input:</span> <span className="text-base-content">{example.input}</span>
                </div>

                <div className="bg-base-100/50 p-3 rounded-lg border border-base-300/50">
                  <span className="font-semibold text-base-content/70">Output:</span> <span className="text-base-content">{example.output}</span>
                </div>

                {example.explanation && (
                  <div className="mt-3 text-base-content/80 font-sans text-sm bg-primary/5 p-3 rounded-lg border border-primary/10">
                    <span className="font-bold text-primary/80">Explanation:</span>{" "}
                    {example.explanation}
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Constraints */}
        <section className="pb-8">
          <h2 className="text-xl font-semibold mb-4 text-base-content">Constraints</h2>

          <ul className="space-y-3">
            {problem.constraints?.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></div>
                <code className="bg-base-200/70 text-sm px-3 py-1.5 rounded-lg border border-base-300 text-base-content/90 font-mono shadow-sm">{c}</code>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ProblemDescription;
