export const third = {
  "word-search-ii": {
    id: "word-search-ii",
    title: "Word Search II",
    difficulty: "Hard",
    category: "Trie • Backtracking",
    description: {
      text: `
Given an m x n board of characters and a list of strings words,
return all words that can be formed on the board.

A word must be constructed from sequentially adjacent cells,
where adjacent cells are horizontally or vertically neighboring.
`,
      notes: [
        "The same cell may not be used more than once in a single word.",
        "You may return the answer in any order.",
        "Efficient solutions use Trie + DFS backtracking.",
      ],
    },
    examples: [
      {
        input:
          'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]',
        output: '["eat","oath"]',
      },
      {
        input: 'board = [["a","b"],["c","d"]], words = ["abcb"]',
        output: "[]",
      },
    ],
    constraints: [
      "m == board.length",
      "n == board[i].length",
      "1 ≤ m, n ≤ 12",
      "1 ≤ words.length ≤ 3 * 10⁴",
      "1 ≤ words[i].length ≤ 10",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
    // Write your solution here
    return {};
}

int main() {
    vector<vector<char>> board = {
        {'o','a','a','n'},
        {'e','t','a','e'},
        {'i','h','k','r'},
        {'i','f','l','v'}
    };
    vector<string> words = {"oath","pea","eat","rain"};

    vector<string> res = findWords(board, words);
    sort(res.begin(), res.end());
    for(string s : res) cout << s << " ";
    cout << endl;
}`,
      go: `package main
import (
    "fmt"
    "sort"
)

func findWords(board [][]byte, words []string) []string {
    // Write your solution here
    return []string{}
}

func main(){
    board := [][]byte{
        {'o','a','a','n'},
        {'e','t','a','e'},
        {'i','h','k','r'},
        {'i','f','l','v'},
    }
    words := []string{"oath","pea","eat","rain"}

    res := findWords(board, words)
    sort.Strings(res)
    fmt.Println(res)
}`,
      ruby: `def find_words(board, words)
  # Write your solution here
  []
end

board = [
  ["o","a","a","n"],
  ["e","t","a","e"],
  ["i","h","k","r"],
  ["i","f","l","v"]
]
words = ["oath","pea","eat","rain"]

res = find_words(board, words).sort
p res`,
      rust: `fn find_words(board: Vec<Vec<char>>, words: Vec<String>) -> Vec<String> {
    // Write your solution here
    vec![]
}

fn main() {
    let board = vec![
        vec!['o','a','a','n'],
        vec!['e','t','a','e'],
        vec!['i','h','k','r'],
        vec!['i','f','l','v'],
    ];
    let words = vec![
        "oath".to_string(),
        "pea".to_string(),
        "eat".to_string(),
        "rain".to_string()
    ];

    let mut res = find_words(board, words);
    res.sort();
    println!("{:?}", res);
}`,
      javascript: `function findWords(board, words) {
  // Write your solution here
}

const board = [
  ["o","a","a","n"],
  ["e","t","a","e"],
  ["i","h","k","r"],
  ["i","f","l","v"]
];

const words = ["oath","pea","eat","rain"];

const result = findWords(board, words).sort();
console.log(result);`,
      python: `def findWords(board, words):
    # Write your solution here
    pass

board = [
 ["o","a","a","n"],
 ["e","t","a","e"],
 ["i","h","k","r"],
 ["i","f","l","v"]
]
words = ["oath","pea","eat","rain"]

res = sorted(findWords(board, words))
print(res)`,
      java: `import java.util.*;

class Solution {
    public static List<String> findWords(char[][] board, String[] words) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        char[][] board = {
            {'o','a','a','n'},
            {'e','t','a','e'},
            {'i','h','k','r'},
            {'i','f','l','v'}
        };
        String[] words = {"oath","pea","eat","rain"};

        List<String> res = findWords(board, words);
        Collections.sort(res);
        System.out.println(res);
    }
}`,
    },
    expectedOutput: {
      cpp: "eat oath ",
      go: "[eat oath]",
      ruby: '["eat", "oath"]',
      rust: '["eat", "oath"]',
      javascript: '["eat","oath"]',
      python: "['eat', 'oath']",
      java: "[eat, oath]",
    },
  },

  "binary-tree-maximum-path-sum": {
    id: "binary-tree-maximum-path-sum",
    title: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    category: "Tree • DFS",
    description: {
      text: `
Given the root of a binary tree, return the maximum path sum
of any non-empty path.

A path is a sequence of nodes connected by edges.
The path does not need to pass through the root.
`,
      notes: [
        "A node can appear at most once in a path.",
        "The path must contain at least one node.",
        "The path can start and end at any node in the tree.",
        "This is typically solved using DFS with a global maximum.",
      ],
    },
    examples: [
      {
        input: "root = [1,2,3]",
        output: "6",
        explanation: "The optimal path is 2 → 1 → 3 with sum 6.",
      },
      {
        input: "root = [-10,9,20,null,null,15,7]",
        output: "42",
      },
    ],
    constraints: ["1 ≤ number of nodes ≤ 3 * 10⁴", "-1000 ≤ Node.val ≤ 1000"],
    starterCode: {
      cpp: `#include <iostream>
#include <algorithm>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

int maxPathSum(TreeNode* root) {
    // Write your solution here
    return 0;
}

int main() {
    TreeNode* root1 = new TreeNode(1);
    root1->left = new TreeNode(2);
    root1->right = new TreeNode(3);
    cout << maxPathSum(root1) << endl;

    TreeNode* root2 = new TreeNode(-10);
    root2->left = new TreeNode(9);
    root2->right = new TreeNode(20);
    root2->right->left = new TreeNode(15);
    root2->right->right = new TreeNode(7);
    cout << maxPathSum(root2) << endl;
}`,
      go: `package main
import "fmt"

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

func maxPathSum(root *TreeNode) int {
    // Write your solution here
    return 0
}

func main() {
    root1 := &TreeNode{1,&TreeNode{2,nil,nil},&TreeNode{3,nil,nil}}
    fmt.Println(maxPathSum(root1))

    root2 := &TreeNode{-10,
        &TreeNode{9,nil,nil},
        &TreeNode{20,
            &TreeNode{15,nil,nil},
            &TreeNode{7,nil,nil},
        },
    }
    fmt.Println(maxPathSum(root2))
}`,
      ruby: `class TreeNode
  attr_accessor :val, :left, :right
  def initialize(val)
    @val = val
  end
end

def max_path_sum(root)
  # Write your solution here
  0
end

root1 = TreeNode.new(1)
root1.left = TreeNode.new(2)
root1.right = TreeNode.new(3)
puts max_path_sum(root1)

root2 = TreeNode.new(-10)
root2.left = TreeNode.new(9)
root2.right = TreeNode.new(20)
root2.right.left = TreeNode.new(15)
root2.right.right = TreeNode.new(7)
puts max_path_sum(root2)`,
      rust: `#[derive(Debug)]
struct TreeNode {
    val: i32,
    left: Option<Box<TreeNode>>,
    right: Option<Box<TreeNode>>,
}

fn max_path_sum(root: Option<Box<TreeNode>>) -> i32 {
    // Write your solution here
    0
}

fn main() {}`,
      javascript: `function TreeNode(val, left=null, right=null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function maxPathSum(root) {
  // Write your solution here
}

const root1 = new TreeNode(1,
  new TreeNode(2),
  new TreeNode(3)
);

console.log(maxPathSum(root1));

const root2 = new TreeNode(-10,
  new TreeNode(9),
  new TreeNode(20,
    new TreeNode(15),
    new TreeNode(7)
  )
);

console.log(maxPathSum(root2));`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxPathSum(root):
    # Write your solution here
    pass

root1 = TreeNode(1, TreeNode(2), TreeNode(3))
print(maxPathSum(root1))

root2 = TreeNode(-10,
                 TreeNode(9),
                 TreeNode(20, TreeNode(15), TreeNode(7)))
print(maxPathSum(root2))`,
      java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x){ val = x; }
}

