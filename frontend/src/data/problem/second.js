export const second = {
  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Greedy",
    description: {
      text: `
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing:

- One day to buy one stock, and
- A different future day to sell that stock.

Return the maximum profit you can achieve from this transaction.

If no profit can be achieved, return 0.
`,
      notes: [
        "You must buy before you sell.",
        "Only one transaction is allowed.",
        "If prices continuously decrease, the answer is 0.",
      ],
    },
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation:
          "Buy on day 2 (price = 1) and sell on day 5 (price = 6). Profit = 6 - 1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation:
          "Prices keep decreasing, so no profitable transaction is possible.",
      },
      {
        input: "prices = [2,4,1]",
        output: "2",
        explanation:
          "Buy on day 1 (price = 2) and sell on day 2 (price = 4). Profit = 2.",
      },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxProfit(vector<int>& prices) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> p1 = {7,1,5,3,6,4};
    cout << maxProfit(p1) << endl;

    vector<int> p2 = {7,6,4,3,1};
    cout << maxProfit(p2) << endl;

    vector<int> p3 = {2,4,1};
    cout << maxProfit(p3) << endl;

    return 0;
}`,
      go: `package main
import "fmt"

func maxProfit(prices []int) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(maxProfit([]int{7,1,5,3,6,4}))
    fmt.Println(maxProfit([]int{7,6,4,3,1}))
    fmt.Println(maxProfit([]int{2,4,1}))
}`,
      ruby: `def max_profit(prices)
  # Write your solution here
  0
end

