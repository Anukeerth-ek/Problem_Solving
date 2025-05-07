// _________________________________________________________________________________
// 1. Problem Statement: Given an integer N, return the number of digits in N.

// const countDigitNumber = (numbers)=> {
//   const digitCount = Math.floor(Math.log10(numbers)+1)
//   console.log(digitCount)
// }
// countDigitNumber(1234566)
// _________________________________________________________________________________

// _________________________________________________________________________________
// 2. Reverse Digits of A Number

// const reverseDigit = (number) => {
//      // __________________FIRST APPROACH__________________
//      // console.log(number.toString().split('').reverse().join(''))

//      // __________________SECOND APPROACH__________________

//     //  let reversedNumber = 0;

//     //  while (number > 0) {
//     //       const lastDigit = number % 10;

//     //       reversedNumber = reversedNumber * 10 + lastDigit;

//     //       number = Math.floor(number / 10);
//     //  }
//     //  console.log(reversedNumber);
// };
// reverseDigit(45678);
// _________________________________________________________________________________

// _________________________________________________________________________________
// 3. Check if a number is Palindrome or Not

// const isPalindrome = (number) => {

// __________________FIRST APPROACH__________________
//  let numberHolder = number;

//  return number.toString().split("").reverse().join("") == numberHolder
//       ? `${number} is a palindrome number`
//       : `${number} is not a palindrome number`;

// __________________SECOND APPROACH__________________

// };
// console.log(isPalindrome(2002));
// _________________________________________________________________________________

// _________________________________________________________________________________
// Given two integers N1 and N2, find their greatest common divisor.
// The Greatest Common Divisor of any two integers is the largest number that divides both integers.

// Example 1:
// Input:N1 = 9, N2 = 12
// Output:3
// Explanation:Factors of 9: 1, 3 and 9
// Factors of 12: 1, 2, 3, 4, 6, 12
// Common Factors: 1, 3 out of which 3 is the greatest hence it is the GCD.

// Example 2:
// Input:N1 = 20, N2 = 15
// Output: 5
// Explanation:Factors of 20: 1, 2, 4, 5
// Factors of 15: 1, 3, 5
// Common Factors: 1, 5 out of which 5 is the greatest hence it is the GCD.

// ans:

const findGCD = (num1, num2) => {
     let largestNumber = num1 > num2 ? num1 : num2;
     let gcd;
     for (let i = 1; i < largestNumber; i++) {
          if(num1 % i  === 0 && num2 % i === 0) {
            gcd = i;
          }
         }
         return gcd;
};
console.log(findGCD(9, 12));
// _________________________________________________________________________________
