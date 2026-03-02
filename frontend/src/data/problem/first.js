export const first = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: `
Given an integer array nums and an integer target, return the indices of the two numbers such that they add up to target.

Each input has exactly one solution, and you may not use the same element twice.

Return the answer as an array of two indices in any order.
`,
      notes: [
        "The function should return an array of two integers.",
        "You may assume exactly one valid solution exists.",
        "You cannot use the same index twice.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
      { input: "nums = [3,3], target = 6", output: "[0,1]" },
      { input: "nums = [1,5,3,7], target = 8", output: "[0,3]" },
      { input: "nums = [-1,-2,-3,-4,-5], target = -8", output: "[2,4]" },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    return {};
}

int main() {
    vector<vector<int>> tests = {
        {2,7,11,15},
        {3,2,4},
        {3,3},
        {1,5,3,7},
        {-1,-2,-3,-4,-5}
    };
    vector<int> targets = {9,6,6,8,-8};

    for(int i=0;i<tests.size();i++){
        vector<int> result = twoSum(tests[i], targets[i]);
        cout << "[" << result[0] << "," << result[1] << "]" << endl;
    }
}`,
      go: `package main
import "fmt"

func twoSum(nums []int, target int) []int {
    // Write your solution here
    return []int{}
}

func main() {
    tests := [][]int{
        {2,7,11,15},
        {3,2,4},
        {3,3},
        {1,5,3,7},
        {-1,-2,-3,-4,-5},
    }
    targets := []int{9,6,6,8,-8}

    for i:=0;i<len(tests);i++{
        result := twoSum(tests[i], targets[i])
        fmt.Printf("[%d,%d]\n", result[0], result[1])
    }
}`,
      ruby: `def two_sum(nums, target)
  # Write your solution here
  []
end

tests = [
  [[2,7,11,15],9],
  [[3,2,4],6],
  [[3,3],6],
  [[1,5,3,7],8],
  [[-1,-2,-3,-4,-5],-8]
]

tests.each do |nums,target|
  result = two_sum(nums,target)
  puts "[#{result.join(',')}]"
end`,
      rust: `fn two_sum(nums: &Vec<i32>, target: i32) -> Vec<i32> {
    // Write your solution here
    vec![]
}

fn main() {
    let tests = vec![
        (vec![2,7,11,15],9),
        (vec![3,2,4],6),
        (vec![3,3],6),
        (vec![1,5,3,7],8),
        (vec![-1,-2,-3,-4,-5],-8)
    ];

    for (nums,target) in tests {
        let result = two_sum(&nums,target);
        println!("[{},{}]", result[0], result[1]);
    }
}`,
      javascript: `function twoSum(nums, target) {
  // Write your solution here
}

const tests = [
  [[2,7,11,15],9],
  [[3,2,4],6],
  [[3,3],6],
  [[1,5,3,7],8],
  [[-1,-2,-3,-4,-5],-8]
];

