// You are given a 0-indexed integer array nums of size n.

// Define two arrays leftSum and rightSum where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return an integer array answer of size n where answer[i] = |leftSum[i] - rightSum[i]|.

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
// Example 2:

// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 105

// const handleLeftAndRightSumDiffernce = (arr) => {
//      let leftSum = 0;

//      let leftSumArr = [];
//      let rightSumArr = [];
//      let resultantArr = [];
//      for (let i = 0; i < arr.length; i++) {
//           let rightSum = 0;
//           leftSum += arr[i] + arr[i - 1] ? arr[i - 1] : 0;
//           leftSumArr.push(leftSum);

//           for (let j = i + 1; j < arr.length; j++) {
//                rightSum += arr[j];
//           }
//           rightSumArr.push(rightSum);
//      }

//      for (let i = 0; i < arr.length; i++) {
//           resultantArr.push(Math.abs(leftSumArr[i] - rightSumArr[i]));
//      }

//      return resultantArr;
// };
// console.log(handleLeftAndRightSumDiffernce([10, 4, 8, 3]));
