export const six = {
  "plus-one": {
    id: "plus-one",
    title: "Plus One",
    difficulty: "Easy",
    category: "Array • Math",
    description: {
      text: `
You are given a large integer represented as an array of digits.

Each digits[i] represents a single digit, and the most significant digit is at index 0.

Increment the integer by one and return the resulting array of digits.
`,
      notes: [
        "The digits are stored such that no leading zeros exist.",
        "Handle carry properly from right to left.",
        "If all digits are 9, the result will have one extra digit.",
      ],
    },
    examples: [
      {
        input: "digits = [1,2,3]",
        output: "[1,2,4]",
      },
      {
        input: "digits = [4,3,2,1]",
        output: "[4,3,2,2]",
      },
      {
        input: "digits = [9,9,9]",
        output: "[1,0,0,0]",
      },
    ],
    constraints: [
      "1 ≤ digits.length ≤ 100",
      "0 ≤ digits[i] ≤ 9",
      "digits does not contain leading zeros",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> plusOne(vector<int>& digits){
    // Write your solution here
    return {};
}

int main(){
    auto a = plusOne(vector<int>{1,2,3});
    auto b = plusOne(vector<int>{4,3,2,1});
    auto c = plusOne(vector<int>{9,9,9});

    for(int x:a) cout<<x<<" "; cout<<endl;
    for(int x:b) cout<<x<<" "; cout<<endl;
    for(int x:c) cout<<x<<" ";
}`,
      go: `package main
import "fmt"

func plusOne(digits []int) []int {
    // Write your solution here
    return []int{}
}

func main() {
    fmt.Println(plusOne([]int{1,2,3}))
    fmt.Println(plusOne([]int{4,3,2,1}))
    fmt.Println(plusOne([]int{9,9,9}))
}`,
      ruby: `def plus_one(digits)
  # Write your solution here
  []
end

puts plus_one([1,2,3]).inspect
puts plus_one([4,3,2,1]).inspect
puts plus_one([9,9,9]).inspect`,
      rust: `fn plus_one(digits: Vec<i32>) -> Vec<i32> {
    // Write your solution here
    vec![]
}

fn main() {
    println!("{:?}", plus_one(vec![1,2,3]));
    println!("{:?}", plus_one(vec![4,3,2,1]));
    println!("{:?}", plus_one(vec![9,9,9]));
}`,
      javascript: `function plusOne(digits) {
  // Write your solution here
}

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([9,9,9]));`,
      python: `def plusOne(digits):
    # Write your solution here
    pass

print(plusOne([1,2,3]))
print(plusOne([4,3,2,1]))
print(plusOne([9,9,9]))`,
      java: `import java.util.*;

class Solution {
    public static int[] plusOne(int[] digits){
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args){
        System.out.println(Arrays.toString(plusOne(new int[]{1,2,3})));
        System.out.println(Arrays.toString(plusOne(new int[]{4,3,2,1})));
        System.out.println(Arrays.toString(plusOne(new int[]{9,9,9})));
    }
}`,
    },
    expectedOutput: {
      cpp: "1 2 4 \n4 3 2 2 \n1 0 0 0 ",
      go: "[1 2 4]\n[4 3 2 2]\n[1 0 0 0]",
      ruby: "[1, 2, 4]\n[4, 3, 2, 2]\n[1, 0, 0, 0]",
      rust: "[1, 2, 4]\n[4, 3, 2, 2]\n[1, 0, 0, 0]",
      javascript: "[1,2,4]\n[4,3,2,2]\n[1,0,0,0]",
      python: "[1, 2, 4]\n[4, 3, 2, 2]\n[1, 0, 0, 0]",
      java: "[1, 2, 4]\n[4, 3, 2, 2]\n[1, 0, 0, 0]",
    },
  },

  "symmetric-tree": {
    id: "symmetric-tree",
    title: "Symmetric Tree",
    difficulty: "Easy",
    category: "Tree • DFS",
    description: {
      text: `
Given the root of a binary tree,
check whether it is symmetric around its center.

A tree is symmetric if the left subtree is a mirror reflection
of the right subtree.
`,
      notes: [
        "Two trees are mirrors if:",
        "1. Their root values are equal.",
        "2. Left subtree of one is mirror of right subtree of the other.",
        "You may solve using recursion or iterative BFS.",
      ],
    },
    examples: [
      {
        input: "root = [1,2,2,3,4,4,3]",
        output: "true",
      },
      {
        input: "root = [1,2,2,null,3,null,3]",
        output: "false",
      },
      {
        input: "root = [1]",
        output: "true",
      },
    ],
    constraints: ["1 ≤ number of nodes ≤ 1000", "-100 ≤ Node.val ≤ 100"],
    starterCode: {
      cpp: `#include <iostream>
using namespace std;

bool isSymmetric(){
    // Write your solution here
    return false;
}

int main(){
    cout << boolalpha;
    cout << true << endl;
    cout << false << endl;
    cout << true << endl;
}`,
      go: `package main
import "fmt"

func isSymmetric() bool {
    // Write your solution here
    return false
}

func main() {
    fmt.Println(true)
    fmt.Println(false)
    fmt.Println(true)
}`,
      ruby: `def is_symmetric()
  # Write your solution here
  false
end

puts true
puts false
puts true`,
      rust: `fn is_symmetric() -> bool {
    // Write your solution here
    false
}

fn main() {
    println!("{}", true);
    println!("{}", false);
    println!("{}", true);
}`,
      javascript: `function isSymmetric() {
  // Write your solution here
}

console.log(true);
console.log(false);
console.log(true);`,
      python: `def isSymmetric():
    # Write your solution here
    pass

print(True)
print(False)
print(True)`,
      java: `class Solution {
    public static boolean isSymmetric(){
        // Write your solution here
        return false;
    }

    public static void main(String[] args){
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

  "house-robber": {
    id: "house-robber",
    title: "House Robber",
    difficulty: "Medium",
    category: "Dynamic Programming • Array",
    description: {
      text: `
You are a professional robber planning to rob houses along a street.

Each house contains a certain amount of money.
You cannot rob two adjacent houses.

Return the maximum amount of money you can rob without alerting the police.
`,
      notes: [
        "If you rob house i, you cannot rob house i-1 or i+1.",
        "Typical DP recurrence:",
        "dp[i] = max(dp[i-1], dp[i-2] + nums[i])",
        "You can optimize to O(1) space.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "4",
      },
      {
        input: "nums = [2,7,9,3,1]",
        output: "12",
      },
      {
        input: "nums = [5]",
        output: "5",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 400"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int rob(vector<int>& nums){
    // Write your solution here
    return 0;
}

int main(){
    cout << rob(vector<int>{1,2,3,1}) << endl;
    cout << rob(vector<int>{2,7,9,3,1}) << endl;
    cout << rob(vector<int>{5}) << endl;
}`,
      go: `package main
import "fmt"

func rob(nums []int) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(rob([]int{1,2,3,1}))
    fmt.Println(rob([]int{2,7,9,3,1}))
    fmt.Println(rob([]int{5}))
}`,
      ruby: `def rob(nums)
  # Write your solution here
  0
end

puts rob([1,2,3,1])
puts rob([2,7,9,3,1])
puts rob([5])`,
      rust: `fn rob(nums: Vec<i32>) -> i32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", rob(vec![1,2,3,1]));
    println!("{}", rob(vec![2,7,9,3,1]));
    println!("{}", rob(vec![5]));
}`,
      javascript: `function rob(nums) {
  // Write your solution here
}

console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));
console.log(rob([5]));`,
      python: `def rob(nums):
    # Write your solution here
    pass

print(rob([1,2,3,1]))
print(rob([2,7,9,3,1]))
print(rob([5]))`,
      java: `class Solution {
    public static int rob(int[] nums){
        // Write your solution here
        return 0;
    }

    public static void main(String[] args){
        System.out.println(rob(new int[]{1,2,3,1}));
        System.out.println(rob(new int[]{2,7,9,3,1}));
        System.out.println(rob(new int[]{5}));
    }
}`,
    },
    expectedOutput: {
      cpp: "4\n12\n5",
      go: "4\n12\n5",
      ruby: "4\n12\n5",
      rust: "4\n12\n5",
      javascript: "4\n12\n5",
      python: "4\n12\n5",
      java: "4\n12\n5",
    },
  },

  "k-closest-points-to-origin": {
    id: "k-closest-points-to-origin",
    title: "K Closest Points to Origin",
    difficulty: "Medium",
    category: "Heap • QuickSelect",
    description: {
      text: `
Given an array of points where points[i] = [xi, yi]
represents a point on the X-Y plane and an integer k,
return the k closest points to the origin (0,0).
`,
      notes: [
        "Distance formula: sqrt(x² + y²).",
        "You do NOT need to compute square root.",
        "Return any valid answer if multiple solutions exist.",
        "Expected approach: Min Heap, Max Heap of size k, or QuickSelect.",
      ],
    },
    examples: [
      {
        input: "points = [[1,3],[-2,2]], k = 1",
        output: "[[-2,2]]",
      },
      {
        input: "points = [[3,3],[5,-1],[-2,4]], k = 2",
        output: "[[3,3],[-2,4]]",
      },
      {
        input: "points = [[1,0],[0,1]], k = 2",
        output: "[[1,0],[0,1]]",
      },
    ],
    constraints: ["1 ≤ k ≤ points.length ≤ 10⁴", "-10⁴ ≤ xi, yi ≤ 10⁴"],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> kClosest(vector<vector<int>>& points, int k){
    // Write your solution here
    return {};
}

int main(){
    auto a = kClosest({{1,3},{-2,2}},1);
    auto b = kClosest({{3,3},{5,-1},{-2,4}},2);
    auto c = kClosest({{1,0},{0,1}},2);

    for(auto p:a) cout<<"["<<p[0]<<","<<p[1]<<"] ";
    cout<<endl;
    for(auto p:b) cout<<"["<<p[0]<<","<<p[1]<<"] ";
    cout<<endl;
    for(auto p:c) cout<<"["<<p[0]<<","<<p[1]<<"] ";
}`,
      go: `package main
import "fmt"

func kClosest(points [][]int, k int) [][]int {
    // Write your solution here
    return [][]int{}
}

func main() {
    fmt.Println(kClosest([][]int{{1,3},{-2,2}},1))
    fmt.Println(kClosest([][]int{{3,3},{5,-1},{-2,4}},2))
    fmt.Println(kClosest([][]int{{1,0},{0,1}},2))
}`,
      ruby: `def k_closest(points, k)
  # Write your solution here
  []
end

puts k_closest([[1,3],[-2,2]],1).inspect
puts k_closest([[3,3],[5,-1],[-2,4]],2).inspect
puts k_closest([[1,0],[0,1]],2).inspect`,
      rust: `fn k_closest(points: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
    // Write your solution here
    vec![]
}

fn main() {
    println!("{:?}", k_closest(vec![vec![1,3],vec![-2,2]],1));
    println!("{:?}", k_closest(vec![vec![3,3],vec![5,-1],vec![-2,4]],2));
    println!("{:?}", k_closest(vec![vec![1,0],vec![0,1]],2));
}`,
      javascript: `function kClosest(points, k) {
  // Write your solution here
}

console.log(kClosest([[1,3],[-2,2]],1));
console.log(kClosest([[3,3],[5,-1],[-2,4]],2));
console.log(kClosest([[1,0],[0,1]],2));`,
      python: `def kClosest(points, k):
    # Write your solution here
    pass

print(kClosest([[1,3],[-2,2]],1))
print(kClosest([[3,3],[5,-1],[-2,4]],2))
print(kClosest([[1,0],[0,1]],2))`,
      java: `import java.util.*;

class Solution {
    public static int[][] kClosest(int[][] points, int k){
        // Write your solution here
        return new int[0][0];
    }

    public static void main(String[] args){
        System.out.println(Arrays.deepToString(kClosest(new int[][]{{1,3},{-2,2}},1)));
        System.out.println(Arrays.deepToString(kClosest(new int[][]{{3,3},{5,-1},{-2,4}},2)));
        System.out.println(Arrays.deepToString(kClosest(new int[][]{{1,0},{0,1}},2)));
    }
}`,
    },
    expectedOutput: {
      cpp: "[-2,2] \n[3,3] [-2,4] \n[1,0] [0,1] ",
      go: "[[-2 2]]\n[[3 3] [-2 4]]\n[[1 0] [0 1]]",
      ruby: "[[-2, 2]]\n[[3, 3], [-2, 4]]\n[[1, 0], [0, 1]]",
      rust: "[[-2, 2]]\n[[3, 3], [-2, 4]]\n[[1, 0], [0, 1]]",
      javascript: "[[-2,2]]\n[[3,3],[-2,4]]\n[[1,0],[0,1]]",
      python: "[[-2, 2]]\n[[3, 3], [-2, 4]]\n[[1, 0], [0, 1]]",
      java: "[[-2, 2]]\n[[3, 3], [-2, 4]]\n[[1, 0], [0, 1]]",
    },
  },

  "word-ladder": {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    category: "Graph • BFS",
    description: {
      text: `
Given two words beginWord and endWord, and a dictionary wordList,
return the length of the shortest transformation sequence from beginWord to endWord.

A valid transformation sequence must:
- Change exactly one letter at a time.
- Each intermediate word must exist in wordList.
- beginWord is NOT required to be in wordList.
`,
      notes: [
        "Return 0 if endWord is not in wordList.",
        "Each transformation must change exactly one character.",
        "This is a shortest path problem → use BFS.",
        "The length includes both beginWord and endWord.",
      ],
    },
    examples: [
      {
        input:
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: "5",
      },
      {
        input:
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]',
        output: "0",
      },
      {
        input: 'beginWord = "a", endWord = "c", wordList = ["a","b","c"]',
        output: "2",
      },
    ],
    constraints: [
      "1 ≤ beginWord.length ≤ 10",
      "1 ≤ wordList.length ≤ 5000",
      "All words have the same length.",
      "All words consist of lowercase English letters.",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int ladderLength(string beginWord, string endWord, vector<string>& wordList){
    // Write your solution here
    return 0;
}

int main(){
    vector<string> w1 = {"hot","dot","dog","lot","log","cog"};
    vector<string> w2 = {"hot","dot","dog","lot","log"};
    vector<string> w3 = {"a","b","c"};

    cout << ladderLength("hit","cog",w1) << endl;
    cout << ladderLength("hit","cog",w2) << endl;
    cout << ladderLength("a","c",w3) << endl;
}`,
      go: `package main
import "fmt"

func ladderLength(beginWord string, endWord string, wordList []string) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(ladderLength("hit","cog",[]string{"hot","dot","dog","lot","log","cog"}))
    fmt.Println(ladderLength("hit","cog",[]string{"hot","dot","dog","lot","log"}))
    fmt.Println(ladderLength("a","c",[]string{"a","b","c"}))
}`,
      ruby: `def ladder_length(begin_word, end_word, word_list)
  # Write your solution here
  0
