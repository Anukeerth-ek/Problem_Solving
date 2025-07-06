// // You are given an array of integers nums and an integer target.

// // Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to
// // target. Since the answer may be too large, return it modulo 109 + 7.

// // Example 1:

// // Input: nums = [3,5,6,7], target = 9
// // Output: 4
// // Explanation: There are 4 subsequences that satisfy the condition.
// // [3] -> Min value + max value <= target (3 + 3 <= 9)
// // [3,5] -> (3 + 5 <= 9)
// // [3,5,6] -> (3 + 6 <= 9)
// // [3,6] -> (3 + 6 <= 9)
// // Example 2:

// // Input: nums = [3,3,6,8], target = 10
// // Output: 6
// // Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
// // [3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]
// // Example 3:

// // Input: nums = [2,3,3,4,6,7], target = 12
// // Output: 61
// // Explanation: There are 63 non-empty subsequences, two of them do not satisfy the condition ([6,7], [7]).
// // Number of valid subsequences (63 - 2 = 61).

// // Constraints:

// // 1 <= nums.length <= 105
// // 1 <= nums[i] <= 106
// // 1 <= target <= 106

// const handleRecusion = (arr, target) => {
//      const MOD = 1e9 + 7;
//      nums.sort((a, b) => a - b);

//      const n = nums.length;
//      const pow = new Array(n).fill(1);
//      // Precompute powers of 2 modulo MOD
//      for (let i = 1; i < n; i++) {
//           pow[i] = (pow[i - 1] * 2) % MOD;
//      }

//      let left = 0,
//           right = n - 1;
//      let result = 0;

//      while (left <= right) {
//           if (nums[left] + nums[right] <= target) {
//                result = (result + pow[right - left]) % MOD;
//                left++;
//           } else {
//                right--;
//           }
//      }

//      return result;
// };

// console.log(handleRecusion([3, 5, 6, 7], 9));

// ________________________________________________________________________________________

// 2. Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse 
// of the string is the same as the string.

// Examples:

// Example 1:
// Input: Str =  “ABCDCBA”
// Output: Palindrome
// Explanation: String when reversed is the same as string.

// Example 2:
// Input: Str = “TAKE U FORWARD”
// Output: Not Palindrome
// Explanation: String when reversed is not the same as string.

// const handlePalindrome = (palindromeString)=> {

//     const palindromeChecker = palindromeString;

//     return handlePalindrome()

// }
// console.log(handlePalindrome("ABCDCBA"))

// ________________________________________________________________________________________

// 3. Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return 
// the new head.

// Example 1:


// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []
 

// Constraints:

// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50


// ans:

// const handleRemoveLinkedList = (head, value)=> {

//     let result = []
//     for(let i = 0; i < head.length; i++) {
//         if(head[i] !== value) {
//             result.push(head[i])
//         }
//     }
//     console.log('res', result)
// }

// console.log(handleRemoveLinkedList([1,2,6,3,4,5,6], 6))
// console.log(handleRemoveLinkedList([], 1))
// console.log(handleRemoveLinkedList([6,6,6], 6))

// ________________________________________________________________________________________

// 4. Print Name 5 times

// const userName = "Anukeerth EK"

// let noOfTimesPrint = 0;
// const handlePrintName = ()=> {

//     if(noOfTimesPrint === 5) return 
//     else {
//         console.log(`My name is ${userName}`)
//         noOfTimesPrint ++;
//         handlePrintName()
//     }
// }

// function main() {
//     handlePrintName()
// }

// main()
// ________________________________________________________________________________________

// ________________________________________________________________________________________

// 5. Print linearly from 1 to N


// let n = 1;
// const handleLinearlyPrint = (number)=> {

//     if(n === number + 1) return;

//     else {
//         console.log(n)
//         n++;
//         handleLinearlyPrint(number--)
//     }
// }

// const main = ()=> {
//     const n = 5
//     handleLinearlyPrint(n)
// }

// main()
// ________________________________________________________________________________________

// ________________________________________________________________________________________

// 6. Print N to 1


// const handlePrint = (n)=> {
//     if(n < 1) return

//     else {
//         console.log(n)
//         n--;
//         handlePrint(n--)
//     }
// }

// const main=()=> {
//     const n = 5;
//     handlePrint(n)
// }

// main()
// ________________________________________________________________________________________

// ________________________________________________________________________________________

// 7. Print 1 to N by using backtracking

// const handlePrint = (n, i = 1)=> {

//     if(i > n) return;

//     else {
//         handlePrint(n, i+1)
//         console.log(i)
//     }
// }

// function main() {
//     const n = 5;
//     handlePrint(n)
// }

// main()