class Solution {
    public static int maxPathSum(TreeNode root) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        TreeNode root1 = new TreeNode(1);
        root1.left = new TreeNode(2);
        root1.right = new TreeNode(3);
        System.out.println(maxPathSum(root1));

        TreeNode root2 = new TreeNode(-10);
        root2.left = new TreeNode(9);
        root2.right = new TreeNode(20);
        root2.right.left = new TreeNode(15);
        root2.right.right = new TreeNode(7);
        System.out.println(maxPathSum(root2));
    }
}`,
    },
    expectedOutput: {
      cpp: "6\n42",
      go: "6\n42",
      ruby: "6\n42",
      rust: "",
      javascript: "6\n42",
      python: "6\n42",
      java: "6\n42",
    },
  },

  "redundant-connection": {
    id: "redundant-connection",
    title: "Redundant Connection",
    difficulty: "Medium",
    category: "Graph • Union Find",
    description: {
      text: `
A tree is an undirected graph that is connected and contains no cycles.

You are given a graph that started as a tree with n nodes labeled from 1 to n.
One additional edge was added.

Return the edge that can be removed so that the resulting graph becomes a tree again.
`,
      notes: [
        "If multiple answers exist, return the one that appears last in the input.",
        "The solution is typically implemented using Union-Find (Disjoint Set Union).",
        "There are no repeated edges.",
      ],
    },
    examples: [
      {
        input: "edges = [[1,2],[1,3],[2,3]]",
        output: "[2,3]",
      },
      {
        input: "edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]",
        output: "[1,4]",
      },
    ],
    constraints: [
      "n == edges.length",
      "3 ≤ n ≤ 1000",
      "edges[i].length == 2",
      "1 ≤ edges[i][0] < edges[i][1] ≤ n",
      "There are no repeated edges.",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> findRedundantConnection(vector<vector<int>>& edges) {
    // Write your solution here
    return {};
}

int main() {
    vector<vector<int>> e1 = {{1,2},{1,3},{2,3}};
    vector<vector<int>> e2 = {{1,2},{2,3},{3,4},{1,4},{1,5}};

    auto r1 = findRedundantConnection(e1);
    cout << "[" << r1[0] << "," << r1[1] << "]" << endl;

    auto r2 = findRedundantConnection(e2);
    cout << "[" << r2[0] << "," << r2[1] << "]" << endl;
}`,
      go: `package main
import "fmt"

func findRedundantConnection(edges [][]int) []int {
    // Write your solution here
    return []int{}
}

func main() {
    fmt.Println(findRedundantConnection([][]int{{1,2},{1,3},{2,3}}))
    fmt.Println(findRedundantConnection([][]int{{1,2},{2,3},{3,4},{1,4},{1,5}}))
}`,
      ruby: `def find_redundant_connection(edges)
  # Write your solution here
  []
end

p find_redundant_connection([[1,2],[1,3],[2,3]])
p find_redundant_connection([[1,2],[2,3],[3,4],[1,4],[1,5]])`,
      rust: `fn find_redundant_connection(edges: Vec<Vec<i32>>) -> Vec<i32> {
    // Write your solution here
    vec![]
}

fn main() {
    println!("{:?}", find_redundant_connection(vec![
        vec![1,2],vec![1,3],vec![2,3]
    ]));

    println!("{:?}", find_redundant_connection(vec![
        vec![1,2],vec![2,3],vec![3,4],vec![1,4],vec![1,5]
    ]));
}`,
      javascript: `function findRedundantConnection(edges) {
  // Write your solution here
}

console.log(findRedundantConnection([[1,2],[1,3],[2,3]]));
console.log(findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]]));`,
      python: `def findRedundantConnection(edges):
    # Write your solution here
    pass

print(findRedundantConnection([[1,2],[1,3],[2,3]]))
print(findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]]))`,
      java: `import java.util.*;

class Solution {
    public static int[] findRedundantConnection(int[][] edges) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(
            findRedundantConnection(new int[][]{{1,2},{1,3},{2,3}})
        ));
        System.out.println(Arrays.toString(
            findRedundantConnection(new int[][]{{1,2},{2,3},{3,4},{1,4},{1,5}})
        ));
    }
}`,
    },
    expectedOutput: {
      cpp: "[2,3]\n[1,4]",
      go: "[2 3]\n[1 4]",
      ruby: "[2, 3]\n[1, 4]",
      rust: "[2, 3]\n[1, 4]",
      javascript: "[2,3]\n[1,4]",
      python: "[2, 3]\n[1, 4]",
      java: "[2, 3]\n[1, 4]",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack • String",
    description: {
      text: `
Given a string s containing only the characters:
'(', ')', '{', '}', '[' and ']',

determine if the input string is valid.
`,
      notes: [
        "Every opening bracket must have a corresponding closing bracket of the same type.",
        "Brackets must close in the correct order.",
        "An empty stack at the end means the string is valid.",
      ],
    },
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
      { input: 's = "([)]"', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists only of '()[]{}'."],
    starterCode: {
      cpp: `#include <iostream>
#include <stack>
using namespace std;

bool isValid(string s) {
    // Write your solution here
    return false;
}

int main() {
    cout << boolalpha << isValid("()") << endl;
    cout << boolalpha << isValid("()[]{}") << endl;
    cout << boolalpha << isValid("(]") << endl;
    cout << boolalpha << isValid("([)]") << endl;
}`,
      go: `package main
import "fmt"

func isValid(s string) bool {
    // Write your solution here
    return false
}

func main() {
    fmt.Println(isValid("()"))
    fmt.Println(isValid("()[]{}"))
    fmt.Println(isValid("(]"))
    fmt.Println(isValid("([)]"))
}`,
      ruby: `def is_valid(s)
  # Write your solution here
  false
end

puts is_valid("()")
puts is_valid("()[]{}")
puts is_valid("(]")
puts is_valid("([)]")`,
      rust: `fn is_valid(s: &str) -> bool {
    // Write your solution here
    false
}

fn main() {
    println!("{}", is_valid("()"));
    println!("{}", is_valid("()[]{}"));
    println!("{}", is_valid("(]"));
    println!("{}", is_valid("([)]"));
}`,
      javascript: `function isValid(s) {
  // Write your solution here
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));`,
      python: `def isValid(s):
    # Write your solution here
    pass

print(isValid("()"))
print(isValid("()[]{}"))
print(isValid("(]"))
print(isValid("([)]"))`,
      java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()"));
        System.out.println(isValid("()[]{}"));
        System.out.println(isValid("(]"));
        System.out.println(isValid("([)]"));
    }
}`,
    },
    expectedOutput: {
      cpp: "true\ntrue\nfalse\nfalse",
      go: "true\ntrue\nfalse\nfalse",
      ruby: "true\ntrue\nfalse\nfalse",
      rust: "true\ntrue\nfalse\nfalse",
      javascript: "true\ntrue\nfalse\nfalse",
      python: "True\nTrue\nFalse\nFalse",
      java: "true\ntrue\nfalse\nfalse",
    },
  },

  "median-of-two-sorted-arrays": {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Array • Binary Search",
    description: {
      text: `
Given two sorted arrays nums1 and nums2 of sizes m and n respectively,
return the median of the two sorted arrays.

The median is the middle value in an ordered list.
If the total length is even, the median is the average of the two middle numbers.
`,
      notes: [
        "The overall run time complexity must be O(log(m+n)).",
        "Both input arrays are individually sorted.",
        "You must not merge the arrays fully in O(m+n) time.",
      ],
    },
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.0",
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.5",
      },
    ],
    constraints: [
      "0 ≤ m ≤ 1000",
      "0 ≤ n ≤ 1000",
      "1 ≤ m + n ≤ 2000",
      "-10⁶ ≤ nums1[i], nums2[i] ≤ 10⁶",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    // Write your solution here
    return 0.0;
}

int main() {
    vector<int> a1 = {1,3};
    vector<int> b1 = {2};
    cout << fixed << setprecision(1)
         << findMedianSortedArrays(a1,b1) << endl;

    vector<int> a2 = {1,2};
    vector<int> b2 = {3,4};
    cout << fixed << setprecision(1)
         << findMedianSortedArrays(a2,b2) << endl;
}`,
      go: `package main
import "fmt"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    // Write your solution here
    return 0
}

func main() {
    fmt.Printf("%.1f\n", findMedianSortedArrays([]int{1,3}, []int{2}))
    fmt.Printf("%.1f\n", findMedianSortedArrays([]int{1,2}, []int{3,4}))
}`,
      ruby: `def find_median_sorted_arrays(nums1, nums2)
  # Write your solution here
  0.0
end

puts find_median_sorted_arrays([1,3],[2])
puts find_median_sorted_arrays([1,2],[3,4])`,
      rust: `fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
    // Write your solution here
    0.0
}

fn main() {
    println!("{:.1}", find_median_sorted_arrays(vec![1,3], vec![2]));
    println!("{:.1}", find_median_sorted_arrays(vec![1,2], vec![3,4]));
}`,
      javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write your solution here
}

