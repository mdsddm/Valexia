import { first } from "./problem/first.js";
import { second } from "./problem/second.js";
import { third } from "./problem/third.js";
import { fourth } from "./problem/fourth.js";
import { fifth } from "./problem/fifth.js";
import { six } from "./problem/six.js";

export const PROBLEMS = {
  ...first,
  ...second,
  ...third,
  ...fourth,
  ...fifth,
  ...six,
};

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
export const DIFFICULTY = ["Easy", "Medium", "Hard"];
