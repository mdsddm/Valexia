export const fifth = {
  "dijkstra-shortest-path": {
    id: "dijkstra-shortest-path",
    title: "Shortest Path in Weighted Graph",
    difficulty: "Hard",
    category: "Graph • Greedy",
    description: {
      text: `
Given a weighted directed graph with n nodes labeled from 0 to n-1,
and edges where edges[i] = [u, v, w] represents a directed edge
from u to v with weight w,

Return an array where result[i] is the shortest distance
from the source node to node i.
`,
      notes: [
        "If a node is unreachable, return -1 for that node.",
        "All edge weights are non-negative.",
        "An efficient Dijkstra (min-heap / priority queue) solution is expected.",
      ],
    },
    examples: [
      {
        input: "n = 3, edges = [[0,1,4],[0,2,1],[2,1,2]], source = 0",
        output: "[0,3,1]",
      },
      {
        input: "n = 4, edges = [[0,1,1],[1,2,2],[0,3,4]], source = 0",
        output: "[0,1,3,4]",
      },
      {
        input: "n = 3, edges = [[0,1,5]], source = 0",
        output: "[0,5,-1]",
      },
    ],
    constraints: [
      "1 ≤ n ≤ 10⁴",
      "0 ≤ edges.length ≤ 10⁵",
      "0 ≤ u, v < n",
      "0 ≤ w ≤ 10⁵",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> shortestPath(int n, vector<vector<int>>& edges, int source) {
    // Write your solution here
    return {};
}

int main() {
    cout << "[0,3,1]" << endl;
    cout << "[0,1,3,4]" << endl;
    cout << "[0,5,-1]" << endl;
}`,
      go: `package main
import "fmt"

func shortestPath(n int, edges [][]int, source int) []int {
    // Write your solution here
    return []int{}
}

func main() {
    fmt.Println("[0 3 1]")
    fmt.Println("[0 1 3 4]")
    fmt.Println("[0 5 -1]")
}`,
      ruby: `def shortest_path(n, edges, source)
  # Write your solution here
  []
end

puts "[0,3,1]"
puts "[0,1,3,4]"
puts "[0,5,-1]"`,
      rust: `fn shortest_path(n: i32, edges: Vec<Vec<i32>>, source: i32) -> Vec<i32> {
    // Write your solution here
    vec![]
}

fn main() {
    println!("[0, 3, 1]");
    println!("[0, 1, 3, 4]");
    println!("[0, 5, -1]");
}`,
      javascript: `function shortestPath(n, edges, source) {
  // Write your solution here
}

console.log("[0,3,1]");
console.log("[0,1,3,4]");
console.log("[0,5,-1]");`,
      python: `def shortestPath(n, edges, source):
    # Write your solution here
    pass

print([0,3,1])
print([0,1,3,4])
print([0,5,-1])`,
      java: `import java.util.*;

class Solution {
    public static int[] shortestPath(int n, int[][] edges, int source) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println("[0,3,1]");
        System.out.println("[0,1,3,4]");
        System.out.println("[0,5,-1]");
    }
}`,
    },
    expectedOutput: {
      cpp: "[0,3,1]\n[0,1,3,4]\n[0,5,-1]",
      go: "[0 3 1]\n[0 1 3 4]\n[0 5 -1]",
      ruby: "[0,3,1]\n[0,1,3,4]\n[0,5,-1]",
      rust: "[0, 3, 1]\n[0, 1, 3, 4]\n[0, 5, -1]",
      javascript: "[0,3,1]\n[0,1,3,4]\n[0,5,-1]",
      python: "[0, 3, 1]\n[0, 1, 3, 4]\n[0, 5, -1]",
      java: "[0,3,1]\n[0,1,3,4]\n[0,5,-1]",
    },
  },

  "n-queens": {
    id: "n-queens",
    title: "N-Queens",
    difficulty: "Hard",
    category: "Backtracking • Matrix",
    description: {
      text: `
The n-queens puzzle places n queens on an n x n chessboard
such that no two queens attack each other.

Queens attack horizontally, vertically, and diagonally.

Return all distinct solutions.
Each solution is represented as a list of strings,
where 'Q' represents a queen and '.' represents an empty space.
`,
      notes: [
        "Each row must contain exactly one queen.",
        "No two queens can share the same column or diagonal.",
        "Backtracking with pruning is expected.",
      ],
    },
    examples: [
      {
        input: "n = 4",
        output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
      },
      {
        input: "n = 1",
        output: '[["Q"]]',
      },
      {
        input: "n = 2",
        output: "[]",
      },
    ],
    constraints: ["1 ≤ n ≤ 9"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<vector<string>> solveNQueens(int n) {
    // Write your solution here
    return {};
}

int main() {
    cout << "[[.Q..,...Q,Q...,..Q.],[..Q.,Q...,...Q,.Q..]]" << endl;
    cout << "[[Q]]" << endl;
    cout << "[]" << endl;
}`,
      go: `package main
import "fmt"

func solveNQueens(n int) [][]string {
    // Write your solution here
    return [][]string{}
}

func main() {
    fmt.Println("[[.Q.. ...Q Q... ..Q.] [..Q. Q... ...Q .Q..]]")
    fmt.Println("[[Q]]")
    fmt.Println("[]")
}`,
      ruby: `def solve_n_queens(n)
  # Write your solution here
  []
end

puts "[[.Q..,...Q,Q...,..Q.],[..Q.,Q...,...Q,.Q..]]"
puts "[[Q]]"
puts "[]"`,
      rust: `fn solve_n_queens(n: i32) -> Vec<Vec<String>> {
    // Write your solution here
    vec![]
}

fn main() {
    println!("[[.Q..,...Q,Q...,..Q.],[..Q.,Q...,...Q,.Q..]]");
    println!("[[Q]]");
    println!("[]");
}`,
      javascript: `function solveNQueens(n) {
  // Write your solution here
}

console.log("[[.Q..,...Q,Q...,..Q.],[..Q.,Q...,...Q,.Q..]]");
console.log("[[Q]]");
console.log("[]");`,
      python: `def solveNQueens(n):
    # Write your solution here
    pass

print("[['.Q..','...Q','Q...','..Q.'],['..Q.','Q...','...Q','.Q..']]")
print("[['Q']]")
print("[]")`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> solveNQueens(int n) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println("[[.Q..,...Q,Q...,..Q.],[..Q.,Q...,...Q,.Q..]]");
        System.out.println("[[Q]]");
        System.out.println("[]");
    }
}`,
    },
    expectedOutput: {
      cpp: "[[.Q..,...Q,Q...,..Q.],[..Q.,Q...,...Q,.Q..]]\n[[Q]]\n[]",
      go: "[[.Q.. ...Q Q... ..Q.] [..Q. Q... ...Q .Q..]]\n[[Q]]\n[]",
      ruby: "[[.Q..,...Q,Q...,..Q.],[..Q.,Q...,...Q,.Q..]]\n[[Q]]\n[]",
      rust: "[[.Q..,...Q,Q...,..Q.],[..Q.,Q...,...Q,.Q..]]\n[[Q]]\n[]",
      javascript: "[[.Q..,...Q,Q...,..Q.],[..Q.,Q...,...Q,.Q..]]\n[[Q]]\n[]",
      python:
        "[['.Q..','...Q','Q...','..Q.'],['..Q.','Q...','...Q','.Q..']]\n[['Q']]\n[]",
      java: "[[.Q..,...Q,Q...,..Q.],[..Q.,Q...,...Q,.Q..]]\n[[Q]]\n[]",
    },
  },

  "shortest-path-in-binary-matrix": {
    id: "shortest-path-in-binary-matrix",
    title: "Shortest Path in Binary Matrix",
    difficulty: "Medium",
    category: "Matrix • BFS",
    description: {
      text: `
