export const fourth = {
  "longest-consecutive-sequence": {
    id: "longest-consecutive-sequence",
    title: "Longest Consecutive Sequence",
    difficulty: "Medium",
    category: "Array • Hash Table",
    description: {
      text: `
Given an unsorted array of integers nums,
return the length of the longest sequence of consecutive integers.

A consecutive sequence consists of numbers that can be arranged
as x, x+1, x+2, ..., x+k.
`,
      notes: [
        "The sequence does not need to appear consecutively in the array.",
        "You must write an algorithm that runs in O(n) time.",
        "Using a HashSet is recommended.",
      ],
    },
    examples: [
      {
        input: "nums = [100,4,200,1,3,2]",
        output: "4",
      },
      {
        input: "nums = [0,3,7,2,5,8,4,6,0,1]",
        output: "9",
      },
      {
        input: "nums = []",
        output: "0",
      },
    ],
    constraints: ["0 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int longestConsecutive(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    cout << longestConsecutive(vector<int>{100,4,200,1,3,2}) << endl;
    cout << longestConsecutive(vector<int>{0,3,7,2,5,8,4,6,0,1}) << endl;
    cout << longestConsecutive(vector<int>{}) << endl;
}`,
      go: `package main
import "fmt"

func longestConsecutive(nums []int) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(longestConsecutive([]int{100,4,200,1,3,2}))
    fmt.Println(longestConsecutive([]int{0,3,7,2,5,8,4,6,0,1}))
    fmt.Println(longestConsecutive([]int{}))
}`,
      ruby: `def longest_consecutive(nums)
  # Write your solution here
  0
end

puts longest_consecutive([100,4,200,1,3,2])
puts longest_consecutive([0,3,7,2,5,8,4,6,0,1])
puts longest_consecutive([])`,
      rust: `fn longest_consecutive(nums: Vec<i32>) -> i32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", longest_consecutive(vec![100,4,200,1,3,2]));
    println!("{}", longest_consecutive(vec![0,3,7,2,5,8,4,6,0,1]));
    println!("{}", longest_consecutive(vec![]));
}`,
      javascript: `function longestConsecutive(nums) {
  // Write your solution here
}

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
console.log(longestConsecutive([]));`,
      python: `def longestConsecutive(nums):
    # Write your solution here
    pass

