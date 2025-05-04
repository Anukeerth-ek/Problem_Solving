// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

var isPalindrome = function (s) {
    // ____________________________First Approach____________________________
     // console.log("hello",s.replace(/[,; : ]/g, ''))
    //  const initialPalindrome = s.replace(/[,; : ]/g, "").toLowerCase();

    // //  console.log(initialPalindrome.split("").reverse("").join(""));

    //  const validPalindrome = initialPalindrome.split("").reverse("").join("");
    //  if (initialPalindrome === validPalindrome) {
    //     console.log('yehh its valid')
    // }
    // else console.log('nuhh its not valid')

    // ____________________________Second Approach____________________________
    const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    return cleaned === cleaned.split('').reverse().join('');
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