Given an n x n binary matrix grid, return the length of the shortest clear path
from the top-left cell (0,0) to the bottom-right cell (n-1,n-1).

A clear path consists only of cells with value 0.
`,
      notes: [
        "You may move in 8 directions (horizontal, vertical, and diagonal).",
        "If grid[0][0] or grid[n-1][n-1] is 1, return -1.",
        "If no path exists, return -1.",
        "A BFS solution is expected.",
      ],
    },
    examples: [
      {
        input: "grid = [[0,1],[1,0]]",
        output: "2",
      },
      {
        input: "grid = [[0,0,0],[1,1,0],[1,1,0]]",
        output: "4",
      },
      {
        input: "grid = [[1,0],[0,0]]",
        output: "-1",
      },
    ],
    constraints: ["1 ≤ n ≤ 100", "grid[i][j] is 0 or 1"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
    // Write your solution here
    return -1;
}

int main() {
    cout << shortestPathBinaryMatrix({{0,1},{1,0}}) << endl;
    cout << shortestPathBinaryMatrix({{0,0,0},{1,1,0},{1,1,0}}) << endl;
    cout << shortestPathBinaryMatrix({{1,0},{0,0}}) << endl;
}`,
      go: `package main
import "fmt"

func shortestPathBinaryMatrix(grid [][]int) int {
    // Write your solution here
    return -1
}

func main() {
    fmt.Println(shortestPathBinaryMatrix([][]int{{0,1},{1,0}}))
    fmt.Println(shortestPathBinaryMatrix([][]int{{0,0,0},{1,1,0},{1,1,0}}))
    fmt.Println(shortestPathBinaryMatrix([][]int{{1,0},{0,0}}))
}`,
      ruby: `def shortest_path_binary_matrix(grid)
  # Write your solution here
  -1
end

puts shortest_path_binary_matrix([[0,1],[1,0]])
puts shortest_path_binary_matrix([[0,0,0],[1,1,0],[1,1,0]])
puts shortest_path_binary_matrix([[1,0],[0,0]])`,
      rust: `fn shortest_path_binary_matrix(grid: Vec<Vec<i32>>) -> i32 {
    // Write your solution here
    -1
}

fn main() {
    println!("{}", shortest_path_binary_matrix(vec![vec![0,1],vec![1,0]]));
    println!("{}", shortest_path_binary_matrix(vec![vec![0,0,0],vec![1,1,0],vec![1,1,0]]));
    println!("{}", shortest_path_binary_matrix(vec![vec![1,0],vec![0,0]]));
}`,
      javascript: `function shortestPathBinaryMatrix(grid) {
  // Write your solution here
}

console.log(shortestPathBinaryMatrix([[0,1],[1,0]]));
console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]]));
console.log(shortestPathBinaryMatrix([[1,0],[0,0]]));`,
      python: `def shortestPathBinaryMatrix(grid):
    # Write your solution here
    pass

print(shortestPathBinaryMatrix([[0,1],[1,0]]))
print(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]]))
print(shortestPathBinaryMatrix([[1,0],[0,0]]))`,
      java: `class Solution {
    public static int shortestPathBinaryMatrix(int[][] grid) {
        // Write your solution here
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(shortestPathBinaryMatrix(new int[][]{{0,1},{1,0}}));
        System.out.println(shortestPathBinaryMatrix(new int[][]{{0,0,0},{1,1,0},{1,1,0}}));
        System.out.println(shortestPathBinaryMatrix(new int[][]{{1,0},{0,0}}));
    }
}`,
    },
    expectedOutput: {
      cpp: "2\n4\n-1",
      go: "2\n4\n-1",
      ruby: "2\n4\n-1",
      rust: "2\n4\n-1",
      javascript: "2\n4\n-1",
      python: "2\n4\n-1",
      java: "2\n4\n-1",
    },
  },

  "top-k-frequent-elements": {
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    category: "Hash Table • Heap",
    description: {
      text: `
Given an integer array nums and an integer k,
return the k most frequent elements.

The result can be returned in any order.
`,
      notes: [
        "Your algorithm must run in better than O(n log n) time.",
        "Use a HashMap + Min Heap OR Bucket Sort.",
        "Frequency ties may be returned in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]",
      },
      {
        input: "nums = [1], k = 1",
        output: "[1]",
      },
      {
        input: "nums = [4,4,4,6,6,7,7,7,7], k = 2",
        output: "[7,4]",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "1 ≤ k ≤ number of unique elements",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> topKFrequent(vector<int>& nums, int k) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> a = {1,1,1,2,2,3};
    vector<int> b = {1};
    vector<int> c = {4,4,4,6,6,7,7,7,7};

    auto r1 = topKFrequent(a,2);
    auto r2 = topKFrequent(b,1);
    auto r3 = topKFrequent(c,2);

    for(int x:r1) cout<<x<<" ";
    cout<<endl;
    for(int x:r2) cout<<x<<" ";
    cout<<endl;
    for(int x:r3) cout<<x<<" ";
}`,
      go: `package main
import "fmt"

func topKFrequent(nums []int, k int) []int {
    // Write your solution here
    return []int{}
}

func main() {
    fmt.Println(topKFrequent([]int{1,1,1,2,2,3},2))
    fmt.Println(topKFrequent([]int{1},1))
    fmt.Println(topKFrequent([]int{4,4,4,6,6,7,7,7,7},2))
}`,
      ruby: `def top_k_frequent(nums, k)
  # Write your solution here
  []
end

puts top_k_frequent([1,1,1,2,2,3],2).inspect
puts top_k_frequent([1],1).inspect
puts top_k_frequent([4,4,4,6,6,7,7,7,7],2).inspect`,
      rust: `fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
    // Write your solution here
    vec![]
}

fn main() {
    println!("{:?}", top_k_frequent(vec![1,1,1,2,2,3],2));
    println!("{:?}", top_k_frequent(vec![1],1));
    println!("{:?}", top_k_frequent(vec![4,4,4,6,6,7,7,7,7],2));
}`,
      javascript: `function topKFrequent(nums, k) {
  // Write your solution here
}

console.log(topKFrequent([1,1,1,2,2,3],2));
console.log(topKFrequent([1],1));
console.log(topKFrequent([4,4,4,6,6,7,7,7,7],2));`,
      python: `def topKFrequent(nums, k):
    # Write your solution here
    pass

print(topKFrequent([1,1,1,2,2,3],2))
print(topKFrequent([1],1))
print(topKFrequent([4,4,4,6,6,7,7,7,7],2))`,
      java: `import java.util.*;

class Solution {
    public static int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(topKFrequent(new int[]{1,1,1,2,2,3},2)));
        System.out.println(Arrays.toString(topKFrequent(new int[]{1},1)));
        System.out.println(Arrays.toString(topKFrequent(new int[]{4,4,4,6,6,7,7,7,7},2)));
    }
}`,
    },
    expectedOutput: {
      cpp: "1 2 \n1 \n7 4 ",
      go: "[1 2]\n[1]\n[7 4]",
      ruby: "[1, 2]\n[1]\n[7, 4]",
      rust: "[1, 2]\n[1]\n[7, 4]",
      javascript: "[1,2]\n[1]\n[7,4]",
      python: "[1, 2]\n[1]\n[7, 4]",
      java: "[1, 2]\n[1]\n[7, 4]",
    },
  },

  "coin-change-ii": {
    id: "coin-change-ii",
    title: "Coin Change II",
    difficulty: "Medium",
    category: "Dynamic Programming • Unbounded Knapsack",
    description: {
      text: `
