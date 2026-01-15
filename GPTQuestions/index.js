// _____________________________________________________
//1.  Input: "hello"
// Output: "olleh"
// function reverseString(str) {
//      return [...str].reverse().join("")
// }

// console.log(reverseString("hello"));
// _____________________________________________________

//2.  Input: [1,2,3,2,4,1]
// Output: [1,2]

// function findDuplicates(arr) {
//      const seen = new Set()

//      const duplicate = new Set()

//      for (let num of arr) {
//           if (seen.has(num)) {
//                duplicate.add(num)
//           }
//           seen.add(num)
//      }
//      return [...duplicate]
// }

// console.log(findDuplicates([1, 2, 3, 2, 4, 1]))
// _____________________________________________________

// _____________________________________________________

// 3. Find the largest/smallest element in an array

// const findSmallest = (arr) => {

// Lets find smallest element here

// if (!Array.isArray(arr) || arr.length <= 0) {
//     return "Please provide an array values"
// }

// let smallestNumber = arr[0]

// for (let i = 1; i < arr.length; i++) {
//     if (smallestNumber > arr[i]) {
//         smallestNumber = arr[i]
//     }
// }
// return smallestNumber;

// _______________________________________________
// Lets find smallest element here 2nd step

// const smallestElement = arr.reduce((curr, acc) => curr < acc ? curr : acc)
// console.log(smallestElement)
// }

// console.log(findSmallest([2, 5, 8, 10, 24, 1]))
// _____________________________________________________

// _____________________________________________________
// 4. Remove duplicates from an array

// const removeDuplicates = (arr) => {
//     // lets find duplicates here

//     if (!Array.isArray(arr) || arr.length <= 0) {
//         return "Please enter a valid array"
//     }

//      const seen = new Set();
//      let newArr = [];

//     for (let element = 0; element < arr.length; element++) {
//         if (!seen.has(arr[element])) {
//             seen.add(arr[element])
//             newArr.push(arr[element])
//         }
//     }
//     return newArr
// };
// console.log(removeDuplicates([1, 2, 5, 8, 10, 24, 8, 1]));
// _____________________________________________________

// _____________________________________________________
// 5. Check if two strings are anagrams

// const checkAnagram = (string1, string2) => {
//      const splitedString1 = string1.split("").sort().join("");
//      const splitedString2 = string2.split("").sort().join("");

//      if (splitedString1 === splitedString2) {
//           return "anagram";
//      } else {
//           return "not a angaram";
//      }
// };
// console.log(checkAnagram("listen", "silent"));

// _____________________________________________________

// Q1: Convert this array to object
// const users = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" }
// ];

// const result = users.reduce((acc, curr) => {
//     acc[curr.id] = curr
//     return acc
// }, {})
// console.log(result)
// _____________________________________________________

// Q2: Remove duplicates

// const removeDuplicates = (arr) => {

//     if (!Array.isArray(arr)) {
//          throw new TypeError("Please provide an array")
//     }

//     const set = new Set()
//     let result = []

//     for (let i = 0; i < arr.length; i++) {

//         if (!set.has(arr[i])) {
//             set.add(arr[i])
//             result.push(arr[i])

//         }
//     }
//     return result;

//  }
// console.log(removeDuplicates([1,2,2,3,4,4,5]))
// → [1,2,3,4,5]
// _____________________________________________________

// 9. Two Sum

// const twoSum = (arr, target) => {
//      if (!Array.isArray(arr)) {
//           throw new TypeError("Please provide an array");
//      }

//      let result = {};

//      for (let i = 0; i < arr.length; i++) {
//           let current = arr[i];
//           let needed = (target = current);

//           if (result.hasOwnProperty(needed)) {
//                return [result[current], i];
//           }
//           result[current] = i;
//      }
//      return null;
// };

// console.log(twoSum([3, 3], 6));

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]   // because 2 + 7 = 9

// Input: [3,2,4], target = 6
// Output: [1,2]

// Input: [3,3], target = 6
// Output: [0,1]
// _____________________________________________________