end

puts ladder_length("hit","cog",["hot","dot","dog","lot","log","cog"])
puts ladder_length("hit","cog",["hot","dot","dog","lot","log"])
puts ladder_length("a","c",["a","b","c"])`,
      rust: `fn ladder_length(begin_word: String, end_word: String, word_list: Vec<String>) -> i32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", ladder_length("hit".to_string(),"cog".to_string(),
        vec!["hot","dot","dog","lot","log","cog"].iter().map(|s| s.to_string()).collect()));
}`,
      javascript: `function ladderLength(beginWord, endWord, wordList) {
  // Write your solution here
}

console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]));
console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log"]));
console.log(ladderLength("a","c",["a","b","c"]));`,
      python: `def ladderLength(beginWord, endWord, wordList):
    # Write your solution here
    pass

print(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]))
print(ladderLength("hit","cog",["hot","dot","dog","lot","log"]))
print(ladderLength("a","c",["a","b","c"]))`,
      java: `import java.util.*;

class Solution {
    public static int ladderLength(String beginWord, String endWord, List<String> wordList){
        // Write your solution here
        return 0;
    }

    public static void main(String[] args){
        System.out.println(ladderLength("hit","cog",
            Arrays.asList("hot","dot","dog","lot","log","cog")));
        System.out.println(ladderLength("hit","cog",
            Arrays.asList("hot","dot","dog","lot","log")));
        System.out.println(ladderLength("a","c",
            Arrays.asList("a","b","c")));
    }
}`,
    },
    expectedOutput: {
      cpp: "5\n0\n2",
      go: "5\n0\n2",
      ruby: "5\n0\n2",
      rust: "5",
      javascript: "5\n0\n2",
      python: "5\n0\n2",
      java: "5\n0\n2",
    },
  },

  "implement-queue-using-stacks": {
    id: "implement-queue-using-stacks",
    title: "Implement Queue using Stacks",
    difficulty: "Easy",
    category: "Stack • Design",
    description: {
      text: `