tests.forEach(([nums,target])=>{
  const result = twoSum(nums,target);
  console.log(\`[\${result[0]},\${result[1]}]\`);
});`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

tests = [
    ([2,7,11,15],9),
    ([3,2,4],6),
    ([3,3],6),
    ([1,5,3,7],8),
    ([-1,-2,-3,-4,-5],-8),
]

for nums,target in tests:
    result = twoSum(nums,target)
    print(result)`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        int[][] tests = {
            {2,7,11,15},
            {3,2,4},
            {3,3},
            {1,5,3,7},
            {-1,-2,-3,-4,-5}
        };
        int[] targets = {9,6,6,8,-8};

        for(int i=0;i<tests.length;i++){
            System.out.println(Arrays.toString(twoSum(tests[i],targets[i])));
        }
    }
}`,
    },
    expectedOutput: {
      cpp: "[0,1]\n[1,2]\n[0,1]\n[0,3]\n[2,4]",
      go: "[0,1]\n[1,2]\n[0,1]\n[0,3]\n[2,4]",
      ruby: "[0,1]\n[1,2]\n[0,1]\n[0,3]\n[2,4]",
      rust: "[0,1]\n[1,2]\n[0,1]\n[0,3]\n[2,4]",
      javascript: "[0,1]\n[1,2]\n[0,1]\n[0,3]\n[2,4]",
      python: "[0, 1]\n[1, 2]\n[0, 1]\n[0, 3]\n[2, 4]",
      java: "[0, 1]\n[1, 2]\n[0, 1]\n[0, 3]\n[2, 4]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: `
Write a function that reverses a string.

The input string is given as an array of characters s. You must modify the input array in-place so that the characters are reversed.

Do not allocate extra space for another array. You must solve this problem using O(1) extra memory.
`,
      notes: [
        "The function should modify the array in-place.",
        "Do not return anything from the function.",
        "The reversal must be done using constant extra memory.",
      ],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
        explanation: "The characters are reversed in-place.",
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
      {
        input: 's = ["a"]',
        output: '["a"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ASCII character"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void reverseString(vector<char>& s) {
    // Write your solution here
}

int main() {
    vector<vector<char>> tests = {
        {'h','e','l','l','o'},
        {'H','a','n','n','a','h'},
        {'a'}
    };

    for (auto& test : tests) {
        reverseString(test);
        for (char c : test) cout << '"' << c << '"' << ',';
        cout << endl;
    }

    return 0;
}`,
      go: `package main

import "fmt"

func reverseString(s []rune) {
    // Write your solution here
}

func main() {
    tests := [][]rune{
        {'h','e','l','l','o'},
        {'H','a','n','n','a','h'},
        {'a'},
    }

    for _, test := range tests {
        reverseString(test)
        fmt.Printf("%q,", test...)
        fmt.Println()
    }
}`,
      ruby: `def reverse_string(s)
  # Write your solution here
end

tests = [
  ["h","e","l","l","o"],
  ["H","a","n","n","a","h"],
  ["a"]
]

tests.each do |test|
  reverse_string(test)
  puts test.map { |c| "\"#{c}\"" }.join(",")
end`,
      rust: `fn reverse_string(s: &mut Vec<char>) {
    // Write your solution here
}

fn main() {
    let mut tests = vec![
        vec!['h','e','l','l','o'],
        vec!['H','a','n','n','a','h'],
        vec!['a']
    ];

    for test in &mut tests {
        reverse_string(test);
        println!("{:?}", test);
    }
}`,
      javascript: `function reverseString(s) {
  // Write your solution here
}

const tests = [
  ["h","e","l","l","o"],
  ["H","a","n","n","a","h"],
  ["a"]
];

tests.forEach(test => {
  reverseString(test);
  console.log(test);
});`,
      python: `def reverseString(s):
    # Write your solution here
    pass

tests = [
    ["h","e","l","l","o"],
    ["H","a","n","n","a","h"],
    ["a"]
]

for test in tests:
    reverseString(test)
    print(test)`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
    }

    public static void main(String[] args) {
        char[][] tests = {
            {'h','e','l','l','o'},
            {'H','a','n','n','a','h'},
            {'a'}
        };

        for (char[] test : tests) {
            reverseString(test);
            System.out.println(Arrays.toString(test));
        }
    }
}`,
    },
    expectedOutput: {
      cpp: '"o","l","l","e","h",\n"h","a","n","n","a","H",\n"a",',
      go: '"o" "l" "l" "e" "h"\n"h" "a" "n" "n" "a" "H"\n"a"',
      ruby: '"o","l","l","e","h"\n"h","a","n","n","a","H"\n"a"',
      rust: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']\n['a']",
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]\n["a"]',
      python:
        "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']\n['a']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]\n[a]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: `
Given a string s, determine whether it is a palindrome.

A string is considered a palindrome if, after converting all uppercase letters to lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.

Alphanumeric characters include letters (a–z, A–Z) and digits (0–9).

Return true if the processed string is a palindrome. Otherwise, return false.
`,
      notes: [
        "You must ignore non-alphanumeric characters.",
        "Letter casing should not affect the result.",
        "An empty string is considered a palindrome.",
      ],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation:
          'After removing non-alphanumeric characters and converting to lowercase, the string becomes "amanaplanacanalpanama", which is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation:
          'After processing, the string becomes "raceacar", which is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          'After removing non-alphanumeric characters, the string becomes an empty string "", which is considered a palindrome.',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 2 * 10⁵",
      "s consists only of printable ASCII characters",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <string>
#include <cctype>
using namespace std;

bool isPalindrome(string s) {
    // Write your solution here
    return false;
}

int main() {
    cout << boolalpha << isPalindrome("A man, a plan, a canal: Panama") << endl;
    cout << boolalpha << isPalindrome("race a car") << endl;
    cout << boolalpha << isPalindrome(" ") << endl;
    return 0;
}`,
      go: `package main

import (
    "fmt"
)

func isPalindrome(s string) bool {
    // Write your solution here
    return false
}

func main() {
    fmt.Println(isPalindrome("A man, a plan, a canal: Panama"))
    fmt.Println(isPalindrome("race a car"))
    fmt.Println(isPalindrome(" "))
}`,
      ruby: `def is_palindrome(s)
  # Write your solution here
  false
end

puts is_palindrome("A man, a plan, a canal: Panama")
puts is_palindrome("race a car")
puts is_palindrome(" ")`,
      rust: `fn is_palindrome(s: &str) -> bool {
    // Write your solution here
    false
}

fn main() {
    println!("{}", is_palindrome("A man, a plan, a canal: Panama"));
    println!("{}", is_palindrome("race a car"));
    println!("{}", is_palindrome(" "));
}`,
      javascript: `function isPalindrome(s) {
  // Write your solution here
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

print(isPalindrome("A man, a plan, a canal: Panama"))
print(isPalindrome("race a car"))
print(isPalindrome(" "))`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama"));
        System.out.println(isPalindrome("race a car"));
        System.out.println(isPalindrome(" "));
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

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: `
Given an integer array nums, find the contiguous subarray (containing at least one number) that has the largest sum, and return its sum.

A subarray is a contiguous part of an array.
`,
      notes: [
        "The subarray must contain at least one element.",
        "The subarray elements must be contiguous.",
        "Return the maximum possible sum of any contiguous subarray.",
      ],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum, which is 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum of 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The entire array forms the maximum subarray with sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxSubArray(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> nums1 = {-2,1,-3,4,-1,2,1,-5,4};
    cout << maxSubArray(nums1) << endl;

    vector<int> nums2 = {1};
    cout << maxSubArray(nums2) << endl;

    vector<int> nums3 = {5,4,-1,7,8};
    cout << maxSubArray(nums3) << endl;

    return 0;
}`,
      go: `package main

import "fmt"

func maxSubArray(nums []int) int {
    // Write your solution here
    return 0
}

func main() {
    nums1 := []int{-2,1,-3,4,-1,2,1,-5,4}
    fmt.Println(maxSubArray(nums1))

    nums2 := []int{1}
    fmt.Println(maxSubArray(nums2))

    nums3 := []int{5,4,-1,7,8}
    fmt.Println(maxSubArray(nums3))
}`,
      ruby: `def max_sub_array(nums)
  # Write your solution here
  0
end

puts max_sub_array([-2,1,-3,4,-1,2,1,-5,4])
puts max_sub_array([1])
puts max_sub_array([5,4,-1,7,8])`,
      rust: `fn max_sub_array(nums: &[i32]) -> i32 {
    // Write your solution here
    0
}

fn main() {
    let nums1 = vec![-2,1,-3,4,-1,2,1,-5,4];
    println!("{}", max_sub_array(&nums1));

    let nums2 = vec![1];
    println!("{}", max_sub_array(&nums2));

    let nums3 = vec![5,4,-1,7,8];
    println!("{}", max_sub_array(&nums3));
}`,
      javascript: `function maxSubArray(nums) {
  // Write your solution here
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
print(maxSubArray([1]))
print(maxSubArray([5,4,-1,7,8]))`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4}));
        System.out.println(maxSubArray(new int[]{1}));
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8}));
    }
}`,
    },
    expectedOutput: {
      cpp: "6\n1\n23",
      go: "6\n1\n23",
      ruby: "6\n1\n23",
      rust: "6\n1\n23",
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: `
You are given an integer array height of length n.

There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two different lines that together with the x-axis form a container, such that the container holds the maximum amount of water.

Return the maximum amount of water that can be contained.

The area of water a container can store is determined by:
- The distance between the two lines (width), and
- The height of the shorter line.

Note that you may not slant the container.
`,
      notes: [
        "You must choose two different indices i and j.",
        "The container height is limited by the shorter vertical line.",
        "The width is the absolute difference between the two indices.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "Choosing lines at indices 1 and 8 gives width = 7 and height = 7. Area = 7 × 7 = 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
        explanation:
          "Only two lines exist. Width = 1 and height = 1. Area = 1.",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxArea(vector<int>& height) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> height1 = {1,8,6,2,5,4,8,3,7};
    cout << maxArea(height1) << endl;

    vector<int> height2 = {1,1};
    cout << maxArea(height2) << endl;

    return 0;
}`,
      go: `package main

import "fmt"

func maxArea(height []int) int {
    // Write your solution here
    return 0
}

func main() {
    height1 := []int{1,8,6,2,5,4,8,3,7}
    fmt.Println(maxArea(height1))

    height2 := []int{1,1}
    fmt.Println(maxArea(height2))
}`,
      ruby: `def max_area(height)
  # Write your solution here
  0
end

puts max_area([1,8,6,2,5,4,8,3,7])
puts max_area([1,1])`,
      rust: `fn max_area(height: &[i32]) -> i32 {
    // Write your solution here
    0
}

fn main() {
    let height1 = vec![1,8,6,2,5,4,8,3,7];
    println!("{}", max_area(&height1));

    let height2 = vec![1,1];
    println!("{}", max_area(&height2));
}`,
      javascript: `function maxArea(height) {
  // Write your solution here
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));`,
      python: `def maxArea(height):
    # Write your solution here
    pass

print(maxArea([1,8,6,2,5,4,8,3,7]))
print(maxArea([1,1]))`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7}));
        System.out.println(maxArea(new int[]{1,1}));
    }
}`,
    },
    expectedOutput: {
      cpp: "49\n1",
      go: "49\n1",
      ruby: "49\n1",
      rust: "49\n1",
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers",
    description: {
      text: `
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water can be trapped after raining.

Each element in the array represents the height of a bar. After raining, water may be trapped between bars if there exists a taller bar on both the left and right side.

Return the total amount of water that can be trapped.
`,
      notes: [
        "Water trapped above an index depends on the tallest bar to its left and right.",
        "If no taller bar exists on either side, no water can be trapped at that index.",
        "The width of each bar is 1 unit.",
      ],
    },
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
        explanation:
          "Water is trapped between the bars at multiple indices. The total trapped water is 6 units.",
      },
      {
        input: "height = [4,2,0,3,2,5]",
        output: "9",
        explanation:
          "Water is trapped between bars forming multiple valleys. The total trapped water is 9 units.",
      },
    ],
    constraints: ["1 ≤ height.length ≤ 2 * 10⁴", "0 ≤ height[i] ≤ 10⁵"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int trap(vector<int>& height) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> h1 = {0,1,0,2,1,0,1,3,2,1,2,1};
    cout << trap(h1) << endl;

    vector<int> h2 = {4,2,0,3,2,5};
    cout << trap(h2) << endl;

    return 0;
}`,
      go: `package main