You are given an integer array coins representing different coin denominations
and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount.
`,
      notes: [
        "You have an infinite number of each coin.",
        "Order does NOT matter (1+2 is same as 2+1).",
        "If amount is 0, return 1.",
        "A 1D Dynamic Programming solution is expected.",
      ],
    },
    examples: [
      {
        input: "amount = 5, coins = [1,2,5]",
        output: "4",
      },
      {
        input: "amount = 3, coins = [2]",
        output: "0",
      },
      {
        input: "amount = 0, coins = [1,2,5]",
        output: "1",
      },
    ],
    constraints: [
      "0 ≤ amount ≤ 5000",
      "1 ≤ coins.length ≤ 300",
      "1 ≤ coins[i] ≤ 5000",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int change(int amount, vector<int>& coins) {
    // Write your solution here
    return 0;
}

int main() {
    cout << change(5, vector<int>{1,2,5}) << endl;
    cout << change(3, vector<int>{2}) << endl;
    cout << change(0, vector<int>{1,2,5}) << endl;
}`,
      go: `package main
import "fmt"

func change(amount int, coins []int) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(change(5, []int{1,2,5}))
    fmt.Println(change(3, []int{2}))
    fmt.Println(change(0, []int{1,2,5}))
}`,
      ruby: `def change(amount, coins)
  # Write your solution here
  0
end

puts change(5,[1,2,5])
puts change(3,[2])
puts change(0,[1,2,5])`,
      rust: `fn change(amount: i32, coins: Vec<i32>) -> i32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", change(5, vec![1,2,5]));
    println!("{}", change(3, vec![2]));
    println!("{}", change(0, vec![1,2,5]));
}`,
      javascript: `function change(amount, coins) {
  // Write your solution here
}

console.log(change(5,[1,2,5]));
console.log(change(3,[2]));
console.log(change(0,[1,2,5]));`,
      python: `def change(amount, coins):
    # Write your solution here
    pass

print(change(5,[1,2,5]))
print(change(3,[2]))
print(change(0,[1,2,5]))`,
      java: `class Solution {
    public static int change(int amount, int[] coins) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(change(5,new int[]{1,2,5}));
        System.out.println(change(3,new int[]{2}));
        System.out.println(change(0,new int[]{1,2,5}));
    }
}`,
    },
    expectedOutput: {
      cpp: "4\n0\n1",
      go: "4\n0\n1",
      ruby: "4\n0\n1",
      rust: "4\n0\n1",
      javascript: "4\n0\n1",
      python: "4\n0\n1",
      java: "4\n0\n1",
    },
  },

  "remove-duplicates-from-sorted-array": {
    id: "remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: `
Given an integer array nums sorted in non-decreasing order,
remove duplicates in-place such that each unique element appears only once.

Return k, the number of unique elements.

After your function returns k, the first k elements of nums
must contain the unique elements in the same relative order.
`,
      notes: [
        "Do NOT allocate extra space.",
        "The remaining elements after index k are irrelevant.",
        "Use the two-pointer technique.",
      ],
    },
    examples: [
      {
        input: "nums = [1,1,2]",
        output: "2",
      },
      {
        input: "nums = [0,0,1,1,1,2,2,3,3,4]",
        output: "5",
      },
      {
        input: "nums = [1]",
        output: "1",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 3 * 10⁴",
      "-100 ≤ nums[i] ≤ 100",
      "nums is sorted in non-decreasing order",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int removeDuplicates(vector<int>& nums){
    // Write your solution here
    return 0;
}

int main() {
    vector<int> a = {1,1,2};
    vector<int> b = {0,0,1,1,1,2,2,3,3,4};
    vector<int> c = {1};

    cout << removeDuplicates(a) << endl;
    cout << removeDuplicates(b) << endl;
    cout << removeDuplicates(c) << endl;
}`,
      go: `package main
import "fmt"

func removeDuplicates(nums []int) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(removeDuplicates([]int{1,1,2}))
    fmt.Println(removeDuplicates([]int{0,0,1,1,1,2,2,3,3,4}))
    fmt.Println(removeDuplicates([]int{1}))
}`,
      ruby: `def remove_duplicates(nums)
  # Write your solution here
  0
end

puts remove_duplicates([1,1,2])
puts remove_duplicates([0,0,1,1,1,2,2,3,3,4])
puts remove_duplicates([1])`,
      rust: `fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
    // Write your solution here
    0
}

fn main() {
    let mut a = vec![1,1,2];
    let mut b = vec![0,0,1,1,1,2,2,3,3,4];
    let mut c = vec![1];

    println!("{}", remove_duplicates(&mut a));
    println!("{}", remove_duplicates(&mut b));
    println!("{}", remove_duplicates(&mut c));
}`,
      javascript: `function removeDuplicates(nums) {
  // Write your solution here
}

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([1]));`,
      python: `def removeDuplicates(nums):
    # Write your solution here
    pass

print(removeDuplicates([1,1,2]))
print(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
print(removeDuplicates([1]))`,
      java: `class Solution {
    public static int removeDuplicates(int[] nums){
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(removeDuplicates(new int[]{1,1,2}));
        System.out.println(removeDuplicates(new int[]{0,0,1,1,1,2,2,3,3,4}));
        System.out.println(removeDuplicates(new int[]{1}));
    }
}`,
    },
    expectedOutput: {
      cpp: "2\n5\n1",
      go: "2\n5\n1",
      ruby: "2\n5\n1",
      rust: "2\n5\n1",
      javascript: "2\n5\n1",
      python: "2\n5\n1",
      java: "2\n5\n1",
    },
  },

  "roman-to-integer": {
    id: "roman-to-integer",
    title: "Roman to Integer",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: `
Given a Roman numeral string s, convert it to an integer.

Roman numerals use the following symbols:

I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000
`,
      notes: [
        "Usually symbols are added (VI = 6).",
        "If a smaller value appears before a larger value, it is subtracted (IV = 4, IX = 9).",
        "Input is guaranteed to be a valid Roman numeral.",
      ],
    },
    examples: [
      {
        input: 's = "III"',
        output: "3",
      },
      {
        input: 's = "IV"',
        output: "4",
      },
      {
        input: 's = "MCMXCIV"',
        output: "1994",
      },
    ],
    constraints: ["1 ≤ s.length ≤ 15", "s contains only valid Roman numerals"],
    starterCode: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

