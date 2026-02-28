import React from "react";

const StatsFooter = ({ problems }) => {
  const problemsCount = (difficulty) => {
    return problems.filter((p) => p.difficulty === difficulty).length;
  };
  return (
    <div className="mt-12 card bg-base-200 shadow-lg rounded-box">
      <div className="card-body rounded-box bg-accent/5">
        <div className="stats stats-vertical lg:stats-horizontal">
          <div className="stat">
            <div className="stat-title">Total Problems</div>
            <div className="stat-value text-primary">{problems.length}</div>
          </div>

          <div className="stat">
            <div className="stat-title">Easy</div>
            <div className="stat-value text-success">
              {problemsCount("Easy")}
            </div>
          </div>
          <div className="stat">
            <div className="stat-title">Medium</div>
            <div className="stat-value text-warning">
              {problemsCount("Medium")}
            </div>
          </div>
          <div className="stat">
            <div className="stat-title">Hard</div>
            <div className="stat-value text-error">{problemsCount("Hard")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsFooter;