import "fmt"

func trap(height []int) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(trap([]int{0,1,0,2,1,0,1,3,2,1,2,1}))
    fmt.Println(trap([]int{4,2,0,3,2,5}))
}`,
      ruby: `def trap(height)
  # Write your solution here
  0
end

puts trap([0,1,0,2,1,0,1,3,2,1,2,1])
puts trap([4,2,0,3,2,5])`,
      rust: `fn trap(height: Vec<i32>) -> i32 {
    // Write your solution here
    0
}

fn main() {
    let h1 = vec![0,1,0,2,1,0,1,3,2,1,2,1];
    println!("{}", trap(h1));

    let h2 = vec![4,2,0,3,2,5];
    println!("{}", trap(h2));
}`,
      javascript: `function trap(height) {
  // Write your solution here
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));`,
      python: `def trap(height):
    # Write your solution here
    pass

print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
print(trap([4,2,0,3,2,5]))`,
      java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1}));
        System.out.println(trap(new int[]{4,2,0,3,2,5}));
    }
}`,
    },
    expectedOutput: {
      cpp: "6\n9",
      go: "6\n9",
      ruby: "6\n9",
      rust: "6\n9",
      javascript: "6\n9",
      python: "6\n9",
      java: "6\n9",
    },
  },

  "network-delay-time": {
    id: "network-delay-time",
    title: "Network Delay Time",
    difficulty: "Hard",
    category: "Graph • BFS",
    description: {
      text: `
You are given a network of n nodes labeled from 1 to n.

You are also given a list of travel times as directed edges where times[i] = [u, v, w], meaning it takes w time for a signal to travel from node u to node v.

We will send a signal from a starting node k.

Return the minimum time it takes for all nodes to receive the signal.

If it is impossible for all nodes to receive the signal, return -1.
`,
      notes: [
        "The graph is directed.",
        "If any node is unreachable from k, return -1.",
        "The result is the maximum shortest-path distance from k to any node.",
      ],
    },
    examples: [
      {
        input: "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
        output: "2",
        explanation:
          "The signal reaches node 1 in 1 unit, node 3 in 1 unit, and node 4 in 2 units. The total time required is 2.",
      },
      {
        input: "times = [[1,2,1]], n = 2, k = 1",
        output: "1",
        explanation: "Node 2 receives the signal after 1 unit of time.",
      },
      {
        input: "times = [[1,2,1]], n = 2, k = 2",
        output: "-1",
        explanation: "Node 1 is unreachable from node 2.",
      },
    ],
    constraints: [
      "1 ≤ k ≤ n ≤ 100",
      "1 ≤ times.length ≤ 6000",
      "times[i].length == 3",
      "1 ≤ u, v ≤ n",
      "0 ≤ w ≤ 100",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int networkDelayTime(vector<vector<int>>& times, int n, int k) {
    // Write your solution here
    return -1;
}

int main() {
    vector<vector<int>> t1 = {{2,1,1},{2,3,1},{3,4,1}};
    cout << networkDelayTime(t1,4,2) << endl;

    vector<vector<int>> t2 = {{1,2,1}};
    cout << networkDelayTime(t2,2,1) << endl;

    vector<vector<int>> t3 = {{1,2,1}};
    cout << networkDelayTime(t3,2,2) << endl;

    return 0;
}`,
      go: `package main
import "fmt"

func networkDelayTime(times [][]int, n int, k int) int {
    // Write your solution here
    return -1
}

func main() {
    t1 := [][]int{{2,1,1},{2,3,1},{3,4,1}}
    fmt.Println(networkDelayTime(t1,4,2))

    t2 := [][]int{{1,2,1}}
    fmt.Println(networkDelayTime(t2,2,1))

    t3 := [][]int{{1,2,1}}
    fmt.Println(networkDelayTime(t3,2,2))
}`,
      ruby: `def network_delay_time(times, n, k)
  # Write your solution here
  -1
end

puts network_delay_time([[2,1,1],[2,3,1],[3,4,1]],4,2)
puts network_delay_time([[1,2,1]],2,1)
puts network_delay_time([[1,2,1]],2,2)`,
      rust: `fn network_delay_time(times: Vec<Vec<i32>>, n: i32, k: i32) -> i32 {
    // Write your solution here
    -1
}

fn main() {
    let t1 = vec![vec![2,1,1],vec![2,3,1],vec![3,4,1]];
    println!("{}", network_delay_time(t1,4,2));

    let t2 = vec![vec![1,2,1]];
    println!("{}", network_delay_time(t2,2,1));

    let t3 = vec![vec![1,2,1]];
    println!("{}", network_delay_time(t3,2,2));
}`,
      javascript: `function networkDelayTime(times, n, k) {
  // Write your solution here
}

console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],4,2));
console.log(networkDelayTime([[1,2,1]],2,1));
console.log(networkDelayTime([[1,2,1]],2,2));`,
      python: `def networkDelayTime(times, n, k):
    # Write your solution here
    pass