puts max_profit([7,1,5,3,6,4])
puts max_profit([7,6,4,3,1])
puts max_profit([2,4,1])`,
      rust: `fn max_profit(prices: &[i32]) -> i32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", max_profit(&[7,1,5,3,6,4]));
    println!("{}", max_profit(&[7,6,4,3,1]));
    println!("{}", max_profit(&[2,4,1]));
}`,
      javascript: `function maxProfit(prices) {
  // Write your solution here
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([2,4,1]));`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

print(maxProfit([7,1,5,3,6,4]))
print(maxProfit([7,6,4,3,1]))
print(maxProfit([2,4,1]))`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4}));
        System.out.println(maxProfit(new int[]{7,6,4,3,1}));
        System.out.println(maxProfit(new int[]{2,4,1}));
    }
}`,
    },
    expectedOutput: {
      cpp: "5\n0\n2",
      go: "5\n0\n2",
      ruby: "5\n0\n2",
      rust: "5\n0\n2",
      javascript: "5\n0\n2",
      python: "5\n0\n2",
      java: "5\n0\n2",
    },
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given a sorted array of integers nums and an integer target, write a function to search target in nums.",
      notes: [
        "If target exists, return its index.",
        "Otherwise, return -1.",
        "You must write an algorithm with O(log n) runtime complexity.",
      ],
    },
    examples: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
      },
      {
        input: "nums = [-1,0,3,5,9,12], target = 2",
        output: "-1",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁴",
      "-10⁴ ≤ nums[i], target ≤ 10⁴",
      "All the integers in nums are unique.",
      "nums is sorted in ascending order.",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target) {
    // Write your solution here
    return -1;
}

int main() {
    vector<int> nums = {-1,0,3,5,9,12};
    cout << search(nums, 9) << endl; // Expected: 4
    cout << search(nums, 2) << endl; // Expected: -1
    return 0;
}`,
      go: `package main

import "fmt"

func search(nums []int, target int) int {
    // Write your solution here
    return -1
}

func main() {
    fmt.Println(search([]int{-1,0,3,5,9,12}, 9)) // Expected: 4
    fmt.Println(search([]int{-1,0,3,5,9,12}, 2)) // Expected: -1
}`,
      ruby: `def search(nums, target)
  # Write your solution here
  -1
end

puts search([-1,0,3,5,9,12], 9) # Expected: 4
puts search([-1,0,3,5,9,12], 2) # Expected: -1`,
      rust: `fn search(nums: &[i32], target: i32) -> i32 {
    // Write your solution here
    -1
}

fn main() {
    println!("{}", search(&[-1,0,3,5,9,12], 9)); // Expected: 4
    println!("{}", search(&[-1,0,3,5,9,12], 2)); // Expected: -1
}`,
      javascript: `function search(nums, target) {
  // Write your solution here
}

console.log(search([-1,0,3,5,9,12], 9)); // Expected: 4
console.log(search([-1,0,3,5,9,12], 2)); // Expected: -1`,
      python: `def search(nums, target):
    # Write your solution here
    pass

print(search([-1,0,3,5,9,12], 9))  # Expected: 4
print(search([-1,0,3,5,9,12], 2))  # Expected: -1`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9)); // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2)); // Expected: -1
    }
}`,
    },
    expectedOutput: {
      cpp: "4\n-1",
      go: "4\n-1",
      ruby: "4\n-1",
      rust: "4\n-1",
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
    },
  },

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [
        "A substring is a contiguous sequence of characters within a string.",
      ],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
      },
      {
        input: 's = "pwwkew"',
        output: "3",
      },
    ],
    constraints: [
      "0 ≤ s.length ≤ 5 * 10⁴",
      "s consists of English letters, digits, symbols and spaces.",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

int lengthOfLongestSubstring(string s) {
    // Write your solution here
    return 0;
}

int main() {
    cout << lengthOfLongestSubstring("abcabcbb") << endl; // Expected: 3
    cout << lengthOfLongestSubstring("bbbbb") << endl;    // Expected: 1
    cout << lengthOfLongestSubstring("pwwkew") << endl;   // Expected: 3
    return 0;
}`,
      go: `package main

import "fmt"

func lengthOfLongestSubstring(s string) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(lengthOfLongestSubstring("abcabcbb")) // Expected: 3
    fmt.Println(lengthOfLongestSubstring("bbbbb"))    // Expected: 1
    fmt.Println(lengthOfLongestSubstring("pwwkew"))   // Expected: 3
}`,
      ruby: `def length_of_longest_substring(s)
  # Write your solution here
  0
end

puts length_of_longest_substring("abcabcbb") # Expected: 3
puts length_of_longest_substring("bbbbb")    # Expected: 1
puts length_of_longest_substring("pwwkew")   # Expected: 3`,
      rust: `fn length_of_longest_substring(s: &str) -> i32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", length_of_longest_substring("abcabcbb")); // Expected: 3
    println!("{}", length_of_longest_substring("bbbbb"));    // Expected: 1
    println!("{}", length_of_longest_substring("pwwkew"));   // Expected: 3
}`,
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Expected: 3`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))     # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))    # Expected: 3`,
      java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb"));    // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew"));   // Expected: 3
    }
}`,
    },
    expectedOutput: {
      cpp: "3\n1\n3",
      go: "3\n1\n3",
      ruby: "3\n1\n3",
      rust: "3\n1\n3",
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
    },
  },

  "number-of-islands": {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Graph • DFS",
    description: {
      text: `
Given an m x n 2D grid where each cell contains either '1' (land) or '0' (water), return the number of islands.

