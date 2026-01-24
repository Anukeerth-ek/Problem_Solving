// const printNumber = (number) => {
//     if (number === 0) {
//         return
//     }

//     console.log(number)

//     printNumber(number - 1)
// };

// console.log(printNumber(3));
// _________________________________________________

// 2. Reconstruct input array from output averages

// _________________________________________________
// 3. Find Duplicates Element in the array

// const findDuplicates = (arr) => {
//     if (arr.length === 0) return false;

//     let map = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         if (map.has(arr[i])) {

//             return true

//         }
//         else {
//             map.set(arr[i], true)
//            continue
//         }
//     }
//     return false;
// }
// console.log(findDuplicates([1, 2, 1, 3, 4]))
// console.log(findDuplicates([3, 4, 5, 7, 10]))
// _________________________________________________

// 4. Find Missing Numbers in a Range

// const findMissingNumbers = (arr) => {

//     if (!Array.isArray(arr)) {
//         throw new TypeError("Expecting Array");
//     }

//     if (arr.length === 0) return [];

//     const LargestNumber = Math.max(...arr);

//     const set = new Set(arr);

//     let missingNumbers = [];

//     for (let i = 1; i < LargestNumber; i++){
//         if (!set.has(i)) {
//             missingNumbers.push(i)
//         }
//     }
//     return missingNumbers;
// };

// console.log(findMissingNumbers([2, 4, 6, 9]));

// _________________________________________________

// 5. Remove Duplicates from Array

// const findDuplicates = (array) => {

//     if (!Array.isArray(array)) {
//         throw new TypeError("Expecting Array")
//     }

//     if (array.length === 0) return [];

//     const set = new Set();

//     let result = [];

//     for (let i = 0; i < array.length; i++) {
//         if (!set.has(array[i])) {
//             set.add(array[i]);

//             result.push(array[i])
//         }
//     }
//     return result;
// }

// console.log(findDuplicates([1,2,2,3,4,4,5]))
// _________________________________________________

// 6. Count Frequency of Elements

// const findFrequency = (arr) => {

//     if (arr.length === 0) return [];

//     let result = Object.create(null);

//     for (const num of arr) {
//         result[num] = (result[num] || 0) + 1
//     }
//     return result;

// }

// console.log(findFrequency(["a","b","a","c","b","a"])) // Output: { a: 3, b: 2, c: 1 }
// _________________________________________________

// 7. Find Second Largest Number

// const findSecondLargest = (arr) => {
//      let largestElement = -Infinity;
//      let secondLargestElement = -Infinity;

//     for (let i = 0; i < arr.length; i++) {

//           if (arr[i] > largestElement) {
//               secondLargestElement = largestElement;
//               largestElement = arr[i];

//           } else if(arr[i] < largestElement && arr[i] > secondLargestElement){
//                secondLargestElement = arr[i]
//           }
//     }

//     if (secondLargestElement === -Infinity) {
//         throw new TypeError("No distint element")
//     }
//      return secondLargestElement;
// };

// console.log(findSecondLargest([10, 5, 8, 20, 2]));
// console.log(findSecondLargest([10, 10, 2]));
// console.log(findSecondLargest([1, 10, 2, 2]));

// Input: [10, 5, 8, 20, 2]
// Output: 10
// _________________________________________________

// 8. Move All Zeros to End

// const MoveZerosToEnd = (arr) => {
//     if (!Array.isArray(arr)) {
//         throw new TypeError("please provide an array")
//     }

//     // return arr.sort((a, b)=> b-a)

//     let shiftingIndex = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             arr[shiftingIndex] = arr[i];
//             shiftingIndex++
//         }
//     }

//     while (shiftingIndex < arr.length) {
//         arr[shiftingIndex] = 0;
//         shiftingIndex++
//     }
//     return arr;
// }

// console.log(MoveZerosToEnd([0,1,0,3,12]))
// console.log(MoveZerosToEnd([0,0,0,3,12]))
// console.log(MoveZerosToEnd([0,1,0,0]))
// console.log(MoveZerosToEnd("Array"))
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// _________________________________________________

// 9. Group By Property

// const users = [
//      { name: "Kevin", role: "admin" },
//      { name: "Benz", role: "user" },
//      { name: "Caroline", role: "admin" },
// ];

// const groupBy = (users, key) => {

//     if (!Array.isArray(users)) {
//         throw new TypeError("Expecting an array")
//     }

//     if (!typeof(key) === 'string') {
//         throw new TypeError('Expecting the type should be string')
//     }

//     const result = Object.create(null);

//     for (let user of users) {

//         const groupKey = user.role;

//         if (!result[groupKey]) {
//             result[groupKey] = []
//         }

//         result[groupKey].push({name: user.name})
//     }
//     return result
// };

// console.log(groupBy(users, 'role'));