Implement a first-in-first-out (FIFO) queue using only two stacks.

Implement the MyQueue class with the following operations:
- push(x): Push element x to the back of queue.
- pop(): Removes the element from the front of queue and returns it.
- peek(): Get the front element.
- empty(): Returns true if the queue is empty.
`,
      notes: [
        "You must use only standard stack operations (push, pop, top, size, empty).",
        "Typical approach: Use two stacks (inStack and outStack).",
        "When popping or peeking, move elements from inStack to outStack if needed.",
        "Each operation should be amortized O(1).",
      ],
    },
    examples: [
      {
        input: '["MyQueue","push","push","peek","pop","empty"]',
        output: "[null,null,null,1,1,false]",
      },
      {
        input: '["MyQueue","push","pop","empty"]',
        output: "[null,null,5,true]",
      },
      {
        input: '["MyQueue","push","push","push","pop","peek"]',
        output: "[null,null,null,null,10,20]",
      },
    ],
    constraints: ["1 ≤ number of operations ≤ 100", "1 ≤ x ≤ 10⁹"],
    starterCode: {
      cpp: `#include <iostream>
#include <stack>
using namespace std;

class MyQueue {
public:
    MyQueue() {}

    void push(int x) {
        // Write your solution here
    }

    int pop() {
        return 0;
    }

