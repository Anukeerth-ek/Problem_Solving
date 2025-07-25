// Check for palindrome

// 1. 121, 1331, 12321, 1001, 22541, 1551

const handlePalindrome = (number) => {
     let resultValue = String(number).split("").reverse().join("");
     return Number(resultValue) === number ? true : false;
};

console.log(handlePalindrome(22541));
console.log(handlePalindrome(12321));
console.log(handlePalindrome(121));
