import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router";
import Problem from "../components/Problem.jsx";
import { X } from "lucide-react";
import StatsFooter from "../components/StatsFooter.jsx";
import ProblemFilterDropdown from "../components/ProblemFilterDropdown.jsx";
import { PROBLEMS, DATA_STRUCTURES, ALGORITHMS } from "../data/problems.js";

const ProblemsPage = () => {
  const [selectDSA, setSelectDSA] = useState("");
  const [selectAlgo, setSelectAlgo] = useState("");
  const allProblems = Object.values(PROBLEMS);
  const [problems, setProblems] = useState(allProblems);

  const applyFilters = (nextDSA = selectDSA, nextAlgo = selectAlgo) => {
    const filtered = allProblems.filter((problem) => {
      const categories = problem.category.split(" • ");
      const matchesDSA = !nextDSA || categories.includes(nextDSA);
      const matchesAlgo = !nextAlgo || categories.includes(nextAlgo);
      return matchesDSA && matchesAlgo;
    });
    setProblems(filtered);
  };

  const filterDSA = (value) => applyFilters(value ?? "", selectAlgo);
  const filterAlgo = (value) => applyFilters(selectDSA, value ?? "");
  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      {/* NAVBAR COMPONENT */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between">
          {/* HEADER */}
          <div className="mb-8 ">
            <h1 className="text-4xl font-bold mb-2">Practice Problems</h1>
            <p className="text-base-content/70">
              Sharpen your coding skills with these curated problems
            </p>
          </div>
          {/* DS */}
          <div className="flex gap-4">
            {/* FILTER CLEAR BUTTON */}
            {(selectDSA !== "" || selectAlgo !== "") && (
              <button
                onClick={() => {
                  setProblems(allProblems);
                  setSelectDSA("");
                  setSelectAlgo("");
                }}
                className="btn btn-outline btn-primary btn-md mt-1"
              >
                Clear All
                <X className="size-4" />
              </button>
            )}
            {/* DROPDOWN */}
            <div className="flex gap-2">
              <ProblemFilterDropdown
                array={DATA_STRUCTURES}
                defaultName={"Data Structure"}
                filter={filterDSA}
                name={selectDSA}
                setName={setSelectDSA}
              />
              <ProblemFilterDropdown
                array={ALGORITHMS}
                defaultName={"Algorithm"}
                filter={filterAlgo}
                name={selectAlgo}
                setName={setSelectAlgo}
              />
            </div>
          </div>
        </div>
        {/* PROBLEMS LIST */}
        <div className="space-y-4">
          {problems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className="card bg-base-200 rounded-box shadow-lg hover:scale-[1.01] transition-transform"
            >
              <Problem problem={problem} />
            </Link>
          ))}
        </div>
        {/* STATS FOOTER */}
        <StatsFooter problems={problems} />
      </div>
    </div>
  );
};

export default ProblemsPage;