int romanToInt(string s){
    // Write your solution here
    return 0;
}

int main(){
    cout << romanToInt("III") << endl;
    cout << romanToInt("IV") << endl;
    cout << romanToInt("MCMXCIV") << endl;
}`,
      go: `package main
import "fmt"

func romanToInt(s string) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(romanToInt("III"))
    fmt.Println(romanToInt("IV"))
    fmt.Println(romanToInt("MCMXCIV"))
}`,
      ruby: `def roman_to_int(s)
  # Write your solution here
  0
end

puts roman_to_int("III")
puts roman_to_int("IV")
puts roman_to_int("MCMXCIV")`,
      rust: `fn roman_to_int(s: String) -> i32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", roman_to_int("III".to_string()));
    println!("{}", roman_to_int("IV".to_string()));
    println!("{}", roman_to_int("MCMXCIV".to_string()));
}`,
      javascript: `function romanToInt(s) {
  // Write your solution here
}

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("MCMXCIV"));`,
      python: `def romanToInt(s):
    # Write your solution here
    pass

print(romanToInt("III"))
print(romanToInt("IV"))
print(romanToInt("MCMXCIV"))`,
      java: `class Solution {
    public static int romanToInt(String s){
        // Write your solution here
        return 0;
    }

    public static void main(String[] args){
        System.out.println(romanToInt("III"));
        System.out.println(romanToInt("IV"));
        System.out.println(romanToInt("MCMXCIV"));
    }
}`,
    },
    expectedOutput: {
      cpp: "3\n4\n1994",
      go: "3\n4\n1994",
      ruby: "3\n4\n1994",
      rust: "3\n4\n1994",
      javascript: "3\n4\n1994",
      python: "3\n4\n1994",
      java: "3\n4\n1994",
    },
  },

  "number-of-connected-components-in-an-undirected-graph": {
    id: "number-of-connected-components-in-an-undirected-graph",
    title: "Number of Connected Components in an Undirected Graph",
    difficulty: "Medium",
    category: "Graph • DFS / Union-Find",
    description: {
      text: `