print(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],4,2))
print(networkDelayTime([[1,2,1]],2,1))
print(networkDelayTime([[1,2,1]],2,2))`,
      java: `class Solution {
    public static int networkDelayTime(int[][] times, int n, int k) {
        // Write your solution here
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(networkDelayTime(new int[][]{{2,1,1},{2,3,1},{3,4,1}},4,2));
        System.out.println(networkDelayTime(new int[][]{{1,2,1}},2,1));
        System.out.println(networkDelayTime(new int[][]{{1,2,1}},2,2));
    }
}`,
    },
    expectedOutput: {
      cpp: "2\n1\n-1",
      go: "2\n1\n-1",
      ruby: "2\n1\n-1",
      rust: "2\n1\n-1",
      javascript: "2\n1\n-1",
      python: "2\n1\n-1",
      java: "2\n1\n-1",
    },
  },

  "partition-equal-subset-sum": {
    id: "partition-equal-subset-sum",
    title: "Partition Equal Subset Sum",
    difficulty: "Hard",
    category: "Dynamic Programming • Bit Manipulation",
    description: {
      text: `
Given a non-empty array nums containing only positive integers, determine whether the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Return true if such a partition exists, otherwise return false.

In other words, determine whether the array can be divided into two subsets with equal total sum.
`,
      notes: [
        "Each element must belong to exactly one of the two subsets.",
        "The total sum of the array must be even for a valid partition to exist.",
        "The subsets do not need to maintain the original order.",
      ],
    },
    examples: [
      {
        input: "nums = [1,5,11,5]",
        output: "true",
        explanation:
          "The array can be partitioned into [1,5,5] and [11], both having sum 11.",
      },
      {
        input: "nums = [1,2,3,5]",
        output: "false",
        explanation:
          "The total sum is 11, which is odd, so it cannot be partitioned into two equal subsets.",
      },
      {
        input: "nums = [2,2,3,5]",
        output: "false",
        explanation:
          "Even though the total sum is even, no subset forms half of the total sum.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 200", "1 ≤ nums[i] ≤ 100"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool canPartition(vector<int>& nums) {
    // Write your solution here
    return false;
}

int main() {
    vector<int> nums1 = {1,5,11,5};
    cout << boolalpha << canPartition(nums1) << endl;

    vector<int> nums2 = {1,2,3,5};
    cout << boolalpha << canPartition(nums2) << endl;

    vector<int> nums3 = {2,2,3,5};
    cout << boolalpha << canPartition(nums3) << endl;

    return 0;
}`,
      go: `package main
import "fmt"

func canPartition(nums []int) bool {
    // Write your solution here
    return false
}

func main() {
    fmt.Println(canPartition([]int{1,5,11,5}))
    fmt.Println(canPartition([]int{1,2,3,5}))
    fmt.Println(canPartition([]int{2,2,3,5}))
}`,
      ruby: `def can_partition(nums)
  # Write your solution here
  false
end

puts can_partition([1,5,11,5])
puts can_partition([1,2,3,5])
puts can_partition([2,2,3,5])`,
      rust: `fn can_partition(nums: Vec<i32>) -> bool {
    // Write your solution here
    false
}

fn main() {
    println!("{}", can_partition(vec![1,5,11,5]));
    println!("{}", can_partition(vec![1,2,3,5]));
    println!("{}", can_partition(vec![2,2,3,5]));
}`,
      javascript: `function canPartition(nums) {
  // Write your solution here
}

console.log(canPartition([1,5,11,5]));
console.log(canPartition([1,2,3,5]));
console.log(canPartition([2,2,3,5]));`,
      python: `def canPartition(nums):
    # Write your solution here
    pass

print(canPartition([1,5,11,5]))
print(canPartition([1,2,3,5]))
print(canPartition([2,2,3,5]))`,
      java: `class Solution {
    public static boolean canPartition(int[] nums) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(canPartition(new int[]{1,5,11,5}));
        System.out.println(canPartition(new int[]{1,2,3,5}));
        System.out.println(canPartition(new int[]{2,2,3,5}));
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

  "range-sum-query-mutable": {
    id: "range-sum-query-mutable",
    title: "Range Sum Query - Mutable",
    difficulty: "Medium",
    category: "Array • Divide and Conquer",
    description: {
      text: `