An island is formed by connecting adjacent land cells horizontally or vertically.
You may assume all four edges of the grid are surrounded by water.
`,
      notes: [
        "Cells are connected only horizontally and vertically (not diagonally).",
        "An island is a group of connected '1's.",
        "You may modify the grid during traversal if needed.",
      ],
    },
    examples: [
      {
        input:
          'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: "1",
        explanation: "All land cells are connected, forming a single island.",
      },
      {
        input:
          'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
        output: "3",
        explanation: "There are three separate groups of connected land cells.",
      },
      {
        input: 'grid = [["1","0","1","0"],["0","1","0","1"],["1","0","1","0"]]',
        output: "6",
        explanation: "Each '1' is isolated, forming six separate islands.",
      },
    ],
    constraints: [
      "m == grid.length",
      "n == grid[i].length",
      "1 ≤ m, n ≤ 300",
      "grid[i][j] is '0' or '1'",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int numIslands(vector<vector<char>>& grid) {
    // Write your solution here
    return 0;
}

int main() {
    vector<vector<char>> grid1 = {
        {'1','1','1','1','0'},
        {'1','1','0','1','0'},
        {'1','1','0','0','0'},
        {'0','0','0','0','0'}
    };
    cout << numIslands(grid1) << endl;

    vector<vector<char>> grid2 = {
        {'1','1','0','0','0'},
        {'1','1','0','0','0'},
        {'0','0','1','0','0'},
        {'0','0','0','1','1'}
    };
    cout << numIslands(grid2) << endl;

    vector<vector<char>> grid3 = {
        {'1','0','1','0'},
        {'0','1','0','1'},
        {'1','0','1','0'}
    };
    cout << numIslands(grid3) << endl;

    return 0;
}`,
      go: `package main
import "fmt"

func numIslands(grid [][]byte) int {
    // Write your solution here
    return 0
}

func main() {
    grid1 := [][]byte{
        {'1','1','1','1','0'},
        {'1','1','0','1','0'},
        {'1','1','0','0','0'},
        {'0','0','0','0','0'},
    }
    fmt.Println(numIslands(grid1))

    grid2 := [][]byte{
        {'1','1','0','0','0'},
        {'1','1','0','0','0'},
        {'0','0','1','0','0'},
        {'0','0','0','1','1'},
    }
    fmt.Println(numIslands(grid2))

    grid3 := [][]byte{
        {'1','0','1','0'},
        {'0','1','0','1'},
        {'1','0','1','0'},
    }
    fmt.Println(numIslands(grid3))
}`,
      ruby: `def num_islands(grid)
  # Write your solution here
  0
end

grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
puts num_islands(grid1)

grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
puts num_islands(grid2)

grid3 = [
  ["1","0","1","0"],
  ["0","1","0","1"],
  ["1","0","1","0"]
]
puts num_islands(grid3)`,
      rust: `fn num_islands(grid: &mut Vec<Vec<char>>) -> i32 {
    // Write your solution here
    0
}

fn main() {
    let mut grid1 = vec![
        vec!['1','1','1','1','0'],
        vec!['1','1','0','1','0'],
        vec!['1','1','0','0','0'],
        vec!['0','0','0','0','0']
    ];
    println!("{}", num_islands(&mut grid1));

    let mut grid2 = vec![
        vec!['1','1','0','0','0'],
        vec!['1','1','0','0','0'],
        vec!['0','0','1','0','0'],
        vec!['0','0','0','1','1']
    ];
    println!("{}", num_islands(&mut grid2));

    let mut grid3 = vec![
        vec!['1','0','1','0'],
        vec!['0','1','0','1'],
        vec!['1','0','1','0']
    ];
    println!("{}", num_islands(&mut grid3));
}`,
      javascript: `function numIslands(grid) {
  // Write your solution here
}

console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]));

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]));

console.log(numIslands([
  ["1","0","1","0"],
  ["0","1","0","1"],
  ["1","0","1","0"]
]));`,
      python: `def numIslands(grid):
    # Write your solution here
    pass

print(numIslands([
 ["1","1","1","1","0"],
 ["1","1","0","1","0"],
 ["1","1","0","0","0"],
 ["0","0","0","0","0"]
]))

print(numIslands([
 ["1","1","0","0","0"],
 ["1","1","0","0","0"],
 ["0","0","1","0","0"],
 ["0","0","0","1","1"]
]))

print(numIslands([
 ["1","0","1","0"],
 ["0","1","0","1"],
 ["1","0","1","0"]
]))`,
      java: `class Solution {
    public static int numIslands(char[][] grid) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        char[][] grid1 = {
            {'1','1','1','1','0'},
            {'1','1','0','1','0'},
            {'1','1','0','0','0'},
            {'0','0','0','0','0'}
        };
        System.out.println(numIslands(grid1));

        char[][] grid2 = {
            {'1','1','0','0','0'},
            {'1','1','0','0','0'},
            {'0','0','1','0','0'},
            {'0','0','0','1','1'}
        };
        System.out.println(numIslands(grid2));

        char[][] grid3 = {
            {'1','0','1','0'},
            {'0','1','0','1'},
            {'1','0','1','0'}
        };
        System.out.println(numIslands(grid3));
    }
}`,
    },
    expectedOutput: {
      cpp: "1\n3\n6",
      go: "1\n3\n6",
      ruby: "1\n3\n6",
      rust: "1\n3\n6",
      javascript: "1\n3\n6",
      python: "1\n3\n6",
      java: "1\n3\n6",
    },
  },

  "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    category: "Heap • Divide and Conquer",
    description: {
      text: `
You are given an array of k sorted integer lists.

Each list is sorted in ascending order.

Merge all the lists into one sorted list and return it.

The final merged list must also be sorted in ascending order.
`,
      notes: [
        "The input lists may be empty.",
        "The overall total number of elements will not exceed 10⁴.",
        "Efficient solutions typically use a Min Heap or Divide and Conquer approach.",
      ],
    },
    examples: [
      {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
        explanation: "All lists are merged while maintaining sorted order.",
      },
      {
        input: "lists = []",
        output: "[]",
        explanation: "No lists provided, so the result is empty.",
      },
      {
        input: "lists = [[-1,0,3],[2,2],[5]]",
        output: "[-1,0,2,2,3,5]",
      },
    ],
    constraints: [
      "k == lists.length",
      "0 ≤ k ≤ 10⁴",
      "0 ≤ lists[i].length ≤ 500",
      "-10⁴ ≤ lists[i][j] ≤ 10⁴",
      "lists[i] is sorted in ascending order",
      "The total number of elements across all lists will not exceed 10⁴",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> mergeKLists(vector<vector<int>>& lists) {
    // Write your solution here
    return {};
}

int main() {
    vector<vector<int>> lists1 = {{1,4,5},{1,3,4},{2,6}};
    vector<int> result1 = mergeKLists(lists1);
    for (int x : result1) cout << x << " ";
    cout << endl;

    vector<vector<int>> lists2 = {};
    vector<int> result2 = mergeKLists(lists2);
    for (int x : result2) cout << x << " ";
    cout << endl;

    vector<vector<int>> lists3 = {{-1,0,3},{2,2},{5}};
    vector<int> result3 = mergeKLists(lists3);
    for (int x : result3) cout << x << " ";
}`,
      go: `package main
import "fmt"

func mergeKLists(lists [][]int) []int {
    // Write your solution here
    return []int{}
}

func main() {
    fmt.Println(mergeKLists([][]int{{1,4,5},{1,3,4},{2,6}}))
    fmt.Println(mergeKLists([][]int{}))
    fmt.Println(mergeKLists([][]int{{-1,0,3},{2,2},{5}}))
}`,
      ruby: `def merge_k_lists(lists)
  # Write your solution here
  []
end

puts merge_k_lists([[1,4,5],[1,3,4],[2,6]]).inspect
puts merge_k_lists([]).inspect
puts merge_k_lists([[-1,0,3],[2,2],[5]]).inspect`,
      rust: `fn merge_k_lists(lists: Vec<Vec<i32>>) -> Vec<i32> {
    // Write your solution here
    vec![]
}

fn main() {
    println!("{:?}", merge_k_lists(vec![vec![1,4,5],vec![1,3,4],vec![2,6]]));
    println!("{:?}", merge_k_lists(vec![]));
    println!("{:?}", merge_k_lists(vec![vec![-1,0,3],vec![2,2],vec![5]]));
}`,
      javascript: `function mergeKLists(lists) {
  // Write your solution here
}

console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]));
console.log(mergeKLists([]));
console.log(mergeKLists([[-1,0,3],[2,2],[5]]));`,
      python: `def mergeKLists(lists):
    # Write your solution here
    pass