console.log(findMedianSortedArrays([1,3],[2]).toFixed(1));
console.log(findMedianSortedArrays([1,2],[3,4]).toFixed(1));`,
      python: `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass

print(f"{findMedianSortedArrays([1,3],[2]):.1f}")
print(f"{findMedianSortedArrays([1,2],[3,4]):.1f}")`,
      java: `class Solution {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        return 0.0;
    }

    public static void main(String[] args) {
        System.out.printf("%.1f\n",
            findMedianSortedArrays(new int[]{1,3}, new int[]{2}));
        System.out.printf("%.1f\n",
            findMedianSortedArrays(new int[]{1,2}, new int[]{3,4}));
    }
}`,
    },
    expectedOutput: {
      cpp: "2.0\n2.5",
      go: "2.0\n2.5",
      ruby: "2.0\n2.5",
      rust: "2.0\n2.5",
      javascript: "2.0\n2.5",
      python: "2.0\n2.5",
      java: "2.0\n2.5",
    },
  },

  "move-zeroes": {
    id: "move-zeroes",
    title: "Move Zeroes",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: `
Given an integer array nums, move all 0's to the end of it
while maintaining the relative order of the non-zero elements.
`,
      notes: [
        "You must modify the array in-place.",
        "You must not make a copy of the array.",
        "The relative order of non-zero elements must remain the same.",
      ],
    },
    examples: [
      {
        input: "nums = [0,1,0,3,12]",
        output: "[1,3,12,0,0]",
      },
      {
        input: "nums = [0]",
        output: "[0]",
      },
      {
        input: "nums = [1,0,1]",
        output: "[1,1,0]",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void moveZeroes(vector<int>& nums) {
    // Write your solution here
}

int main() {
    vector<int> a = {0,1,0,3,12};
    moveZeroes(a);
    for(int x: a) cout << x << " ";
    cout << endl;

    vector<int> b = {0};
    moveZeroes(b);
    for(int x: b) cout << x << " ";
    cout << endl;

    vector<int> c = {1,0,1};
    moveZeroes(c);
    for(int x: c) cout << x << " ";
    cout << endl;
}`,
      go: `package main
import "fmt"

func moveZeroes(nums []int) {
    // Write your solution here
}

func main() {
    a := []int{0,1,0,3,12}
    moveZeroes(a)
    fmt.Println(a)

    b := []int{0}
    moveZeroes(b)
    fmt.Println(b)

    c := []int{1,0,1}
    moveZeroes(c)
    fmt.Println(c)
}`,
      ruby: `def move_zeroes(nums)
  # Write your solution here
end

a = [0,1,0,3,12]
move_zeroes(a)
p a

b = [0]
move_zeroes(b)
p b

c = [1,0,1]
move_zeroes(c)
p c`,
      rust: `fn move_zeroes(nums: &mut Vec<i32>) {
    // Write your solution here
}

fn main() {
    let mut a = vec![0,1,0,3,12];
    move_zeroes(&mut a);
    println!("{:?}", a);

    let mut b = vec![0];
    move_zeroes(&mut b);
    println!("{:?}", b);

    let mut c = vec![1,0,1];
    move_zeroes(&mut c);
    println!("{:?}", c);
}`,
      javascript: `function moveZeroes(nums) {
  // Write your solution here
}

let a = [0,1,0,3,12];
moveZeroes(a);
console.log(a);

let b = [0];
moveZeroes(b);
console.log(b);

let c = [1,0,1];
moveZeroes(c);
console.log(c);`,
      python: `def moveZeroes(nums):
    # Write your solution here
    pass

a = [0,1,0,3,12]
moveZeroes(a)
print(a)

b = [0]
moveZeroes(b)
print(b)

c = [1,0,1]
moveZeroes(c)
print(c)`,
      java: `import java.util.*;

class Solution {
    public static void moveZeroes(int[] nums) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[] a = {0,1,0,3,12};
        moveZeroes(a);
        System.out.println(Arrays.toString(a));

        int[] b = {0};
        moveZeroes(b);
        System.out.println(Arrays.toString(b));

        int[] c = {1,0,1};
        moveZeroes(c);
        System.out.println(Arrays.toString(c));
    }
}`,
    },
    expectedOutput: {
      cpp: "1 3 12 0 0 \n0 \n1 1 0 ",
      go: "[1 3 12 0 0]\n[0]\n[1 1 0]",
      ruby: "[1, 3, 12, 0, 0]\n[0]\n[1, 1, 0]",
      rust: "[1, 3, 12, 0, 0]\n[0]\n[1, 1, 0]",
      javascript: "[1,3,12,0,0]\n[0]\n[1,1,0]",
      python: "[1, 3, 12, 0, 0]\n[0]\n[1, 1, 0]",
      java: "[1, 3, 12, 0, 0]\n[0]\n[1, 1, 0]",
    },
  },

  "subarray-sum-equals-k": {
    id: "subarray-sum-equals-k",
    title: "Subarray Sum Equals K",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: `
Given an array of integers nums and an integer k,
return the total number of continuous subarrays
whose sum equals k.
`,
      notes: [
        "A subarray is a contiguous non-empty sequence of elements.",
        "The array may contain negative numbers.",
        "An O(n) solution using prefix sum and a hash map is expected.",
      ],
    },
    examples: [
      {
        input: "nums = [1,1,1], k = 2",
        output: "2",
      },
      {
        input: "nums = [1,2,3], k = 3",
        output: "2",
      },
      {
        input: "nums = [1,-1,0], k = 0",
        output: "3",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 2 * 10⁴",
      "-1000 ≤ nums[i] ≤ 1000",
      "-10⁷ ≤ k ≤ 10⁷",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int subarraySum(vector<int>& nums, int k) {
    // Write your solution here
    return 0;
}

int main() {
    cout << subarraySum(vector<int>{1,1,1}, 2) << endl;
    cout << subarraySum(vector<int>{1,2,3}, 3) << endl;
    cout << subarraySum(vector<int>{1,-1,0}, 0) << endl;
}`,
      go: `package main
import "fmt"

func subarraySum(nums []int, k int) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(subarraySum([]int{1,1,1},2))
    fmt.Println(subarraySum([]int{1,2,3},3))
    fmt.Println(subarraySum([]int{1,-1,0},0))
}`,
      ruby: `def subarray_sum(nums, k)
  # Write your solution here
  0
end

puts subarray_sum([1,1,1],2)
puts subarray_sum([1,2,3],3)
puts subarray_sum([1,-1,0],0)`,
      rust: `fn subarray_sum(nums: Vec<i32>, k: i32) -> i32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", subarray_sum(vec![1,1,1],2));
    println!("{}", subarray_sum(vec![1,2,3],3));
    println!("{}", subarray_sum(vec![1,-1,0],0));
}`,
      javascript: `function subarraySum(nums, k) {
  // Write your solution here
}

