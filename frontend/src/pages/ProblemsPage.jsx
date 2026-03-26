import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router";
import Problem from "../components/Problem.jsx";
import { X } from "lucide-react";
import StatsFooter from "../components/StatsFooter.jsx";
import ProblemFilterDropdown from "../components/ProblemFilterDropdown.jsx";
import toast from "react-hot-toast";

const API = import.meta.env.VITE_API_URL;

const DIFFICULTY = ["easy", "medium", "hard"];

const ProblemsPage = () => {
  const [allProblems, setAllProblems] = useState([]);
  const [problems, setProblems] = useState([]);

  const [selectDSA, setSelectDSA] = useState("");
  const [selectAlgo, setSelectAlgo] = useState("");
  const [selectDifficulty, setSelectDifficulty] = useState("");

  const [dataStructures, setDataStructures] = useState([]);
  const [algorithms, setAlgorithms] = useState([]);

  // FETCH PROBLEMS
  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const res = await fetch(`${API}/problems`);

        const data = await res.json();
        setAllProblems(data.problems);
        setProblems(data.problems);
        console.log(data.problems);

        // build filter lists from tags
        const tags = new Set();
        data.problems.forEach((p) => p.tags.forEach((t) => tags.add(t)));

        const tagList = Array.from(tags);

        setDataStructures(tagList);
        setAlgorithms(tagList);
      } catch {
        toast.error("Failed to load problems");
      }
    };

    fetchProblems();
  }, []);

  // APPLY FILTERS
  const applyFilters = (
    nextDSA = selectDSA,
    nextAlgo = selectAlgo,
    nextDifficulty = selectDifficulty,
  ) => {
    const filtered = allProblems.filter((problem) => {
      const difficultyMatch =
        !nextDifficulty || problem.difficulty === nextDifficulty;

      const matchesDSA =
        !nextDSA || problem.tags.includes(nextDSA.toLowerCase());

      const matchesAlgo =
        !nextAlgo || problem.tags.includes(nextAlgo.toLowerCase());

      return difficultyMatch && matchesDSA && matchesAlgo;
    });

    setProblems(filtered);
  };

  const filterDSA = (value) =>
    applyFilters(value ?? "", selectAlgo, selectDifficulty);

  const filterAlgo = (value) =>
    applyFilters(selectDSA, value ?? "", selectDifficulty);

  const filterDifficulty = (value) =>
    applyFilters(selectDSA, selectAlgo, value ?? "");

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div className="px-3">
            <h1 className="text-3xl font-bold mb-1">Practice Problems</h1>
            <p className="text-base-content/70">
              Sharpen your coding skills with these curated problems
            </p>
          </div>

          <div className="flex gap-6">
            {(selectDSA || selectAlgo || selectDifficulty) && (
              <button
                onClick={() => {
                  setSelectDSA("");
                  setSelectAlgo("");
                  setSelectDifficulty("");
                  applyFilters("", "", "");
                }}
                className="btn btn-outline btn-primary btn-sm"
              >
                Clear All
                <X className="size-4" />
              </button>
            )}

            <div className="flex gap-4">
              <ProblemFilterDropdown
                array={DIFFICULTY}
                defaultName="Difficulty"
                filter={filterDifficulty}
                name={selectDifficulty}
                setName={setSelectDifficulty}
              />

              <ProblemFilterDropdown
                array={dataStructures}
                defaultName="Tag"
                filter={filterDSA}
                name={selectDSA}
                setName={setSelectDSA}
              />

              <ProblemFilterDropdown
                array={algorithms}
                defaultName="Algorithm"
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
              key={problem._id}
              to={`/problem/${problem._id}`}
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
