// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
// A string is palindromic if it reads the same forward and backward.

// ans:

var firstPalindrome = function (words) {
     const palindromeArray = words;

     const reversedArray = words.map((word) => word.split("").reverse().join(""));
     // console.log(reversedArray)

     const checkerArray = [];
     for (let i = 0; i < words.length; i++) {
          if (reversedArray[i] === palindromeArray[i]) {
               checkerArray.push(palindromeArray[i]);
               break;
          } else "";
     }
     console.log(checkerArray);
     return checkerArray.length === 0 ? "" : checkerArray.length > 0 ? checkerArray[0] : "";
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