console.log(subarraySum([1,1,1],2));
console.log(subarraySum([1,2,3],3));
console.log(subarraySum([1,-1,0],0));`,
      python: `def subarraySum(nums, k):
    # Write your solution here
    pass

print(subarraySum([1,1,1],2))
print(subarraySum([1,2,3],3))
print(subarraySum([1,-1,0],0))`,
      java: `class Solution {
    public static int subarraySum(int[] nums, int k){
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(subarraySum(new int[]{1,1,1},2));
        System.out.println(subarraySum(new int[]{1,2,3},3));
        System.out.println(subarraySum(new int[]{1,-1,0},0));
    }
}`,
    },
    expectedOutput: {
      cpp: "2\n2\n3",
      go: "2\n2\n3",
      ruby: "2\n2\n3",
      rust: "2\n2\n3",
      javascript: "2\n2\n3",
      python: "2\n2\n3",
      java: "2\n2\n3",
    },
  },

  "sort-colors": {
    id: "sort-colors",
    title: "Sort Colors",
    difficulty: "Medium",
    category: "Array • Sorting",
    description: {
      text: `
Given an array nums containing n objects colored red, white, or blue,
sort them in-place so that objects of the same color are adjacent.

The colors are represented as:
0 → red
1 → white
2 → blue
`,
      notes: [
        "You must modify the array in-place.",
        "You must not use the library's sort function.",
        "A one-pass solution using the Dutch National Flag algorithm is expected.",
      ],
    },
    examples: [
      {
        input: "nums = [2,0,2,1,1,0]",
        output: "[0,0,1,1,2,2]",
      },
      {
        input: "nums = [2,0,1]",
        output: "[0,1,2]",
      },
      {
        input: "nums = [0]",
        output: "[0]",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 300", "nums[i] is either 0, 1, or 2"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void sortColors(vector<int>& nums) {
    // Write your solution here
}

int main() {
    vector<int> a = {2,0,2,1,1,0};
    sortColors(a);
    for(int x: a) cout << x << " ";
    cout << endl;

    vector<int> b = {2,0,1};
    sortColors(b);
    for(int x: b) cout << x << " ";
    cout << endl;

    vector<int> c = {0};
    sortColors(c);
    for(int x: c) cout << x << " ";
    cout << endl;
}`,
      go: `package main
import "fmt"

func sortColors(nums []int) {
    // Write your solution here
}

func main() {
    a := []int{2,0,2,1,1,0}
    sortColors(a)
    fmt.Println(a)

    b := []int{2,0,1}
    sortColors(b)
    fmt.Println(b)

    c := []int{0}
    sortColors(c)
    fmt.Println(c)
}`,
      ruby: `def sort_colors(nums)
  # Write your solution here
end

a = [2,0,2,1,1,0]
sort_colors(a)
p a

b = [2,0,1]
sort_colors(b)
p b

c = [0]
sort_colors(c)
p c`,
      rust: `fn sort_colors(nums: &mut Vec<i32>) {
    // Write your solution here
}

fn main() {
    let mut a = vec![2,0,2,1,1,0];
    sort_colors(&mut a);
    println!("{:?}", a);

    let mut b = vec![2,0,1];
    sort_colors(&mut b);
    println!("{:?}", b);

    let mut c = vec![0];
    sort_colors(&mut c);
    println!("{:?}", c);
}`,
      javascript: `function sortColors(nums) {
  // Write your solution here
}

let a = [2,0,2,1,1,0];
sortColors(a);
console.log(a);

let b = [2,0,1];
sortColors(b);
console.log(b);

let c = [0];
sortColors(c);
console.log(c);`,
      python: `def sortColors(nums):
    # Write your solution here
    pass

a = [2,0,2,1,1,0]
sortColors(a)
print(a)

b = [2,0,1]
sortColors(b)
print(b)

c = [0]
sortColors(c)
print(c)`,
      java: `import java.util.*;

class Solution {
    public static void sortColors(int[] nums) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[] a = {2,0,2,1,1,0};
        sortColors(a);
        System.out.println(Arrays.toString(a));

        int[] b = {2,0,1};
        sortColors(b);
        System.out.println(Arrays.toString(b));

        int[] c = {0};
        sortColors(c);
        System.out.println(Arrays.toString(c));
    }
}`,
    },
    expectedOutput: {
      cpp: "0 0 1 1 2 2 \n0 1 2 \n0 ",
      go: "[0 0 1 1 2 2]\n[0 1 2]\n[0]",
      ruby: "[0, 0, 1, 1, 2, 2]\n[0, 1, 2]\n[0]",
      rust: "[0, 0, 1, 1, 2, 2]\n[0, 1, 2]\n[0]",
      javascript: "[0,0,1,1,2,2]\n[0,1,2]\n[0]",
      python: "[0, 0, 1, 1, 2, 2]\n[0, 1, 2]\n[0]",
      java: "[0, 0, 1, 1, 2, 2]\n[0, 1, 2]\n[0]",
    },
  },

  "majority-element": {
    id: "majority-element",
    title: "Majority Element",
    difficulty: "Easy",
    category: "Array • Divide and Conquer",
    description: {
      text: `
Given an integer array nums of size n,
return the majority element.

The majority element is the element that appears
more than ⌊n / 2⌋ times.
`,
      notes: [
        "You may assume that the majority element always exists.",
        "An O(n) time and O(1) space solution (Boyer–Moore Voting Algorithm) is expected.",
      ],
    },
    examples: [
      {
        input: "nums = [3,2,3]",
        output: "3",
      },
      {
        input: "nums = [2,2,1,1,1,2,2]",
        output: "2",
      },
      {
        input: "nums = [1]",
        output: "1",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 5 * 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int majorityElement(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    cout << majorityElement(vector<int>{3,2,3}) << endl;
    cout << majorityElement(vector<int>{2,2,1,1,1,2,2}) << endl;
    cout << majorityElement(vector<int>{1}) << endl;
}`,
      go: `package main
import "fmt"

func majorityElement(nums []int) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(majorityElement([]int{3,2,3}))
    fmt.Println(majorityElement([]int{2,2,1,1,1,2,2}))
    fmt.Println(majorityElement([]int{1}))
}`,
      ruby: `def majority_element(nums)
  # Write your solution here
  0
end

puts majority_element([3,2,3])
puts majority_element([2,2,1,1,1,2,2])
puts majority_element([1])`,
      rust: `fn majority_element(nums: Vec<i32>) -> i32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", majority_element(vec![3,2,3]));
    println!("{}", majority_element(vec![2,2,1,1,1,2,2]));
    println!("{}", majority_element(vec![1]));
}`,
      javascript: `function majorityElement(nums) {
  // Write your solution here
}

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([1]));`,
      python: `def majorityElement(nums):
    # Write your solution here
    pass