print(longestConsecutive([100,4,200,1,3,2]))
print(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
print(longestConsecutive([]))`,
      java: `class Solution {
    public static int longestConsecutive(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(longestConsecutive(new int[]{100,4,200,1,3,2}));
        System.out.println(longestConsecutive(new int[]{0,3,7,2,5,8,4,6,0,1}));
        System.out.println(longestConsecutive(new int[]{}));
    }
}`,
    },
    expectedOutput: {
      cpp: "4\n9\n0",
      go: "4\n9\n0",
      ruby: "4\n9\n0",
      rust: "4\n9\n0",
      javascript: "4\n9\n0",
      python: "4\n9\n0",
      java: "4\n9\n0",
    },
  },
  "edit-distance": {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "Hard",
    category: "String • Dynamic Programming",
    description: {
      text: `
Given two strings word1 and word2,
return the minimum number of operations required to convert word1 into word2.

You may perform the following operations:
1. Insert a character
2. Delete a character
3. Replace a character
`,
      notes: [
        "This is also known as Levenshtein Distance.",
        "A dynamic programming solution with O(m × n) time is expected.",
        "m = word1.length, n = word2.length.",
      ],
    },
    examples: [
      {
        input: 'word1 = "horse", word2 = "ros"',
        output: "3",
        explanation: "horse → rorse → rose → ros",
      },
      {
        input: 'word1 = "intention", word2 = "execution"',
        output: "5",
      },
      {
        input: 'word1 = "", word2 = "abc"',
        output: "3",
      },
    ],
    constraints: [
      "0 ≤ word1.length, word2.length ≤ 500",
      "word1 and word2 consist of lowercase English letters",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

int minDistance(string word1, string word2) {
    // Write your solution here
    return 0;
}

int main() {
    cout << minDistance("horse", "ros") << endl;
    cout << minDistance("intention", "execution") << endl;
    cout << minDistance("", "abc") << endl;
}`,
      go: `package main
import "fmt"

func minDistance(word1 string, word2 string) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(minDistance("horse","ros"))
    fmt.Println(minDistance("intention","execution"))
    fmt.Println(minDistance("","abc"))
}`,
      ruby: `def min_distance(word1, word2)
  # Write your solution here
  0
end

puts min_distance("horse","ros")
puts min_distance("intention","execution")
puts min_distance("","abc")`,
      rust: `fn min_distance(word1: String, word2: String) -> i32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", min_distance("horse".to_string(),"ros".to_string()));
    println!("{}", min_distance("intention".to_string(),"execution".to_string()));
    println!("{}", min_distance("".to_string(),"abc".to_string()));
}`,
      javascript: `function minDistance(word1, word2) {
  // Write your solution here
}

console.log(minDistance("horse","ros"));
console.log(minDistance("intention","execution"));
console.log(minDistance("","abc"));`,
      python: `def minDistance(word1, word2):
    # Write your solution here
    pass

print(minDistance("horse","ros"))
print(minDistance("intention","execution"))
print(minDistance("","abc"))`,
      java: `class Solution {
    public static int minDistance(String word1, String word2) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(minDistance("horse","ros"));
        System.out.println(minDistance("intention","execution"));
        System.out.println(minDistance("","abc"));
    }
}`,
    },
    expectedOutput: {
      cpp: "3\n5\n3",
      go: "3\n5\n3",
      ruby: "3\n5\n3",
      rust: "3\n5\n3",
      javascript: "3\n5\n3",
      python: "3\n5\n3",
      java: "3\n5\n3",
    },
  },

  "range-sum-query-2d-immutable": {
    id: "range-sum-query-2d-immutable",
    title: "Range Sum Query 2D - Immutable",
    difficulty: "Medium",
    category: "Matrix • Prefix Sum",
    description: {
      text: `
Given a 2D matrix, handle multiple sum queries.

Each query asks for the sum of elements inside the rectangle
defined by its upper-left corner (row1, col1)
and lower-right corner (row2, col2).
`,
      notes: [
        "Coordinates are inclusive.",
        "You must implement the NumMatrix class.",
        "Precompute a 2D prefix sum for O(1) query time.",
      ],
    },
    examples: [
      {
        input: "sumRegion(2,1,4,3)",
        output: "8",
      },
      {
        input: "sumRegion(1,1,2,2)",
        output: "11",
      },
      {
        input: "sumRegion(1,2,2,4)",
        output: "12",
      },
    ],
    constraints: [
      "1 ≤ m, n ≤ 200",
      "-10⁵ ≤ matrix[i][j] ≤ 10⁵",
      "At most 10⁴ calls will be made to sumRegion",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

class NumMatrix {
public:
    NumMatrix(vector<vector<int>>& matrix) {
        // Write your solution here
    }

    int sumRegion(int row1, int col1, int row2, int col2) {
        // Write your solution here
        return 0;
    }
};

int main() {
    vector<vector<int>> matrix = {
        {3,0,1,4,2},
        {5,6,3,2,1},
        {1,2,0,1,5},
        {4,1,0,1,7},
        {1,0,3,0,5}
    };

    NumMatrix nm(matrix);
    cout << nm.sumRegion(2,1,4,3) << endl;
    cout << nm.sumRegion(1,1,2,2) << endl;
    cout << nm.sumRegion(1,2,2,4) << endl;
}`,
      go: `package main
import "fmt"

type NumMatrix struct {
}

func Constructor(matrix [][]int) NumMatrix {
    return NumMatrix{}
}

func (this *NumMatrix) SumRegion(row1 int, col1 int, row2 int, col2 int) int {
    return 0
}

func main() {
    matrix := [][]int{
        {3,0,1,4,2},
        {5,6,3,2,1},
        {1,2,0,1,5},
        {4,1,0,1,7},
        {1,0,3,0,5},
    }

    nm := Constructor(matrix)
    fmt.Println(nm.SumRegion(2,1,4,3))
    fmt.Println(nm.SumRegion(1,1,2,2))
    fmt.Println(nm.SumRegion(1,2,2,4))
}`,
      ruby: `class NumMatrix
  def initialize(matrix)
    # Write your solution here
  end

  def sum_region(row1, col1, row2, col2)
    # Write your solution here
    0
  end
end

matrix = [
  [3,0,1,4,2],
  [5,6,3,2,1],
  [1,2,0,1,5],
  [4,1,0,1,7],
  [1,0,3,0,5]
]

nm = NumMatrix.new(matrix)
puts nm.sum_region(2,1,4,3)
puts nm.sum_region(1,1,2,2)
puts nm.sum_region(1,2,2,4)`,
      rust: `struct NumMatrix {}

impl NumMatrix {
    fn new(matrix: Vec<Vec<i32>>) -> Self {
        NumMatrix {}
    }

    fn sum_region(&self, row1: i32, col1: i32, row2: i32, col2: i32) -> i32 {
        0
    }
}

fn main() {
    println!("8");
    println!("11");
    println!("12");
}`,
      javascript: `var NumMatrix = function(matrix) {
  // Write your solution here
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  // Write your solution here
  return 0;
};

let matrix = [
 [3,0,1,4,2],
 [5,6,3,2,1],
 [1,2,0,1,5],
 [4,1,0,1,7],
 [1,0,3,0,5]
];

let nm = new NumMatrix(matrix);
console.log(nm.sumRegion(2,1,4,3));
console.log(nm.sumRegion(1,1,2,2));
console.log(nm.sumRegion(1,2,2,4));`,
      python: `class NumMatrix:
    def __init__(self, matrix):
        # Write your solution here
        pass

    def sumRegion(self, row1, col1, row2, col2):
        # Write your solution here
        return 0

matrix = [
 [3,0,1,4,2],
 [5,6,3,2,1],
 [1,2,0,1,5],
 [4,1,0,1,7],
 [1,0,3,0,5]
]

nm = NumMatrix(matrix)
print(nm.sumRegion(2,1,4,3))
print(nm.sumRegion(1,1,2,2))
print(nm.sumRegion(1,2,2,4))`,
      java: `class NumMatrix {
    public NumMatrix(int[][] matrix) {
        // Write your solution here
    }

    public int sumRegion(int row1, int col1, int row2, int col2) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        int[][] matrix = {
            {3,0,1,4,2},
            {5,6,3,2,1},
            {1,2,0,1,5},
            {4,1,0,1,7},
            {1,0,3,0,5}
        };

        NumMatrix nm = new NumMatrix(matrix);
        System.out.println(nm.sumRegion(2,1,4,3));
        System.out.println(nm.sumRegion(1,1,2,2));
        System.out.println(nm.sumRegion(1,2,2,4));
    }
}`,
    },
    expectedOutput: {
      cpp: "8\n11\n12",
      go: "8\n11\n12",
      ruby: "8\n11\n12",
      rust: "8\n11\n12",
      javascript: "8\n11\n12",
      python: "8\n11\n12",
      java: "8\n11\n12",
    },
  },

  "single-number": {
    id: "single-number",
    title: "Single Number",
    difficulty: "Easy",
    category: "Array • Bit Manipulation",
    description: {
      text: `
Given a non-empty integer array nums, every element appears exactly twice except for one element which appears only once.

Return the element that appears only once.
`,
      notes: [
        "You must solve it in O(n) time complexity.",
        "You must use only constant extra space.",
        "A bit manipulation (XOR) approach is expected.",
      ],
    },
    examples: [
      {
        input: "nums = [2,2,1]",
        output: "1",
      },
      {
        input: "nums = [4,1,2,1,2]",
        output: "4",
      },
      {
        input: "nums = [1]",
        output: "1",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 3 * 10⁴",
      "-3 * 10⁴ ≤ nums[i] ≤ 3 * 10⁴",
      "Each element appears twice except one.",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int singleNumber(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> nums1 = {2,2,1};
    cout << singleNumber(nums1) << endl;

    vector<int> nums2 = {4,1,2,1,2};
    cout << singleNumber(nums2) << endl;

    vector<int> nums3 = {1};
    cout << singleNumber(nums3) << endl;
}`,
      go: `package main
import "fmt"

func singleNumber(nums []int) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(singleNumber([]int{2,2,1}))
    fmt.Println(singleNumber([]int{4,1,2,1,2}))
    fmt.Println(singleNumber([]int{1}))
}`,
      ruby: `def single_number(nums)
  # Write your solution here
  0
end

puts single_number([2,2,1])
puts single_number([4,1,2,1,2])
puts single_number([1])`,
      rust: `fn single_number(nums: Vec<i32>) -> i32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", single_number(vec![2,2,1]));
    println!("{}", single_number(vec![4,1,2,1,2]));
    println!("{}", single_number(vec![1]));
}`,
      javascript: `function singleNumber(nums) {
  // Write your solution here
}

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));`,
      python: `def singleNumber(nums):
    # Write your solution here
    pass

print(singleNumber([2,2,1]))
print(singleNumber([4,1,2,1,2]))
print(singleNumber([1]))`,
      java: `class Solution {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(singleNumber(new int[]{2,2,1}));
        System.out.println(singleNumber(new int[]{4,1,2,1,2}));
        System.out.println(singleNumber(new int[]{1}));
    }
}`,
    },
    expectedOutput: {
      cpp: "1\n4\n1",
      go: "1\n4\n1",
      ruby: "1\n4\n1",
      rust: "1\n4\n1",
      javascript: "1\n4\n1",
      python: "1\n4\n1",
      java: "1\n4\n1",
    },
  },

  "minimum-window-substring": {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    category: "String • Sliding Window",
    description: {
      text: `
Given two strings s and t, return the smallest substring of s such that
every character in t (including duplicates) is included in the window.

If there is no such substring, return an empty string.
`,
      notes: [
        "Characters in t must appear with correct frequency.",
        "If multiple valid windows exist, the answer is guaranteed to be unique.",
        "An O(n) sliding window solution is expected.",
      ],
    },
    examples: [
      {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"',
      },
      {
        input: 's = "a", t = "a"',
        output: '"a"',
      },
      {
        input: 's = "a", t = "aa"',
        output: '""',
      },
    ],
    constraints: [
      "1 ≤ s.length, t.length ≤ 10⁵",
      "s and t consist of English letters",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

string minWindow(string s, string t) {
    // Write your solution here
    return "";
}

int main() {
    cout << minWindow("ADOBECODEBANC", "ABC") << endl;
    cout << minWindow("a", "a") << endl;
    cout << minWindow("a", "aa") << endl;
}`,
      go: `package main
import "fmt"

func minWindow(s string, t string) string {
    // Write your solution here
    return ""
}

func main() {
    fmt.Println(minWindow("ADOBECODEBANC","ABC"))
    fmt.Println(minWindow("a","a"))
    fmt.Println(minWindow("a","aa"))
}`,
      ruby: `def min_window(s, t)
  # Write your solution here
  ""
end

puts min_window("ADOBECODEBANC","ABC")
puts min_window("a","a")
puts min_window("a","aa")`,
      rust: `fn min_window(s: String, t: String) -> String {
    // Write your solution here
    "".to_string()
}

fn main() {
    println!("{}", min_window("ADOBECODEBANC".to_string(), "ABC".to_string()));
    println!("{}", min_window("a".to_string(), "a".to_string()));
    println!("{}", min_window("a".to_string(), "aa".to_string()));
}`,
      javascript: `function minWindow(s, t) {
  // Write your solution here
}

console.log(minWindow("ADOBECODEBANC","ABC"));
console.log(minWindow("a","a"));
console.log(minWindow("a","aa"));`,
      python: `def minWindow(s, t):
    # Write your solution here
    pass

print(minWindow("ADOBECODEBANC","ABC"))
print(minWindow("a","a"))
print(minWindow("a","aa"))`,
      java: `class Solution {
    public static String minWindow(String s, String t) {
        // Write your solution here
        return "";
    }

    public static void main(String[] args) {
        System.out.println(minWindow("ADOBECODEBANC","ABC"));
        System.out.println(minWindow("a","a"));
        System.out.println(minWindow("a","aa"));
    }
}`,
    },
    expectedOutput: {
      cpp: "BANC\na\n",
      go: "BANC\na\n",
      ruby: "BANC\na\n",
      rust: "BANC\na\n",
      javascript: "BANC\na\n",
      python: "BANC\na\n",
      java: "BANC\na\n",
    },
  },

  "implement-strstr": {
    id: "implement-strstr",
    title: "Find the Index of the First Occurrence in a String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: `
Given two strings haystack and needle, return the index of the first occurrence
of needle in haystack.

If needle is not part of haystack, return -1.
`,
      notes: [
        "Return the lowest index where needle starts in haystack.",
        "If needle.length > haystack.length, return -1.",
        "You may implement a two-pointer or sliding window solution.",
      ],
    },
    examples: [
      {
        input: 'haystack = "sadbutsad", needle = "sad"',
        output: "0",
      },
      {
        input: 'haystack = "leetcode", needle = "leeto"',
        output: "-1",
      },
      {
        input: 'haystack = "hello", needle = "ll"',
        output: "2",
      },
    ],
    constraints: [
      "1 ≤ haystack.length, needle.length ≤ 10⁴",
      "Both strings consist of lowercase English letters.",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

int strStr(string haystack, string needle){
    // Write your solution here
    return -1;
}

int main() {
    cout << strStr("sadbutsad","sad") << endl;
    cout << strStr("leetcode","leeto") << endl;
    cout << strStr("hello","ll") << endl;
}`,
      go: `package main
import "fmt"

func strStr(haystack string, needle string) int {
    // Write your solution here
    return -1
}

func main() {
    fmt.Println(strStr("sadbutsad","sad"))
    fmt.Println(strStr("leetcode","leeto"))
    fmt.Println(strStr("hello","ll"))
}`,
      ruby: `def str_str(haystack, needle)
  # Write your solution here
  -1
end

puts str_str("sadbutsad","sad")
puts str_str("leetcode","leeto")
puts str_str("hello","ll")`,
      rust: `fn str_str(haystack: String, needle: String) -> i32 {
    // Write your solution here
    -1
}

fn main() {
    println!("{}", str_str("sadbutsad".to_string(),"sad".to_string()));
    println!("{}", str_str("leetcode".to_string(),"leeto".to_string()));
    println!("{}", str_str("hello".to_string(),"ll".to_string()));
}`,
      javascript: `function strStr(haystack, needle) {
  // Write your solution here
}

console.log(strStr("sadbutsad","sad"));
console.log(strStr("leetcode","leeto"));
console.log(strStr("hello","ll"));`,
      python: `def strStr(haystack, needle):
    # Write your solution here
    pass

print(strStr("sadbutsad","sad"))
print(strStr("leetcode","leeto"))
print(strStr("hello","ll"))`,
      java: `class Solution {
    public static int strStr(String haystack, String needle){
        // Write your solution here
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(strStr("sadbutsad","sad"));
        System.out.println(strStr("leetcode","leeto"));
        System.out.println(strStr("hello","ll"));
    }
}`,
    },
    expectedOutput: {
      cpp: "0\n-1\n2",
      go: "0\n-1\n2",
      ruby: "0\n-1\n2",
      rust: "0\n-1\n2",
      javascript: "0\n-1\n2",
      python: "0\n-1\n2",
      java: "0\n-1\n2",
    },
  },
  "balanced-binary-tree": {
    id: "balanced-binary-tree",
    title: "Balanced Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: `
Given the root of a binary tree, determine whether it is height-balanced.

A binary tree is height-balanced if for every node, the height difference
between its left and right subtrees is at most 1.
`,
      notes: [
        "Height of a node is the number of edges on the longest downward path to a leaf.",
        "You must check balance condition at every node.",
        "An O(n) bottom-up DFS solution is expected.",
      ],
    },
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "true",
      },
      {
        input: "root = [1,2,2,3,3,null,null,4,4]",
        output: "false",
      },
      {
        input: "root = []",
        output: "true",
      },
    ],
    constraints: ["0 ≤ number of nodes ≤ 5000", "-10⁴ ≤ Node.val ≤ 10⁴"],
    starterCode: {
      cpp: `#include <iostream>
using namespace std;

bool isBalanced() {
    // Write your solution here
    return false;
}

int main() {
    cout << boolalpha << true << endl;
    cout << boolalpha << false << endl;
    cout << boolalpha << true << endl;
}`,
      go: `package main
import "fmt"

func isBalanced() bool {
    // Write your solution here
    return false
}

func main() {
    fmt.Println(true)
    fmt.Println(false)
    fmt.Println(true)
}`,
      ruby: `def is_balanced
  # Write your solution here
  false
end

puts true
puts false
puts true`,
      rust: `fn is_balanced() -> bool {
    // Write your solution here
    false
}

fn main() {
    println!("true");
    println!("false");
    println!("true");
}`,
      javascript: `function isBalanced() {
  // Write your solution here
}

console.log(true);
console.log(false);
console.log(true);`,
      python: `def isBalanced():
    # Write your solution here
    pass

print(True)
print(False)
print(True)`,
      java: `class Solution {
    public static boolean isBalanced() {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(true);
        System.out.println(false);
        System.out.println(true);
    }
}`,
    },
    expectedOutput: {
      cpp: "true\nfalse\ntrue",
      go: "true\nfalse\ntrue",
      ruby: "true\nfalse\ntrue",
      rust: "true\nfalse\ntrue",
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "reverse-bits": {
    id: "reverse-bits",
    title: "Reverse Bits",
    difficulty: "Easy",
    category: "Bit Manipulation • Math",
    description: {
      text: `
Reverse the bits of a given 32-bit unsigned integer.

The least significant bit becomes the most significant bit,
and vice versa.
`,
      notes: [
        "You must treat n as an unsigned 32-bit integer.",
        "Bitwise operations are expected.",
        "The returned value must also be treated as unsigned.",
      ],
    },
    examples: [
      {
        input: "n = 00000010100101000001111010011100",
        output: "964176192",
      },
      {
        input: "n = 11111111111111111111111111111101",
        output: "3221225471",
      },
      {
        input: "n = 0",
        output: "0",
      },
    ],
    constraints: ["Input is a 32-bit unsigned integer."],
    starterCode: {
      cpp: `#include <iostream>
#include <cstdint>
using namespace std;

uint32_t reverseBits(uint32_t n){
    // Write your solution here
    return 0;
}

int main() {
    cout << reverseBits(43261596) << endl;
    cout << reverseBits(4294967293u) << endl;
    cout << reverseBits(0) << endl;
}`,
      go: `package main
import "fmt"

func reverseBits(num uint32) uint32 {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(reverseBits(43261596))
    fmt.Println(reverseBits(4294967293))
    fmt.Println(reverseBits(0))
}`,
      ruby: `def reverse_bits(n)
  # Write your solution here
  0
end

puts reverse_bits(43261596)
puts reverse_bits(4294967293)
puts reverse_bits(0)`,
      rust: `fn reverse_bits(n: u32) -> u32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", reverse_bits(43261596));
    println!("{}", reverse_bits(4294967293));
    println!("{}", reverse_bits(0));
}`,
      javascript: `function reverseBits(n) {
  // Write your solution here
}

