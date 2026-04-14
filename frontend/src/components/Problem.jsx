import React from "react";
import { Code2Icon, ChevronRightIcon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils.js";

const Problem = ({ problem }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_120px_100px] items-center gap-4 md:gap-6 px-6 py-4 w-full relative">
      {/* LEFT SIDE: Title & Tags */}
      <div className="flex items-center gap-4 min-w-0">
        <div className="size-10 rounded-lg bg-base-200 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
          <Code2Icon className="size-5 text-base-content/50 group-hover:text-primary transition-colors" />
        </div>

        <div className="flex flex-col min-w-0 gap-1.5">
          <h2 className="text-base font-semibold text-base-content group-hover:text-primary transition-colors truncate">
            {problem.title}
          </h2>
          
          <div className="flex flex-wrap items-center gap-1.5">
            {problem.tags?.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="badge badge-sm badge-ghost text-[10px] uppercase font-semibold tracking-wider text-base-content/60">
                {tag}
              </span>
            ))}
            {problem.tags?.length > 3 && (
              <span className="badge badge-sm badge-ghost text-[10px] font-semibold text-base-content/40">
                +{problem.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* CENTER: Difficulty */}
      <div className="hidden md:flex justify-center">
        <span
          className={`badge badge-sm border-0 shadow-sm font-semibold capitalize ${getDifficultyBadgeClass(
            problem.difficulty,
          )}`}
        >
          {problem.difficulty}
        </span>
      </div>

      {/* RIGHT SIDE: Action */}
      <div className="hidden md:flex justify-end">
        <div className="flex items-center gap-1 text-base-content/40 group-hover:text-primary font-medium transition-colors">
          <span className="text-sm">Solve</span>
          <ChevronRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default Problem;
