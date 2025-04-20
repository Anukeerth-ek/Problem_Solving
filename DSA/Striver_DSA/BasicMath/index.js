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
