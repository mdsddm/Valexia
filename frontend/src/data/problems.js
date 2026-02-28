export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
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
    vector<int> nums1 = {2, 7, 11, 15};
    vector<int> result1 = twoSum(nums1, 9);
    cout << "[" << result1[0] << "," << result1[1] << "]" << endl; // Expected: [0,1]

    vector<int> nums2 = {3, 2, 4};
    vector<int> result2 = twoSum(nums2, 6);
    cout << "[" << result2[0] << "," << result2[1] << "]" << endl; // Expected: [1,2]

    vector<int> nums3 = {3, 3};
    vector<int> result3 = twoSum(nums3, 6);
    cout << "[" << result3[0] << "," << result3[1] << "]" << endl; // Expected: [0,1]

    return 0;
}`,
      go: `package main

import "fmt"

func twoSum(nums []int, target int) []int {
    // Write your solution here
    return []int{}
}

func main() {
    nums1 := []int{2, 7, 11, 15}
    result1 := twoSum(nums1, 9)
    fmt.Printf("[%d,%d]\n", result1[0], result1[1]) // Expected: [0,1]

    nums2 := []int{3, 2, 4}
    result2 := twoSum(nums2, 6)
    fmt.Printf("[%d,%d]\n", result2[0], result2[1]) // Expected: [1,2]

    nums3 := []int{3, 3}
    result3 := twoSum(nums3, 6)
    fmt.Printf("[%d,%d]\n", result3[0], result3[1]) // Expected: [0,1]
}`,
      ruby: `def two_sum(nums, target)
  # Write your solution here
  []
end