    int peek() {
        return 0;
    }

    bool empty() {
        return false;
    }
};

int main() {
    MyQueue q;
    q.push(1);
    q.push(2);
    cout << q.peek() << endl;
    cout << q.pop() << endl;
    cout << boolalpha << q.empty() << endl;
}`,
      go: `package main
import "fmt"

type MyQueue struct {
}

func Constructor() MyQueue {
    return MyQueue{}
}

func (this *MyQueue) Push(x int) {
    // Write your solution here
}

func (this *MyQueue) Pop() int {
    return 0
}

func (this *MyQueue) Peek() int {
    return 0
}

func (this *MyQueue) Empty() bool {
    return false
}

func main() {
    q := Constructor()
    q.Push(1)
    q.Push(2)
    fmt.Println(q.Peek())
    fmt.Println(q.Pop())
    fmt.Println(q.Empty())
}`,
      ruby: `class MyQueue
  def initialize
    # Write your solution here
  end

  def push(x)
  end

  def pop
    0
  end

  def peek
    0
  end

  def empty
    false
  end
end

q = MyQueue.new
q.push(1)
q.push(2)
puts q.peek
puts q.pop
puts q.empty`,
      rust: `struct MyQueue {}

impl MyQueue {
    fn new() -> Self {
        MyQueue {}
    }

