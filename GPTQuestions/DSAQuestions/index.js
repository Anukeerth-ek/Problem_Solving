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

const flattenArray = (arr) => {

    if (!Array.isArray(arr)) {
        throw new TypeError("arr is not an array")
    }

    return arr.reduce((accumulator, currentValue) => {
        if (Array.isArray(currentValue)) {
            accumulator?.push(...flattenArray(currentValue))
        }
        else {
            accumulator.push(currentValue)
        }
        return accumulator;
    }, [])
}
console.log(flattenArray([1, [2, [3, 4], 5]]))
// Input: [1, [2, [3, 4], 5]]
// Output: [1,2,3,4,5]
