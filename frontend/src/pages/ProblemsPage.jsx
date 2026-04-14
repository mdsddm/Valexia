import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
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
  const { getToken } = useAuth();
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
        const token = await getToken();
        const res = await fetch(`${API}/problems`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setAllProblems(data.problems);
        setProblems(data.problems);

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
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* HERO HEADER */}
        <div className="text-center mb-12 mt-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-base-content tracking-tight">Practice Problems</h1>
          <p className="text-base-content/60 max-w-2xl mx-auto text-lg">
            Sharpen your coding skills with our curated collection of algorithm and data structure challenges.
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 flex-wrap">
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

            {(selectDSA || selectAlgo || selectDifficulty) && (
              <button
                onClick={() => {
                  setSelectDSA("");
                  setSelectAlgo("");
                  setSelectDifficulty("");
                  applyFilters("", "", "");
                }}
                className="btn btn-ghost btn-sm text-base-content/50 hover:text-error transition-colors px-2"
              >
                Clear
                <X className="size-4" />
              </button>
            )}
          </div>
        </div>

        {/* PROBLEMS TABLE CONTAINER */}
        <div className="bg-base-100 border border-base-300 rounded-2xl shadow-sm overflow-hidden mb-10">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-[1fr_120px_100px] items-center gap-6 px-6 py-4 border-b border-base-300 bg-base-200/40 text-xs font-bold text-base-content/50 uppercase tracking-wider">
            <div>Problem</div>
            <div className="text-center">Difficulty</div>
            <div className="text-right">Action</div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col divide-y divide-base-300/50">
            {problems.map((problem) => (
              <Link
                key={problem._id}
                to={`/problem/${problem._id}`}
                className="block group hover:bg-base-200/30 transition-colors"
              >
                <Problem problem={problem} />
              </Link>
            ))}
            
            {problems.length === 0 && (
              <div className="px-6 py-16 text-center">
                <p className="text-base-content/50 text-lg">No problems found matching your filters.</p>
              </div>
            )}
          </div>
        </div>

        {/* STATS FOOTER */}
        <StatsFooter problems={problems} />
      </div>
    </div>
  );
};

export default ProblemsPage;