print(mergeKLists([[1,4,5],[1,3,4],[2,6]]))
print(mergeKLists([]))
print(mergeKLists([[-1,0,3],[2,2],[5]]))`,
      java: `import java.util.*;

class Solution {
    public static List<Integer> mergeKLists(List<List<Integer>> lists) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(mergeKLists(Arrays.asList(
            Arrays.asList(1,4,5),
            Arrays.asList(1,3,4),
            Arrays.asList(2,6)
        )));

        System.out.println(mergeKLists(new ArrayList<>()));

        System.out.println(mergeKLists(Arrays.asList(
            Arrays.asList(-1,0,3),
            Arrays.asList(2,2),
            Arrays.asList(5)
        )));
    }
}`,
    },
    expectedOutput: {
      cpp: "1 1 2 3 4 4 5 6 \n\n-1 0 2 2 3 5 ",
      go: "[1 1 2 3 4 4 5 6]\n[]\n[-1 0 2 2 3 5]",
      ruby: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]\n[-1, 0, 2, 2, 3, 5]",
      rust: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]\n[-1, 0, 2, 2, 3, 5]",
      javascript: "[1,1,2,3,4,4,5,6]\n[]\n[-1,0,2,2,3,5]",
      python: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]\n[-1, 0, 2, 2, 3, 5]",
      java: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]\n[-1, 0, 2, 2, 3, 5]",
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming • Array",
    description: {
      text: `
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 step or 2 steps.

