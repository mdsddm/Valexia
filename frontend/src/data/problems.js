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
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
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
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
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
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },
  "best-time-to-buy-and-sell-stock": {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Dynamic Programming",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day.",
      notes: [
        "You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
        "Return the maximum profit you can achieve.",
        "If you cannot achieve any profit, return 0.",
      ],
    },
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation:
          "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No transactions are done and the max profit = 0.",
      },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here

}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))  # Expected: 0`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1})); // Expected: 0
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array.",
      notes: ["Return false if every element is distinct."],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
      },
      {
        input: "nums = [1,1,1,3,3,4,3,2,4,2]",
        output: "true",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here

}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Expected: true`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(containsDuplicate([1,2,3,1]))  # Expected: True
print(containsDuplicate([1,2,3,4]))  # Expected: False
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))  # Expected: True`,
      java: `import java.util.*;

class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1})); // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4})); // Expected: false
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2})); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "move-zeroes": {
    id: "move-zeroes",
    title: "Move Zeroes",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
      notes: ["You must do this in-place without making a copy of the array."],
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
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-2³¹ ≤ nums[i] ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function moveZeroes(nums) {
  // Write your solution here

}

// Test cases
let arr1 = [0,1,0,3,12];
moveZeroes(arr1);
console.log(arr1); // Expected: [1,3,12,0,0]

let arr2 = [0];
moveZeroes(arr2);
console.log(arr2); // Expected: [0]`,
      python: `def moveZeroes(nums):
    # Write your solution here
    pass

# Test cases
arr1 = [0,1,0,3,12]
moveZeroes(arr1)
print(arr1)  # Expected: [1,3,12,0,0]

arr2 = [0]
moveZeroes(arr2)
print(arr2)  # Expected: [0]`,
      java: `import java.util.*;

class Solution {
    public static void moveZeroes(int[] nums) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[] arr1 = {0,1,0,3,12};
        moveZeroes(arr1);
        System.out.println(Arrays.toString(arr1)); // Expected: [1, 3, 12, 0, 0]

        int[] arr2 = {0};
        moveZeroes(arr2);
        System.out.println(Arrays.toString(arr2)); // Expected: [0]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,3,12,0,0]\n[0]",
      python: "[1, 3, 12, 0, 0]\n[0]",
      java: "[1, 3, 12, 0, 0]\n[0]",
    },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
      notes: [
        "An Anagram is a word formed by rearranging the letters of another word.",
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
    ],
    constraints: [
      "1 ≤ s.length, t.length ≤ 5 * 10⁴",
      "s and t consist of lowercase English letters",
    ],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here

}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false`,
      python: `def isAnagram(s, t):
    # Write your solution here
    pass

# Test cases
print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))  # Expected: False`,
      java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(isAnagram("rat", "car")); // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top.",
      notes: [
        "Each time you can either climb 1 or 2 steps.",
        "In how many distinct ways can you climb to the top?",
      ],
    },
    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "1+1 or 2",
      },
      {
        input: "n = 3",
        output: "3",
        explanation: "1+1+1, 1+2, 2+1",
      },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here

}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3`,
      python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3`,
      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(2)); // Expected: 2
        System.out.println(climbStairs(3)); // Expected: 3
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n3",
      python: "2\n3",
      java: "2\n3",
    },
  },
  "merge-sorted-array": {
    id: "merge-sorted-array",
    title: "Merge Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n.",
      notes: [
        "Merge nums2 into nums1 as one sorted array.",
        "The final sorted array should not be returned by the function, but instead be stored inside the array nums1.",
        "nums1 has a length of m + n, where the first m elements denote the elements that should be merged.",
      ],
    },
    examples: [
      {
        input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
        output: "[1,2,2,3,5,6]",
      },
      {
        input: "nums1 = [1], m = 1, nums2 = [], n = 0",
        output: "[1]",
      },
    ],
    constraints: [
      "nums1.length == m + n",
      "nums2.length == n",
      "0 ≤ m, n ≤ 200",
      "-10⁹ ≤ nums1[i], nums2[i] ≤ 10⁹",
    ],
    starterCode: {
      javascript: `function merge(nums1, m, nums2, n) {
  // Write your solution here

}

// Test cases
let arr1 = [1,2,3,0,0,0];
merge(arr1, 3, [2,5,6], 3);
console.log(arr1); // Expected: [1,2,2,3,5,6]`,
      python: `def merge(nums1, m, nums2, n):
    # Write your solution here
    pass

# Test cases
arr1 = [1,2,3,0,0,0]
merge(arr1, 3, [2,5,6], 3)
print(arr1)  # Expected: [1,2,2,3,5,6]`,
      java: `import java.util.*;

class Solution {
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[] arr1 = {1,2,3,0,0,0};
        merge(arr1, 3, new int[]{2,5,6}, 3);
        System.out.println(Arrays.toString(arr1)); // Expected: [1, 2, 2, 3, 5, 6]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2,2,3,5,6]",
      python: "[1, 2, 2, 3, 5, 6]",
      java: "[1, 2, 2, 3, 5, 6]",
    },
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given an array of integers nums sorted in ascending order, and an integer target, write a function to search target in nums.",
      notes: ["If target exists, return its index.", "Otherwise, return -1."],
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
      "nums is sorted in ascending order",
    ],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here

}

// Test cases
console.log(search([-1,0,3,5,9,12], 9)); // Expected: 4
console.log(search([-1,0,3,5,9,12], 2)); // Expected: -1`,
      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
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
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
    },
  },

  "majority-element": {
    id: "majority-element",
    title: "Majority Element",
    difficulty: "Easy",
    category: "Array • Divide and Conquer",
    description: {
      text: "Given an array nums of size n, return the majority element.",
      notes: [
        "The majority element is the element that appears more than ⌊n / 2⌋ times.",
        "You may assume that the majority element always exists in the array.",
      ],
    },
    examples: [
      { input: "nums = [3,2,3]", output: "3" },
      { input: "nums = [2,2,1,1,1,2,2]", output: "2" },
    ],
    constraints: [
      "n == nums.length",
      "1 ≤ n ≤ 5 * 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
    ],
    starterCode: {
      javascript: `function majorityElement(nums) {
  // Write your solution here

}

// Test cases
console.log(majorityElement([3,2,3])); // Expected: 3
console.log(majorityElement([2,2,1,1,1,2,2])); // Expected: 2`,
      python: `def majorityElement(nums):
    # Write your solution here
    pass

# Test cases
print(majorityElement([3,2,3]))  # Expected: 3
print(majorityElement([2,2,1,1,1,2,2]))  # Expected: 2`,
      java: `class Solution {
    public static int majorityElement(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(majorityElement(new int[]{3,2,3})); // Expected: 3
        System.out.println(majorityElement(new int[]{2,2,1,1,1,2,2})); // Expected: 2
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n2",
      python: "3\n2",
      java: "3\n2",
    },
  },

  "remove-duplicates-from-sorted-array": {
    id: "remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.",
      notes: [
        "Return the number of unique elements.",
        "The first k elements of nums should contain the unique elements.",
      ],
    },
    examples: [
      { input: "nums = [1,1,2]", output: "2" },
      { input: "nums = [0,0,1,1,1,2,2,3,3,4]", output: "5" },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 3 * 10⁴",
      "-100 ≤ nums[i] ≤ 100",
      "nums is sorted in non-decreasing order",
    ],
    starterCode: {
      javascript: `function removeDuplicates(nums) {
  // Write your solution here

}

// Test cases
let arr1 = [1,1,2];
console.log(removeDuplicates(arr1)); // Expected: 2

let arr2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(arr2)); // Expected: 5`,
      python: `def removeDuplicates(nums):
    # Write your solution here
    pass

# Test cases
arr1 = [1,1,2]
print(removeDuplicates(arr1))  # Expected: 2

arr2 = [0,0,1,1,1,2,2,3,3,4]
print(removeDuplicates(arr2))  # Expected: 5`,
      java: `class Solution {
    public static int removeDuplicates(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(removeDuplicates(new int[]{1,1,2})); // Expected: 2
        System.out.println(removeDuplicates(new int[]{0,0,1,1,1,2,2,3,3,4})); // Expected: 5
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n5",
      python: "2\n5",
      java: "2\n5",
    },
  },

  "plus-one": {
    id: "plus-one",
    title: "Plus One",
    difficulty: "Easy",
    category: "Array • Math",
    description: {
      text: "You are given a large integer represented as an integer array digits.",
      notes: [
        "Each digits[i] is a single digit.",
        "The digits are ordered from most significant to least significant.",
        "Increment the large integer by one and return the resulting array of digits.",
      ],
    },
    examples: [
      { input: "digits = [1,2,3]", output: "[1,2,4]" },
      { input: "digits = [9,9]", output: "[1,0,0]" },
    ],
    constraints: [
      "1 ≤ digits.length ≤ 100",
      "0 ≤ digits[i] ≤ 9",
      "digits does not contain leading zeros",
    ],
    starterCode: {
      javascript: `function plusOne(digits) {
  // Write your solution here

}

// Test cases
console.log(plusOne([1,2,3])); // Expected: [1,2,4]
console.log(plusOne([9,9])); // Expected: [1,0,0]`,
      python: `def plusOne(digits):
    # Write your solution here
    pass

# Test cases
print(plusOne([1,2,3]))  # Expected: [1,2,4]
print(plusOne([9,9]))  # Expected: [1,0,0]`,
      java: `import java.util.*;

class Solution {
    public static int[] plusOne(int[] digits) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(plusOne(new int[]{1,2,3}))); // Expected: [1, 2, 4]
        System.out.println(Arrays.toString(plusOne(new int[]{9,9}))); // Expected: [1, 0, 0]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2,4]\n[1,0,0]",
      python: "[1, 2, 4]\n[1, 0, 0]",
      java: "[1, 2, 4]\n[1, 0, 0]",
    },
  },
  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
      notes: ["The solution set must not contain duplicate triplets."],
    },
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
      },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here

}

// Test cases
console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // Expected: []`,
      python: `def threeSum(nums):
    # Write your solution here
    pass

# Test cases
print(threeSum([-1,0,1,2,-1,-4]))  # Expected: [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1]))  # Expected: []`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4}));
        System.out.println(threeSum(new int[]{0,1,1}));
    }
}`,
    },
    expectedOutput: {
      javascript: "[[-1,-1,2],[-1,0,1]]\n[]",
      python: "[[-1, -1, 2], [-1, 0, 1]]\n[]",
      java: "[[-1, -1, 2], [-1, 0, 1]]\n[]",
    },
  },

  "longest-substring-without-repeating-characters": {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: "The answer is 'abc', with the length of 3.",
      },
      {
        input: 's = "bbbbb"',
        output: "1",
      },
    ],
    constraints: [
      "0 ≤ s.length ≤ 5 * 10⁴",
      "s consists of English letters, digits, symbols and spaces",
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here

}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1`,
      java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n1",
      python: "3\n1",
      java: "3\n1",
    },
  },

  "search-in-rotated-sorted-array": {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "There is an integer array nums sorted in ascending order (with distinct values).",
      notes: [
        "Prior to being passed to your function, nums is possibly rotated at an unknown pivot index.",
        "Given the array nums after rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
        "You must write an algorithm with O(log n) runtime complexity.",
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
    ],
    constraints: [
      "1 ≤ nums.length ≤ 5000",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "All values of nums are unique",
    ],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here

}

