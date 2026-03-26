import React from "react";
import { Code2Icon, ChevronRightIcon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils.js";

const Problem = ({ problem }) => {
  return (
    <div className="bg-accent/5 hover:bg-accent/15 transition-colors duration-200 rounded-box px-6 py-4 border border-accent/40 shadow-sm shadow-primary/40">
      <div className="flex items-center justify-between gap-4">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-1.5">
            {/* ICON */}
            <div className="size-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
              <Code2Icon className="size-5 text-primary" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 -mt-1">
                <h2 className="text-lg font-semibold truncate">
                  {problem.title}
                </h2>

                <span
                  className={`badge badge-sm ${getDifficultyBadgeClass(
                    problem.difficulty,
                  )}`}
                >
                  {problem.difficulty}
                </span>
              </div>

              <p className="text-xs text-base-content/60">
                {problem.tags?.join(" • ")}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-1 text-primary shrink-0">
          <span className="text-sm font-medium">Solve</span>
          <ChevronRightIcon className="size-4" />
        </div>
      </div>
    </div>
  );
};

export default Problem;