Given an integer array nums, implement a data structure that supports the following operations:

1. Update the value of an element at a specific index.
2. Calculate the sum of elements between indices left and right inclusive.

Implement the NumArray class:

- NumArray(int[] nums) Initializes the object with the integer array nums.
- void update(int index, int val) Updates nums[index] to be val.
- int sumRange(int left, int right) Returns the sum of elements between indices left and right inclusive.
`,
      notes: [
        "Both update and sumRange operations must reflect real-time changes.",
        "There can be up to 30,000 update and sumRange calls.",
        "Efficient solutions typically use Segment Tree or Binary Indexed Tree.",
      ],
    },
    examples: [
      {
        input: `
NumArray numArray = new NumArray([1,3,5]);
numArray.sumRange(0,2);
numArray.update(1,2);
numArray.sumRange(0,2);
      `,
        output: `
9
8
      `,
        explanation:
          "Initial sum of indices 0 to 2 is 1 + 3 + 5 = 9. After updating index 1 to 2, array becomes [1,2,5], and sum becomes 8.",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 3 * 10⁴",
      "-100 ≤ nums[i] ≤ 100",
      "0 ≤ left ≤ right < nums.length",
      "At most 3 * 10⁴ calls will be made to update and sumRange",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

class NumArray {
public:
    NumArray(vector<int>& nums) {
        // Write your solution here
    }

    void update(int index, int val) {
        // Write your solution here
    }

    int sumRange(int left, int right) {
        // Write your solution here
        return 0;
    }
};

int main() {
    vector<int> nums = {1,3,5};
    NumArray numArray(nums);
    cout << numArray.sumRange(0,2) << endl;
    numArray.update(1,2);
    cout << numArray.sumRange(0,2) << endl;
}`,
      go: `package main
import "fmt"

type NumArray struct {}

func Constructor(nums []int) NumArray {
    return NumArray{}
}

func (this *NumArray) Update(index int, val int) {}

func (this *NumArray) SumRange(left int, right int) int {
    return 0
}

func main() {
    numArray := Constructor([]int{1,3,5})
    fmt.Println(numArray.SumRange(0,2))
    numArray.Update(1,2)
    fmt.Println(numArray.SumRange(0,2))
}`,
      ruby: `class NumArray
  def initialize(nums)
  end

  def update(index, val)
  end

  def sum_range(left, right)
    0
  end
end

num_array = NumArray.new([1,3,5])
puts num_array.sum_range(0,2)
num_array.update(1,2)
puts num_array.sum_range(0,2)`,
      rust: `struct NumArray {}

impl NumArray {
    fn new(nums: Vec<i32>) -> Self {
        NumArray {}
    }

    fn update(&mut self, index: i32, val: i32) {}

    fn sum_range(&self, left: i32, right: i32) -> i32 {
        0
    }
}

fn main() {
    let mut num_array = NumArray::new(vec![1,3,5]);
    println!("{}", num_array.sum_range(0,2));
    num_array.update(1,2);
    println!("{}", num_array.sum_range(0,2));
}`,
      javascript: `var NumArray = function(nums) {
};

NumArray.prototype.update = function(index, val) {
};

NumArray.prototype.sumRange = function(left, right) {
  return 0;
};

let numArray = new NumArray([1,3,5]);
console.log(numArray.sumRange(0,2));
numArray.update(1,2);
console.log(numArray.sumRange(0,2));`,
      python: `class NumArray:
    def __init__(self, nums):
        pass

    def update(self, index, val):
        pass

    def sumRange(self, left, right):
        return 0

numArray = NumArray([1,3,5])
print(numArray.sumRange(0,2))
numArray.update(1,2)
print(numArray.sumRange(0,2))`,
      java: `class NumArray {
    public NumArray(int[] nums) {
    }

    public void update(int index, int val) {
    }

    public int sumRange(int left, int right) {
        return 0;
    }

    public static void main(String[] args) {
        NumArray numArray = new NumArray(new int[]{1,3,5});
        System.out.println(numArray.sumRange(0,2));
        numArray.update(1,2);
        System.out.println(numArray.sumRange(0,2));
    }
}`,
    },
    expectedOutput: {
      cpp: "9\n8",
      go: "9\n8",
      ruby: "9\n8",
      rust: "9\n8",
      javascript: "9\n8",
      python: "9\n8",
      java: "9\n8",
    },
  },
  "merge-two-sorted-arrays": {
    id: "merge-two-sorted-arrays",
    title: "Merge Two Sorted Arrays",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: `
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order.

The array nums1 has a length of m + n, where the first m elements denote the valid elements, and the last n elements are set to 0 and should be ignored.

The array nums2 has a length of n.

Merge nums2 into nums1 as one sorted array in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside nums1.
`,
      notes: [
        "You must modify nums1 in-place.",
        "You may assume that nums1 has enough space to hold additional elements.",
        "Both arrays are already sorted in non-decreasing order.",
      ],
    },
    examples: [
      {
        input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
        output: "[1,2,2,3,5,6]",
        explanation: "After merging, nums1 becomes [1,2,2,3,5,6].",
      },
      {
        input: "nums1 = [1], m = 1, nums2 = [], n = 0",
        output: "[1]",
      },
      {
        input: "nums1 = [0], m = 0, nums2 = [1], n = 1",
        output: "[1]",
      },
    ],
    constraints: [
      "0 ≤ m, n ≤ 200",
      "1 ≤ m + n ≤ 200",
      "-10⁹ ≤ nums1[i], nums2[i] ≤ 10⁹",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    // Write your solution here
}