// Test cases
console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1`,
      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([4,5,6,7,0,1,2], 0))  # Expected: 4
print(search([4,5,6,7,0,1,2], 3))  # Expected: -1`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0)); // Expected: 4
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3)); // Expected: -1
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
    },
  },

  "merge-intervals": {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Array • Sorting",
    description: {
      text: "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
      notes: [],
    },
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      },
    ],
    constraints: ["1 ≤ intervals.length ≤ 10⁴", "0 ≤ start ≤ end ≤ 10⁴"],
    starterCode: {
      javascript: `function merge(intervals) {
  // Write your solution here

}

// Test case
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Expected: [[1,6],[8,10],[15,18]]`,
      python: `def merge(intervals):
    # Write your solution here
    pass

# Test case
print(merge([[1,3],[2,6],[8,10],[15,18]]))  # Expected: [[1,6],[8,10],[15,18]]`,
      java: `import java.util.*;

class Solution {
    public static int[][] merge(int[][] intervals) {
        // Write your solution here
        return new int[0][];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,3},{2,6},{8,10},{15,18}})));
    }
}`,
    },
    expectedOutput: {
      javascript: "[[1,6],[8,10],[15,18]]",
      python: "[[1, 6], [8, 10], [15, 18]]",
      java: "[[1, 6], [8, 10], [15, 18]]",
    },
  },

  "median-of-two-sorted-arrays": {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Array • Binary Search",
    description: {
      text: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
      notes: ["The overall run time complexity should be O(log (m+n))."],
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
      "0 ≤ m, n ≤ 1000",
      "1 ≤ m + n ≤ 2000",
      "-10⁶ ≤ nums1[i], nums2[i] ≤ 10⁶",
    ],
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write your solution here

}

