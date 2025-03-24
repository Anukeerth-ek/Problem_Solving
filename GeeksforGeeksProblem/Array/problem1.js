// Indexes of Subarray Sum

// Given an array arr[] containing only non-negative integers, your task is to find a continuous subarray (a contiguous sequence of elements) whose
// sum equals a specified value target. You need to return the 1-based indices of the leftmost and rightmost elements of this subarray. You need to
// find the first subarray whose sum is equal to the target.

// Note: If no such array is possible then, return [-1].

// ans:

const subarraySum = (arr, target) => {
    let arrLength = arr.length;
    let result = 0;

    for (let i = 1; i <= arrLength; i++) {
         for (let j = i; j <= arr.length; j++) {
              result = result + arr[j];

            //    console.log(result)
              if (result > target) {
                   break;
              } else if (result === target) {
                   console.log("Helo", j);
              }
         }
    }
};

console.log(subarraySum([1, 2, 3, 7, 5], 12));