// // Output:
// {
//   admin: [{...}, {...}],
//   user: [{...}]
// }
// _________________________________________________

// 10. Flatten Nested Array

// const flattenArray = (arr) => {

//     if (!Array.isArray(arr)) {
//         throw new TypeError("arr is not an array")
//     }

//     return arr.reduce((accumulator, currentValue) => {
//         if (Array.isArray(currentValue)) {
//             accumulator?.push(...flattenArray(currentValue))
//         }
//         else {
//             accumulator.push(currentValue)
//         }
//         return accumulator;
//     }, [])
// }
// console.log(flattenArray([1, [2, [3, 4], 5]]))
// Input: [1, [2, [3, 4], 5]]
// Output: [1,2,3,4,5]
// _________________________________________________

// _____________Shallow Copy____________________

// const originalObj = { a: 1, b: { c: 2 } };

// const shallowCopy = Object.assign({}, originalObj)

// shallowCopy.b.c = 3;

// console.log("original hi",  originalObj)

// console.log("shallow hi", shallowCopy)

// _____________Deep Copy____________________

// const originalObj = { a: 1, b: { c: 2 } };

// const deepCopy = JSON.parse(JSON.stringify(originalObj));

// deepCopy.b.c = 3;

// console.log("original", originalObj);
// console.log("deep", deepCopy)

// _________________________________________________

// function deepClone(obj, seen = new WeakMap()) {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   if (seen.has(obj)) {
//     return seen.get(obj);
//   }

//   const clone = Array.isArray(obj) ? [] : {};
//   seen.set(obj, clone);

//   for (const key in obj) {
//     clone[key] = deepClone(obj[key], seen);
//   }

//   return clone;
// }

// const obj = { a: 1, b: { c: 2 } };

// const clonedObj = deepClone(obj);

// clonedObj.b.c = 99;

// console.log(clonedObj); // { a: 1, b: { c: 99 } }
// console.log(obj);       // { a: 1, b: { c: 2 } }
// _________________________________________________

// function deepClone(obj) {
//     console.log("obj", obj)
//   // Handle primitives and null
//   if (obj === null || typeof obj !== 'object') {
//     return obj;
//   }

//   // Handle Arrays
//   if (Array.isArray(obj)) {
//     return obj.map(item => deepClone(item)); // Recursively clone each item
//   }

//   // Handle Objects
//   const clonedObj = {};
//     for (const key in obj) {
//       console.log("key", key)
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       clonedObj[key] = deepClone(obj[key]); // Recursively clone properties
//     }
//   }
//   return clonedObj;
// }

// const originalComplex = { name: 'Alice', dob: new Date(), details: { age: 30 } };
// const clonedComplex = deepClone(originalComplex);

// // Test: Changing nested object in clone doesn't affect original
// clonedComplex.details.age = 31;
// console.log(originalComplex.details.age); // 30 (Original unchanged)

// const flattenArray = (arr) => {
//     const result= arr.reduce((acc, curr) => {
//           if (Array.isArray(curr)) {
//                acc.push(...flattenArray(curr))
//           } else {
//                acc?.push(curr);
//        }
//        return acc
//     }, []);
//   return result
// };

// console.log(flattenArray([1, [2, [3, 4], 5]]));

// Input: [1, [2, [3, 4], 5]]
// Output: [1,2,3,4,5]

// const deepCopy = (value) => {
//      if (typeof value !== "object" || value === null) {
//           return value;
//      }

//      if (Array.isArray(value)) {
//           return value.map((item) => deepCopy(item));
//      }

//      const result = Object.fromEntries(Object.entries(value).map(([key, value]) => [key, deepCopy(value)]));

//      return result;
// };

// const original = {
//      name: "Alice",
//      details: {
//           age: 30,
//           hobbies: ["coding", "hiking"],
//      },
// };

// const duplicate = deepCopy(original);

// _________________________________________________

// const reverseArray = (arr) => {

//     if (!Array.isArray(arr) || arr.length === 0) {
//         throw new TypeError("please provide an array")
//     }

//     // ______________________First Approach___________________________

//     // let result = []

//     // for (let i = 0; i < arr.length; i++) {
//     //     result[arr.length - 1 - i] = arr[i];

//     // }
//     // return result;

//     // ______________________Second Approach___________________________

//     let left = 0;

//     let right = arr.length - 1;

//     while (left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]]

//         left++;
//         right--;
//     }
//     return arr;
// }

// console.log(reverseArray([1, 2, 3, 4]))
// console.log(reverseArray([10, 20, 30]))
// _________________________________________________

// 11. const maxAdjascentSum = (arr) => {

//     if (!Array.isArray(arr)) {
//         throw new TypeError("please provide an array")
//     }

//     let maxSum = arr[0] + arr[1];