In how many distinct ways can you reach the top?
`,
      notes: [
        "The order of steps matters.",
        "This is equivalent to counting the number of ways to form n using 1 and 2.",
        "The result fits within a 32-bit integer.",
      ],
    },
    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "There are two ways: (1+1) and (2).",
      },
      {
        input: "n = 3",
        output: "3",
        explanation: "There are three ways: (1+1+1), (1+2), and (2+1).",
      },
      {
        input: "n = 5",
        output: "8",
      },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      cpp: `#include <iostream>
using namespace std;

int climbStairs(int n) {
    // Write your solution here
    return 0;
}

int main() {
    cout << climbStairs(2) << endl;
    cout << climbStairs(3) << endl;
    cout << climbStairs(5) << endl;
}`,
      go: `package main
import "fmt"

func climbStairs(n int) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(climbStairs(2))
    fmt.Println(climbStairs(3))
    fmt.Println(climbStairs(5))
}`,
      ruby: `def climb_stairs(n)
  # Write your solution here
  0
end

puts climb_stairs(2)
puts climb_stairs(3)
puts climb_stairs(5)`,
      rust: `fn climb_stairs(n: i32) -> i32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", climb_stairs(2));
    println!("{}", climb_stairs(3));
    println!("{}", climb_stairs(5));
}`,
      javascript: `function climbStairs(n) {
  // Write your solution here
}

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));`,
      python: `def climbStairs(n):
    # Write your solution here
    pass

print(climbStairs(2))
print(climbStairs(3))
print(climbStairs(5))`,
      java: `class Solution {
    public static int climbStairs(int n){
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(2));
        System.out.println(climbStairs(3));
        System.out.println(climbStairs(5));
    }
}`,
    },
    expectedOutput: {
      cpp: "2\n3\n8",
      go: "2\n3\n8",
      ruby: "2\n3\n8",
      rust: "2\n3\n8",
      javascript: "2\n3\n8",
      python: "2\n3\n8",
      java: "2\n3\n8",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: `
Given an integer array nums, return an array answer such that:

answer[i] is equal to the product of all elements of nums except nums[i].