print(majorityElement([3,2,3]))
print(majorityElement([2,2,1,1,1,2,2]))
print(majorityElement([1]))`,
      java: `class Solution {
    public static int majorityElement(int[] nums){
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(majorityElement(new int[]{3,2,3}));
        System.out.println(majorityElement(new int[]{2,2,1,1,1,2,2}));
        System.out.println(majorityElement(new int[]{1}));
    }
}`,
    },
    expectedOutput: {
      cpp: "3\n2\n1",
      go: "3\n2\n1",
      ruby: "3\n2\n1",
      rust: "3\n2\n1",
      javascript: "3\n2\n1",
      python: "3\n2\n1",
      java: "3\n2\n1",
    },
  },

  "intersection-of-two-arrays": {
    id: "intersection-of-two-arrays",
    title: "Intersection of Two Arrays",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: `
Given two integer arrays nums1 and nums2,
return an array of their intersection.
`,
      notes: [
        "Each element in the result must be unique.",
        "You may return the result in any order.",
        "Using a hash set is recommended for an O(n + m) solution.",
      ],
    },
    examples: [
      {
        input: "nums1 = [1,2,2,1], nums2 = [2,2]",
        output: "[2]",
      },
      {
        input: "nums1 = [4,9,5], nums2 = [9,4,9,8,4]",
        output: "[4,9]",
      },
      {
        input: "nums1 = [1,2,3], nums2 = [4,5,6]",
        output: "[]",
      },
    ],
    constraints: [
      "1 ≤ nums1.length, nums2.length ≤ 1000",
      "0 ≤ nums1[i], nums2[i] ≤ 1000",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> intersection(vector<int>& nums1, vector<int>& nums2){
    // Write your solution here
    return {};
}

void printVec(vector<int> v){
    sort(v.begin(), v.end());
    cout << "[";
    for(int i=0;i<v.size();i++){
        cout << v[i];
        if(i<v.size()-1) cout << ",";
    }
    cout << "]" << endl;
}

int main(){
    vector<int> a1={1,2,2,1}, b1={2,2};
    printVec(intersection(a1,b1));

    vector<int> a2={4,9,5}, b2={9,4,9,8,4};
    printVec(intersection(a2,b2));

    vector<int> a3={1,2,3}, b3={4,5,6};
    printVec(intersection(a3,b3));
}`,
      go: `package main
import (
    "fmt"
    "sort"
)

func intersection(nums1 []int, nums2 []int) []int {
    // Write your solution here
    return []int{}
}

func main() {
    fmt.Println(intersection([]int{1,2,2,1},[]int{2,2}))
    fmt.Println(intersection([]int{4,9,5},[]int{9,4,9,8,4}))
    fmt.Println(intersection([]int{1,2,3},[]int{4,5,6}))
}`,
      ruby: `def intersection(nums1, nums2)
  # Write your solution here
  []
end

p intersection([1,2,2,1],[2,2]).sort
p intersection([4,9,5],[9,4,9,8,4]).sort
p intersection([1,2,3],[4,5,6]).sort`,
      rust: `fn intersection(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
    // Write your solution here
    vec![]
}

fn main() {
    println!("{:?}", intersection(vec![1,2,2,1],vec![2,2]));
    println!("{:?}", intersection(vec![4,9,5],vec![9,4,9,8,4]));
    println!("{:?}", intersection(vec![1,2,3],vec![4,5,6]));
}`,
      javascript: `function intersection(nums1, nums2) {
  // Write your solution here
}

console.log(intersection([1,2,2,1],[2,2]).sort((a,b)=>a-b));
console.log(intersection([4,9,5],[9,4,9,8,4]).sort((a,b)=>a-b));
console.log(intersection([1,2,3],[4,5,6]).sort((a,b)=>a-b));`,
      python: `def intersection(nums1, nums2):
    # Write your solution here
    pass

print(sorted(intersection([1,2,2,1],[2,2])))
print(sorted(intersection([4,9,5],[9,4,9,8,4])))
print(sorted(intersection([1,2,3],[4,5,6])))`,
      java: `import java.util.*;

class Solution {
    public static int[] intersection(int[] nums1, int[] nums2){
        // Write your solution here
        return new int[0];
    }

    public static void printArr(int[] arr){
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));
    }

    public static void main(String[] args){
        printArr(intersection(new int[]{1,2,2,1}, new int[]{2,2}));
        printArr(intersection(new int[]{4,9,5}, new int[]{9,4,9,8,4}));
        printArr(intersection(new int[]{1,2,3}, new int[]{4,5,6}));
    }
}`,
    },
    expectedOutput: {
      cpp: "[2]\n[4,9]\n[]",
      go: "[2]\n[4 9]\n[]",
      ruby: "[2]\n[4, 9]\n[]",
      rust: "[2]\n[4, 9]\n[]",
      javascript: "[2]\n[4,9]\n[]",
      python: "[2]\n[4, 9]\n[]",
      java: "[2]\n[4, 9]\n[]",
    },
  },

  "palindrome-number": {
    id: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    category: "Math • Two Pointers",
    description: {
      text: `
Given an integer x, return true if x is a palindrome,
and false otherwise.

An integer is a palindrome when it reads the same backward as forward.
`,
      notes: [
        "Negative numbers are not palindromes.",
        "You may solve this without converting the integer to a string.",
      ],
    },
    examples: [
      {
        input: "x = 121",
        output: "true",
      },
      {
        input: "x = -121",
        output: "false",
      },
      {
        input: "x = 10",
        output: "false",
      },
    ],
    constraints: ["-2³¹ ≤ x ≤ 2³¹ - 1"],
    starterCode: {
      cpp: `#include <iostream>
using namespace std;

bool isPalindrome(int x){
    // Write your solution here
    return false;
}

int main(){
    cout << boolalpha << isPalindrome(121) << endl;
    cout << boolalpha << isPalindrome(-121) << endl;
    cout << boolalpha << isPalindrome(10) << endl;
}`,
      go: `package main
import "fmt"

func isPalindrome(x int) bool {
    // Write your solution here
    return false
}

func main(){
    fmt.Println(isPalindrome(121))
    fmt.Println(isPalindrome(-121))
    fmt.Println(isPalindrome(10))
}`,
      ruby: `def is_palindrome(x)
  # Write your solution here
  false
end

puts is_palindrome(121)
puts is_palindrome(-121)
puts is_palindrome(10)`,
      rust: `fn is_palindrome(x: i32) -> bool {
    // Write your solution here
    false
}

fn main(){
    println!("{}", is_palindrome(121));
    println!("{}", is_palindrome(-121));
    println!("{}", is_palindrome(10));
}`,
      javascript: `function isPalindrome(x) {
  // Write your solution here
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));`,
      python: `def isPalindrome(x):
    # Write your solution here
    pass

print(isPalindrome(121))
print(isPalindrome(-121))
print(isPalindrome(10))`,
      java: `class Solution {
    public static boolean isPalindrome(int x){
        // Write your solution here
        return false;
    }

    public static void main(String[] args){
        System.out.println(isPalindrome(121));
        System.out.println(isPalindrome(-121));
        System.out.println(isPalindrome(10));
    }
}`,
    },
    expectedOutput: {
      cpp: "true\nfalse\nfalse",
      go: "true\nfalse\nfalse",
      ruby: "true\nfalse\nfalse",
      rust: "true\nfalse\nfalse",
      javascript: "true\nfalse\nfalse",
      python: "True\nFalse\nFalse",
      java: "true\nfalse\nfalse",
    },
  },
  "binary-tree-inorder-traversal": {
    id: "binary-tree-inorder-traversal",
    title: "Binary Tree Inorder Traversal",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: `
Given the root of a binary tree,
return the inorder traversal of its nodes' values.

Inorder traversal order:
Left subtree → Root → Right subtree.
`,
      notes: [
        "You may solve this recursively or iteratively using a stack.",
        "Return the result as an array of integers.",
      ],
    },
    examples: [
      {
        input: "root = [1,null,2,3]",
        output: "[1,3,2]",
      },
      {
        input: "root = []",
        output: "[]",
      },
    ],
    constraints: ["0 ≤ number of nodes ≤ 100", "-100 ≤ Node.val ≤ 100"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

vector<int> inorderTraversal(TreeNode* root) {
    // Write your solution here
    return {};
}

void printVec(vector<int> v){
    cout << "[";
    for(int i=0;i<v.size();i++){
        cout << v[i];
        if(i<v.size()-1) cout << ",";
    }
    cout << "]" << endl;
}

int main(){
    TreeNode* root = new TreeNode(1);
    root->right = new TreeNode(2);
    root->right->left = new TreeNode(3);

    printVec(inorderTraversal(root));
    printVec(inorderTraversal(nullptr));
}`,
      go: `package main
import "fmt"

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

func inorderTraversal(root *TreeNode) []int {
    // Write your solution here
    return []int{}
}

func main() {
    root := &TreeNode{Val:1}
    root.Right = &TreeNode{Val:2}
    root.Right.Left = &TreeNode{Val:3}

    fmt.Println(inorderTraversal(root))
    fmt.Println(inorderTraversal(nil))
}`,
      ruby: `class TreeNode
  attr_accessor :val, :left, :right
  def initialize(val)
    @val = val
    @left = nil
    @right = nil
  end
end

def inorder_traversal(root)
  # Write your solution here
  []
end

root = TreeNode.new(1)
root.right = TreeNode.new(2)
root.right.left = TreeNode.new(3)

p inorder_traversal(root)
p inorder_traversal(nil)`,
      rust: `#[derive(Debug)]
struct TreeNode {
    val: i32,
    left: Option<Box<TreeNode>>,
    right: Option<Box<TreeNode>>,
}

fn inorder_traversal(root: Option<Box<TreeNode>>) -> Vec<i32> {
    // Write your solution here
    vec![]
}

fn main() {
    println!("{:?}", inorder_traversal(None));
}`,
      javascript: `function TreeNode(val, left=null, right=null){
  this.val = val;
  this.left = left;
  this.right = right;
}

function inorderTraversal(root){
  // Write your solution here
}

let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(inorderTraversal(root));
console.log(inorderTraversal(null));`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorderTraversal(root):
    # Write your solution here
    pass

root = TreeNode(1)
root.right = TreeNode(2)
root.right.left = TreeNode(3)

print(inorderTraversal(root))
print(inorderTraversal(None))`,
      java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val){ this.val = val; }
}

class Solution {
    public static List<Integer> inorderTraversal(TreeNode root){
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args){
        TreeNode root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.left = new TreeNode(3);

        System.out.println(inorderTraversal(root));
        System.out.println(inorderTraversal(null));
    }
}`,
    },
    expectedOutput: {
      cpp: "[1,3,2]\n[]",
      go: "[1 3 2]\n[]",
      ruby: "[1, 3, 2]\n[]",
      rust: "[]",
      javascript: "[1,3,2]\n[]",
      python: "[1, 3, 2]\n[]",
      java: "[1, 3, 2]\n[]",
    },
  },
};
