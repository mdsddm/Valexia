import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemDescription({
  problem,
  currentProblemId,
  onProblemChange,
  allProblems,
}) {
  return (
    <div className="flex flex-col flex-1 min-h-0 bg-base-100 rounded-2xl shadow-md">
      {/* Sticky Header */}{" "}
      <div className="sticky top-0 z-10 bg-base-100 border-b border-base-300 px-8 py-4 rounded-t-2xl">
        {" "}
        <div className="flex justify-between items-start">
          {" "}
          <div>
            {" "}
            <h1 className="text-2xl font-semibold text-base-content">
              {problem.title}{" "}
            </h1>{" "}
            <p className="text-sm text-base-content/60">
              {problem.category}{" "}
            </p>{" "}
          </div>
          <span
            className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}
          >
            {problem.difficulty}
          </span>
        </div>
        <select
          className="select select-sm w-full text-sm mt-4"
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
      <div className="flex-1 min-h-0 overflow-y-auto px-8 py-6 space-y-10 bg-base-100">
        {/* Description */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Description</h2>
          <div className="space-y-3 text-base leading-relaxed text-base-content">
            <p className="text-justify mb-6">{problem.description.text}</p>

            {problem.description.notes?.map((note, idx) => (
              <p key={idx}>{note}</p>
            ))}
          </div>
        </section>

        {/* Examples */}
        <section>
          <h2 className="text-lg font-semibold mb-5">Examples</h2>

          {problem.examples?.map((example, idx) => (
            <div
              key={idx}
              className="bg-base-200 px-5 py-3 rounded-xl border border-base-300 shadow-sm mb-5"
            >
              <div className="font-semibold mb-2">Example {idx + 1}</div>

              <div className="font-mono text-sm space-y-1">
                <div>
                  <span className="font-semibold">Input:</span> {example.input}
                </div>

                <div>
                  <span className="font-semibold">Output:</span>{" "}
                  {example.output}
                </div>

                {example.explanation && (
                  <div className="border-t border-base-content/10 mt-2 py-1">
                    <span className="text-base-content/70 font-sans text-xs">
                      <span className="font-semibold">Explanation:</span>{" "}
                      {example.explanation}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Constraints */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Constraints</h2>

          <ul className="space-y-2 text-base-content">
            {problem.constraints?.map((c, i) => (
              <li key={i}>
                • <code className="bg-base-200 px-2 py-1 rounded-md">{c}</code>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ProblemDescription;