    fn push(&mut self, x: i32) {
        // Write your solution here
    }

    fn pop(&mut self) -> i32 {
        0
    }

    fn peek(&mut self) -> i32 {
        0
    }

    fn empty(&self) -> bool {
        false
    }
}

fn main() {
    let mut q = MyQueue::new();
    q.push(1);
    q.push(2);
    println!("{}", q.peek());
    println!("{}", q.pop());
    println!("{}", q.empty());
}`,
      javascript: `var MyQueue = function() {
  // Write your solution here
};

MyQueue.prototype.push = function(x) {
};

MyQueue.prototype.pop = function() {
  return 0;
};

MyQueue.prototype.peek = function() {
  return 0;
};

MyQueue.prototype.empty = function() {
  return false;
};

const q = new MyQueue();
q.push(1);
q.push(2);
console.log(q.peek());
console.log(q.pop());
console.log(q.empty());`,
      python: `class MyQueue:
    def __init__(self):
        # Write your solution here
        pass

    def push(self, x: int) -> None:
        pass

    def pop(self) -> int:
        return 0

    def peek(self) -> int:
        return 0

    def empty(self) -> bool:
        return False


q = MyQueue()
q.push(1)
q.push(2)
print(q.peek())
print(q.pop())
print(q.empty())`,
      java: `import java.util.*;

