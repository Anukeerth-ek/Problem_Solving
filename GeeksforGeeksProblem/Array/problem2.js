// You are given an array arr of size n - 1 that contains distinct integers in the range from 1 to n (inclusive). This array represents a
// permutation of the integers from 1 to n with one element missing. Your task is to identify and return the missing element.

// Examples:

// Input: arr[] = [1, 2, 3, 5]
// Output: 4
// Explanation: All the numbers from 1 to 5 are present except 4.

const missingNumber = (arr) => {
     const arrayLength = arr.length + 1;

     const totalSum = (arrayLength * (arrayLength + 1)) / 2;

     const totalArraySum = arr.reduce((acc, curr) => acc + curr, 0);

     return totalSum - totalArraySum;
};

console.log(missingNumber([1, 2, 4, 5]));
