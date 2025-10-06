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