//     for (let i = 0; i < arr.length; i++) {
//         let sum = arr[i] + arr[i + 1];

//         if (sum > maxSum) {
//             maxSum = sum
//         }
//     }
//     return maxSum;

//  }

// console.log(maxAdjascentSum([1, 2, 3, 4]))
// _________________________________________________

// const checkPalindrome = (strValue) => {
//      if (typeof strValue !== "string") {
//           throw new TypeError("Please provide a string");
//      }

//      let left = 0;

//      let right = strValue.length - 1;
//      console.log(strValue.length);

//      while (left < right) {
//           if (strValue[left] !== strValue[right]) {
//                return false;
//           }
//           left++;
//           right--;
//     }
//      return true;
// };

// console.log(checkPalindrome("madam")); //true
// console.log(checkPalindrome("anu")); //false
// console.log(checkPalindrome("hello")); //false
// _________________________________________________

// function greet(city) {
//   console.log(this.name, city);
// }

// const user = { name: "Anu" };

// greet.call(user, "Bangalore");
// greet.apply(user, ["Bangalore"]);

// const newFn = greet.bind(user);
// newFn("Bangalore");
// _________________________________________________

// 13. Find the First Non-Repeating Character

// const findFirstNonRepeating = (str) => {
//      if (typeof str !== "string") {
//           throw new TypeError("Please provide a string!");
//      }

//     let charObj = {};

//     for (let value of str) {
//         charObj[value] = (charObj[value] || 0) + 1
//     }

//     for (let value of str) {
//         if (charObj[value] === 1) {
//             return value;
//         }

//     }
//     return null;
// };

// console.log(findFirstNonRepeating("aabbccd")); // "d"
// console.log(findFirstNonRepeating("aabbcc")); // null
// console.log(findFirstNonRepeating("leetcode")); // l
// _________________________________________________

// _________________________________________________

// 14. Flatten Nested Array

// const flattenNestedArray = (arr) => {
//     if (!Array.isArray(arr)) {
//         throw new TypeError("Please provide an array")
//     }

//     return arr.reduce((acc, curr) => {
//         if (Array.isArray(curr)) {
//             acc.push(...flattenNestedArray(curr))
//         }
//         else {
//             acc.push(curr)
//         }
//         return acc
//     }, [])
// }

// console.log(flattenNestedArray([1,[2,[3,[4]],5]]))
// _________________________________________________

// const moveZeros = (arr) => {
//      if (!Array.isArray(arr)) {
//           throw new TypeError("please provide an array");
//      }

//      let result = [];

//      for (let item = 0; item < arr.length; item++) {
//           if (arr[item] !== 0) {
//                result.push(arr[item]);
//          }
       
//      }
// return result
// };

// console.log(moveZeros([1, 0, 2, 0, 10]));
// _________________________________________________

// _________________________________________________

// 16. Return an array where each element is the product of all elements in the original array except itself.

// const findProductExceptItself = (arr) => {

//     if (!Array.isArray(arr)) {
//         throw new TypeError("Please provide an array!")
//     }

//     let result = []

//     for (let i = 0; i < arr.length; i++) {
//         let finalRes = 1;
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j) {
//                 finalRes*=arr[j]
//             }
//         }
//         result.push(finalRes)
//     }

//     console.log('result', result)
// }

// const arr = [1, 2, 3, 4]

// console.log(findProductExceptItself(arr))
// _________________________________________________

// _________________________________________________

// const original = {
//   name: "Anu",
//   skills: ["JS", "React"],
//   address: {
//     city: "Bangalore",
//     pin: 560001
//   }
// };
 
// const deepClone = (value) => {

//     if (value === null || typeof value !== 'object') {
//         return value
//     }

//     if (Array.isArray(value)) {
//          return value.map((item) => (
//             deepClone(item)
//         ))
//     }

//    const result = Object.fromEntries(Object.entries(value).map(([key, value])=> [key, deepClone(value)]))
//     return result;
// }

// const copy = deepClone(original);
// console.log(copy)

// copy.address.city = "Mumbai";

// console.log(original.address.city); // "Bangalore" ✅ (should NOT change)
// _________________________________________________

// _________________________________________________

// const flattenArray = (arr) => {

//     if (!Array.isArray(arr)) {
//         return "Please provide an array"
//     }

//     if (arr.length === 0) {
//         return "Array is empty"
//     }

//     const result = arr.reduce((acc, curr) => {
//         if (Array.isArray(curr)) {
//            acc.push(...flattenArray(curr))
//         }
//         else {
//             acc.push(curr)
//         }

//         return acc;
//     }, [])

//     // console.log(result)

//     return result;

//  }


// console.log(flattenArray([1, [2, [3, 4], 5]]))
// // Input: [1, [2, [3, 4], 5]]
// // Output: [1,2,3,4,5]

// _________________________________________________