The solution must run in O(n) time.
`,
      notes: [
        "You must not use division.",
        "The result array must be built using prefix and suffix products.",
        "The output array does not count as extra space.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
        explanation:
          "For index 0: 2×3×4 = 24\nFor index 1: 1×3×4 = 12\nFor index 2: 1×2×4 = 8\nFor index 3: 1×2×3 = 6",
      },
      {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
      },
      {
        input: "nums = [2,3,4,5]",
        output: "[60,40,30,24]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁵",
      "-30 ≤ nums[i] ≤ 30",
      "The product of any prefix or suffix fits in a 32-bit integer.",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> n1 = {1,2,3,4};
    vector<int> n2 = {-1,1,0,-3,3};
    vector<int> n3 = {2,3,4,5};

    for(int x: productExceptSelf(n1)) cout<<x<<" ";
    cout<<endl;

    for(int x: productExceptSelf(n2)) cout<<x<<" ";
    cout<<endl;

    for(int x: productExceptSelf(n3)) cout<<x<<" ";
    cout<<endl;
}`,
      go: `package main
import "fmt"

func productExceptSelf(nums []int) []int {
    // Write your solution here
    return []int{}
}

func main(){
    fmt.Println(productExceptSelf([]int{1,2,3,4}))
    fmt.Println(productExceptSelf([]int{-1,1,0,-3,3}))
    fmt.Println(productExceptSelf([]int{2,3,4,5}))
}`,
      ruby: `def product_except_self(nums)
  # Write your solution here
  []
end

p product_except_self([1,2,3,4])
p product_except_self([-1,1,0,-3,3])
p product_except_self([2,3,4,5])`,
      rust: `fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
    // Write your solution here
    vec![]
}

fn main() {
    println!("{:?}", product_except_self(vec![1,2,3,4]));
    println!("{:?}", product_except_self(vec![-1,1,0,-3,3]));
    println!("{:?}", product_except_self(vec![2,3,4,5]));
}`,
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
}

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));
console.log(productExceptSelf([2,3,4,5]));`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

print(productExceptSelf([1,2,3,4]))
print(productExceptSelf([-1,1,0,-3,3]))
print(productExceptSelf([2,3,4,5]))`,
      java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4})));
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3})));
        System.out.println(Arrays.toString(productExceptSelf(new int[]{2,3,4,5})));
    }
}`,
    },
    expectedOutput: {
      cpp: "24 12 8 6 \n0 0 9 0 0 \n60 40 30 24 ",
      go: "[24 12 8 6]\n[0 0 9 0 0]\n[60 40 30 24]",
      ruby: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]\n[60, 40, 30, 24]",
      rust: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]\n[60, 40, 30, 24]",
      javascript: "[24,12,8,6]\n[0,0,9,0,0]\n[60,40,30,24]",
      python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]\n[60, 40, 30, 24]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]\n[60, 40, 30, 24]",
    },
  },

  "group-anagrams": {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    category: "String • Hash Table",
    description: {
      text: `
Given an array of strings strs, group the anagrams together.

