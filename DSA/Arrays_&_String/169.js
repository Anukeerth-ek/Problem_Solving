// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104

function majorityElement(arr) {
    const count = new Map();

    const halfMajority = arr.length / 2;

    for (let element of arr) {
        count.set(element, (count.get(element) || 0) + 1)

        if (count.get(element) > halfMajority) {
            return element
        }
    }

}

console.log(majorityElement([3, 2, 3]));