You are given n nodes labeled from 0 to n - 1
and a list of undirected edges.

Return the number of connected components in the graph.
`,
      notes: [
        "Edges are given as pairs [u, v].",
        "The graph is undirected.",
        "The graph may be disconnected.",
        "You may solve using DFS, BFS, or Union-Find.",
      ],
    },
    examples: [
      {
        input: "n = 5, edges = [[0,1],[1,2],[3,4]]",
        output: "2",
      },
      {
        input: "n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]",
        output: "1",
      },
      {
        input: "n = 4, edges = []",
        output: "4",
      },
    ],
    constraints: ["1 ≤ n ≤ 2000", "0 ≤ edges.length ≤ 5000", "0 ≤ u, v < n"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int countComponents(int n, vector<vector<int>>& edges){
    // Write your solution here
    return 0;
}

int main(){
    cout << countComponents(5, {{0,1},{1,2},{3,4}}) << endl;
    cout << countComponents(5, {{0,1},{1,2},{2,3},{3,4}}) << endl;
    cout << countComponents(4, {}) << endl;
}`,
      go: `package main
import "fmt"

func countComponents(n int, edges [][]int) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(countComponents(5, [][]int{{0,1},{1,2},{3,4}}))
    fmt.Println(countComponents(5, [][]int{{0,1},{1,2},{2,3},{3,4}}))
    fmt.Println(countComponents(4, [][]int{}))
}`,
      ruby: `def count_components(n, edges)
  # Write your solution here
  0
end

puts count_components(5,[[0,1],[1,2],[3,4]])
puts count_components(5,[[0,1],[1,2],[2,3],[3,4]])
puts count_components(4,[])`,
      rust: `fn count_components(n: i32, edges: Vec<Vec<i32>>) -> i32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", count_components(5, vec![vec![0,1],vec![1,2],vec![3,4]]));
    println!("{}", count_components(5, vec![vec![0,1],vec![1,2],vec![2,3],vec![3,4]]));
    println!("{}", count_components(4, vec![]));
}`,
      javascript: `function countComponents(n, edges) {
  // Write your solution here
}

console.log(countComponents(5, [[0,1],[1,2],[3,4]]));
console.log(countComponents(5, [[0,1],[1,2],[2,3],[3,4]]));
console.log(countComponents(4, []));`,
      python: `def countComponents(n, edges):
    # Write your solution here
    pass

print(countComponents(5, [[0,1],[1,2],[3,4]]))
print(countComponents(5, [[0,1],[1,2],[2,3],[3,4]]))
print(countComponents(4, []))`,
      java: `class Solution {
    public static int countComponents(int n, int[][] edges){
        // Write your solution here
        return 0;
    }

    public static void main(String[] args){
        System.out.println(countComponents(5,new int[][]{{0,1},{1,2},{3,4}}));
        System.out.println(countComponents(5,new int[][]{{0,1},{1,2},{2,3},{3,4}}));
        System.out.println(countComponents(4,new int[][]{}));
    }
}`,
    },
    expectedOutput: {
      cpp: "2\n1\n4",
      go: "2\n1\n4",
      ruby: "2\n1\n4",
      rust: "2\n1\n4",
      javascript: "2\n1\n4",
      python: "2\n1\n4",
      java: "2\n1\n4",
    },
  },

  "minimum-path-sum": {
    id: "minimum-path-sum",
    title: "Minimum Path Sum",
    difficulty: "Medium",
    category: "Matrix • Dynamic Programming",
    description: {
      text: `
Given an m x n grid filled with non-negative numbers,
find a path from top-left (0,0) to bottom-right (m-1,n-1)
which minimizes the sum of all numbers along its path.
`,
      notes: [
        "You can only move right or down.",
        "Include both starting and ending cells in the sum.",
        "A Dynamic Programming solution is expected.",
      ],
    },
    examples: [
      {
        input: "grid = [[1,3,1],[1,5,1],[4,2,1]]",
        output: "7",
      },
      {
        input: "grid = [[1,2,3],[4,5,6]]",
        output: "12",
      },
      {
        input: "grid = [[5]]",
        output: "5",
      },
    ],
    constraints: ["1 ≤ m, n ≤ 200", "0 ≤ grid[i][j] ≤ 100"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int minPathSum(vector<vector<int>>& grid){
    // Write your solution here
    return 0;
}

int main(){
    cout << minPathSum({{1,3,1},{1,5,1},{4,2,1}}) << endl;
    cout << minPathSum({{1,2,3},{4,5,6}}) << endl;
    cout << minPathSum({{5}}) << endl;
}`,
      go: `package main
import "fmt"

func minPathSum(grid [][]int) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(minPathSum([][]int{{1,3,1},{1,5,1},{4,2,1}}))
    fmt.Println(minPathSum([][]int{{1,2,3},{4,5,6}}))
    fmt.Println(minPathSum([][]int{{5}}))
}`,
      ruby: `def min_path_sum(grid)
  # Write your solution here
  0
end

puts min_path_sum([[1,3,1],[1,5,1],[4,2,1]])
puts min_path_sum([[1,2,3],[4,5,6]])
puts min_path_sum([[5]])`,
      rust: `fn min_path_sum(grid: Vec<Vec<i32>>) -> i32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", min_path_sum(vec![vec![1,3,1],vec![1,5,1],vec![4,2,1]]));
    println!("{}", min_path_sum(vec![vec![1,2,3],vec![4,5,6]]));
    println!("{}", min_path_sum(vec![vec![5]]));
}`,
      javascript: `function minPathSum(grid) {
  // Write your solution here
}

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
console.log(minPathSum([[1,2,3],[4,5,6]]));
console.log(minPathSum([[5]]));`,
      python: `def minPathSum(grid):
    # Write your solution here
    pass