int main() {
    vector<int> nums1a = {1,2,3,0,0,0};
    vector<int> nums2a = {2,5,6};
    merge(nums1a,3,nums2a,3);
    for(int x: nums1a) cout<<x<<" ";
    cout<<endl;

    vector<int> nums1b = {1};
    vector<int> nums2b = {};
    merge(nums1b,1,nums2b,0);
    for(int x: nums1b) cout<<x<<" ";
    cout<<endl;

    vector<int> nums1c = {0};
    vector<int> nums2c = {1};
    merge(nums1c,0,nums2c,1);
    for(int x: nums1c) cout<<x<<" ";
}`,
      go: `package main
import "fmt"

func merge(nums1 []int, m int, nums2 []int, n int) {
    // Write your solution here
}

func main() {
    nums1a := []int{1,2,3,0,0,0}
    merge(nums1a,3,[]int{2,5,6},3)
    fmt.Println(nums1a)

    nums1b := []int{1}
    merge(nums1b,1,[]int{},0)
    fmt.Println(nums1b)

    nums1c := []int{0}
    merge(nums1c,0,[]int{1},1)
    fmt.Println(nums1c)
}`,
      ruby: `def merge(nums1, m, nums2, n)
  # Write your solution here
end

nums1a = [1,2,3,0,0,0]
merge(nums1a,3,[2,5,6],3)
puts nums1a.inspect