An anagram is a word formed by rearranging the letters of another word using exactly the same characters.
`,
      notes: [
        "All strings consist of lowercase English letters.",
        "The output can be returned in any order.",
        "Strings within each group can also be in any order.",
      ],
    },
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
      },
      {
        input: 'strs = [""]',
        output: '[[""]]',
      },
      {
        input: 'strs = ["a"]',
        output: '[["a"]]',
      },
    ],
    constraints: [
      "1 ≤ strs.length ≤ 10⁴",
      "0 ≤ strs[i].length ≤ 100",
      "strs[i] consists of lowercase English letters.",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<vector<string>> groupAnagrams(vector<string>& strs) {
    // Write your solution here
    return {};
}

int main() {
    vector<string> s1 = {"eat","tea","tan","ate","nat","bat"};
    vector<string> s2 = {""};
    vector<string> s3 = {"a"};

    auto r1 = groupAnagrams(s1);
    auto r2 = groupAnagrams(s2);
    auto r3 = groupAnagrams(s3);

    cout << r1.size() << endl;
    cout << r2.size() << endl;
    cout << r3.size() << endl;
}`,
      go: `package main
import "fmt"

func groupAnagrams(strs []string) [][]string {
    // Write your solution here
    return [][]string{}
}

func main() {
    fmt.Println(len(groupAnagrams([]string{"eat","tea","tan","ate","nat","bat"})))
    fmt.Println(len(groupAnagrams([]string{""})))
    fmt.Println(len(groupAnagrams([]string{"a"})))
}`,
      ruby: `def group_anagrams(strs)
  # Write your solution here
  []
end

p group_anagrams(["eat","tea","tan","ate","nat","bat"]).length
p group_anagrams([""]).length
p group_anagrams(["a"]).length`,
      rust: `fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
    // Write your solution here
    vec![]
}

fn main() {
    println!("{}", group_anagrams(vec![
        "eat".to_string(),"tea".to_string(),"tan".to_string(),
        "ate".to_string(),"nat".to_string(),"bat".to_string()
    ]).len());
    println!("{}", group_anagrams(vec!["".to_string()]).len());
    println!("{}", group_anagrams(vec!["a".to_string()]).len());
}`,
      javascript: `function groupAnagrams(strs) {
  // Write your solution here
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]).length);
console.log(groupAnagrams([""]).length);
console.log(groupAnagrams(["a"]).length);`,
      python: `def groupAnagrams(strs):
    # Write your solution here
    pass

print(len(groupAnagrams(["eat","tea","tan","ate","nat","bat"])))
print(len(groupAnagrams([""])))
print(len(groupAnagrams(["a"])))`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}).size());
        System.out.println(groupAnagrams(new String[]{""}).size());
        System.out.println(groupAnagrams(new String[]{"a"}).size());
    }
}`,
    },
    expectedOutput: {
      cpp: "3\n1\n1",
      go: "3\n1\n1",
      ruby: "3\n1\n1",
      rust: "3\n1\n1",
      javascript: "3\n1\n1",
      python: "3\n1\n1",
      java: "3\n1\n1",
    },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: `
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An anagram is a word formed by rearranging the letters of another word
using exactly the same characters and the same frequency.
`,
      notes: [
        "Both strings must contain exactly the same characters.",
        "The frequency of each character must match.",
        "All characters are lowercase English letters.",
      ],
    },
    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true",
      },
      {
        input: 's = "rat", t = "car"',
        output: "false",
      },
      {
        input: 's = "aacc", t = "ccac"',
        output: "false",
      },
    ],
    constraints: [
      "1 ≤ s.length, t.length ≤ 5 * 10⁴",
      "s and t consist of lowercase English letters.",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <string>
using namespace std;

bool isAnagram(string s, string t) {
    // Write your solution here
    return false;
}

int main() {
    cout << boolalpha << isAnagram("anagram","nagaram") << endl;
    cout << boolalpha << isAnagram("rat","car") << endl;
    cout << boolalpha << isAnagram("aacc","ccac") << endl;
}`,
      go: `package main
import "fmt"

func isAnagram(s string, t string) bool {
    // Write your solution here
    return false
}

func main() {
    fmt.Println(isAnagram("anagram","nagaram"))
    fmt.Println(isAnagram("rat","car"))
    fmt.Println(isAnagram("aacc","ccac"))
}`,
      ruby: `def is_anagram(s, t)
  # Write your solution here
  false
end

puts is_anagram("anagram","nagaram")
puts is_anagram("rat","car")
puts is_anagram("aacc","ccac")`,
      rust: `fn is_anagram(s: String, t: String) -> bool {
    // Write your solution here
    false
}

fn main() {
    println!("{}", is_anagram("anagram".to_string(),"nagaram".to_string()));
    println!("{}", is_anagram("rat".to_string(),"car".to_string()));
    println!("{}", is_anagram("aacc".to_string(),"ccac".to_string()));
}`,
      javascript: `function isAnagram(s, t) {
  // Write your solution here
}

console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("rat","car"));
console.log(isAnagram("aacc","ccac"));`,
      python: `def isAnagram(s, t):
    # Write your solution here
    pass

print(isAnagram("anagram","nagaram"))
print(isAnagram("rat","car"))
print(isAnagram("aacc","ccac"))`,
      java: `class Solution {
    public static boolean isAnagram(String s, String t){
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isAnagram("anagram","nagaram"));
        System.out.println(isAnagram("rat","car"));
        System.out.println(isAnagram("aacc","ccac"));
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

  "maximum-depth-of-binary-tree": {
  id: "maximum-depth-of-binary-tree",
  title: "Maximum Depth of Binary Tree",
  difficulty: "Easy",
  category: "Tree • DFS",
  description: {
    text: `