class MyQueue {
    public MyQueue() {
        // Write your solution here
    }

    public void push(int x) {
    }

    public int pop() {
        return 0;
    }

    public int peek() {
        return 0;
    }

    public boolean empty() {
        return false;
    }

    public static void main(String[] args) {
        MyQueue q = new MyQueue();
        q.push(1);
        q.push(2);
        System.out.println(q.peek());
        System.out.println(q.pop());
        System.out.println(q.empty());
    }
}`,
    },
    expectedOutput: {
      cpp: "1\n1\nfalse",
      go: "1\n1\nfalse",
      ruby: "1\n1\nfalse",
      rust: "1\n1\nfalse",
      javascript: "1\n1\nfalse",
      python: "1\n1\nFalse",
      java: "1\n1\nfalse",
    },
  },

  "power-of-two": {
    id: "power-of-two",
    title: "Power of Two",
    difficulty: "Easy",
    category: "Bit Manipulation • Math",
    description: {
      text: `
Given an integer n, return true if it is a power of two.
Otherwise, return false.

An integer n is a power of two if there exists an integer x such that:
    n == 2^x
`,
      notes: [
        "Powers of two have exactly one bit set in binary representation.",
        "Key trick: n > 0 and (n & (n - 1)) == 0",
        "Negative numbers and zero are NOT powers of two.",
      ],
    },
    examples: [
      {
        input: "n = 16",
        output: "true",
      },
      {
        input: "n = 3",
        output: "false",
      },
      {
        input: "n = 1",
        output: "true",
      },
    ],
    constraints: ["-2^31 ≤ n ≤ 2^31 - 1"],
    starterCode: {
      cpp: `#include <iostream>
using namespace std;

bool isPowerOfTwo(int n){
    // Write your solution here
    return false;
}

int main(){
    cout << boolalpha << isPowerOfTwo(16) << endl;
    cout << boolalpha << isPowerOfTwo(3) << endl;
    cout << boolalpha << isPowerOfTwo(1) << endl;
}`,
      go: `package main
import "fmt"

func isPowerOfTwo(n int) bool {
    // Write your solution here
    return false
}

func main() {
    fmt.Println(isPowerOfTwo(16))
    fmt.Println(isPowerOfTwo(3))
    fmt.Println(isPowerOfTwo(1))
}`,
      ruby: `def is_power_of_two(n)
  # Write your solution here
  false
end

puts is_power_of_two(16)
puts is_power_of_two(3)
puts is_power_of_two(1)`,
      rust: `fn is_power_of_two(n: i32) -> bool {
    // Write your solution here
    false
}

fn main() {
    println!("{}", is_power_of_two(16));
    println!("{}", is_power_of_two(3));
    println!("{}", is_power_of_two(1));
}`,
      javascript: `function isPowerOfTwo(n) {
  // Write your solution here
}

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(1));`,
      python: `def isPowerOfTwo(n):
    # Write your solution here
    pass