nums1b = [1]
merge(nums1b,1,[],0)
puts nums1b.inspect

nums1c = [0]
merge(nums1c,0,[1],1)
puts nums1c.inspect`,
      rust: `fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &Vec<i32>, n: i32) {
    // Write your solution here
}

fn main() {
    let mut nums1a = vec![1,2,3,0,0,0];
    let nums2a = vec![2,5,6];
    merge(&mut nums1a,3,&nums2a,3);
    println!("{:?}", nums1a);

    let mut nums1b = vec![1];
    let nums2b: Vec<i32> = vec![];
    merge(&mut nums1b,1,&nums2b,0);
    println!("{:?}", nums1b);

    let mut nums1c = vec![0];
    let nums2c = vec![1];
    merge(&mut nums1c,0,&nums2c,1);
    println!("{:?}", nums1c);
}`,
      javascript: `function merge(nums1, m, nums2, n) {
  // Write your solution here
}

let nums1a = [1,2,3,0,0,0];
merge(nums1a,3,[2,5,6],3);
console.log(nums1a);

let nums1b = [1];
merge(nums1b,1,[],0);
console.log(nums1b);

let nums1c = [0];
merge(nums1c,0,[1],1);
console.log(nums1c);`,
      python: `def merge(nums1, m, nums2, n):
    # Write your solution here
    pass

