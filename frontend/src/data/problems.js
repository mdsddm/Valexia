// =======================
// 💻 LANGUAGE CONFIG
// =======================
export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
  go: {
    name: "Go",
    icon: "/go.png",
    monacoLang: "go",
  },
  ruby: {
    name: "Ruby",
    icon: "/ruby.png",
    monacoLang: "ruby",
  },
  rust: {
    name: "Rust",
    icon: "/rust.png",
    monacoLang: "rust",
  },
};

// =======================
// 🧠 DATA STRUCTURES
// =======================
export const DATA_STRUCTURES = [
  "Array",
  "String",
  "Hash Table",
  "Stack",
  "Heap",
  "Tree",
  "Graph",
  "Trie",
  "Matrix",
];

// =======================
// ⚙️ ALGORITHMS
// =======================
export const ALGORITHMS = [
  "Two Pointers",
  "Sliding Window",
  "Binary Search",
  "Dynamic Programming",
  "Greedy",
  "DFS",
  "BFS",
  "Backtracking",
  "Union Find",
  "Prefix Sum",
  "Bit Manipulation",
  "Sorting",
  "Divide and Conquer",
];

// =======================
// 🎯 ALL TOPICS (🔥 IMPORTANT)
// =======================
// 👉 Single source of truth for entire app
export const TOPICS = [...DATA_STRUCTURES, ...ALGORITHMS];

// =======================
// 📊 DIFFICULTY
// =======================
export const DIFFICULTY = ["Easy", "Medium", "Hard"];

// =======================
// 🧩 HELPER UTILITIES (🔥 VERY USEFUL)
// =======================

// Validate topics (used in backend)
export const isValidTopic = (topic) => {
  return TOPICS.includes(topic);
};

// Validate multiple topics
export const areValidTopics = (topics = []) => {
  return topics.every((t) => TOPICS.includes(t));
};

// Group topics (for UI display)
export const TOPIC_GROUPS = {
  "Data Structures": DATA_STRUCTURES,
  Algorithms: ALGORITHMS,
};