Given the root of a binary tree, return its maximum depth.

The maximum depth is the number of nodes along the longest path
from the root node down to the farthest leaf node.
`,
    notes: [
      "A leaf is a node with no children.",
      "If the tree is empty, return 0.",
      "You may solve this using DFS (recursive) or BFS.",
    ],
  },
  examples: [
    {
      input: "root = [3,9,20,null,null,15,7]",
      output: "3",
    },
    {
      input: "root = [1,null,2]",
      output: "2",
    },
  ],
  constraints: [
    "The number of nodes is in the range [0, 10⁴].",
    "-100 ≤ Node.val ≤ 100",
  ],
  starterCode: {
    cpp: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

int maxDepth(TreeNode* root) {
    // Write your solution here
    return 0;
}

int main() {
    TreeNode* root = new TreeNode(3);
    root->left = new TreeNode(9);
    root->right = new TreeNode(20);
    root->right->left = new TreeNode(15);
    root->right->right = new TreeNode(7);

    cout << maxDepth(root) << endl;
}`,
    go: `package main
import "fmt"

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

func maxDepth(root *TreeNode) int {
    // Write your solution here
    return 0
}

func main() {
    root := &TreeNode{3,
        &TreeNode{9,nil,nil},
        &TreeNode{20,
            &TreeNode{15,nil,nil},
            &TreeNode{7,nil,nil},
        },
    }
    fmt.Println(maxDepth(root))
}`,
    ruby: `class TreeNode
  attr_accessor :val, :left, :right
  def initialize(val)
    @val = val
    @left = nil
    @right = nil
  end
end

def max_depth(root)
  # Write your solution here
  0
end

root = TreeNode.new(3)
root.left = TreeNode.new(9)
root.right = TreeNode.new(20)
root.right.left = TreeNode.new(15)
root.right.right = TreeNode.new(7)

puts max_depth(root)`,
    rust: `#[derive(Debug)]
struct TreeNode {
    val: i32,
    left: Option<Box<TreeNode>>,
    right: Option<Box<TreeNode>>,
}

fn max_depth(root: Option<Box<TreeNode>>) -> i32 {
    // Write your solution here
    0
}

fn main() {}`,
    javascript: `function TreeNode(val, left=null, right=null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function maxDepth(root) {
  // Write your solution here
}

const root = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20,
    new TreeNode(15),
    new TreeNode(7)
  )
);

console.log(maxDepth(root));`,
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxDepth(root):
    # Write your solution here
    pass

root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20, TreeNode(15), TreeNode(7))

print(maxDepth(root))`,
    java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class Solution {
    public static int maxDepth(TreeNode root) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);

        System.out.println(maxDepth(root));
    }
}`,
  },
  expectedOutput: {
    cpp: "3",
    go: "3",
    ruby: "3",
    rust: "",
    javascript: "3",
    python: "3",
    java: "3",
  },
},
};