nums1a = [1,2,3,0,0,0]
merge(nums1a,3,[2,5,6],3)
print(nums1a)

nums1b = [1]
merge(nums1b,1,[],0)
print(nums1b)

nums1c = [0]
merge(nums1c,0,[1],1)
print(nums1c)`,
      java: `class Solution {
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[] nums1a = {1,2,3,0,0,0};
        merge(nums1a,3,new int[]{2,5,6},3);
        System.out.println(java.util.Arrays.toString(nums1a));

        int[] nums1b = {1};
        merge(nums1b,1,new int[]{},0);
        System.out.println(java.util.Arrays.toString(nums1b));

        int[] nums1c = {0};
        merge(nums1c,0,new int[]{1},1);
        System.out.println(java.util.Arrays.toString(nums1c));
    }
}`,
    },
    expectedOutput: {
      cpp: "1 2 2 3 5 6 \n1 \n1 ",
      go: "[1 2 2 3 5 6]\n[1]\n[1]",
      ruby: "[1, 2, 2, 3, 5, 6]\n[1]\n[1]",
      rust: "[1, 2, 2, 3, 5, 6]\n[1]\n[1]",
      javascript: "[1,2,2,3,5,6]\n[1]\n[1]",
      python: "[1, 2, 2, 3, 5, 6]\n[1]\n[1]",
      java: "[1, 2, 2, 3, 5, 6]\n[1]\n[1]",
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: `
Given an integer array nums, determine whether any value appears at least twice in the array.

Return true if any element appears more than once. Otherwise, return false.
`,
      notes: [
        "The array may contain negative numbers.",
        "If every element is distinct, return false.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
        explanation: "The element 1 appears twice.",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
        explanation: "All elements are distinct.",
      },
      {
        input: "nums = [1,1,1,3,3,4,3,2,4,2]",
        output: "true",
        explanation: "Multiple elements appear more than once.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    // Write your solution here
    return false;
}

int main() {
    vector<int> nums1 = {1,2,3,1};
    cout << boolalpha << containsDuplicate(nums1) << endl;

    vector<int> nums2 = {1,2,3,4};
    cout << boolalpha << containsDuplicate(nums2) << endl;

    vector<int> nums3 = {1,1,1,3,3,4,3,2,4,2};
    cout << boolalpha << containsDuplicate(nums3) << endl;

    return 0;
}`,
      go: `package main
import "fmt"

func containsDuplicate(nums []int) bool {
    // Write your solution here
    return false
}

func main(){
    fmt.Println(containsDuplicate([]int{1,2,3,1}))
    fmt.Println(containsDuplicate([]int{1,2,3,4}))
    fmt.Println(containsDuplicate([]int{1,1,1,3,3,4,3,2,4,2}))
}`,
      ruby: `def contains_duplicate(nums)
  # Write your solution here
  false
end

puts contains_duplicate([1,2,3,1])
puts contains_duplicate([1,2,3,4])
puts contains_duplicate([1,1,1,3,3,4,3,2,4,2])`,
      rust: `fn contains_duplicate(nums: Vec<i32>) -> bool {
    // Write your solution here
    false
}

fn main() {
    println!("{}", contains_duplicate(vec![1,2,3,1]));
    println!("{}", contains_duplicate(vec![1,2,3,4]));
    println!("{}", contains_duplicate(vec![1,1,1,3,3,4,3,2,4,2]));
}`,
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
}

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass

print(containsDuplicate([1,2,3,1]))
print(containsDuplicate([1,2,3,4]))
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))`,
      java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1}));
        System.out.println(containsDuplicate(new int[]{1,2,3,4}));
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2}));
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
};
