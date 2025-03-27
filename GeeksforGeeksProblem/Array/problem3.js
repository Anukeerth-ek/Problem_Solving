// Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then
// return -1.

// Note: The second largest element should not be equal to the largest element.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

class Solution {
     getSecondLargest(arr) {
          if (arr.length < 2) return -1;

          let largest = -Infinity,
               secondLargest = -Infinity;

          for (let num of arr) {
               if (num > largest) {
                    secondLargest = largest;
                    console.log(secondLargest);
                    largest = num;
               } else if (num > secondLargest && num < largest) {
                    secondLargest = num;
               }
          }

          return secondLargest === -Infinity ? -1 : secondLargest;
     }
}

const solution = new Solution();

console.log(solution.getSecondLargest([12, 35, 1, 10, 34, 1]));
// console.log(solution.getSecondLargest([10, 5, 10]));
// console.log(solution.getSecondLargest([10, 10, 10]));
