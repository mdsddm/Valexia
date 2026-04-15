import { getDifficultyBadgeClass } from "../lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function ProblemDescription({
  problem,
  currentProblemId,
  onProblemChange,
  allProblems,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const filteredProblems = allProblems.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === "all" || p.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="flex flex-col flex-1 min-h-0 h-full">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-base-100/80 backdrop-blur-md border-b border-base-300 px-6 py-5">
        <div className="flex justify-between items-start">
          {" "}
          <div>
            <h1 className="text-2xl font-bold text-base-content tracking-tight mb-1">
              {problem?.title || "Loading..."}
            </h1>
            <p className="text-sm font-medium text-base-content/60">
              {problem?.category || ""}
            </p>
          </div>
          <span
            className={`badge badge-md shadow-sm border-0 font-medium ${getDifficultyBadgeClass(problem?.difficulty)}`}
          >
            {problem?.difficulty || ""}
          </span>
        </div>

        {/* Enhanced Problem Selector */}
        <div className="mt-5 w-full">
          <div className="dropdown dropdown-end w-full">
            <button
              tabIndex={0}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full btn btn-outline btn-sm justify-between bg-base-200/50 hover:bg-base-200 hover:border-primary/50 border-base-300 text-base-content"
            >
              <span className="truncate flex-1 text-left">{problem?.title || "Select Problem"}</span>
              <ChevronDown className={`size-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <div tabIndex={0} className="dropdown-content w-full min-w-80 bg-base-100 border border-base-300 rounded-2xl shadow-lg z-50">
              <div className="p-4 space-y-4">
                {/* Search Input */}
                <input
                  type="text"
                  placeholder="Search problems..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input input-sm input-bordered w-full bg-base-200/50 placeholder-base-content/40 text-base-content focus:outline-none focus:ring-2 focus:ring-primary/50"
                />

                {/* Difficulty Filter */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedDifficulty("all")}
                    className={`btn btn-xs ${
                      selectedDifficulty === "all"
                        ? "btn-primary"
                        : "btn-outline text-base-content/60 hover:text-base-content"
                    }`}
                  >
                    All
                  </button>
                  {["easy", "medium", "hard"].map((diff) => (
                    <button
                      key={diff}
                      onClick={() => setSelectedDifficulty(diff)}
                      className={`btn btn-xs capitalize ${
                        selectedDifficulty === diff
                          ? `btn-${diff === "easy" ? "success" : diff === "medium" ? "warning" : "error"}`
                          : "btn-outline text-base-content/60 hover:text-base-content"
                      }`}
                    >
                      {diff}
                    </button>
                  ))}
                </div>

                {/* Problems List */}
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {filteredProblems.length > 0 ? (
                    filteredProblems.map((p) => (
                      <button
                        key={p._id}
                        onClick={() => {
                          onProblemChange(p._id);
                          setIsDropdownOpen(false);
                          setSearchTerm("");
                        }}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          currentProblemId === p._id
                            ? "bg-primary text-primary-content"
                            : "bg-base-200/40 hover:bg-base-200 text-base-content"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{p.title}</p>
                            <p className="text-xs opacity-70 mt-0.5">{p.category}</p>
                          </div>
                          <span className={`badge badge-sm shrink-0 ${getDifficultyBadgeClass(p.difficulty)}`}>
                            {p.difficulty}
                          </span>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="text-center py-6 text-base-content/50 text-sm">
                      No problems found
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scrollable Body */}
      <div className="flex-1 min-h-0 overflow-y-auto px-6 py-8 space-y-10">
        {/* Description */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-base-content">Description</h2>
          <div className="space-y-4 text-base leading-relaxed text-base-content/90 prose prose-invert max-w-none">
            {problem?.description?.text && (
              <p className="text-justify mb-6">{problem.description.text}</p>
            )}

            {problem?.description?.notes?.map((note, idx) => (
              <p key={idx} className="mt-4 text-sm text-base-content/70 italic border-l-2 border-primary/50 pl-3">Note: {note}</p>
            ))}
          </div>
        </section>

        {/* Examples */}
        <section>
          <h2 className="text-xl font-semibold mb-5 text-base-content">Examples</h2>

          {problem?.examples?.length > 0 ? (
            problem.examples.map((example, idx) => (
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
            ))
          ) : (
            <div className="text-center text-base-content/50">No examples available</div>
          )}
        </section>

        {/* Constraints */}
        <section className="pb-8">
          <h2 className="text-xl font-semibold mb-4 text-base-content">Constraints</h2>

          {problem?.constraints?.length > 0 ? (
            <ul className="space-y-3">
              {problem.constraints.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></div>
                  <code className="bg-base-200/70 text-sm px-3 py-1.5 rounded-lg border border-base-300 text-base-content/90 font-mono shadow-sm">{c}</code>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-base-content/50">No constraints available</div>
          )}
        </section>
      </div>
    </div>
  );
}

export default ProblemDescription;
