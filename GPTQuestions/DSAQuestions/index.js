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
