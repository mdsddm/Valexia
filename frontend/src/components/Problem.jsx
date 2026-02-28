import React from "react";
import { Code2Icon, ChevronRightIcon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils.js";
const Problem = ({ problem }) => {
  return (
    <div className="card-body bg-accent/5 rounded-box hover:bg-accent/20">
      <div className="flex items-center justify-between gap-4">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code2Icon className="size-7 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-bold">{problem.title}</h2>
                <span
                  className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}
                >
                  {problem.difficulty}
                </span>
              </div>
              <p className="text-sm text-base-content/60">
                {" "}
                {problem.category}
              </p>
            </div>
          </div>
          <p className="text-base-content/80 mb-2">
            {problem.description.text}
          </p>
        </div>
        {/* RIGHT SIDE */}

        <div className="flex items-center gap-2 text-primary">
          <span className="font-medium">Solve</span>
          <ChevronRightIcon className="size-5 " />
        </div>
      </div>
    </div>
  );
};

export default Problem;