# Test cases
puts "[#{two_sum([2, 7, 11, 15], 9).join(',')}]" # Expected: [0,1]
puts "[#{two_sum([3, 2, 4], 6).join(',')}]"     # Expected: [1,2]
puts "[#{two_sum([3, 3], 6).join(',')}]"        # Expected: [0,1]`,
      rust: `fn two_sum(nums: &mut Vec<i32>, target: i32) -> Vec<i32> {
    // Write your solution here
    vec![]
}

fn main() {
    let mut nums1 = vec![2, 7, 11, 15];
    let result1 = two_sum(&mut nums1, 9);
    println!("[{},{}]", result1[0], result1[1]); // Expected: [0,1]

    let mut nums2 = vec![3, 2, 4];
    let result2 = two_sum(&mut nums2, 6);
    println!("[{},{}]", result2[0], result2[1]); // Expected: [1,2]

    let mut nums3 = vec![3, 3];
    let result3 = two_sum(&mut nums3, 6);
    println!("[{},{}]", result3[0], result3[1]); // Expected: [0,1]
}`,
      javascript: `function twoSum(nums, target) {
  // Write your solution here

}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here

        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      cpp: "[0,1]\\n[1,2]\\n[0,1]",
      go: "[0,1]\\n[1,2]\\n[0,1]",
      ruby: "[0,1]\\n[1,2]\\n[0,1]",
      rust: "[0,1]\\n[1,2]\\n[0,1]",
      javascript: "[0,1]\\n[1,2]\\n[0,1]",
      python: "[0, 1]\\n[1, 2]\\n[0, 1]",
      java: "[0, 1]\\n[1, 2]\\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: [
        "You must do this by modifying the input array in-place with O(1) extra memory.",
      ],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void reverseString(vector<char>& s) {
    // Write your solution here
}

int main() {
    vector<char> test1 = {'h','e','l','l','o'};
    reverseString(test1);
    for (char c : test1) cout << '"' << c << '"' << ',';
    cout << endl; // Expected: "o","l","l","e","h",

    vector<char> test2 = {'H','a','n','n','a','h'};
    reverseString(test2);
    for (char c : test2) cout << '"' << c << '"' << ',';
    cout << endl; // Expected: "h","a","n","n","a","H",

    return 0;
}`,
      go: `package main

import "fmt"

func reverseString(s []rune) {
    // Write your solution here
}

func main() {
    test1 := []rune{'h','e','l','l','o'}
    reverseString(test1)
    fmt.Printf("%q,", test1...) // Expected: "o" "l" "l" "e" "h"
    fmt.Println()

    test2 := []rune{'H','a','n','n','a','h'}
    reverseString(test2)
    fmt.Printf("%q,", test2...) // Expected: "h" "a" "n" "n" "a" "H"
    fmt.Println()
}`,
      ruby: `def reverse_string(s)
  # Write your solution here
end

# Test cases
test1 = ["h","e","l","l","o"]
reverse_string(test1)
puts test1.map { |c| "\"#{c}\"" }.join(",") # Expected: "o","l","l","e","h"

test2 = ["H","a","n","n","a","h"]
reverse_string(test2)
puts test2.map { |c| "\"#{c}\"" }.join(",") # Expected: "h","a","n","n","a","H"`,
      rust: `fn reverse_string(s: &mut Vec<char>) {
    // Write your solution here
}

fn main() {
    let mut test1 = vec!['h','e','l','l','o'];
    reverse_string(&mut test1);
    println!("{:?}", test1); // Expected: ['o', 'l', 'l', 'e', 'h']

    let mut test2 = vec!['H','a','n','n','a','h'];
    reverse_string(&mut test2);
    println!("{:?}", test2); // Expected: ['h', 'a', 'n', 'n', 'a', 'H']
}`,
      javascript: `function reverseString(s) {
  // Write your solution here

}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here

    }

    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]

        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      cpp: '"o","l","l","e","h",\\n"h","a","n","n","a","H",',
      go: '"o" "l" "l" "e" "h"\\n"h" "a" "n" "n" "a" "H"',
      ruby: '"o","l","l","e","h"\\n"h","a","n","n","a","H"',
      rust: "['o', 'l', 'l', 'e', 'h']\\n['h', 'a', 'n', 'n', 'a', 'H']",
      javascript: '["o","l","l","e","h"]\\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: [
        "Given a string s, return true if it is a palindrome, or false otherwise.",
      ],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
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
    cout << boolalpha << isPalindrome("A man, a plan, a canal: Panama") << endl; // Expected: true
    cout << boolalpha << isPalindrome("race a car") << endl; // Expected: false
    cout << boolalpha << isPalindrome(" ") << endl; // Expected: true
    return 0;
}`,
      go: `package main

import (
    "fmt"
    "strings"
    "unicode"
)

func isPalindrome(s string) bool {
    // Write your solution here
    return false
}

func main() {
    fmt.Println(isPalindrome("A man, a plan, a canal: Panama")) // Expected: true
    fmt.Println(isPalindrome("race a car"))                     // Expected: false
    fmt.Println(isPalindrome(" "))                             // Expected: true
}`,
      ruby: `def is_palindrome(s)
  # Write your solution here
  false
end

# Test cases
puts is_palindrome("A man, a plan, a canal: Panama") # Expected: true
puts is_palindrome("race a car")                     # Expected: false
puts is_palindrome(" ")                              # Expected: true`,
      rust: `fn is_palindrome(s: &str) -> bool {
    // Write your solution here
    false
}

fn main() {
    println!("{}", is_palindrome("A man, a plan, a canal: Panama")); // Expected: true
    println!("{}", is_palindrome("race a car"));                     // Expected: false
    println!("{}", is_palindrome(" "));                              // Expected: true
}`,
      javascript: `function isPalindrome(s) {
  // Write your solution here

}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here

        return false;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      cpp: "true\\nfalse\\ntrue",
      go: "true\\nfalse\\ntrue",
      ruby: "true\\nfalse\\ntrue",
      rust: "true\\nfalse\\ntrue",
      javascript: "true\\nfalse\\ntrue",
      python: "True\\nFalse\\nTrue",
      java: "true\\nfalse\\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
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
    cout << maxSubArray(nums1) << endl; // Expected: 6

    vector<int> nums2 = {1};
    cout << maxSubArray(nums2) << endl; // Expected: 1

    vector<int> nums3 = {5,4,-1,7,8};
    cout << maxSubArray(nums3) << endl; // Expected: 23

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
    fmt.Println(maxSubArray(nums1)) // Expected: 6

    nums2 := []int{1}
    fmt.Println(maxSubArray(nums2)) // Expected: 1

    nums3 := []int{5,4,-1,7,8}
    fmt.Println(maxSubArray(nums3)) // Expected: 23
}`,
      ruby: `def max_sub_array(nums)
  # Write your solution here
  0
end

# Test cases
puts max_sub_array([-2,1,-3,4,-1,2,1,-5,4]) # Expected: 6
puts max_sub_array([1])                       # Expected: 1
puts max_sub_array([5,4,-1,7,8])              # Expected: 23`,
      rust: `fn max_sub_array(nums: &[i32]) -> i32 {
    // Write your solution here
    0
}

fn main() {
    let nums1 = vec![-2,1,-3,4,-1,2,1,-5,4];
    println!("{}", max_sub_array(&nums1)); // Expected: 6

    let nums2 = vec![1];
    println!("{}", max_sub_array(&nums2)); // Expected: 1

    let nums3 = vec![5,4,-1,7,8];
    println!("{}", max_sub_array(&nums3)); // Expected: 23
}`,
      javascript: `function maxSubArray(nums) {
  // Write your solution here

}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      cpp: "6\\n1\\n23",
      go: "6\\n1\\n23",
      ruby: "6\\n1\\n23",
      rust: "6\\n1\\n23",
      javascript: "6\\n1\\n23",
      python: "6\\n1\\n23",
      java: "6\\n1\\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
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
    cout << maxArea(height1) << endl; // Expected: 49

    vector<int> height2 = {1,1};
    cout << maxArea(height2) << endl; // Expected: 1

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
    fmt.Println(maxArea(height1)) // Expected: 49

    height2 := []int{1,1}
    fmt.Println(maxArea(height2)) // Expected: 1
}`,
      ruby: `def max_area(height)
  # Write your solution here
  0
end

# Test cases
puts max_area([1,8,6,2,5,4,8,3,7]) # Expected: 49
puts max_area([1,1])                 # Expected: 1`,
      rust: `fn max_area(height: &[i32]) -> i32 {
    // Write your solution here
    0
}

fn main() {
    let height1 = vec![1,8,6,2,5,4,8,3,7];
    println!("{}", max_area(&height1)); // Expected: 49

    let height2 = vec![1,1];
    println!("{}", max_area(&height2)); // Expected: 1
}`,
      javascript: `function maxArea(height) {
  // Write your solution here

}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here

        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      cpp: "49\\n1",
      go: "49\\n1",
      ruby: "49\\n1",
      rust: "49\\n1",
      javascript: "49\\n1",
      python: "49\\n1",
      java: "49\\n1",
    },
  },
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
