export const dummyPatterns = [
  {
    id: "level-1",
    name: "Level 1 — Two Pointers",
    description: "Fundamental pointer operations like moving left/right or swapping.",
    questions: [
      {
        id: "reverse-array",
        title: "Reverse an Array",
        difficulty: "Easy",
        description: "Given an array of integers, reverse it in-place using two pointers (one at the start, one at the end).\n\nDo not allocate a new array. Return the reversed array.",
        starterCode: {
            javascript: "function reverseArray(arr) {\n  // Write your code here\n  \n}",
            python: "def reverse_array(arr):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[] reverseArray(int[] arr) {\n        // Write your code here\n        return arr;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> reverseArray(vector<int>& arr) {\n        // Write your code here\n        return arr;\n    }\n};"
        },
        testCases: [
          { input: "arr = [1, 2, 3, 4, 5]", expected: "[5, 4, 3, 2, 1]" },
          { input: "arr = [9, 8, 7]", expected: "[7, 8, 9]" },
          { input: "arr = [1]", expected: "[1]" }
        ]
      },
      {
        id: "reverse-string",
        title: "Reverse a String",
        difficulty: "Easy",
        description: "Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.",
        starterCode: {
            javascript: "function reverseString(s) {\n  // Write your code here\n  \n}",
            python: "def reverse_string(s):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void reverseString(char[] s) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "s = [\"h\",\"e\",\"l\",\"l\",\"o\"]", expected: "[\"o\",\"l\",\"l\",\"e\",\"h\"]" },
          { input: "s = [\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]", expected: "[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]" },
          { input: "s = [\"a\"]", expected: "[\"a\"]" }
        ]
      },
      {
        id: "check-palindrome-string",
        title: "Check Palindrome String",
        difficulty: "Easy",
        description: "Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.\n\nA string is a palindrome when it reads the same backward as forward.",
        starterCode: {
            javascript: "function isPalindrome(s) {\n  // Write your code here\n  \n}",
            python: "def is_palindrome(s):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean isPalindrome(String s) {\n        // Write your code here\n        return false;\n    }\n}",
            cpp: "#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool isPalindrome(string s) {\n        // Write your code here\n        return false;\n    }\n};"
        },
        testCases: [
          { input: "s = \"racecar\"", expected: "true" },
          { input: "s = \"hello\"", expected: "false" },
          { input: "s = \"a\"", expected: "true" }
        ]
      },
      {
        id: "move-zeros",
        title: "Move All Zeros to End",
        difficulty: "Easy",
        description: "Given an integer array `nums`, move all 0's to the end of it while maintaining the relative order of the non-zero elements.\n\nNote that you must do this in-place without making a copy of the array.",
        starterCode: {
            javascript: "function moveZeros(nums) {\n  // Write your code here\n  \n}",
            python: "def move_zeros(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void moveZeros(int[] nums) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void moveZeros(vector<int>& nums) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "nums = [0,1,0,3,12]", expected: "[1,3,12,0,0]" },
          { input: "nums = [0]", expected: "[0]" },
          { input: "nums = [1,2,3]", expected: "[1,2,3]" }
        ]
      },
      {
        id: "move-negatives-left",
        title: "Move All Negative Numbers to Left",
        difficulty: "Easy",
        description: "An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.\n\nOrder of elements is not important here.",
        starterCode: {
            javascript: "function moveNegatives(arr) {\n  // Write your code here\n  \n}",
            python: "def move_negatives(arr):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void moveNegatives(int[] arr) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void moveNegatives(vector<int>& arr) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "arr = [-1, 2, -3, 4, 5, -6]", expected: "[-1, -3, -6, 2, 4, 5] (Order may vary)" },
          { input: "arr = [1, 2, 3]", expected: "[1, 2, 3]" },
          { input: "arr = [-1, -2, -3]", expected: "[-1, -2, -3]" }
        ]
      },
      {
        id: "separate-even-odd",
        title: "Separate Even and Odd Numbers",
        difficulty: "Easy",
        description: "Given an array of integers `arr`, move all the even integers at the beginning of the array followed by all the odd integers.\n\nReturn any array that satisfies this condition.",
        starterCode: {
            javascript: "function separateEvenOdd(arr) {\n  // Write your code here\n  \n}",
            python: "def separate_even_odd(arr):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[] separateEvenOdd(int[] arr) {\n        // Write your code here\n        return arr;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> separateEvenOdd(vector<int>& arr) {\n        // Write your code here\n        return arr;\n    }\n};"
        },
        testCases: [
          { input: "arr = [3,1,2,4]", expected: "[2,4,3,1] (Order may vary)" },
          { input: "arr = [0]", expected: "[0]" },
          { input: "arr = [2, 4, 6]", expected: "[2, 4, 6]" }
        ]
      },
      {
        id: "rearrange-0-1",
        title: "Rearrange 0s and 1s",
        difficulty: "Easy",
        description: "You are given an array of 0s and 1s in random order. Segregate 0s on left side and 1s on right side of the array.\n\nTraverse array only once.",
        starterCode: {
            javascript: "function rearrangeBinary(arr) {\n  // Write your code here\n  \n}",
            python: "def rearrange_binary(arr):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void rearrangeBinary(int[] arr) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void rearrangeBinary(vector<int>& arr) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "arr = [0, 1, 0, 1, 0, 0, 1]", expected: "[0, 0, 0, 0, 1, 1, 1]" },
          { input: "arr = [1, 1, 1]", expected: "[1, 1, 1]" },
          { input: "arr = [0, 0, 0]", expected: "[0, 0, 0]" }
        ]
      },
      {
        id: "sort-binary-array",
        title: "Sort Binary Array",
        difficulty: "Easy",
        description: "Given a binary array (an array containing only 0s and 1s), sort it in linear time and constant space.\n\nThis is identical to the rearrange 0s and 1s problem but approached as a sorting problem.",
        starterCode: {
            javascript: "function sortBinary(arr) {\n  // Write your code here\n  \n}",
            python: "def sort_binary(arr):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void sortBinary(int[] arr) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void sortBinary(vector<int>& arr) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "arr = [1, 0, 1, 0, 1]", expected: "[0, 0, 1, 1, 1]" },
          { input: "arr = [1, 0]", expected: "[0, 1]" },
          { input: "arr = [0, 1, 0]", expected: "[0, 0, 1]" }
        ]
      },
      {
        id: "swap-alternate",
        title: "Swap Alternate Elements",
        difficulty: "Easy",
        description: "Given an array `arr`, swap alternate elements in pairs. For example, swap the element at index 0 with 1, 2 with 3, and so on.\n\nIf the array has an odd number of elements, the last element remains in its place.",
        starterCode: {
            javascript: "function swapAlternate(arr) {\n  // Write your code here\n  \n}",
            python: "def swap_alternate(arr):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void swapAlternate(int[] arr) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void swapAlternate(vector<int>& arr) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "arr = [1, 2, 3, 4, 5, 6]", expected: "[2, 1, 4, 3, 6, 5]" },
          { input: "arr = [1, 2, 3, 4, 5]", expected: "[2, 1, 4, 3, 5]" },
          { input: "arr = [1]", expected: "[1]" }
        ]
      },
      {
        id: "push-spaces-end",
        title: "Push All Spaces to End of String",
        difficulty: "Easy",
        description: "Given a string of characters, write a function to push all space characters to the end of the string while preserving the original order of the non-space characters.\n\nYou should modify the string/array in place.",
        starterCode: {
            javascript: "function pushSpaces(s) {\n  // Write your code here\n  \n}",
            python: "def push_spaces(s):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void pushSpaces(char[] s) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void pushSpaces(vector<char>& s) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "s = ['H', ' ', 'e', 'l', ' ', 'l', 'o']", expected: "['H', 'e', 'l', 'l', 'o', ' ', ' ']" },
          { input: "s = ['a', 'b', 'c']", expected: "['a', 'b', 'c']" },
          { input: "s = [' ', 'a', ' ']", expected: "['a', ' ', ' ']" }
        ]
      }
    ]
  },
  {
    id: "level-2",
    name: "Level 2 — Slow and Fast Pointer",
    description: "Using two pointers moving at different speeds.",
    questions: [
      {
        id: "remove-duplicates",
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        description: "Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.\n\nReturn the number of unique elements.",
        starterCode: {
            javascript: "function removeDuplicates(nums) {\n  // Write your code here\n  \n}",
            python: "def remove_duplicates(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int removeDuplicates(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "nums = [1,1,2]", expected: "2" },
          { input: "nums = [0,0,1,1,1,2,2,3,3,4]", expected: "5" },
          { input: "nums = [2, 2, 2]", expected: "1" }
        ]
      },
      {
        id: "count-unique-elements",
        title: "Count Unique Elements",
        difficulty: "Easy",
        description: "Given an integer array `nums` sorted in non-decreasing order, count the number of unique elements in the array. You should not modify the array.",
        starterCode: {
            javascript: "function countUnique(nums) {\n  // Write your code here\n  \n}",
            python: "def count_unique(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int countUnique(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int countUnique(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "nums = [1, 2, 3, 3, 4, 5, 5]", expected: "5" },
          { input: "nums = [1, 1, 1, 1]", expected: "1" },
          { input: "nums = []", expected: "0" }
        ]
      },
      {
        id: "remove-element",
        title: "Remove a Given Element In-Place",
        difficulty: "Easy",
        description: "Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The relative order of the elements may be changed.\n\nReturn the number of elements in `nums` which are not equal to `val`.",
        starterCode: {
            javascript: "function removeElement(nums, val) {\n  // Write your code here\n  \n}",
            python: "def remove_element(nums, val):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int removeElement(int[] nums, int val) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int removeElement(vector<int>& nums, int val) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "nums = [3,2,2,3], val = 3", expected: "2" },
          { input: "nums = [0,1,2,2,3,0,4,2], val = 2", expected: "5" },
          { input: "nums = [1], val = 1", expected: "0" }
        ]
      },
      {
        id: "compress-repeated-characters",
        title: "Compress Repeated Characters",
        difficulty: "Easy",
        description: "Given a string `s`, compress it in-place using slow and fast pointers. For each consecutive repeating character, you only keep one instance of it.\n\nReturn the length of the new compressed string.",
        starterCode: {
            javascript: "function compressString(s) {\n  // Write your code here\n  \n}",
            python: "def compress_string(s):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int compressString(char[] s) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int compressString(vector<char>& s) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "s = ['a','a','b','b','c','c','c']", expected: "3 (array becomes ['a','b','c'])" },
          { input: "s = ['a']", expected: "1" },
          { input: "s = ['a','b','c']", expected: "3" }
        ]
      },
      {
        id: "keep-only-unique",
        title: "Keep Only Unique Numbers",
        difficulty: "Easy",
        description: "Given a sorted array `nums`, modify it in-place such that it keeps ONLY the numbers that appear exactly once. Remove any numbers that appear multiple times.\n\nReturn the new length.",
        starterCode: {
            javascript: "function keepOnlyUnique(nums) {\n  // Write your code here\n  \n}",
            python: "def keep_only_unique(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int keepOnlyUnique(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int keepOnlyUnique(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "nums = [1, 2, 2, 3, 4, 4, 5]", expected: "3 (array becomes [1, 3, 5])" },
          { input: "nums = [1, 1, 1]", expected: "0" },
          { input: "nums = [1, 2, 3]", expected: "3" }
        ]
      },
      {
        id: "remove-adjacent-duplicates",
        title: "Remove Adjacent Duplicates",
        difficulty: "Easy",
        description: "You are given a string `s`. A duplicate removal consists of choosing two adjacent and equal letters and removing them.\n\nWe repeatedly make duplicate removals on `s` until we no longer can. Return the final string after all such duplicate removals have been made.",
        starterCode: {
            javascript: "function removeAdjacentDuplicates(s) {\n  // Write your code here\n  \n}",
            python: "def remove_adjacent_duplicates(s):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public String removeAdjacentDuplicates(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
            cpp: "#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string removeAdjacentDuplicates(string s) {\n        // Write your code here\n        return \"\";\n    }\n};"
        },
        testCases: [
          { input: "s = \"abbaca\"", expected: "\"ca\"" },
          { input: "s = \"azxxzy\"", expected: "\"ay\"" },
          { input: "s = \"a\"", expected: "\"a\"" }
        ]
      },
      {
        id: "merge-sorted-arrays",
        title: "Merge Two Sorted Arrays",
        difficulty: "Easy",
        description: "You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order. Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.\n\nYou can assume `nums1` has enough space at the end to hold all elements from `nums2`.",
        starterCode: {
            javascript: "function mergeArrays(nums1, m, nums2, n) {\n  // Write your code here\n  \n}",
            python: "def merge_arrays(nums1, m, nums2, n):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void mergeArrays(int[] nums1, int m, int[] nums2, int n) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void mergeArrays(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", expected: "[1,2,2,3,5,6]" },
          { input: "nums1 = [1], m = 1, nums2 = [], n = 0", expected: "[1]" },
          { input: "nums1 = [0], m = 0, nums2 = [1], n = 1", expected: "[1]" }
        ]
      },
      {
        id: "merge-sorted-strings",
        title: "Merge Two Sorted Strings",
        difficulty: "Easy",
        description: "You are given two strings `s1` and `s2`, both containing alphabetical characters sorted in alphabetical order. Merge them into a single sorted string.",
        starterCode: {
            javascript: "function mergeStrings(s1, s2) {\n  // Write your code here\n  \n}",
            python: "def merge_strings(s1, s2):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public String mergeStrings(String s1, String s2) {\n        // Write your code here\n        return \"\";\n    }\n}",
            cpp: "#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string mergeStrings(string s1, string s2) {\n        // Write your code here\n        return \"\";\n    }\n};"
        },
        testCases: [
          { input: "s1 = \"abc\", s2 = \"def\"", expected: "\"abcdef\"" },
          { input: "s1 = \"ace\", s2 = \"bdf\"", expected: "\"abcdef\"" },
          { input: "s1 = \"a\", s2 = \"z\"", expected: "\"az\"" }
        ]
      },
      {
        id: "compare-sorted-arrays",
        title: "Compare Two Sorted Arrays",
        difficulty: "Easy",
        description: "Given two sorted arrays `nums1` and `nums2`, write a function to return true if they contain exactly the same elements in the same frequencies, otherwise false.",
        starterCode: {
            javascript: "function compareArrays(nums1, nums2) {\n  // Write your code here\n  \n}",
            python: "def compare_arrays(nums1, nums2):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean compareArrays(int[] nums1, int[] nums2) {\n        // Write your code here\n        return false;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool compareArrays(vector<int>& nums1, vector<int>& nums2) {\n        // Write your code here\n        return false;\n    }\n};"
        },
        testCases: [
          { input: "nums1 = [1,2,3], nums2 = [1,2,3]", expected: "true" },
          { input: "nums1 = [1,2,2], nums2 = [1,2,3]", expected: "false" },
          { input: "nums1 = [], nums2 = []", expected: "true" }
        ]
      },
      {
        id: "find-common-elements",
        title: "Find Common Elements in Sorted Arrays",
        difficulty: "Easy",
        description: "Given two sorted arrays `nums1` and `nums2`, return a new array containing the common elements. If an element appears multiple times in both arrays, it should appear multiple times in the output array.",
        starterCode: {
            javascript: "function findCommon(nums1, nums2) {\n  // Write your code here\n  \n}",
            python: "def find_common(nums1, nums2):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[] findCommon(int[] nums1, int[] nums2) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> findCommon(vector<int>& nums1, vector<int>& nums2) {\n        // Write your code here\n        return {};\n    }\n};"
        },
        testCases: [
          { input: "nums1 = [1,2,2,3], nums2 = [2,2,4]", expected: "[2,2]" },
          { input: "nums1 = [1,2,3], nums2 = [4,5,6]", expected: "[]" },
          { input: "nums1 = [1,1], nums2 = [1]", expected: "[1]" }
        ]
      }
    ]
  },
  {
    id: "level-3",
    name: "Level 3 — Pair Searching",
    description: "Finding pairs of numbers that meet specific criteria.",
    questions: [
      {
        id: "pair-with-target",
        title: "Pair with Target Sum",
        difficulty: "Easy",
        description: "Given a sorted array of integers and a target sum, find if there exists a pair in the array whose sum is exactly equal to the target.\n\nReturn `true` if such a pair exists, otherwise `false`.",
        starterCode: {
            javascript: "function hasPairWithSum(arr, target) {\n  // Write your code here\n  \n}",
            python: "def has_pair_with_sum(arr, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean hasPairWithSum(int[] arr, int target) {\n        // Write your code here\n        return false;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool hasPairWithSum(vector<int>& arr, int target) {\n        // Write your code here\n        return false;\n    }\n};"
        },
        testCases: [
          { input: "arr = [1, 2, 3, 4, 6], target = 6", expected: "true" },
          { input: "arr = [2, 5, 9, 11], target = 11", expected: "true" },
          { input: "arr = [1, 2, 3, 4, 6], target = 12", expected: "false" }
        ]
      },
      {
        id: "count-pairs-target",
        title: "Count Pairs with Target Sum",
        difficulty: "Easy",
        description: "Given a sorted array of integers and a target sum, count the number of pairs in the array whose sum is equal to the given target.",
        starterCode: {
            javascript: "function countPairs(arr, target) {\n  // Write your code here\n  \n}",
            python: "def count_pairs(arr, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int countPairs(int[] arr, int target) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int countPairs(vector<int>& arr, int target) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "arr = [1, 1, 2, 2, 3, 3], target = 4", expected: "4" },
          { input: "arr = [1, 2, 3, 4], target = 5", expected: "2" },
          { input: "arr = [1, 1, 1], target = 2", expected: "3" }
        ]
      },
      {
        id: "pair-closest-target",
        title: "Find Pair Closest to Target",
        difficulty: "Easy",
        description: "Given a sorted array of integers and a target sum, find a pair in the array whose sum is closest to the given target.\n\nReturn the pair as an array. If there are multiple pairs, return any one.",
        starterCode: {
            javascript: "function pairClosestToTarget(arr, target) {\n  // Write your code here\n  \n}",
            python: "def pair_closest_to_target(arr, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[] pairClosestToTarget(int[] arr, int target) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> pairClosestToTarget(vector<int>& arr, int target) {\n        // Write your code here\n        return {};\n    }\n};"
        },
        testCases: [
          { input: "arr = [10, 22, 28, 29, 30, 40], target = 54", expected: "[22, 30]" },
          { input: "arr = [1, 3, 4, 7, 10], target = 15", expected: "[4, 10]" },
          { input: "arr = [2, 4, 6], target = 5", expected: "[2, 4]" }
        ]
      },
      {
        id: "check-pair-exists",
        title: "Check If Pair Exists",
        difficulty: "Easy",
        description: "Given an array `A[]` and a number `x`, check for pair in `A[]` with sum as `x`.\n\nReturn `true` if pair exists, `false` otherwise. (This is similar to Pair with Target Sum, but reinforce the two pointer logic).",
        starterCode: {
            javascript: "function checkPairExists(arr, x) {\n  // Write your code here\n  \n}",
            python: "def check_pair_exists(arr, x):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean checkPairExists(int[] arr, int x) {\n        // Write your code here\n        return false;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool checkPairExists(vector<int>& arr, int x) {\n        // Write your code here\n        return false;\n    }\n};"
        },
        testCases: [
          { input: "arr = [0, -1, 2, -3, 1], x = -2", expected: "true" },
          { input: "arr = [1, -2, 1, 0, 5], x = 0", expected: "false" },
          { input: "arr = [1, 1], x = 2", expected: "true" }
        ]
      },
      {
        id: "pair-minimum-difference",
        title: "Find Pair with Minimum Difference",
        difficulty: "Easy",
        description: "Given a sorted array of integers, find the pair of elements that have the minimum absolute difference between them.\n\nReturn the pair.",
        starterCode: {
            javascript: "function pairMinimumDifference(arr) {\n  // Write your code here\n  \n}",
            python: "def pair_minimum_difference(arr):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[] pairMinimumDifference(int[] arr) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> pairMinimumDifference(vector<int>& arr) {\n        // Write your code here\n        return {};\n    }\n};"
        },
        testCases: [
          { input: "arr = [1, 5, 8, 19]", expected: "[5, 8]" },
          { input: "arr = [2, 4, 5, 9, 7]", expected: "[4, 5]" },
          { input: "arr = [10, 20, 30]", expected: "[10, 20]" }
        ]
      },
      {
        id: "count-valid-pairs-smaller",
        title: "Count Valid Pairs Smaller Than Target",
        difficulty: "Easy",
        description: "Given a 0-indexed integer array `nums`, whose length is `n`, and an integer `target`, return the number of pairs `(i, j)` where `0 <= i < j < n` and `nums[i] + nums[j] < target`.",
        starterCode: {
            javascript: "function countPairsSmaller(nums, target) {\n  // Write your code here\n  \n}",
            python: "def count_pairs_smaller(nums, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int countPairsSmaller(int[] nums, int target) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int countPairsSmaller(vector<int>& nums, int target) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "nums = [-1,1,2,3,1], target = 2", expected: "3" },
          { input: "nums = [-6,2,5,-2,-7,-1,3], target = -2", expected: "10" },
          { input: "nums = [1,2,3], target = 0", expected: "0" }
        ]
      },
      {
        id: "largest-pair-smaller",
        title: "Find Largest Pair Smaller Than Target",
        difficulty: "Easy",
        description: "Given a sorted array `arr` and a `target`, find a pair whose sum is strictly less than `target` and is maximum possible.\n\nReturn the maximum sum found.",
        starterCode: {
            javascript: "function largestPairSmaller(arr, target) {\n  // Write your code here\n  \n}",
            python: "def largest_pair_smaller(arr, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int largestPairSmaller(int[] arr, int target) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int largestPairSmaller(vector<int>& arr, int target) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "arr = [2, 3, 5, 9, 10], target = 10", expected: "8" },
          { input: "arr = [1, 2, 4, 8], target = 5", expected: "3" },
          { input: "arr = [1, 2, 3], target = 2", expected: "-1" }
        ]
      },
      {
        id: "pair-difference-k",
        title: "Pair Difference Equals K",
        difficulty: "Easy",
        description: "Given a sorted array of positive integers and an integer `k`, check if there exists a pair in the array whose absolute difference is exactly `k`.\n\nReturn `true` if such a pair exists, otherwise `false`.",
        starterCode: {
            javascript: "function findPairDifference(arr, k) {\n  // Write your code here\n  \n}",
            python: "def find_pair_difference(arr, k):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean findPairDifference(int[] arr, int k) {\n        // Write your code here\n        return false;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool findPairDifference(vector<int>& arr, int k) {\n        // Write your code here\n        return false;\n    }\n};"
        },
        testCases: [
          { input: "arr = [1, 8, 12, 16, 20], k = 4", expected: "true" },
          { input: "arr = [1, 2, 3, 4, 5], k = 9", expected: "false" },
          { input: "arr = [1, 5, 9], k = 4", expected: "true" }
        ]
      },
      {
        id: "two-sum-sorted",
        title: "Two Sum in Sorted Array",
        difficulty: "Easy",
        description: "Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number.\n\nReturn the indices of the two numbers, 1-indexed.",
        starterCode: {
            javascript: "function twoSum(numbers, target) {\n  // Write your code here\n  \n}",
            python: "def two_sum(numbers, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[] twoSum(int[] numbers, int target) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& numbers, int target) {\n        // Write your code here\n        return {};\n    }\n};"
        },
        testCases: [
          { input: "numbers = [2,7,11,15], target = 9", expected: "[1,2]" },
          { input: "numbers = [2,3,4], target = 6", expected: "[1,3]" },
          { input: "numbers = [-1,0], target = -1", expected: "[1,2]" }
        ]
      },
      {
        id: "count-unique-pairs",
        title: "Count Unique Pairs with Target Sum",
        difficulty: "Easy",
        description: "Given a sorted array of integers and a target sum, count the number of UNIQUE pairs that sum up to the target. Pairs (a,b) and (b,a) are considered the same.",
        starterCode: {
            javascript: "function countUniquePairs(arr, target) {\n  // Write your code here\n  \n}",
            python: "def count_unique_pairs(arr, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int countUniquePairs(int[] arr, int target) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int countUniquePairs(vector<int>& arr, int target) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "arr = [1, 1, 2, 4, 4, 5, 5, 5], target = 6", expected: "2 (Pairs are [1,5] and [2,4])" },
          { input: "arr = [1, 2, 3, 4], target = 5", expected: "2" },
          { input: "arr = [2, 2, 2], target = 4", expected: "1" }
        ]
      }
    ]
  },
  {
    id: "level-4",
    name: "Level 4 — Sorted Array Pointer Logic",
    description: "Advanced pointer manipulation on pre-sorted arrays.",
    questions: [
      {
        id: "square-sort",
        title: "Square and Sort Array",
        difficulty: "Easy",
        description: "Given an integer array `nums` sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.\n\nHint: Use two pointers at both ends of the array.",
        starterCode: {
            javascript: "function sortedSquares(nums) {\n  // Write your code here\n  \n}",
            python: "def sorted_squares(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[] sortedSquares(int[] nums) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> sortedSquares(vector<int>& nums) {\n        // Write your code here\n        return {};\n    }\n};"
        },
        testCases: [
          { input: "nums = [-4,-1,0,3,10]", expected: "[0,1,9,16,100]" },
          { input: "nums = [-7,-3,2,3,11]", expected: "[4,9,9,49,121]" },
          { input: "nums = [0, 2, 4]", expected: "[0, 4, 16]" }
        ]
      },
      {
        id: "sorted-absolute-values",
        title: "Sorted Absolute Values",
        difficulty: "Easy",
        description: "Given an integer array `nums` sorted in non-decreasing order, return a new array containing the absolute values of the elements sorted in non-decreasing order.",
        starterCode: {
            javascript: "function sortAbsolute(nums) {\n  // Write your code here\n  \n}",
            python: "def sort_absolute(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[] sortAbsolute(int[] nums) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> sortAbsolute(vector<int>& nums) {\n        // Write your code here\n        return {};\n    }\n};"
        },
        testCases: [
          { input: "nums = [-4,-1,0,3,10]", expected: "[0,1,3,4,10]" },
          { input: "nums = [-7,-3,2,3,11]", expected: "[2,3,3,7,11]" },
          { input: "nums = [0, 2, 4]", expected: "[0, 2, 4]" }
        ]
      },
      {
        id: "rearrange-positive-negative",
        title: "Rearrange Positive and Negative Numbers",
        difficulty: "Easy",
        description: "Given an array of positive and negative integers, rearrange the array such that all negative numbers appear before all positive numbers. The relative order of the numbers does not matter.",
        starterCode: {
            javascript: "function rearrangePosNeg(nums) {\n  // Write your code here\n  \n}",
            python: "def rearrange_pos_neg(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void rearrangePosNeg(int[] nums) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void rearrangePosNeg(vector<int>& nums) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "nums = [-1, 2, -3, 4, 5, -6]", expected: "[-1, -3, -6, 4, 5, 2] (Order may vary)" },
          { input: "nums = [1, 2, 3]", expected: "[1, 2, 3]" },
          { input: "nums = [-1, -2, -3]", expected: "[-1, -2, -3]" }
        ]
      },
      {
        id: "closest-number-target",
        title: "Find Closest Number to Target",
        difficulty: "Easy",
        description: "Given an array of sorted integers `nums` and a `target` value, find the number in the array that is closest to the `target`.",
        starterCode: {
            javascript: "function findClosestNumber(nums, target) {\n  // Write your code here\n  \n}",
            python: "def find_closest_number(nums, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int findClosestNumber(int[] nums, int target) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int findClosestNumber(vector<int>& nums, int target) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "nums = [1, 2, 4, 5, 6, 6, 8, 9], target = 11", expected: "9" },
          { input: "nums = [2, 5, 6, 7, 8, 8, 9], target = 4", expected: "5" },
          { input: "nums = [1, 3, 5], target = 4", expected: "3 (or 5)" }
        ]
      },
      {
        id: "smallest-missing-positive-basic",
        title: "Find Smallest Missing Positive Basic",
        difficulty: "Easy",
        description: "Given a SORTED array of integers, find the smallest missing positive integer (greater than 0).",
        starterCode: {
            javascript: "function findSmallestMissing(nums) {\n  // Write your code here\n  \n}",
            python: "def find_smallest_missing(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int findSmallestMissing(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int findSmallestMissing(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "nums = [-2, -1, 0, 1, 2, 4]", expected: "3" },
          { input: "nums = [1, 2, 3, 4, 5]", expected: "6" },
          { input: "nums = [0, 2, 3]", expected: "1" }
        ]
      },
      {
        id: "remove-duplicates-linked-list",
        title: "Remove Duplicates from Sorted Linked List",
        difficulty: "Easy",
        description: "Given the `head` of a sorted linked list (represented here simply as an array for testing), delete all duplicates such that each element appears only once. Return the linked list sorted as well.",
        starterCode: {
            javascript: "function deleteDuplicates(headArray) {\n  // Write your code here (input/output as arrays)\n  \n}",
            python: "def delete_duplicates(head_array):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[] deleteDuplicates(int[] headArray) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> deleteDuplicates(vector<int>& headArray) {\n        // Write your code here\n        return {};\n    }\n};"
        },
        testCases: [
          { input: "headArray = [1,1,2]", expected: "[1,2]" },
          { input: "headArray = [1,1,2,3,3]", expected: "[1,2,3]" },
          { input: "headArray = []", expected: "[]" }
        ]
      },
      {
        id: "intersection-sorted-arrays",
        title: "Intersection of Sorted Arrays",
        difficulty: "Easy",
        description: "Given two integer arrays `nums1` and `nums2` that are sorted in non-decreasing order, return an array of their intersection. Each element in the result must be unique and sorted.",
        starterCode: {
            javascript: "function intersection(nums1, nums2) {\n  // Write your code here\n  \n}",
            python: "def intersection(nums1, nums2):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[] intersection(int[] nums1, int[] nums2) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {\n        // Write your code here\n        return {};\n    }\n};"
        },
        testCases: [
          { input: "nums1 = [1,2,2,1], nums2 = [2,2]", expected: "[2]" },
          { input: "nums1 = [4,9,5], nums2 = [9,4,9,8,4] (assume sorted for input)", expected: "[4,9]" },
          { input: "nums1 = [1,2], nums2 = [3,4]", expected: "[]" }
        ]
      },
      {
        id: "union-sorted-arrays",
        title: "Union of Sorted Arrays",
        difficulty: "Easy",
        description: "Given two sorted arrays `nums1` and `nums2`, find their union. The union of two arrays is an array containing all distinct elements from both arrays. The result should be sorted.",
        starterCode: {
            javascript: "function unionArrays(nums1, nums2) {\n  // Write your code here\n  \n}",
            python: "def union_arrays(nums1, nums2):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[] unionArrays(int[] nums1, int[] nums2) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> unionArrays(vector<int>& nums1, vector<int>& nums2) {\n        // Write your code here\n        return {};\n    }\n};"
        },
        testCases: [
          { input: "nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 3]", expected: "[1, 2, 3, 4, 5]" },
          { input: "nums1 = [1, 2, 3], nums2 = [2, 3, 4, 5]", expected: "[1, 2, 3, 4, 5]" },
          { input: "nums1 = [1], nums2 = [2]", expected: "[1, 2]" }
        ]
      },
      {
        id: "find-duplicate-sorted",
        title: "Find Duplicate in Sorted Array",
        difficulty: "Easy",
        description: "Given a sorted array `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive. There is only one repeated number in `nums`, return this repeated number.",
        starterCode: {
            javascript: "function findDuplicate(nums) {\n  // Write your code here\n  \n}",
            python: "def find_duplicate(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int findDuplicate(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int findDuplicate(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "nums = [1,2,3,3,4]", expected: "3" },
          { input: "nums = [1,1,2]", expected: "1" },
          { input: "nums = [1,2,2,3,4,5]", expected: "2" }
        ]
      },
      {
        id: "repeating-missing-number",
        title: "Find Repeating and Missing Number",
        difficulty: "Easy",
        description: "Given an unsorted array of size `n`. Array elements are in the range from `1` to `n`. One number from set `{1, 2, …n}` is missing and one number occurs twice in the array. Find these two numbers.",
        starterCode: {
            javascript: "function findRepeatingMissing(nums) {\n  // Write your code here\n  \n}",
            python: "def find_repeating_missing(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[] findRepeatingMissing(int[] nums) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> findRepeatingMissing(vector<int>& nums) {\n        // Write your code here\n        return {};\n    }\n};"
        },
        testCases: [
          { input: "nums = [3, 1, 3]", expected: "[3, 2] (Repeating: 3, Missing: 2)" },
          { input: "nums = [4, 3, 6, 2, 1, 1]", expected: "[1, 5] (Repeating: 1, Missing: 5)" },
          { input: "nums = [1, 2, 2]", expected: "[2, 3] (Repeating: 2, Missing: 3)" }
        ]
      }
    ]
  },
  {
    id: "level-5",
    name: "Level 5 — Triplet Pointer Problems",
    description: "Expanding to three pointers to find combinations.",
    questions: [
      {
        id: "triplet-sum-zero-basic",
        title: "Triplet Sum to Zero Basic",
        difficulty: "Easy",
        description: "Given an integer array `nums`, return `true` if there exist three elements `a, b, c` such that `a + b + c = 0`. Return `false` otherwise.\n\nFor this beginner version, you just need to determine if AT LEAST ONE such triplet exists.",
        starterCode: {
            javascript: "function hasZeroTriplet(nums) {\n  // Write your code here\n  \n}",
            python: "def has_zero_triplet(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean hasZeroTriplet(int[] nums) {\n        // Write your code here\n        return false;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool hasZeroTriplet(vector<int>& nums) {\n        // Write your code here\n        return false;\n    }\n};"
        },
        testCases: [
          { input: "nums = [-1,0,1,2,-1,-4]", expected: "true" },
          { input: "nums = [0,1,1]", expected: "false" },
          { input: "nums = [0,0,0]", expected: "true" }
        ]
      },
      {
        id: "triplet-with-target",
        title: "Triplet with Target Sum",
        difficulty: "Easy",
        description: "Given an array `arr` and a target value `X`, find if there exists a triplet in the array whose sum is equal to `X`. Return `true` if such a triplet exists, else `false`.",
        starterCode: {
            javascript: "function hasTripletSum(arr, X) {\n  // Write your code here\n  \n}",
            python: "def has_triplet_sum(arr, X):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean hasTripletSum(int[] arr, int X) {\n        // Write your code here\n        return false;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool hasTripletSum(vector<int>& arr, int X) {\n        // Write your code here\n        return false;\n    }\n};"
        },
        testCases: [
          { input: "arr = [1, 4, 45, 6, 10, 8], X = 13", expected: "true (1 + 4 + 8)" },
          { input: "arr = [1, 2, 4, 3, 6], X = 10", expected: "true (1 + 3 + 6)" },
          { input: "arr = [1, 2, 4, 3, 6], X = 20", expected: "false" }
        ]
      },
      {
        id: "triplet-closest-target",
        title: "Triplet Closest to Target",
        difficulty: "Easy",
        description: "Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return the sum of the three integers.",
        starterCode: {
            javascript: "function threeSumClosest(nums, target) {\n  // Write your code here\n  \n}",
            python: "def three_sum_closest(nums, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int threeSumClosest(int[] nums, int target) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int threeSumClosest(vector<int>& nums, int target) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "nums = [-1,2,1,-4], target = 1", expected: "2 (-1 + 2 + 1)" },
          { input: "nums = [0,0,0], target = 1", expected: "0" },
          { input: "nums = [1,1,1,0], target = -100", expected: "2" }
        ]
      },
      {
        id: "count-triplets-smaller",
        title: "Count Triplets Smaller Than Target",
        difficulty: "Easy",
        description: "Given an array of distinct integers and a target sum. Count triplets in the array such that the sum of the triplet is strictly smaller than the target sum.",
        starterCode: {
            javascript: "function countTriplets(arr, target) {\n  // Write your code here\n  \n}",
            python: "def count_triplets(arr, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int countTriplets(int[] arr, int target) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int countTriplets(vector<int>& arr, int target) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "arr = [-2, 0, 1, 3], target = 2", expected: "2 ([-2, 0, 1] and [-2, 0, 3])" },
          { input: "arr = [5, 1, 3, 4, 7], target = 12", expected: "4" },
          { input: "arr = [1, 2, 3], target = 5", expected: "0" }
        ]
      },
      {
        id: "unique-triplets",
        title: "Find All Unique Triplets",
        difficulty: "Easy",
        description: "Given an integer array `nums`, return all the UNIQUE triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nReturn an array of arrays.",
        starterCode: {
            javascript: "function findUniqueTriplets(nums) {\n  // Write your code here\n  \n}",
            python: "def find_unique_triplets(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[][] findUniqueTriplets(int[] nums) {\n        // Write your code here\n        return new int[][]{};\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<vector<int>> findUniqueTriplets(vector<int>& nums) {\n        // Write your code here\n        return {};\n    }\n};"
        },
        testCases: [
          { input: "nums = [-1,0,1,2,-1,-4]", expected: "[[-1,-1,2], [-1,0,1]]" },
          { input: "nums = [0,1,1]", expected: "[]" },
          { input: "nums = [0,0,0]", expected: "[[0,0,0]]" }
        ]
      },
      {
        id: "largest-triplet-smaller",
        title: "Largest Triplet Smaller Than Target",
        difficulty: "Easy",
        description: "Given a sorted array of integers and a `target` value, find the maximum sum of a triplet that is strictly smaller than the `target`.",
        starterCode: {
            javascript: "function largestTripletSmaller(arr, target) {\n  // Write your code here\n  \n}",
            python: "def largest_triplet_smaller(arr, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int largestTripletSmaller(int[] arr, int target) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int largestTripletSmaller(vector<int>& arr, int target) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "arr = [1, 2, 3, 4, 5], target = 10", expected: "9 (1 + 3 + 5 or 2 + 3 + 4)" },
          { input: "arr = [-1, 2, 4, 7], target = 11", expected: "10" },
          { input: "arr = [1, 2, 3], target = 5", expected: "-1" }
        ]
      },
      {
        id: "smallest-triplet-greater",
        title: "Smallest Triplet Greater Than Target",
        difficulty: "Easy",
        description: "Given a sorted array of integers and a `target` value, find the minimum sum of a triplet that is strictly greater than the `target`.",
        starterCode: {
            javascript: "function smallestTripletGreater(arr, target) {\n  // Write your code here\n  \n}",
            python: "def smallest_triplet_greater(arr, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int smallestTripletGreater(int[] arr, int target) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int smallestTripletGreater(vector<int>& arr, int target) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "arr = [1, 2, 3, 4, 5], target = 8", expected: "9" },
          { input: "arr = [-1, 2, 4, 7], target = 5", expected: "10" },
          { input: "arr = [1, 2, 3], target = 10", expected: "-1" }
        ]
      },
      {
        id: "3sum-basic",
        title: "3Sum Basic",
        difficulty: "Easy",
        description: "Find a triplet in the array that sums up to exactly `target`.\n\nReturn the three elements as an array. If no such triplet exists, return an empty array. If multiple exist, return any one.",
        starterCode: {
            javascript: "function threeSum(nums, target) {\n  // Write your code here\n  \n}",
            python: "def three_sum(nums, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[] threeSum(int[] nums, int target) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> threeSum(vector<int>& nums, int target) {\n        // Write your code here\n        return {};\n    }\n};"
        },
        testCases: [
          { input: "nums = [1, 2, 3, 4, 5], target = 9", expected: "[1, 3, 5] (or [2, 3, 4])" },
          { input: "nums = [1, 2, 3], target = 7", expected: "[]" },
          { input: "nums = [1, 2, 3], target = 6", expected: "[1, 2, 3]" }
        ]
      },
      {
        id: "count-distinct-triplets",
        title: "Count Distinct Triplets",
        difficulty: "Easy",
        description: "Given a sorted array `arr` and a target sum `X`, count the number of distinct triplets whose sum is equal to `X`. The triplets themselves must be unique in terms of values.",
        starterCode: {
            javascript: "function countDistinctTriplets(arr, X) {\n  // Write your code here\n  \n}",
            python: "def count_distinct_triplets(arr, X):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int countDistinctTriplets(int[] arr, int X) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int countDistinctTriplets(vector<int>& arr, int X) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "arr = [1, 1, 2, 2, 3, 3], X = 6", expected: "1 (only [1, 2, 3])" },
          { input: "arr = [1, 1, 1], X = 3", expected: "1" },
          { input: "arr = [1, 2, 3, 4], X = 10", expected: "0" }
        ]
      },
      {
        id: "find-increasing-triplets",
        title: "Find Increasing Triplets",
        difficulty: "Easy",
        description: "Given an integer array `nums`, return `true` if there exists a triple of indices `(i, j, k)` such that `i < j < k` and `nums[i] < nums[j] < nums[k]`. If no such indices exist, return `false`.",
        starterCode: {
            javascript: "function increasingTriplet(nums) {\n  // Write your code here\n  \n}",
            python: "def increasing_triplet(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean increasingTriplet(int[] nums) {\n        // Write your code here\n        return false;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool increasingTriplet(vector<int>& nums) {\n        // Write your code here\n        return false;\n    }\n};"
        },
        testCases: [
          { input: "nums = [1,2,3,4,5]", expected: "true" },
          { input: "nums = [5,4,3,2,1]", expected: "false" },
          { input: "nums = [2,1,5,0,4,6]", expected: "true" }
        ]
      }
    ]
  },
  {
    id: "level-6",
    name: "Level 6 — Partitioning Style",
    description: "Segmenting arrays based on specific conditions.",
    questions: [
      {
        id: "dutch-national-flag",
        title: "Dutch National Flag Problem",
        difficulty: "Easy",
        description: "Given an array containing 0s, 1s, and 2s, sort the array in-place. You should use the Dutch National Flag algorithm (3-way partitioning) which works in O(N) time and O(1) space.",
        starterCode: {
            javascript: "function sortColors(nums) {\n  // Write your code here\n  \n}",
            python: "def sort_colors(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void sortColors(int[] nums) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "nums = [2,0,2,1,1,0]", expected: "[0,0,1,1,2,2]" },
          { input: "nums = [2,0,1]", expected: "[0,1,2]" },
          { input: "nums = [0]", expected: "[0]" }
        ]
      },
      {
        id: "sort-0-1-2",
        title: "Sort 0s, 1s, and 2s",
        difficulty: "Easy",
        description: "Another variation of sorting an array of 0s, 1s, and 2s. Partition the array into three segments: less than 1, equal to 1, and greater than 1.",
        starterCode: {
            javascript: "function sort012(arr) {\n  // Write your code here\n  \n}",
            python: "def sort_012(arr):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void sort012(int[] arr) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void sort012(vector<int>& arr) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "arr = [1, 2, 0, 1, 2, 0]", expected: "[0, 0, 1, 1, 2, 2]" },
          { input: "arr = [2, 1, 0]", expected: "[0, 1, 2]" },
          { input: "arr = [1, 1, 1]", expected: "[1, 1, 1]" }
        ]
      },
      {
        id: "partition-array-pivot",
        title: "Partition Array Around Pivot",
        difficulty: "Easy",
        description: "Given an array of integers and a pivot element, partition the array so that all elements less than the pivot come before it, and all elements greater than or equal to the pivot come after it. Relative order does not need to be strictly maintained (standard quicksort partition).",
        starterCode: {
            javascript: "function partitionPivot(arr, pivot) {\n  // Write your code here\n  \n}",
            python: "def partition_pivot(arr, pivot):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void partitionPivot(int[] arr, int pivot) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void partitionPivot(vector<int>& arr, int pivot) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "arr = [9, 12, 5, 10, 14, 3, 10], pivot = 10", expected: "[9, 5, 3, 10, 14, 12, 10] (Order may vary)" },
          { input: "arr = [1, 5, 3, 2, 4], pivot = 3", expected: "[1, 2, 3, 5, 4] (Order may vary)" },
          { input: "arr = [1, 2, 3], pivot = 5", expected: "[1, 2, 3]" }
        ]
      },
      {
        id: "move-negatives-before-positives",
        title: "Move Negatives Before Positives",
        difficulty: "Easy",
        description: "An array contains both positive and negative numbers. Partition the array so that all negative numbers appear before all positive numbers using a single pass (like quicksort partition).",
        starterCode: {
            javascript: "function partitionNegatives(arr) {\n  // Write your code here\n  \n}",
            python: "def partition_negatives(arr):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void partitionNegatives(int[] arr) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void partitionNegatives(vector<int>& arr) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6]", expected: "[-12, -13, -5, -7, -3, -6, 11, 6, 5] (Order may vary)" },
          { input: "arr = [1, 2, 3]", expected: "[1, 2, 3]" },
          { input: "arr = [-1, -2, -3]", expected: "[-1, -2, -3]" }
        ]
      },
      {
        id: "group-vowels-consonants",
        title: "Group Vowels and Consonants",
        difficulty: "Easy",
        description: "Given a string (represented as a character array), partition it such that all vowels are grouped at the beginning and all consonants are at the end.",
        starterCode: {
            javascript: "function groupVowelsConsonants(arr) {\n  // Write your code here\n  \n}",
            python: "def group_vowels_consonants(arr):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void groupVowelsConsonants(char[] arr) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void groupVowelsConsonants(vector<char>& arr) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "arr = ['a', 'b', 'c', 'e', 'd', 'i']", expected: "['a', 'e', 'i', 'b', 'd', 'c'] (Order may vary)" },
          { input: "arr = ['x', 'y', 'z']", expected: "['x', 'y', 'z']" },
          { input: "arr = ['o', 'u', 'a']", expected: "['o', 'u', 'a']" }
        ]
      },
      {
        id: "group-lowercase-uppercase",
        title: "Group Lowercase and Uppercase Letters",
        difficulty: "Easy",
        description: "Given a string of uppercase and lowercase letters, partition the array in-place so that all lowercase letters appear before all uppercase letters.",
        starterCode: {
            javascript: "function groupLowerUpper(arr) {\n  // Write your code here\n  \n}",
            python: "def group_lower_upper(arr):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void groupLowerUpper(char[] arr) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void groupLowerUpper(vector<char>& arr) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "arr = ['A', 'b', 'C', 'd', 'E', 'f']", expected: "['b', 'd', 'f', 'A', 'C', 'E'] (Order may vary)" },
          { input: "arr = ['a', 'b', 'c']", expected: "['a', 'b', 'c']" },
          { input: "arr = ['X', 'Y', 'Z']", expected: "['X', 'Y', 'Z']" }
        ]
      },
      {
        id: "rearrange-colors",
        title: "Rearrange Colors Together",
        difficulty: "Easy",
        description: "You have an array of characters representing colors: 'R', 'G', 'B'. Rearrange the array in-place such that all 'R's come first, then 'G's, then 'B's. This is a direct application of 3-way partitioning.",
        starterCode: {
            javascript: "function rearrangeColors(arr) {\n  // Write your code here\n  \n}",
            python: "def rearrange_colors(arr):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void rearrangeColors(char[] arr) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void rearrangeColors(vector<char>& arr) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "arr = ['B', 'R', 'G', 'B', 'R', 'G']", expected: "['R', 'R', 'G', 'G', 'B', 'B']" },
          { input: "arr = ['G', 'B', 'R']", expected: "['R', 'G', 'B']" },
          { input: "arr = ['R', 'R', 'R']", expected: "['R', 'R', 'R']" }
        ]
      },
      {
        id: "separate-prime-nonprime",
        title: "Separate Prime and Non-Prime Numbers",
        difficulty: "Easy",
        description: "Given an array of integers, partition it such that all prime numbers appear before non-prime numbers.",
        starterCode: {
            javascript: "function isPrime(n) {\n    if (n <= 1) return false;\n    for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;\n    return true;\n}\n\nfunction separatePrimes(arr) {\n  // Write your code here\n  \n}",
            python: "def is_prime(n):\n    if n <= 1: return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0: return False\n    return True\n\ndef separate_primes(arr):\n    # Write your code here\n    pass",
            java: "class Solution {\n    private boolean isPrime(int n) {\n        if (n <= 1) return false;\n        for (int i = 2; i * i <= n; i++) if (n % i == 0) return false;\n        return true;\n    }\n    public void separatePrimes(int[] arr) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\n    bool isPrime(int n) {\n        if (n <= 1) return false;\n        for (int i = 2; i * i <= n; i++) if (n % i == 0) return false;\n        return true;\n    }\npublic:\n    void separatePrimes(vector<int>& arr) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "arr = [4, 3, 2, 6, 7, 10, 11]", expected: "[3, 2, 7, 11, 4, 6, 10] (Order may vary)" },
          { input: "arr = [4, 6, 8, 9]", expected: "[4, 6, 8, 9]" },
          { input: "arr = [2, 3, 5, 7]", expected: "[2, 3, 5, 7]" }
        ]
      },
      {
        id: "alternate-positive-negative",
        title: "Alternate Positive and Negative Numbers",
        difficulty: "Easy",
        description: "Given an array of positive and negative integers, rearrange it so that positive and negative numbers alternate. If one type has more elements, they should simply appear at the end.",
        starterCode: {
            javascript: "function alternatePosNeg(arr) {\n  // Write your code here\n  \n}",
            python: "def alternate_pos_neg(arr):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public void alternatePosNeg(int[] arr) {\n        // Write your code here\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void alternatePosNeg(vector<int>& arr) {\n        // Write your code here\n    }\n};"
        },
        testCases: [
          { input: "arr = [1, 2, 3, -4, -1, 4]", expected: "[-4, 1, -1, 2, 3, 4] (Order/alternation format may vary)" },
          { input: "arr = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]", expected: "[-5, 5, -2, 2, -8, 4, 7, 1, 8, 0]" },
          { input: "arr = [1, 2, 3]", expected: "[1, 2, 3]" }
        ]
      },
      {
        id: "partition-even-odd-indexes",
        title: "Partition Even and Odd Indexes",
        difficulty: "Easy",
        description: "Rearrange an array such that all elements at even indices appear before all elements at odd indices. (Notice this relies on index properties, you just swap elements or create a new partitioned arrangement).",
        starterCode: {
            javascript: "function partitionEvenOddIndexes(arr) {\n  // Write your code here\n  \n}",
            python: "def partition_even_odd_indexes(arr):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[] partitionEvenOddIndexes(int[] arr) {\n        // Write your code here\n        return arr;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> partitionEvenOddIndexes(vector<int>& arr) {\n        // Write your code here\n        return arr;\n    }\n};"
        },
        testCases: [
          { input: "arr = [10, 20, 30, 40, 50, 60]", expected: "[10, 30, 50, 20, 40, 60]" },
          { input: "arr = [1, 2, 3]", expected: "[1, 3, 2]" },
          { input: "arr = [1]", expected: "[1]" }
        ]
      }
    ]
  },
  {
    id: "level-7",
    name: "Level 7 — Window + Two Pointer",
    description: "Combining sliding window techniques with pointers.",
    questions: [
      {
        id: "subarray-product-less-than-k",
        title: "Subarray Product Less Than K",
        difficulty: "Easy",
        description: "Given an array of integers `nums` and an integer `k`, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than `k`.",
        starterCode: {
            javascript: "function numSubarrayProductLessThanK(nums, k) {\n  // Write your code here\n  \n}",
            python: "def num_subarray_product_less_than_k(nums, k):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int numSubarrayProductLessThanK(int[] nums, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int numSubarrayProductLessThanK(vector<int>& nums, int k) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "nums = [10,5,2,6], k = 100", expected: "8" },
          { input: "nums = [1,2,3], k = 0", expected: "0" },
          { input: "nums = [1,2,3], k = 5", expected: "4 ( [1], [2], [3], [1,2] )" }
        ]
      },
      {
        id: "minimum-size-subarray-sum",
        title: "Minimum Size Subarray Sum",
        difficulty: "Easy",
        description: "Given an array of positive integers `nums` and a positive integer `target`, return the minimal length of a contiguous subarray whose sum is greater than or equal to `target`. If there is no such subarray, return `0` instead.",
        starterCode: {
            javascript: "function minSubArrayLen(target, nums) {\n  // Write your code here\n  \n}",
            python: "def min_sub_array_len(target, nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int minSubArrayLen(int target, int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int minSubArrayLen(int target, vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "target = 7, nums = [2,3,1,2,4,3]", expected: "2 ([4,3])" },
          { input: "target = 4, nums = [1,4,4]", expected: "1" },
          { input: "target = 11, nums = [1,1,1,1,1,1,1,1]", expected: "0" }
        ]
      },
      {
        id: "longest-substring-without-repeating",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Easy",
        description: "Given a string `s`, find the length of the longest substring without repeating characters.",
        starterCode: {
            javascript: "function lengthOfLongestSubstring(s) {\n  // Write your code here\n  \n}",
            python: "def length_of_longest_substring(s):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "s = \"abcabcbb\"", expected: "3 (\"abc\")" },
          { input: "s = \"bbbbb\"", expected: "1 (\"b\")" },
          { input: "s = \"pwwkew\"", expected: "3 (\"wke\")" }
        ]
      },
      {
        id: "max-consecutive-ones",
        title: "Maximum Consecutive Ones",
        difficulty: "Easy",
        description: "Given a binary array `nums`, return the maximum number of consecutive `1`s in the array. Note: A sliding window approach can track the length of the 1s sequence.",
        starterCode: {
            javascript: "function findMaxConsecutiveOnes(nums) {\n  // Write your code here\n  \n}",
            python: "def find_max_consecutive_ones(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int findMaxConsecutiveOnes(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int findMaxConsecutiveOnes(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "nums = [1,1,0,1,1,1]", expected: "3" },
          { input: "nums = [1,0,1,1,0,1]", expected: "2" },
          { input: "nums = [0,0,0]", expected: "0" }
        ]
      },
      {
        id: "fruits-into-baskets",
        title: "Fruits Into Baskets",
        difficulty: "Easy",
        description: "You are visiting a farm that has a single row of fruit trees arranged from left to right. You have two baskets, and each basket can only hold a single type of fruit. Return the maximum number of fruits you can pick.",
        starterCode: {
            javascript: "function totalFruit(fruits) {\n  // Write your code here\n  \n}",
            python: "def total_fruit(fruits):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int totalFruit(int[] fruits) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int totalFruit(vector<int>& fruits) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "fruits = [1,2,1]", expected: "3" },
          { input: "fruits = [0,1,2,2]", expected: "3 ([1,2,2])" },
          { input: "fruits = [1,2,3,2,2]", expected: "4 ([2,3,2,2])" }
        ]
      },
      {
        id: "longest-substring-same-characters",
        title: "Longest Substring With Same Characters",
        difficulty: "Easy",
        description: "Given a string `s`, find the length of the longest contiguous substring that contains only a single repeating character.",
        starterCode: {
            javascript: "function longestSameCharSubstring(s) {\n  // Write your code here\n  \n}",
            python: "def longest_same_char_substring(s):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int longestSameCharSubstring(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    int longestSameCharSubstring(string s) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "s = \"abbba\"", expected: "3 (\"bbb\")" },
          { input: "s = \"abcde\"", expected: "1" },
          { input: "s = \"aaabbbcccc\"", expected: "4 (\"cccc\")" }
        ]
      },
      {
        id: "smallest-window-target",
        title: "Smallest Window Containing Target",
        difficulty: "Easy",
        description: "Given an array of positive integers, find the smallest contiguous subarray that sums exactly to a `target`. Return the length, or `0` if not found.",
        starterCode: {
            javascript: "function smallestWindowSum(arr, target) {\n  // Write your code here\n  \n}",
            python: "def smallest_window_sum(arr, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int smallestWindowSum(int[] arr, int target) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int smallestWindowSum(vector<int>& arr, int target) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "arr = [2, 1, 5, 2, 8], target = 7", expected: "2 ([5, 2])" },
          { input: "arr = [3, 4, 1, 1, 6], target = 8", expected: "3 ([3, 4, 1])" },
          { input: "arr = [1, 2, 3], target = 10", expected: "0" }
        ]
      },
      {
        id: "count-valid-subarrays",
        title: "Count Valid Subarrays",
        difficulty: "Easy",
        description: "Given an array `nums` of positive integers, count the number of contiguous subarrays where the sum is strictly less than a `target`.",
        starterCode: {
            javascript: "function countValidSubarrays(nums, target) {\n  // Write your code here\n  \n}",
            python: "def count_valid_subarrays(nums, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int countValidSubarrays(int[] nums, int target) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int countValidSubarrays(vector<int>& nums, int target) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "nums = [2, 3, 4], target = 6", expected: "4 ( [2], [3], [4], [2,3] )" },
          { input: "nums = [1, 1, 1], target = 4", expected: "6 (all subarrays)" },
          { input: "nums = [5, 6, 7], target = 4", expected: "0" }
        ]
      },
      {
        id: "sliding-window-maximum-basic",
        title: "Sliding Window Maximum Basic",
        difficulty: "Easy",
        description: "Given an array of integers `nums` and an integer `k`, find the maximum sum of any contiguous subarray of size exactly `k`.",
        starterCode: {
            javascript: "function maxSubarraySum(nums, k) {\n  // Write your code here\n  \n}",
            python: "def max_subarray_sum(nums, k):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int maxSubarraySum(int[] nums, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxSubarraySum(vector<int>& nums, int k) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "nums = [2, 1, 5, 1, 3, 2], k = 3", expected: "9 ([5, 1, 3])" },
          { input: "nums = [2, 3, 4, 1, 5], k = 2", expected: "7 ([3, 4])" },
          { input: "nums = [1, 2, 3], k = 3", expected: "6" }
        ]
      },
      {
        id: "continuous-subarray-target-sum",
        title: "Continuous Subarray with Target Sum",
        difficulty: "Easy",
        description: "Given an array of non-negative integers `nums` and an integer `target`, return `true` if there exists a continuous subarray whose sum equals `target`, or `false` otherwise.",
        starterCode: {
            javascript: "function checkSubarraySum(nums, target) {\n  // Write your code here\n  \n}",
            python: "def check_subarray_sum(nums, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean checkSubarraySum(int[] nums, int target) {\n        // Write your code here\n        return false;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool checkSubarraySum(vector<int>& nums, int target) {\n        // Write your code here\n        return false;\n    }\n};"
        },
        testCases: [
          { input: "nums = [1, 4, 20, 3, 10, 5], target = 33", expected: "true ([20, 3, 10])" },
          { input: "nums = [1, 4, 0, 0, 3, 10, 5], target = 7", expected: "true ([4, 0, 0, 3])" },
          { input: "nums = [1, 2, 3], target = 10", expected: "false" }
        ]
      }
    ]
  },
  {
    id: "level-8",
    name: "Level 8 — String Pointer Problems",
    description: "Applying pointer techniques to string manipulations.",
    questions: [
      {
        id: "backspace-string-compare",
        title: "Comparing Strings with Backspaces",
        difficulty: "Easy",
        description: "Given two strings `s` and `t`, return `true` if they are equal when both are typed into empty text editors. '#' means a backspace character.\n\nNote that after backspacing an empty text, the text will continue empty.",
        starterCode: {
            javascript: "function backspaceCompare(s, t) {\n  // Write your code here\n  \n}",
            python: "def backspace_compare(s, t):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean backspaceCompare(String s, String t) {\n        // Write your code here\n        return false;\n    }\n}",
            cpp: "#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool backspaceCompare(string s, string t) {\n        // Write your code here\n        return false;\n    }\n};"
        },
        testCases: [
          { input: "s = \"ab#c\", t = \"ad#c\"", expected: "true" },
          { input: "s = \"ab##\", t = \"c#d#\"", expected: "true" },
          { input: "s = \"a#c\", t = \"b\"", expected: "false" }
        ]
      },
      {
        id: "valid-palindrome-ii",
        title: "Valid Palindrome II",
        difficulty: "Easy",
        description: "Given a string `s`, return `true` if the `s` can be palindrome after deleting at most one character from it.",
        starterCode: {
            javascript: "function validPalindrome(s) {\n  // Write your code here\n  \n}",
            python: "def valid_palindrome(s):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean validPalindrome(String s) {\n        // Write your code here\n        return false;\n    }\n}",
            cpp: "#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool validPalindrome(string s) {\n        // Write your code here\n        return false;\n    }\n};"
        },
        testCases: [
          { input: "s = \"aba\"", expected: "true" },
          { input: "s = \"abca\"", expected: "true" },
          { input: "s = \"abc\"", expected: "false" }
        ]
      },
      {
        id: "reverse-words-string",
        title: "Reverse Words in String",
        difficulty: "Easy",
        description: "Given an input string `s`, reverse the order of the words.\n\nA word is defined as a sequence of non-space characters. The words in `s` will be separated by at least one space.",
        starterCode: {
            javascript: "function reverseWords(s) {\n  // Write your code here\n  \n}",
            python: "def reverse_words(s):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public String reverseWords(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
            cpp: "#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string reverseWords(string s) {\n        // Write your code here\n        return \"\";\n    }\n};"
        },
        testCases: [
          { input: "s = \"the sky is blue\"", expected: "\"blue is sky the\"" },
          { input: "s = \"  hello world  \"", expected: "\"world hello\"" },
          { input: "s = \"a good   example\"", expected: "\"example good a\"" }
        ]
      },
      {
        id: "reverse-vowels",
        title: "Reverse Vowels of a String",
        difficulty: "Easy",
        description: "Given a string `s`, reverse only all the vowels in the string and return it.\n\nThe vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.",
        starterCode: {
            javascript: "function reverseVowels(s) {\n  // Write your code here\n  \n}",
            python: "def reverse_vowels(s):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public String reverseVowels(String s) {\n        // Write your code here\n        return s;\n    }\n}",
            cpp: "#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string reverseVowels(string s) {\n        // Write your code here\n        return s;\n    }\n};"
        },
        testCases: [
          { input: "s = \"hello\"", expected: "\"holle\"" },
          { input: "s = \"leetcode\"", expected: "\"leotcede\"" },
          { input: "s = \"aA\"", expected: "\"Aa\"" }
        ]
      },
      {
        id: "compare-typed-strings",
        title: "Compare Typed Strings",
        difficulty: "Easy",
        description: "Given two strings `name` and `typed`, check if they are identical after processing possible typos where characters are accidentally typed multiple times.",
        starterCode: {
            javascript: "function compareTyped(name, typed) {\n  // Write your code here\n  \n}",
            python: "def compare_typed(name, typed):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean compareTyped(String name, String typed) {\n        // Write your code here\n        return false;\n    }\n}",
            cpp: "#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool compareTyped(string name, string typed) {\n        // Write your code here\n        return false;\n    }\n};"
        },
        testCases: [
          { input: "name = \"alex\", typed = \"aaleex\"", expected: "true" },
          { input: "name = \"saeed\", typed = \"ssaaedd\"", expected: "false" },
          { input: "name = \"leelee\", typed = \"lleeelee\"", expected: "true" }
        ]
      },
      {
        id: "remove-stars",
        title: "Remove Stars From a String",
        difficulty: "Easy",
        description: "You are given a string `s`, which contains stars `*`. In one operation, you can choose a star in `s`, and remove the closest non-star character to its left, as well as remove the star itself. Return the string after all stars have been removed.",
        starterCode: {
            javascript: "function removeStars(s) {\n  // Write your code here\n  \n}",
            python: "def remove_stars(s):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public String removeStars(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
            cpp: "#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string removeStars(string s) {\n        // Write your code here\n        return \"\";\n    }\n};"
        },
        testCases: [
          { input: "s = \"leet**cod*e\"", expected: "\"lecoe\"" },
          { input: "s = \"erase*****\"", expected: "\"\"" },
          { input: "s = \"a*b*c*\"", expected: "\"\"" }
        ]
      },
      {
        id: "compress-string-inplace",
        title: "Compress String In-Place",
        difficulty: "Easy",
        description: "Given an array of characters `chars`, compress it using the following algorithm: Begin with an empty string `s`. For each group of consecutive repeating characters in `chars`: If the group's length is 1, append the character to `s`. Otherwise, append the character followed by the group's length.",
        starterCode: {
            javascript: "function compress(chars) {\n  // Write your code here\n  \n}",
            python: "def compress(chars):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int compress(char[] chars) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int compress(vector<char>& chars) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "chars = [\"a\",\"a\",\"b\",\"b\",\"c\",\"c\",\"c\"]", expected: "6 (chars becomes [\"a\",\"2\",\"b\",\"2\",\"c\",\"3\"])" },
          { input: "chars = [\"a\"]", expected: "1" },
          { input: "chars = [\"a\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\"]", expected: "4 (chars becomes [\"a\",\"b\",\"1\",\"2\"])" }
        ]
      },
      {
        id: "remove-duplicate-letters",
        title: "Remove Duplicate Letters",
        difficulty: "Easy",
        description: "Given a string `s`, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.",
        starterCode: {
            javascript: "function removeDuplicateLetters(s) {\n  // Write your code here\n  \n}",
            python: "def remove_duplicate_letters(s):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public String removeDuplicateLetters(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
            cpp: "#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    string removeDuplicateLetters(string s) {\n        // Write your code here\n        return \"\";\n    }\n};"
        },
        testCases: [
          { input: "s = \"bcabc\"", expected: "\"abc\"" },
          { input: "s = \"cbacdcbc\"", expected: "\"acdb\"" },
          { input: "s = \"aab\"", expected: "\"ab\"" }
        ]
      },
      {
        id: "long-pressed-name",
        title: "Long Pressed Name",
        difficulty: "Easy",
        description: "Your friend is typing their `name` into a keyboard. Sometimes, when typing a character `c`, the key might get long pressed, and the character will be typed 1 or more times. You examine the `typed` characters of the keyboard. Return `true` if it is possible that it was your friends name, with some characters (possibly none) being long pressed.",
        starterCode: {
            javascript: "function isLongPressedName(name, typed) {\n  // Write your code here\n  \n}",
            python: "def is_long_pressed_name(name, typed):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean isLongPressedName(String name, String typed) {\n        // Write your code here\n        return false;\n    }\n}",
            cpp: "#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool isLongPressedName(string name, string typed) {\n        // Write your code here\n        return false;\n    }\n};"
        },
        testCases: [
          { input: "name = \"alex\", typed = \"aaleex\"", expected: "true" },
          { input: "name = \"saeed\", typed = \"ssaaedd\"", expected: "false" },
          { input: "name = \"leelee\", typed = \"lleeelee\"", expected: "true" }
        ]
      },
      {
        id: "minimum-window-sort-string",
        title: "Minimum Window Sort (String Version)",
        difficulty: "Easy",
        description: "Given a string `s`, find the length of the shortest continuous substring that needs to be sorted (in alphabetical order) in place for the whole string to be sorted.",
        starterCode: {
            javascript: "function findUnsortedSubarrayString(s) {\n  // Write your code here\n  \n}",
            python: "def find_unsorted_subarray_string(s):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int findUnsortedSubarrayString(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <string>\nusing namespace std;\n\nclass Solution {\npublic:\n    int findUnsortedSubarrayString(string s) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "s = \"abcgfdehij\"", expected: "4 (\"gfde\")" },
          { input: "s = \"abcdef\"", expected: "0" },
          { input: "s = \"zyxwv\"", expected: "5" }
        ]
      }
    ]
  },
  {
    id: "level-9",
    name: "Level 9 — Advanced Beginner",
    description: "A stepping stone into more complex pointer applications.",
    questions: [
      {
        id: "container-water-basic",
        title: "Container with Most Water",
        difficulty: "Easy",
        description: "Given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`.\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
        starterCode: {
            javascript: "function maxArea(height) {\n  // Write your code here\n  \n}",
            python: "def max_area(height):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int maxArea(int[] height) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "height = [1,8,6,2,5,4,8,3,7]", expected: "49" },
          { input: "height = [1,1]", expected: "1" },
          { input: "height = [4,3,2,1,4]", expected: "16" }
        ]
      },
      {
        id: "trapping-rain-water-basic",
        title: "Trapping Rain Water Basic",
        difficulty: "Easy",
        description: "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining. Use the two-pointer approach for O(1) space.",
        starterCode: {
            javascript: "function trap(height) {\n  // Write your code here\n  \n}",
            python: "def trap(height):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int trap(int[] height) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int trap(vector<int>& height) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", expected: "6" },
          { input: "height = [4,2,0,3,2,5]", expected: "9" },
          { input: "height = [1,2,3]", expected: "0" }
        ]
      },
      {
        id: "minimum-window-sort",
        title: "Minimum Window Sort",
        difficulty: "Easy",
        description: "Given an array `nums`, you need to find one continuous subarray such that if you only sort this subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order. Return its length.",
        starterCode: {
            javascript: "function findUnsortedSubarray(nums) {\n  // Write your code here\n  \n}",
            python: "def find_unsorted_subarray(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int findUnsortedSubarray(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int findUnsortedSubarray(vector<int>& nums) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "nums = [2,6,4,8,10,9,15]", expected: "5" },
          { input: "nums = [1,2,3,4]", expected: "0" },
          { input: "nums = [1]", expected: "0" }
        ]
      },
      {
        id: "quadruple-sum-target",
        title: "Quadruple Sum to Target",
        difficulty: "Easy",
        description: "Given an array `nums` of `n` integers, return an array of all the unique quadruplets `[nums[a], nums[b], nums[c], nums[d]]` such that `a, b, c, d` are distinct and sum up to `target`.",
        starterCode: {
            javascript: "function fourSum(nums, target) {\n  // Write your code here\n  \n}",
            python: "def four_sum(nums, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[][] fourSum(int[] nums, int target) {\n        // Write your code here\n        return new int[][]{};\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<vector<int>> fourSum(vector<int>& nums, int target) {\n        // Write your code here\n        return {};\n    }\n};"
        },
        testCases: [
          { input: "nums = [1,0,-1,0,-2,2], target = 0", expected: "[[-2,-1,1,2], [-2,0,0,2], [-1,0,0,1]]" },
          { input: "nums = [2,2,2,2,2], target = 8", expected: "[[2,2,2,2]]" },
          { input: "nums = [1,1,1,1], target = 5", expected: "[]" }
        ]
      },
      {
        id: "4sum-basic",
        title: "4Sum Basic",
        difficulty: "Easy",
        description: "A variation of Quadruple Sum: determine if there is at least one quadruple in the array that sums to `target`. Return `true` if it exists, `false` otherwise.",
        starterCode: {
            javascript: "function hasFourSum(nums, target) {\n  // Write your code here\n  \n}",
            python: "def has_four_sum(nums, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean hasFourSum(int[] nums, int target) {\n        // Write your code here\n        return false;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool hasFourSum(vector<int>& nums, int target) {\n        // Write your code here\n        return false;\n    }\n};"
        },
        testCases: [
          { input: "nums = [1, 0, -1, 0, -2, 2], target = 0", expected: "true" },
          { input: "nums = [2, 2, 2, 2], target = 8", expected: "true" },
          { input: "nums = [1, 2, 3, 4], target = 11", expected: "false" }
        ]
      },
      {
        id: "boats-save-people",
        title: "Boats to Save People",
        difficulty: "Easy",
        description: "You are given an array `people` where `people[i]` is the weight of the `i`th person, and an infinite number of boats where each boat can carry a maximum weight of `limit`. Each boat carries at most two people. Return the minimum number of boats to carry every given person.",
        starterCode: {
            javascript: "function numRescueBoats(people, limit) {\n  // Write your code here\n  \n}",
            python: "def num_rescue_boats(people, limit):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int numRescueBoats(int[] people, int limit) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int numRescueBoats(vector<int>& people, int limit) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "people = [1,2], limit = 3", expected: "1" },
          { input: "people = [3,2,2,1], limit = 3", expected: "3" },
          { input: "people = [3,5,3,4], limit = 5", expected: "4" }
        ]
      },
      {
        id: "max-chunks-sorted",
        title: "Max Chunks To Make Sorted",
        difficulty: "Easy",
        description: "You are given an integer array `arr` of length `n` that represents a permutation of the integers in the range `[0, n - 1]`. We split `arr` into some number of chunks (partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array. Return the largest number of chunks we can make.",
        starterCode: {
            javascript: "function maxChunksToSorted(arr) {\n  // Write your code here\n  \n}",
            python: "def max_chunks_to_sorted(arr):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int maxChunksToSorted(int[] arr) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxChunksToSorted(vector<int>& arr) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "arr = [4,3,2,1,0]", expected: "1" },
          { input: "arr = [1,0,2,3,4]", expected: "4" },
          { input: "arr = [0,1,2,3,4]", expected: "5" }
        ]
      },
      {
        id: "shortest-unsorted-subarray",
        title: "Shortest Unsorted Continuous Subarray",
        difficulty: "Easy",
        description: "Given an integer array `nums`, find the boundaries of the shortest continuous subarray that needs sorting in place so that the whole array is sorted. Return the array representing the boundaries `[start_index, end_index]`.",
        starterCode: {
            javascript: "function findUnsortedSubarrayBounds(nums) {\n  // Write your code here\n  \n}",
            python: "def find_unsorted_subarray_bounds(nums):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int[] findUnsortedSubarrayBounds(int[] nums) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> findUnsortedSubarrayBounds(vector<int>& nums) {\n        // Write your code here\n        return {};\n    }\n};"
        },
        testCases: [
          { input: "nums = [2,6,4,8,10,9,15]", expected: "[1, 5]" },
          { input: "nums = [1,2,3,4]", expected: "[-1, -1] (or empty/invalid bounds depending on language)" },
          { input: "nums = [2,1]", expected: "[0, 1]" }
        ]
      },
      {
        id: "circular-array-pair-sum",
        title: "Circular Array Pair Sum",
        difficulty: "Easy",
        description: "Given a sorted and rotated array, find if there is a pair with a given sum. The array was initially sorted but was rotated at an unknown pivot. Use a two-pointer approach that wraps around.",
        starterCode: {
            javascript: "function pairInSortedRotated(arr, x) {\n  // Write your code here\n  \n}",
            python: "def pair_in_sorted_rotated(arr, x):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public boolean pairInSortedRotated(int[] arr, int x) {\n        // Write your code here\n        return false;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool pairInSortedRotated(vector<int>& arr, int x) {\n        // Write your code here\n        return false;\n    }\n};"
        },
        testCases: [
          { input: "arr = [11, 15, 6, 8, 9, 10], x = 16", expected: "true (10 + 6)" },
          { input: "arr = [11, 15, 26, 38, 9, 10], x = 35", expected: "true (26 + 9)" },
          { input: "arr = [11, 15, 26, 38, 9, 10], x = 45", expected: "false" }
        ]
      },
      {
        id: "closest-quadruple-target",
        title: "Closest Quadruple to Target",
        difficulty: "Easy",
        description: "Given an integer array `nums` of length `n` and an integer `target`, find four integers in `nums` such that the sum is closest to `target`. Return the sum of the four integers.",
        starterCode: {
            javascript: "function fourSumClosest(nums, target) {\n  // Write your code here\n  \n}",
            python: "def four_sum_closest(nums, target):\n    # Write your code here\n    pass",
            java: "class Solution {\n    public int fourSumClosest(int[] nums, int target) {\n        // Write your code here\n        return 0;\n    }\n}",
            cpp: "#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    int fourSumClosest(vector<int>& nums, int target) {\n        // Write your code here\n        return 0;\n    }\n};"
        },
        testCases: [
          { input: "nums = [1, -2, -5, -4, -3, 3, 3, 5], target = -11", expected: "-14" },
          { input: "nums = [1, 2, 3, 4, 5], target = 10", expected: "10 (1+2+3+4)" },
          { input: "nums = [-1, 2, 1, -4], target = 1", expected: "-2 (-1+2+1-4) (if padding needed, or invalid input if < 4)" }
        ]
      }
    ]
  }
];