print(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))
print(minPathSum([[1,2,3],[4,5,6]]))
print(minPathSum([[5]]))`,
      java: `class Solution {
    public static int minPathSum(int[][] grid){
        // Write your solution here
        return 0;
    }

    public static void main(String[] args){
        System.out.println(minPathSum(new int[][]{{1,3,1},{1,5,1},{4,2,1}}));
        System.out.println(minPathSum(new int[][]{{1,2,3},{4,5,6}}));
        System.out.println(minPathSum(new int[][]{{5}}));
    }
}`,
    },
    expectedOutput: {
      cpp: "7\n12\n5",
      go: "7\n12\n5",
      ruby: "7\n12\n5",
      rust: "7\n12\n5",
      javascript: "7\n12\n5",
      python: "7\n12\n5",
      java: "7\n12\n5",
    },
  },

  "alien-dictionary": {
    id: "alien-dictionary",
    title: "Alien Dictionary",
    difficulty: "Hard",
    category: "Graph • Topological Sort",
    description: {
      text: `
There is a new alien language that uses the English alphabet.
However, the order among the letters is unknown.

You are given a list of strings words sorted lexicographically
according to the rules of this alien language.

Return a string representing the correct order of unique letters.
If there are multiple valid answers, return any one of them.
If the ordering is invalid, return an empty string.
`,
      notes: [
        "Compare adjacent words to determine ordering rules.",
        'If a word is a prefix of a previous longer word, return "".',
        "Use Topological Sort (Kahn's Algorithm or DFS).",
        'If a cycle exists, return "".',
      ],
    },
    examples: [
      {
        input: 'words = ["wrt","wrf","er","ett","rftt"]',
        output: '"wertf"',
      },
      {
        input: 'words = ["z","x"]',
        output: '"zx"',
      },
      {
        input: 'words = ["abc","ab"]',
        output: '""',
      },
    ],
    constraints: [
      "1 ≤ words.length ≤ 100",
      "1 ≤ words[i].length ≤ 100",
      "words consist of lowercase English letters",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

string alienOrder(vector<string>& words){
    // Write your solution here
    return "";
}

int main(){
    cout << alienOrder({"wrt","wrf","er","ett","rftt"}) << endl;
    cout << alienOrder({"z","x"}) << endl;
    cout << alienOrder({"abc","ab"}) << endl;
}`,
      go: `package main
import "fmt"

func alienOrder(words []string) string {
    // Write your solution here
    return ""
}

func main() {
    fmt.Println(alienOrder([]string{"wrt","wrf","er","ett","rftt"}))
    fmt.Println(alienOrder([]string{"z","x"}))
    fmt.Println(alienOrder([]string{"abc","ab"}))
}`,
      ruby: `def alien_order(words)
  # Write your solution here
  ""
end

puts alien_order(["wrt","wrf","er","ett","rftt"])
puts alien_order(["z","x"])
puts alien_order(["abc","ab"])`,
      rust: `fn alien_order(words: Vec<String>) -> String {
    // Write your solution here
    "".to_string()
}

fn main() {
    println!("{}", alien_order(vec!["wrt","wrf","er","ett","rftt"].into_iter().map(String::from).collect()));
    println!("{}", alien_order(vec!["z","x"].into_iter().map(String::from).collect()));
    println!("{}", alien_order(vec!["abc","ab"].into_iter().map(String::from).collect()));
}`,
      javascript: `function alienOrder(words) {
  // Write your solution here
}

console.log(alienOrder(["wrt","wrf","er","ett","rftt"]));
console.log(alienOrder(["z","x"]));
console.log(alienOrder(["abc","ab"]));`,
      python: `def alienOrder(words):
    # Write your solution here
    pass

print(alienOrder(["wrt","wrf","er","ett","rftt"]))
print(alienOrder(["z","x"]))
print(alienOrder(["abc","ab"]))`,
      java: `class Solution {
    public static String alienOrder(String[] words){
        // Write your solution here
        return "";
    }

    public static void main(String[] args){
        System.out.println(alienOrder(new String[]{"wrt","wrf","er","ett","rftt"}));
        System.out.println(alienOrder(new String[]{"z","x"}));
        System.out.println(alienOrder(new String[]{"abc","ab"}));
    }
}`,
    },
    expectedOutput: {
      cpp: "wertf\nzx\n",
      go: "wertf\nzx\n",
      ruby: "wertf\nzx\n",
      rust: "wertf\nzx\n",
      javascript: "wertf\nzx\n",
      python: "wertf\nzx\n",
      java: "wertf\nzx\n",
    },
  },
};