// Test cases
console.log(findMedianSortedArrays([1,3], [2])); // Expected: 2.0
console.log(findMedianSortedArrays([1,2], [3,4])); // Expected: 2.5`,
      python: `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass

# Test cases
print(findMedianSortedArrays([1,3], [2]))  # Expected: 2.0
print(findMedianSortedArrays([1,2], [3,4]))  # Expected: 2.5`,
      java: `class Solution {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        return 0.0;
    }

    public static void main(String[] args) {
        System.out.println(findMedianSortedArrays(new int[]{1,3}, new int[]{2})); // Expected: 2.0
        System.out.println(findMedianSortedArrays(new int[]{1,2}, new int[]{3,4})); // Expected: 2.5
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n2.5",
      python: "2.0\n2.5",
      java: "2.0\n2.5",
    },
  },
  "word-ladder": {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    category: "Graph • BFS",
    description: {
      text: "Given two words, beginWord and endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord.",
      notes: [
        "Only one letter can be changed at a time.",
        "Each transformed word must exist in the wordList.",
        "Return 0 if no such transformation sequence exists.",
      ],
    },
    examples: [
      {
        input:
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: "5",
        explanation:
          "One shortest transformation is hit → hot → dot → dog → cog.",
      },
      {
        input:
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]',
        output: "0",
      },
    ],
    constraints: [
      "1 ≤ beginWord.length ≤ 10",
      "endWord.length == beginWord.length",
      "1 ≤ wordList.length ≤ 5000",
    ],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {
  // Write your solution here

}

// Test cases
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Expected: 5
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // Expected: 0`,
      python: `def ladderLength(beginWord, endWord, wordList):
    # Write your solution here
    pass

# Test cases
print(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]))  # Expected: 5
print(ladderLength("hit","cog",["hot","dot","dog","lot","log"]))  # Expected: 0`,
      java: `import java.util.*;

class Solution {
    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
    },
  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers • DP",
    description: {
      text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
      notes: [],
    },
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
      },
    ],
    constraints: ["1 ≤ height.length ≤ 2 * 10⁴", "0 ≤ height[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function trap(height) {
  // Write your solution here

}

// Test case
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6`,
      python: `def trap(height):
    # Write your solution here
    pass

print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Expected: 6`,
      java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "6",
      python: "6",
      java: "6",
    },
  },

  "n-queens": {
    id: "n-queens",
    title: "N-Queens",
    difficulty: "Hard",
    category: "Backtracking",
    description: {
      text: "The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.",
      notes: [
        "Return all distinct solutions to the n-queens puzzle.",
        "Each solution contains a distinct board configuration.",
      ],
    },
    examples: [
      {
        input: "n = 4",
        output: `[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]`,
      },
    ],
    constraints: ["1 ≤ n ≤ 9"],
    starterCode: {
      javascript: `function solveNQueens(n) {
  // Write your solution here

}

// Test case
console.log(solveNQueens(4));`,
      python: `def solveNQueens(n):
    # Write your solution here
    pass

print(solveNQueens(4))`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> solveNQueens(int n) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: "Two valid board configurations",
      python: "Two valid board configurations",
      java: "Two valid board configurations",
    },
  },

  "course-schedule": {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    category: "Graph • Topological Sort",
    description: {
      text: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.",
      notes: [
        "You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you must take course b first.",
        "Return true if you can finish all courses.",
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
    ],
    constraints: ["1 ≤ numCourses ≤ 2000", "0 ≤ prerequisites.length ≤ 5000"],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {
  // Write your solution here

}

// Test cases
console.log(canFinish(2, [[1,0]])); // Expected: true
console.log(canFinish(2, [[1,0],[0,1]])); // Expected: false`,
      python: `def canFinish(numCourses, prerequisites):
    # Write your solution here
    pass

print(canFinish(2, [[1,0]]))  # Expected: True
print(canFinish(2, [[1,0],[0,1]]))  # Expected: False`,
      java: `class Solution {
    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "top-k-frequent-elements": {
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    category: "Array • Heap • Hash Table",
    description: {
      text: "Given an integer array nums and an integer k, return the k most frequent elements.",
      notes: [
        "You may return the answer in any order.",
        "The algorithm's time complexity must be better than O(n log n).",
      ],
    },
    examples: [
      {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "k is in the range [1, number of unique elements]",
    ],
    starterCode: {
      javascript: `function topKFrequent(nums, k) {
  // Write your solution here

}

// Test case
console.log(topKFrequent([1,1,1,2,2,3], 2)); // Expected: [1,2]`,
      python: `def topKFrequent(nums, k):
    # Write your solution here
    pass

print(topKFrequent([1,1,1,2,2,3], 2))  # Expected: [1,2]`,
      java: `import java.util.*;

class Solution {
    public static int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        return new int[0];
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2]",
      python: "[1, 2]",
      java: "[1, 2]",
    },
  },
  "edit-distance": {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "Hard",
    category: "Dynamic Programming • String",
    description: {
      text: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
      notes: [
        "You have the following three operations permitted on a word:",
        "Insert a character",
        "Delete a character",
        "Replace a character",
      ],
    },
    examples: [
      {
        input: 'word1 = "horse", word2 = "ros"',
        output: "3",
        explanation:
          "horse → rorse (replace h with r) → rose (remove r) → ros (remove e)",
      },
      {
        input: 'word1 = "intention", word2 = "execution"',
        output: "5",
      },
    ],
    constraints: [
      "0 ≤ word1.length, word2.length ≤ 500",
      "word1 and word2 consist of lowercase English letters",
    ],
    starterCode: {
      javascript: `function minDistance(word1, word2) {
  // Write your solution here

}

// Test cases
console.log(minDistance("horse", "ros")); // Expected: 3
console.log(minDistance("intention", "execution")); // Expected: 5`,
      python: `def minDistance(word1, word2):
    # Write your solution here
    pass

# Test cases
print(minDistance("horse", "ros"))  # Expected: 3
print(minDistance("intention", "execution"))  # Expected: 5`,
      java: `class Solution {
    public static int minDistance(String word1, String word2) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n5",
      python: "3\n5",
      java: "3\n5",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
      notes: [
        "You must solve it without using division.",
        "The solution must run in O(n) time.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
      },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here

}

// Test case
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

print(productExceptSelf([1,2,3,4]))  # Expected: [24,12,8,6]`,
      java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        return new int[0];
    }
}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]",
      python: "[24, 12, 8, 6]",
      java: "[24, 12, 8, 6]",
    },
  },

  "kth-largest-element-in-an-array": {
    id: "kth-largest-element-in-an-array",
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    category: "Array • Heap • Quickselect",
    description: {
      text: "Given an integer array nums and an integer k, return the kth largest element in the array.",
      notes: [
        "It is the kth largest element in sorted order, not the kth distinct element.",
      ],
    },
    examples: [
      {
        input: "nums = [3,2,1,5,6,4], k = 2",
        output: "5",
      },
      {
        input: "nums = [3,2,3,1,2,4,5,5,6], k = 4",
        output: "4",
      },
    ],
    constraints: ["1 ≤ k ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function findKthLargest(nums, k) {
  // Write your solution here

}

// Test cases
console.log(findKthLargest([3,2,1,5,6,4], 2)); // Expected: 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // Expected: 4`,
      python: `def findKthLargest(nums, k):
    # Write your solution here
    pass

print(findKthLargest([3,2,1,5,6,4], 2))  # Expected: 5
print(findKthLargest([3,2,3,1,2,4,5,5,6], 4))  # Expected: 4`,
      java: `class Solution {
    public static int findKthLargest(int[] nums, int k) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n4",
      python: "5\n4",
      java: "5\n4",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack • String",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An input string is valid if:",
        "Open brackets must be closed by the same type of brackets.",
        "Open brackets must be closed in the correct order.",
      ],
    },
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only"],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here

}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false`,
      python: `def isValid(s):
    # Write your solution here
    pass

print(isValid("()"))  # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))  # Expected: False`,
      java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },

  "maximum-depth-of-binary-tree": {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "Given the root of a binary tree, return its maximum depth.",
      notes: [
        "The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
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
      "The number of nodes in the tree is in the range [0, 10⁴]",
      "-100 ≤ Node.val ≤ 100",
    ],
    starterCode: {
      javascript: `function maxDepth(root) {
  // Write your solution here

}

// TreeNode definition assumed`,
      python: `def maxDepth(root):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static int maxDepth(TreeNode root) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n2",
      python: "3\n2",
      java: "3\n2",
    },
  },
  "single-number": {
    id: "single-number",
    title: "Single Number",
    difficulty: "Easy",
    category: "Array • Bit Manipulation",
    description: {
      text: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
      notes: [
        "You must implement a solution with O(n) runtime complexity.",
        "Use only constant extra space.",
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
    ],
    constraints: ["1 ≤ nums.length ≤ 3 * 10⁴", "-3 * 10⁴ ≤ nums[i] ≤ 3 * 10⁴"],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here

}

// Test cases
console.log(singleNumber([2,2,1])); // Expected: 1
console.log(singleNumber([4,1,2,1,2])); // Expected: 4`,
      python: `def singleNumber(nums):
    # Write your solution here
    pass

# Test cases
print(singleNumber([2,2,1]))  # Expected: 1
print(singleNumber([4,1,2,1,2]))  # Expected: 4`,
      java: `class Solution {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(singleNumber(new int[]{2,2,1})); // Expected: 1
        System.out.println(singleNumber(new int[]{4,1,2,1,2})); // Expected: 4
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n4",
      python: "1\n4",
      java: "1\n4",
    },
  },

  "daily-temperatures": {
    id: "daily-temperatures",
    title: "Daily Temperatures",
    difficulty: "Medium",
    category: "Stack • Monotonic Stack",
    description: {
      text: "Given an array of integers temperatures, return an array answer such that answer[i] is the number of days until a warmer temperature.",
      notes: [
        "If there is no future day for which this is possible, keep answer[i] == 0.",
      ],
    },
    examples: [
      {
        input: "temperatures = [73,74,75,71,69,72,76,73]",
        output: "[1,1,4,2,1,1,0,0]",
      },
    ],
    constraints: [
      "1 ≤ temperatures.length ≤ 10⁵",
      "30 ≤ temperatures[i] ≤ 100",
    ],
    starterCode: {
      javascript: `function dailyTemperatures(temperatures) {
  // Write your solution here

}

// Test case
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
// Expected: [1,1,4,2,1,1,0,0]`,
      python: `def dailyTemperatures(temperatures):
    # Write your solution here
    pass

print(dailyTemperatures([73,74,75,71,69,72,76,73]))
# Expected: [1,1,4,2,1,1,0,0]`,
      java: `import java.util.*;

class Solution {
    public static int[] dailyTemperatures(int[] temperatures) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(
            dailyTemperatures(new int[]{73,74,75,71,69,72,76,73})
        ));
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,4,2,1,1,0,0]",
      python: "[1, 1, 4, 2, 1, 1, 0, 0]",
      java: "[1, 1, 4, 2, 1, 1, 0, 0]",
    },
  },

  "number-of-connected-components-in-an-undirected-graph": {
    id: "number-of-connected-components-in-an-undirected-graph",
    title: "Number of Connected Components in an Undirected Graph",
    difficulty: "Medium",
    category: "Graph • Union Find",
    description: {
      text: "Given n nodes labeled from 0 to n - 1 and a list of undirected edges, return the number of connected components in the graph.",
      notes: [],
    },
    examples: [
      {
        input: "n = 5, edges = [[0,1],[1,2],[3,4]]",
        output: "2",
      },
    ],
    constraints: ["1 ≤ n ≤ 2000", "1 ≤ edges.length ≤ 5000"],
    starterCode: {
      javascript: `function countComponents(n, edges) {
  // Write your solution here

}

// Test case
console.log(countComponents(5, [[0,1],[1,2],[3,4]]));
// Expected: 2`,
      python: `def countComponents(n, edges):
    # Write your solution here
    pass

print(countComponents(5, [[0,1],[1,2],[3,4]]))
# Expected: 2`,
      java: `class Solution {
    public static int countComponents(int n, int[][] edges) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  "longest-increasing-subsequence": {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "Hard",
    category: "Dynamic Programming • Binary Search",
    description: {
      text: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
      notes: [
        "A subsequence is derived by deleting some elements without changing order.",
      ],
    },
    examples: [
      {
        input: "nums = [10,9,2,5,3,7,101,18]",
        output: "4",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 2500", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function lengthOfLIS(nums) {
  // Write your solution here

}

// Test case
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
// Expected: 4`,
      python: `def lengthOfLIS(nums):
    # Write your solution here
    pass

print(lengthOfLIS([10,9,2,5,3,7,101,18]))
# Expected: 4`,
      java: `class Solution {
    public static int lengthOfLIS(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
    },
  },

  "lru-cache": {
    id: "lru-cache",
    title: "LRU Cache",
    difficulty: "Hard",
    category: "Design • Hash Map • Doubly Linked List",
    description: {
      text: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
      notes: [
        "Implement LRUCache class with get and put.",
        "Both operations must run in O(1) time.",
      ],
    },
    examples: [
      {
        input: "LRUCache(2), put(1,1), put(2,2), get(1), put(3,3), get(2)",
        output: "1, -1",
      },
    ],
    constraints: ["1 ≤ capacity ≤ 3000"],
    starterCode: {
      javascript: `class LRUCache {
  constructor(capacity) {
    // Write your solution here
  }

  get(key) {}

  put(key, value) {}
}

// Example usage
const lru = new LRUCache(2);
lru.put(1,1);
lru.put(2,2);
console.log(lru.get(1)); // Expected: 1
lru.put(3,3);
console.log(lru.get(2)); // Expected: -1`,
      python: `class LRUCache:
    def __init__(self, capacity):
        # Write your solution here
        pass

    def get(self, key):
        pass

    def put(self, key, value):
        pass

# Example usage
lru = LRUCache(2)
lru.put(1,1)
lru.put(2,2)
print(lru.get(1))  # Expected: 1
lru.put(3,3)
print(lru.get(2))  # Expected: -1`,
      java: `import java.util.*;

class LRUCache {
    public LRUCache(int capacity) {
        // Write your solution here
    }

    public int get(int key) {
        return -1;
    }

    public void put(int key, int value) {
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n-1",
      python: "1\n-1",
      java: "1\n-1",
    },
  },
  "validate-binary-search-tree": {
    id: "validate-binary-search-tree",
    title: "Validate Binary Search Tree",
    difficulty: "Easy",
    category: "Tree • DFS • BST",
    description: {
      text: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
      notes: [
        "The left subtree of a node contains only nodes with keys less than the node's key.",
        "The right subtree contains only nodes with keys greater than the node's key.",
        "Both left and right subtrees must also be BSTs.",
      ],
    },
    examples: [
      {
        input: "root = [2,1,3]",
        output: "true",
      },
      {
        input: "root = [5,1,4,null,null,3,6]",
        output: "false",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [1, 10⁴]",
      "-2³¹ ≤ Node.val ≤ 2³¹ - 1",
    ],
    starterCode: {
      javascript: `function isValidBST(root) {
  // Write your solution here
}

// Assume TreeNode definition exists`,
      python: `def isValidBST(root):
    # Write your solution here
    pass`,
      java: `class Solution {
    public static boolean isValidBST(TreeNode root) {
        // Write your solution here
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "jump-game": {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    category: "Array • Greedy",
    description: {
      text: "Given an array nums where each element represents your maximum jump length at that position, determine if you can reach the last index.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [2,3,1,1,4]",
        output: "true",
      },
      {
        input: "nums = [3,2,1,0,4]",
        output: "false",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "0 ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function canJump(nums) {
  // Write your solution here
}

console.log(canJump([2,3,1,1,4])); // Expected: true
console.log(canJump([3,2,1,0,4])); // Expected: false`,
      python: `def canJump(nums):
    pass

print(canJump([2,3,1,1,4]))  # Expected: True
print(canJump([3,2,1,0,4]))  # Expected: False`,
      java: `class Solution {
    public static boolean canJump(int[] nums) {
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Dynamic Programming • Knapsack",
    description: {
      text: "You are given an integer array coins representing coins of different denominations and an integer amount.",
      notes: [
        "Return the fewest number of coins needed to make up that amount.",
        "If it is not possible, return -1.",
      ],
    },
    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
      },
      {
        input: "coins = [2], amount = 3",
        output: "-1",
      },
    ],
    constraints: [
      "1 ≤ coins.length ≤ 12",
      "1 ≤ coins[i] ≤ 2³¹ - 1",
      "0 ≤ amount ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
  // Write your solution here
}

console.log(coinChange([1,2,5], 11)); // Expected: 3
console.log(coinChange([2], 3)); // Expected: -1`,
      python: `def coinChange(coins, amount):
    pass

print(coinChange([1,2,5], 11))  # Expected: 3
print(coinChange([2], 3))  # Expected: -1`,
      java: `class Solution {
    public static int coinChange(int[] coins, int amount) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n-1",
      python: "3\n-1",
      java: "3\n-1",
    },
  },

  "implement-trie-prefix-tree": {
    id: "implement-trie-prefix-tree",
    title: "Implement Trie (Prefix Tree)",
    difficulty: "Hard",
    category: "Trie • Design",
    description: {
      text: "Implement a Trie with insert, search, and startsWith methods.",
      notes: ["All inputs consist of lowercase English letters."],
    },
    examples: [
      {
        input:
          "insert('apple'), search('apple'), search('app'), startsWith('app')",
        output: "true, false, true",
      },
    ],
    constraints: ["1 ≤ word.length ≤ 2000"],
    starterCode: {
      javascript: `class Trie {
  constructor() {
    // Write your solution here
  }
  insert(word) {}
  search(word) {}
  startsWith(prefix) {}
}`,
      python: `class Trie:
    def __init__(self):
        pass
    def insert(self, word):
        pass
    def search(self, word):
        pass
    def startsWith(self, prefix):
        pass`,
      java: `class Trie {
    public Trie() {}
    public void insert(String word) {}
    public boolean search(String word) { return false; }
    public boolean startsWith(String prefix) { return false; }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "network-delay-time": {
    id: "network-delay-time",
    title: "Network Delay Time",
    difficulty: "Hard",
    category: "Graph • Dijkstra",
    description: {
      text: "You are given a network of n nodes labeled from 1 to n. You are given times, a list of travel times as directed edges.",
      notes: [
        "Return the time it takes for all nodes to receive the signal sent from node k.",
        "If it is impossible, return -1.",
      ],
    },
    examples: [
      {
        input: "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
        output: "2",
      },
    ],
    constraints: ["1 ≤ n ≤ 100", "1 ≤ times.length ≤ 6000", "0 ≤ weight ≤ 100"],
    starterCode: {
      javascript: `function networkDelayTime(times, n, k) {
  // Write your solution here
}

console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],4,2));
// Expected: 2`,
      python: `def networkDelayTime(times, n, k):
    pass

print(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],4,2))
# Expected: 2`,
      java: `class Solution {
    public static int networkDelayTime(int[][] times, int n, int k) {
        return -1;
    }
}`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },
  "merge-two-binary-trees": {
    id: "merge-two-binary-trees",
    title: "Merge Two Binary Trees",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: "You are given two binary trees root1 and root2. Merge them into a new binary tree.",
      notes: [
        "If two nodes overlap, sum their values.",
        "Otherwise, use the non-null node.",
      ],
    },
    examples: [
      {
        input: "root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]",
        output: "[3,4,5,5,4,null,7]",
      },
    ],
    constraints: [
      "The number of nodes in both trees is in the range [0, 2000].",
      "-10⁴ ≤ Node.val ≤ 10⁴",
    ],
    starterCode: {
      javascript: `function mergeTrees(root1, root2) {
  // Write your solution here
}`,
      python: `def mergeTrees(root1, root2):
    pass`,
      java: `class Solution {
    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
        return null;
    }
}`,
    },
    expectedOutput: {
      javascript: "[3,4,5,5,4,null,7]",
      python: "[3,4,5,5,4,null,7]",
      java: "[3,4,5,5,4,null,7]",
    },
  },

  subsets: {
    id: "subsets",
    title: "Subsets",
    difficulty: "Medium",
    category: "Backtracking",
    description: {
      text: "Given an integer array nums of unique elements, return all possible subsets (the power set).",
      notes: ["The solution set must not contain duplicate subsets."],
    },
    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10", "-10 ≤ nums[i] ≤ 10"],
    starterCode: {
      javascript: `function subsets(nums) {
  // Write your solution here
}`,
      python: `def subsets(nums):
    pass`,
      java: `class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: "All subsets printed",
      python: "All subsets printed",
      java: "All subsets printed",
    },
  },

  "rotting-oranges": {
    id: "rotting-oranges",
    title: "Rotting Oranges",
    difficulty: "Medium",
    category: "Matrix • BFS",
    description: {
      text: "You are given an m x n grid where each cell can have value 0, 1, or 2.",
      notes: [
        "0 = empty cell",
        "1 = fresh orange",
        "2 = rotten orange",
        "Each minute, fresh oranges adjacent to rotten ones become rotten.",
        "Return minimum minutes until no fresh orange remains. If impossible, return -1.",
      ],
    },
    examples: [
      {
        input: "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        output: "4",
      },
    ],
    constraints: ["1 ≤ m, n ≤ 10"],
    starterCode: {
      javascript: `function orangesRotting(grid) {
  // Write your solution here
}

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));
// Expected: 4`,
      python: `def orangesRotting(grid):
    pass

print(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))
# Expected: 4`,
      java: `class Solution {
    public int orangesRotting(int[][] grid) {
        return -1;
    }
}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
    },
  },

  "partition-equal-subset-sum": {
    id: "partition-equal-subset-sum",
    title: "Partition Equal Subset Sum",
    difficulty: "Hard",
    category: "Dynamic Programming • Knapsack",
    description: {
      text: "Given an integer array nums, return true if you can partition the array into two subsets such that the sum of elements in both subsets is equal.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,5,11,5]",
        output: "true",
      },
      {
        input: "nums = [1,2,3,5]",
        output: "false",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 200", "1 ≤ nums[i] ≤ 100"],
    starterCode: {
      javascript: `function canPartition(nums) {
  // Write your solution here
}

console.log(canPartition([1,5,11,5])); // Expected: true
console.log(canPartition([1,2,3,5])); // Expected: false`,
      python: `def canPartition(nums):
    pass

print(canPartition([1,5,11,5]))  # Expected: True
print(canPartition([1,2,3,5]))  # Expected: False`,
      java: `class Solution {
    public static boolean canPartition(int[] nums) {
        return false;
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "find-median-from-data-stream": {
    id: "find-median-from-data-stream",
    title: "Find Median from Data Stream",
    difficulty: "Hard",
    category: "Heap • Design",
    description: {
      text: "The median is the middle value in an ordered integer list.",
      notes: [
        "Implement MedianFinder class with addNum(int num) and findMedian().",
        "Must support dynamic data stream.",
      ],
    },
    examples: [
      {
        input: "addNum(1), addNum(2), findMedian(), addNum(3), findMedian()",
        output: "1.5, 2",
      },
    ],
    constraints: ["-10⁵ ≤ num ≤ 10⁵", "At most 5 * 10⁴ calls will be made."],
    starterCode: {
      javascript: `class MedianFinder {
  constructor() {
    // Write your solution here
  }

  addNum(num) {}

  findMedian() {}
}

const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // Expected: 1.5
mf.addNum(3);
console.log(mf.findMedian()); // Expected: 2`,
      python: `class MedianFinder:
    def __init__(self):
        pass
    def addNum(self, num):
        pass
    def findMedian(self):
        pass

mf = MedianFinder()
mf.addNum(1)
mf.addNum(2)
print(mf.findMedian())  # Expected: 1.5
mf.addNum(3)
print(mf.findMedian())  # Expected: 2`,
      java: `class MedianFinder {
    public MedianFinder() {}
    public void addNum(int num) {}
    public double findMedian() { return 0.0; }
}`,
    },
    expectedOutput: {
      javascript: "1.5\n2",
      python: "1.5\n2",
      java: "1.5\n2",
    },
  },
  "first-bad-version": {
    id: "first-bad-version",
    title: "First Bad Version",
    difficulty: "Easy",
    category: "Binary Search",
    description: {
      text: "You are given n versions labeled from 1 to n. You are told that there is a bad version.",
      notes: [
        "All versions after a bad version are also bad.",
        "You must find the first bad version.",
        "You should minimize the number of calls to isBadVersion API.",
      ],
    },
    examples: [
      {
        input: "n = 5, bad = 4",
        output: "4",
      },
    ],
    constraints: ["1 ≤ bad ≤ n ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `// Assume isBadVersion(version) API exists
function solution(isBadVersion) {
  return function(n) {
    // Write your solution here
  };
}

// Example mock
function isBadVersion(version) { return version >= 4; }
const find = solution(isBadVersion);
console.log(find(5)); // Expected: 4`,
      python: `# Assume isBadVersion API exists
def solution(isBadVersion):
    def firstBadVersion(n):
        # Write your solution here
        pass
    return firstBadVersion`,
      java: `public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        // Write your solution here
        return -1;
    }
}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
    },
  },

  "meeting-rooms-ii": {
    id: "meeting-rooms-ii",
    title: "Meeting Rooms II",
    difficulty: "Medium",
    category: "Intervals • Heap",
    description: {
      text: "Given an array of meeting time intervals, return the minimum number of conference rooms required.",
      notes: ["Intervals may overlap."],
    },
    examples: [
      {
        input: "intervals = [[0,30],[5,10],[15,20]]",
        output: "2",
      },
    ],
    constraints: ["1 ≤ intervals.length ≤ 10⁴"],
    starterCode: {
      javascript: `function minMeetingRooms(intervals) {
  // Write your solution here
}

console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // Expected: 2`,
      python: `def minMeetingRooms(intervals):
    pass

print(minMeetingRooms([[0,30],[5,10],[15,20]]))  # Expected: 2`,
      java: `class Solution {
    public int minMeetingRooms(int[][] intervals) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  "subarray-sum-equals-k": {
    id: "subarray-sum-equals-k",
    title: "Subarray Sum Equals K",
    difficulty: "Medium",
    category: "Array • Prefix Sum • Hash Map",
    description: {
      text: "Given an integer array nums and an integer k, return the total number of subarrays whose sum equals k.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,1,1], k = 2",
        output: "2",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 2 * 10⁴",
      "-1000 ≤ nums[i] ≤ 1000",
      "-10⁷ ≤ k ≤ 10⁷",
    ],
    starterCode: {
      javascript: `function subarraySum(nums, k) {
  // Write your solution here
}

console.log(subarraySum([1,1,1], 2)); // Expected: 2`,
      python: `def subarraySum(nums, k):
    pass

print(subarraySum([1,1,1], 2))  # Expected: 2`,
      java: `class Solution {
    public int subarraySum(int[] nums, int k) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
    },
  },

  "accounts-merge": {
    id: "accounts-merge",
    title: "Accounts Merge",
    difficulty: "Hard",
    category: "Graph • Union Find",
    description: {
      text: "Given a list of accounts where each account contains a name and emails, merge accounts belonging to the same person.",
      notes: [
        "Two accounts belong to the same person if there is at least one common email.",
      ],
    },
    examples: [
      {
        input: `[["John","johnsmith@mail.com","john00@mail.com"],
                ["John","johnnybravo@mail.com"],
                ["John","johnsmith@mail.com","john_newyork@mail.com"],
                ["Mary","mary@mail.com"]]`,
        output: "Merged accounts",
      },
    ],
    constraints: ["1 ≤ accounts.length ≤ 1000"],
    starterCode: {
      javascript: `function accountsMerge(accounts) {
  // Write your solution here
}`,
      python: `def accountsMerge(accounts):
    pass`,
      java: `class Solution {
    public List<List<String>> accountsMerge(List<List<String>> accounts) {
        return new ArrayList<>();
    }
}`,
    },
    expectedOutput: {
      javascript: "Merged accounts correctly",
      python: "Merged accounts correctly",
      java: "Merged accounts correctly",
    },
  },

  "shortest-path-visiting-all-nodes": {
    id: "shortest-path-visiting-all-nodes",
    title: "Shortest Path Visiting All Nodes",
    difficulty: "Hard",
    category: "Graph • BFS • Bitmask DP",
    description: {
      text: "Given an undirected graph, return the length of the shortest path that visits every node.",
      notes: ["You may start and stop at any node.", "Nodes may be revisited."],
    },
    examples: [
      {
        input: "graph = [[1,2,3],[0],[0],[0]]",
        output: "4",
      },
    ],
    constraints: ["1 ≤ graph.length ≤ 12"],
    starterCode: {
      javascript: `function shortestPathLength(graph) {
  // Write your solution here
}

console.log(shortestPathLength([[1,2,3],[0],[0],[0]]));
// Expected: 4`,
      python: `def shortestPathLength(graph):
    pass

print(shortestPathLength([[1,2,3],[0],[0],[0]]))
# Expected: 4`,
      java: `class Solution {
    public int shortestPathLength(int[][] graph) {
        return 0;
    }
}`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
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