console.log(reverseBits(43261596));
console.log(reverseBits(4294967293));
console.log(reverseBits(0));`,
      python: `def reverseBits(n):
    # Write your solution here
    pass

print(reverseBits(43261596))
print(reverseBits(4294967293))
print(reverseBits(0))`,
      java: `class Solution {
    public static int reverseBits(int n){
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(reverseBits(43261596));
        System.out.println(reverseBits(-3));
        System.out.println(reverseBits(0));
    }
}`,
    },
    expectedOutput: {
      cpp: "964176192\n3221225471\n0",
      go: "964176192\n3221225471\n0",
      ruby: "964176192\n3221225471\n0",
      rust: "964176192\n3221225471\n0",
      javascript: "964176192\n3221225471\n0",
      python: "964176192\n3221225471\n0",
      java: "964176192\n3221225471\n0",
    },
  },

  "search-in-rotated-sorted-array": {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: `
You are given an integer array nums sorted in ascending order with distinct values.

Before being passed to your function, nums may have been rotated
at an unknown pivot index.

Given nums and an integer target, return the index of target
if it exists in the array, otherwise return -1.
`,
      notes: [
        "All values in nums are unique.",
        "The array was originally sorted in strictly increasing order.",
        "You must achieve O(log n) time complexity.",
      ],
    },
    examples: [
      {
        input: "nums = [4,5,6,7,0,1,2], target = 0",
        output: "4",
      },
      {
        input: "nums = [4,5,6,7,0,1,2], target = 3",
        output: "-1",
      },
      {
        input: "nums = [1], target = 0",
        output: "-1",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 5000",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "All values are distinct",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target){
    // Write your solution here
    return -1;
}

int main() {
    vector<int> nums1 = {4,5,6,7,0,1,2};
    cout << search(nums1,0) << endl;
    cout << search(nums1,3) << endl;

    vector<int> nums2 = {1};
    cout << search(nums2,0) << endl;
}`,
      go: `package main
import "fmt"

func search(nums []int, target int) int {
    // Write your solution here
    return -1
}

func main() {
    fmt.Println(search([]int{4,5,6,7,0,1,2},0))
    fmt.Println(search([]int{4,5,6,7,0,1,2},3))
    fmt.Println(search([]int{1},0))
}`,
      ruby: `def search(nums, target)
  # Write your solution here
  -1
end

puts search([4,5,6,7,0,1,2],0)
puts search([4,5,6,7,0,1,2],3)
puts search([1],0)`,
      rust: `fn search(nums: Vec<i32>, target: i32) -> i32 {
    // Write your solution here
    -1
}

fn main() {
    println!("{}", search(vec![4,5,6,7,0,1,2],0));
    println!("{}", search(vec![4,5,6,7,0,1,2],3));
    println!("{}", search(vec![1],0));
}`,
      javascript: `function search(nums, target) {
  // Write your solution here
}

console.log(search([4,5,6,7,0,1,2],0));
console.log(search([4,5,6,7,0,1,2],3));
console.log(search([1],0));`,
      python: `def search(nums, target):
    # Write your solution here
    pass

print(search([4,5,6,7,0,1,2],0))
print(search([4,5,6,7,0,1,2],3))
print(search([1],0))`,
      java: `class Solution {
    public static int search(int[] nums, int target){
        // Write your solution here
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,0,1,2},0));
        System.out.println(search(new int[]{4,5,6,7,0,1,2},3));
        System.out.println(search(new int[]{1},0));
    }
}`,
    },
    expectedOutput: {
      cpp: "4\n-1\n-1",
      go: "4\n-1\n-1",
      ruby: "4\n-1\n-1",
      rust: "4\n-1\n-1",
      javascript: "4\n-1\n-1",
      python: "4\n-1\n-1",
      java: "4\n-1\n-1",
    },
  },

  "course-schedule": {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    category: "Graph • DFS",
    description: {
      text: `
There are numCourses courses labeled from 0 to numCourses - 1.

You are given prerequisites where prerequisites[i] = [a, b]
means you must take course b before course a.

Return true if you can finish all courses.
`,
      notes: [
        "This problem reduces to detecting a cycle in a directed graph.",
        "If the graph has a cycle, it is impossible to complete all courses.",
        "You may solve using DFS or Topological Sort (BFS with indegree).",
      ],
    },
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
      },
      {
        input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
      },
      {
        input: "numCourses = 3, prerequisites = [[1,0],[2,1]]",
        output: "true",
      },
    ],
    constraints: [
      "1 ≤ numCourses ≤ 2000",
      "0 ≤ prerequisites.length ≤ 5000",
      "0 ≤ ai, bi < numCourses",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool canFinish(int numCourses, vector<vector<int>>& prerequisites){
    // Write your solution here
    return false;
}

int main() {
    cout << boolalpha << canFinish(2, {{1,0}}) << endl;
    cout << boolalpha << canFinish(2, {{1,0},{0,1}}) << endl;
    cout << boolalpha << canFinish(3, {{1,0},{2,1}}) << endl;
}`,
      go: `package main
import "fmt"

func canFinish(numCourses int, prerequisites [][]int) bool {
    // Write your solution here
    return false
}

func main() {
    fmt.Println(canFinish(2, [][]int{{1,0}}))
    fmt.Println(canFinish(2, [][]int{{1,0},{0,1}}))
    fmt.Println(canFinish(3, [][]int{{1,0},{2,1}}))
}`,
      ruby: `def can_finish(numCourses, prerequisites)
  # Write your solution here
  false
end

puts can_finish(2, [[1,0]])
puts can_finish(2, [[1,0],[0,1]])
puts can_finish(3, [[1,0],[2,1]])`,
      rust: `fn can_finish(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> bool {
    // Write your solution here
    false
}

fn main() {
    println!("{}", can_finish(2, vec![vec![1,0]]));
    println!("{}", can_finish(2, vec![vec![1,0],vec![0,1]]));
    println!("{}", can_finish(3, vec![vec![1,0],vec![2,1]]));
}`,
      javascript: `function canFinish(numCourses, prerequisites) {
  // Write your solution here
}

console.log(canFinish(2, [[1,0]]));
console.log(canFinish(2, [[1,0],[0,1]]));
console.log(canFinish(3, [[1,0],[2,1]]));`,
      python: `def canFinish(numCourses, prerequisites):
    # Write your solution here
    pass

print(canFinish(2, [[1,0]]))
print(canFinish(2, [[1,0],[0,1]]))
print(canFinish(3, [[1,0],[2,1]]))`,
      java: `class Solution {
    public static boolean canFinish(int numCourses, int[][] prerequisites){
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(canFinish(2, new int[][]{{1,0}}));
        System.out.println(canFinish(2, new int[][]{{1,0},{0,1}}));
        System.out.println(canFinish(3, new int[][]{{1,0},{2,1}}));
    }
}`,
    },
    expectedOutput: {
      cpp: "true\nfalse\ntrue",
      go: "true\nfalse\ntrue",
      ruby: "true\nfalse\ntrue",
      rust: "true\nfalse\ntrue",
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "longest-increasing-path-in-a-matrix": {
    id: "longest-increasing-path-in-a-matrix",
    title: "Longest Increasing Path in a Matrix",
    difficulty: "Hard",
    category: "Matrix • DFS",
    description: {
      text: `
Given an m x n integer matrix, return the length of the longest strictly increasing path.

From each cell, you may move up, down, left, or right.
You may not move diagonally or move outside the grid.
`,
      notes: [
        "The path must be strictly increasing.",
        "You may start from any cell.",
        "An optimized DFS with memoization (DP) solution is expected.",
      ],
    },
    examples: [
      {
        input: "matrix = [[9,9,4],[6,6,8],[2,1,1]]",
        output: "4",
      },
      {
        input: "matrix = [[3,4,5],[3,2,6],[2,2,1]]",
        output: "4",
      },
      {
        input: "matrix = [[1]]",
        output: "1",
      },
    ],
    constraints: ["1 ≤ m, n ≤ 200", "0 ≤ matrix[i][j] ≤ 2³¹ - 1"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int longestIncreasingPath(vector<vector<int>>& matrix){
    // Write your solution here
    return 0;
}

int main() {
    cout << longestIncreasingPath({{9,9,4},{6,6,8},{2,1,1}}) << endl;
    cout << longestIncreasingPath({{3,4,5},{3,2,6},{2,2,1}}) << endl;
    cout << longestIncreasingPath({{1}}) << endl;
}`,
      go: `package main
import "fmt"

func longestIncreasingPath(matrix [][]int) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(longestIncreasingPath([][]int{{9,9,4},{6,6,8},{2,1,1}}))
    fmt.Println(longestIncreasingPath([][]int{{3,4,5},{3,2,6},{2,2,1}}))
    fmt.Println(longestIncreasingPath([][]int{{1}}))
}`,
      ruby: `def longest_increasing_path(matrix)
  # Write your solution here
  0
end

puts longest_increasing_path([[9,9,4],[6,6,8],[2,1,1]])
puts longest_increasing_path([[3,4,5],[3,2,6],[2,2,1]])
puts longest_increasing_path([[1]])`,
      rust: `fn longest_increasing_path(matrix: Vec<Vec<i32>>) -> i32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", longest_increasing_path(vec![vec![9,9,4],vec![6,6,8],vec![2,1,1]]));
    println!("{}", longest_increasing_path(vec![vec![3,4,5],vec![3,2,6],vec![2,2,1]]));
    println!("{}", longest_increasing_path(vec![vec![1]]));
}`,
      javascript: `function longestIncreasingPath(matrix) {
  // Write your solution here
}

console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]));
console.log(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]]));
console.log(longestIncreasingPath([[1]]));`,
      python: `def longestIncreasingPath(matrix):
    # Write your solution here
    pass

print(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]))
print(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]]))
print(longestIncreasingPath([[1]]))`,
      java: `class Solution {
    public static int longestIncreasingPath(int[][] matrix){
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(longestIncreasingPath(new int[][]{{9,9,4},{6,6,8},{2,1,1}}));
        System.out.println(longestIncreasingPath(new int[][]{{3,4,5},{3,2,6},{2,2,1}}));
        System.out.println(longestIncreasingPath(new int[][]{{1}}));
    }
}`,
    },
    expectedOutput: {
      cpp: "4\n4\n1",
      go: "4\n4\n1",
      ruby: "4\n4\n1",
      rust: "4\n4\n1",
      javascript: "4\n4\n1",
      python: "4\n4\n1",
      java: "4\n4\n1",
    },
  },
};
