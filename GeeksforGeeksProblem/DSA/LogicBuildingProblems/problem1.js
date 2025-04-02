// 1. Check whether a given number is even or odd

// Given a number n, check whether it is even or odd. Return true for even and false for odd.

// ans: const isEvenOrOdd = (number)=> {
//     return number % 2 === 0 ? true : false
// }

// console.log(isEvenOrOdd(4))

// ______________________________________________________________________________________________________

// ______________________________________________________________________________________________________

// 2. Program to print multiplication table of a number

// Given a number n, we need to print its table.

// const printMultiplicationTable = (number, i = 1) => {
//      // for(let num = 1; num <= 10; num++) {
//      //     console.log(`${number} * ${num} = ${number * num}`)
//      // }

//      if (i === 11) return;

//      for ( i; i <= 10; i++) {
//           console.log(`${number} * ${i} = ${number * i}`);
//      }

//      printMultiplicationTable(number, i);
// };

// console.log(printMultiplicationTable(5));
// ______________________________________________________________________________________________________

// ______________________________________________________________________________________________________

// 3. Program to find sum of first n natural numbers

// Given a number n, find the sum of the first n natural numbers.

// const findNaturalNumberSum = (number)=> {
//     // FIRST APPROACH
//     let sum = 0;
//     for(let i = 1; i <= number; i++) {
//        sum += i;
//     }
//     return sum
// // _____________________________________
//   // SECOND APPROACH
//     return (number * (number + 1)) / 2;
// }

// console.log(findNaturalNumberSum(5))
// ______________________________________________________________________________________________________

// ______________________________________________________________________________________________________

// 4. Swap Two Numbers

// Given two numbers a and b, the task is to swap them.

// const handleTwoNumberSwap = (number1, number2) => {
// // _____________________________________
//   // FIRST APPROACH

//  let temp = number1;
//  number1 = number2;
//  number2 = temp;

// // _____________________________________
//   // SECOND APPROACH

//  number1 += number2;
//  number2 = number1 - number2;
//  number1 = number1 - number2;

// // _____________________________________
//   // THIRD APPROACH
//  [number1, number2] = [number2, number1];
//  console.log([number1, number2]);
// };

// console.log(handleTwoNumberSwap(5, 10));
// ______________________________________________________________________________________________________

// ______________________________________________________________________________________________________

// 5. Find the number closest to n and divisible by m

// Given two integers n and m (m != 0). Find the number closest to n and divisible by m. If there is more than one such number, then output the one
// having maximum absolute value.

// const handleMaxDivisibleNumber = (n, m) => {
//     // Calculate the closest lower and upper multiples of m
//     const lowerMultiple = Math.floor(n / m) * m;
//     const upperMultiple = Math.ceil(n / m) * m;

//     // Calculate the distances from n
//     const distanceToLower = Math.abs(n - lowerMultiple);
//     const distanceToUpper = Math.abs(n - upperMultiple);

//     // Determine which multiple is closer or has a greater absolute value
//     if (distanceToLower < distanceToUpper) {
//         return lowerMultiple;
//     } else if (distanceToUpper < distanceToLower) {
//         return upperMultiple;
//     } else {
//        // If both distances are equal, return the one with the maximum absolute value
//         return Math.abs(lowerMultiple) > Math.abs(upperMultiple) ? lowerMultiple : upperMultiple;
//     }
// };

// console.log(handleMaxDivisibleNumber(13, 4));
// ______________________________________________________________________________________________________

// ______________________________________________________________________________________________________


// The dice problem

// You are given a cubic dice with 6 faces. All the individual faces have a number printed on them. The numbers are in the range of 1 to 6, like any ordinary dice. You will be provided with a face of this cube, your task is to guess the number on the opposite face of the cube.

// Examples:

// Input: n = 2
// Output: 5
// Explanation: For dice facing number 5 opposite face will have the number 2.


// Input: 6 = 6
// Output: 1
// Explanation: For dice facing number 6 opposite face will have the number 1.

// ans: 

const handleDiceProblem = (number) => {
    //  FIRST APPROACH ______________________
    //  return 7 - number
    
    //  SECOND APPROACH ______________________

}

console.log(handleDiceProblem(3))
// ______________________________________________________________________________________________________

// ______________________________________________________________________________________________________