print(isPowerOfTwo(16))
print(isPowerOfTwo(3))
print(isPowerOfTwo(1))`,
      java: `class Solution {
    public static boolean isPowerOfTwo(int n){
        // Write your solution here
        return false;
    }

    public static void main(String[] args){
        System.out.println(isPowerOfTwo(16));
        System.out.println(isPowerOfTwo(3));
        System.out.println(isPowerOfTwo(1));
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

  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Dynamic Programming • Array",
    description: {
      text: `
You are given an integer array coins representing coins of different denominations
and an integer amount representing a total amount of money.

Return the fewest number of coins needed to make up that amount.
If it is not possible to make up the amount, return -1.
`,
      notes: [
        "You have unlimited supply of each coin.",
        "This is a classic 1D DP problem.",
        "State transition: dp[i] = min(dp[i], dp[i - coin] + 1)",
        "Initialize dp[0] = 0, others = infinity.",
        "Time complexity: O(amount × coins.length)",
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
      {
        input: "coins = [1], amount = 0",
        output: "0",
      },
    ],
    constraints: [
      "1 ≤ coins.length ≤ 12",
      "0 ≤ amount ≤ 10⁴",
      "1 ≤ coins[i] ≤ 2³¹ - 1",
    ],
    starterCode: {
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int coinChange(vector<int>& coins, int amount){
    // Write your solution here
    return 0;
}

int main(){
    cout << coinChange(vector<int>{1,2,5},11) << endl;
    cout << coinChange(vector<int>{2},3) << endl;
    cout << coinChange(vector<int>{1},0) << endl;
}`,
      go: `package main
import "fmt"

func coinChange(coins []int, amount int) int {
    // Write your solution here
    return 0
}

func main() {
    fmt.Println(coinChange([]int{1,2,5},11))
    fmt.Println(coinChange([]int{2},3))
    fmt.Println(coinChange([]int{1},0))
}`,
      ruby: `def coin_change(coins, amount)
  # Write your solution here
  0
end

puts coin_change([1,2,5],11)
puts coin_change([2],3)
puts coin_change([1],0)`,
      rust: `fn coin_change(coins: Vec<i32>, amount: i32) -> i32 {
    // Write your solution here
    0
}

fn main() {
    println!("{}", coin_change(vec![1,2,5],11));
    println!("{}", coin_change(vec![2],3));
    println!("{}", coin_change(vec![1],0));
}`,
      javascript: `function coinChange(coins, amount) {
  // Write your solution here
}

console.log(coinChange([1,2,5],11));
console.log(coinChange([2],3));
console.log(coinChange([1],0));`,
      python: `def coinChange(coins, amount):
    # Write your solution here
    pass

print(coinChange([1,2,5],11))
print(coinChange([2],3))
print(coinChange([1],0))`,
      java: `class Solution {
    public static int coinChange(int[] coins, int amount){
        // Write your solution here
        return 0;
    }

    public static void main(String[] args){
        System.out.println(coinChange(new int[]{1,2,5},11));
        System.out.println(coinChange(new int[]{2},3));
        System.out.println(coinChange(new int[]{1},0));
    }
}`,
    },
    expectedOutput: {
      cpp: "3\n-1\n0",
      go: "3\n-1\n0",
      ruby: "3\n-1\n0",
      rust: "3\n-1\n0",
      javascript: "3\n-1\n0",
      python: "3\n-1\n0",
      java: "3\n-1\n0",
    },
  },

  "validate-binary-search-tree": {
    id: "validate-binary-search-tree",
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    category: "Tree • DFS",
    description: {
      text: `
Given the root of a binary tree, determine if it is a valid Binary Search Tree (BST).

A valid BST satisfies:
- The left subtree of a node contains only nodes with values strictly less than the node's value.
- The right subtree of a node contains only nodes with values strictly greater than the node's value.
- Both left and right subtrees must also be valid BSTs.
`,
      notes: [
        "You must validate the entire subtree range, not just immediate children.",
        "Use min/max boundaries during DFS.",
        "Inorder traversal of a valid BST is strictly increasing.",
        "Duplicate values are NOT allowed in a valid BST.",
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
      {
        input: "root = [1,1]",
        output: "false",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [1, 10⁴].",
      "-2³¹ ≤ Node.val ≤ 2³¹ - 1",
    ],
    starterCode: {
      cpp: `#include <iostream>
using namespace std;

bool isValidBST(){
    // Write your solution here
    return false;
}

int main(){
    cout << boolalpha << true << endl;
    cout << boolalpha << false << endl;
    cout << boolalpha << false << endl;
}`,
      go: `package main
import "fmt"

func isValidBST() bool {
    // Write your solution here
    return false
}

func main() {
    fmt.Println(true)
    fmt.Println(false)
    fmt.Println(false)
}`,
      ruby: `def is_valid_bst
  # Write your solution here
  false
end

puts true
puts false
puts false`,
      rust: `fn is_valid_bst() -> bool {
    // Write your solution here
    false
}

fn main() {
    println!("{}", true);
    println!("{}", false);
    println!("{}", false);
}`,
      javascript: `function isValidBST() {
  // Write your solution here
}

console.log(true);
console.log(false);
console.log(false);`,
      python: `def isValidBST():
    # Write your solution here
    pass

print(True)
print(False)
print(False)`,
      java: `class Solution {
    public static boolean isValidBST(){
        // Write your solution here
        return false;
    }

    public static void main(String[] args){
        System.out.println(true);
        System.out.println(false);
        System.out.println(false);
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

  "regular-expression-matching": {
    id: "regular-expression-matching",
    title: "Regular Expression Matching",
    difficulty: "Hard",
    category: "String • Dynamic Programming",
    description: {
      text: `
Given an input string s and a pattern p, implement regular expression matching
with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).
`,
      notes: [
        "Use Dynamic Programming.",
        "Let dp[i][j] mean: s[0..i-1] matches p[0..j-1].",
        "If p[j-1] == '*', you can either:",
        "  1) Treat '*' as zero occurrence → dp[i][j] = dp[i][j-2]",
        "  2) If match, consume one char → dp[i][j] = dp[i-1][j]",
        "Time complexity: O(s.length × p.length)",
      ],
    },
    examples: [
      {
        input: 's = "aa", p = "a*"',
        output: "true",
      },
      {
        input: 's = "aa", p = "a"',
        output: "false",
      },
      {
        input: 's = "ab", p = ".*"',
        output: "true",
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 20",
      "1 ≤ p.length ≤ 30",
      "s contains lowercase English letters.",
      "p contains lowercase English letters, '.', and '*'.",
    ],
    starterCode: {
      cpp: `#include <iostream>
using namespace std;

bool isMatch(string s, string p){
    // Write your solution here
    return false;
}

int main(){
    cout << boolalpha << isMatch("aa","a*") << endl;
    cout << boolalpha << isMatch("aa","a") << endl;
    cout << boolalpha << isMatch("ab",".*") << endl;
}`,
      go: `package main
import "fmt"

func isMatch(s string, p string) bool {
    // Write your solution here
    return false
}

func main() {
    fmt.Println(isMatch("aa","a*"))
    fmt.Println(isMatch("aa","a"))
    fmt.Println(isMatch("ab",".*"))
}`,
      ruby: `def is_match(s, p)
  # Write your solution here
  false
end

puts is_match("aa","a*")
puts is_match("aa","a")
puts is_match("ab",".*")`,
      rust: `fn is_match(s: String, p: String) -> bool {
    // Write your solution here
    false
}

fn main() {
    println!("{}", is_match("aa".to_string(),"a*".to_string()));
    println!("{}", is_match("aa".to_string(),"a".to_string()));
    println!("{}", is_match("ab".to_string(),".*".to_string()));
}`,
      javascript: `function isMatch(s, p) {
  // Write your solution here
}

console.log(isMatch("aa","a*"));
console.log(isMatch("aa","a"));
console.log(isMatch("ab",".*"));`,
      python: `def isMatch(s, p):
    # Write your solution here
    pass

print(isMatch("aa","a*"))
print(isMatch("aa","a"))
print(isMatch("ab",".*"))`,
      java: `class Solution {
    public static boolean isMatch(String s, String p){
        // Write your solution here
        return false;
    }

    public static void main(String[] args){
        System.out.println(isMatch("aa","a*"));
        System.out.println(isMatch("aa","a"));
        System.out.println(isMatch("ab",".*"));
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
