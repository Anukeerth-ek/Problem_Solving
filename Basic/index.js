// 1. What is JavaScript?
//JavaScript is a scripting or programming language that allows you to implement complex features on web pages. Whenever a web page does more than just display static information—such as
// updating content in real-time, providing interactive maps, creating animated 2D/3D graphics, or enabling scrolling video jukeboxes—JavaScript is likely involved.
// It is considered the third layer in the standard web technologies stack, complementing HTML and CSS.

// ____________________________

// 2. Explain  the difference between let, const, and var ?
// let and const is a local scoped variable declaration or block level scoped  and var is function scoped variable decalaration.

// const checkerFunction = ()=> {

// console.log(variable)

// const variable = "const" // reference error cannot access variable before initialisation

// let variable = "let"  // reference error cannot access variable before initialisation

// var variable = "var"  // undefined

// __________const section___________
// const variable = "first const"

// if(true) {
//     const variable = "second const"
//     console.log(variable) // second const

// }
// console.log(variable)  // first const
// // __________const section___________

// // __________let section___________
// // let variable = "first let"

// if(true) {
//     let variable = "second let"
//     // console.log(variable) // second let

// }
// console.log(variable) // first let
// __________let section___________

// __________var section___________
// var variable = "fist var"
// if(true) {
//     var variable = "second var"
//     console.log(variable)  // second var

// }
//  console.log(variable)  // second var
// __________var section___________

// }

// checkerFunction()

// Using let and const is generally preferred over var due to their block scope, which helps prevent bugs related to variable hoisting and re-declaration.

// _____________________________________________________________
// 3. How does hoisting work in JavaScript?
// a. What is hoisting?
// ans:
//  Hoisting means that if you try to access a variable before initialization, you will get different warnings or errors depending on the
//  declaration type: if you use let or const, you will get a ReferenceError saying "Cannot access variable before initialization," but if you use var, you will get undefined.
//  Everything in JavaScript happens during the execution phase. First, JavaScript looks for any variables or functions that are declared and hoists them to memory.
//  However, when you initialize a variable with a value, it won’t be assigned during the hoisting phase, so if you try to access it before its initialization,
//  you'll get a ReferenceError with let or const, and undefined with var.
// _____________________________________________________________

// ________________________________________________________________
// 4. Describe the concept of closures.
// ans: When an inner function can access the results from an outer function is called as closures.

// const getUserDetailOuter = (userName) => {
//     console.log("From outer function", userName);
//     const getUserDetailInner = () => {
//         console.log("From inner function", userName);
//     };
//     return getUserDetailInner;
// }

// const userDetail = getUserDetailOuter("Kevin");
// userDetail(); // This will log: From inner function Kevin
// This is what that meant by closures that, the inner function that a function inside a function can access the results of the outer function.
// ________________________________________________________________

// ________________________________________________________________
// 5. What are all the looping structures in JavaScript ?
// ans: 1. While-loop
//      2. Do-While-loop
//      3. For-Loop
// while loop: A while loop is a control flow statement that allows code to be eresultecuted repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement.
// for loop:  A for loop provides a concise way of writing the loop structure. Unlike a while loop, for statement consumes the initialization, condition and increment/decrement in one line thereby providing a shorter, easy to debug structure of looping.
// do while: A do-while loop is similar to while loop with the only difference that it checks the condition after eresultecuting the statements, and therefore is an eresultample of Eresultit Control Loop.
// ________________________________________________________________

// ________________________________________________________________
// 6. How can the style/class of an element be changed?
// ans: Let say that we have a div and we need to change the class and style of that div.

{
     /* <div class="div">
Hello
</div> */
}

// const result = document.getElementById('div').style.fontSize = "6rem"
// From the above we can change the font size of that div

// lets change the className of that div

// const result = document.getElementById('div').className = "new-div"
// ________________________________________________________________

// ________________________________________________________________
// 7. What is called Variable typing in JavaScript ?
// ans: Lets say we have created a variable in javascript and named it to

// let result = "null"

// console.log(typeof result);

// result = 12

// console.log(typeof result);

// we can change the type of the variable in javascript. And we won't get any errors while changing the type.
// ________________________________________________________________

// ________________________________________________________________
// 8. Write a JavaScript program to find the maximum number in an array.
// ans: const arr = [1, 2, 3, 4, 5, 6, 10]
// let newresult = Math.max(...arr);
// console.log(typeof newresult)
// ________________________________________________________________

// ________________________________________________________________
// 9. What is Spread and Rest operator?
// ans: Spread operator: is used when we need to add a two arrays result to another array we can do that very easily

// let arr1 = [1, 2, 3, 4]
// let arr2 = [5, 6, 7, 8]

// let arr3 = [...arr1, ...arr2]
// console.log(arr3) // we are getting whole array ie, [1, 2, 3, 4, 5, 6, 7, 8]

// Rest Operator: When we are getting more parameters. we can use spread operator. spread operator is too looking like rest operator.
//

//  const getUserDetails = (...details)=> {
//     console.log(details)
//     let userName = [details[0]]
//     console.log(userName)
//  }

//  getUserDetails("kevin", 22, "Software Engineer", '6LPA')

//  No we are getting all these results, simply we need to do is just put three dots and a name. Then all the results will be in that name.
//  If we need to take the results of on a separate variable we can do that by just putting the like I put in line no. 152.
// ________________________________________________________________

// ________________________________________________________________
// 10. Explain what is callback function?
// ans: A callback function is a function that is passsed to a function's argument.
// eg is

// const handleResult = (number, showResult)=> {
//     console.log("started")
//     showResult()
//     return number * 2

// }

// const showResult = ()=> {
//     console.log("finished")
// }
// const getResult = handleResult(2, showResult)
// console.log(getResult)
// ________________________________________________________________

// ________________________________________________________________
// 11. Question is we are passing an array of number, we need to add the number and return like, if we are passing the input as [1, 2, 3, 4, 5] we need the output of [1, 3, 6, 10]
// let runningSum = function (nums) {
//      let result = [];

//      let cumulativeSum = 0;

//      for (let num of nums) {
//           cumulativeSum += num;

//           result.push(cumulativeSum);
//      }

//      return result;
// };

// const output = runningSum([1, 2, 3, 4]);
// ________________________________________________________________

// ________________________________________________________________
// 12. The question is return true if the words first letter in the words array and result in s variable are same otherwise return false

// const isAcronym = function (words, s) {
//      const result = words.map((item) => {
//           return item.charAt(0);
//      });
//      const result = result.toString().replace(/,/g, "");
//      let finalRes;
//      result === s ? (finalRes = true) : (finalRes = false);
//      return finalRes;
// };
// isAcronym(["alice", "bob", "charlie"], "abc");
// console.log(isAcronym);
// ________________________________________________________________

// ________________________________________________________________
// 13. You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each inderesult i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

// ans -
// var sortPeople = function(names, heights) {
//     console.log(names, heights)

// };

// sortPeople(["Mary","John","Emma"], [180,165,170])
// ________________________________________________________________

// ________________________________________________________________
// 14. You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers result and y is defined as |result - y|.

// const differenceOfSum = function (...nums) {
//      const sumOfNums = nums.reduce((acc, curr) => acc + curr, 0);

//      const numsToString = nums.toString().replace(/,/g, "");
//      const stringToNum = numsToString.split("");

//      let emptyArr = [];
//      for (let i = 0; i < stringToNum.length; i++) {
//           emptyArr.push(numsToString.charAt(i));
//      }
//      const finalRes = emptyArr.toString();

//      const stringArray = finalRes.split(',');

//      // Step 2: Convert each substring to a number
//      const numberArray = stringArray.map(Number);

//      // Output the result
//      const result = numberArray.reduce((acc, curr)=> acc + curr, 0)
//   return sumOfNums - result
// }

// differenceOfSum(1, 15, 6, 3);
// ________________________________________________________________

// ________________________________________________________________
// 15. Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

// ans:
// const arrayStringsAreEqual = function (word1, word2) {
//      let left = (right = "");

//      for (let i = 0; i < word1.length; i++) {
//           left += word1[i];
//      }

//      for (let i = 0; i < word2.length; i++) {
//           right += word2[i];
//      }

//      return left === right;
// };

// const result = arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);
// ________________________________________________________________

// ________________________________________________________________
// 16. There is a programming language with only four operations and one variable result:

// ++result and result++ increments the result of the variable result by 1.
// --result and result-- decrements the result of the variable result by 1.
// Initially, the result of result is 0.

// Given an array of strings operations containing a list of operations, return the final result of result after performing all the operations.

// ans:
// var finalresultAfterOperations = function (operations) {
//      let value = 0;

//      operations.forEach((item) => {
//           switch (item) {
//                case "--X":
//                case "X--":
//                     value = value - 1;
//                     break;

//                case "X++":
//                case "++X":
//                     value = value + 1;
//                     break;

//                default:
//                     break;
//           }

//           return "";
//      });
//      return value;
// };

// const answer = finalresultAfterOperations(["--X", "X++", "X++"]);
// ________________________________________________________________

// ________________________________________________________________
// 17. A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

// ans:
// var mostWordsFound = function (sentences) {
//      let newArr = [];
//      let highestValue;
//      let firstVal, secondVal;
//      for (let i = 0; i < sentences.length; i++) {
//           let res = sentences[i].split();
//           newArr.push(res);

//           highestValue = newArr[i];

//           firstVal = newArr.toString().length;
//           if (firstVal >= secondVal) highestValue = firstVal.length;
//      }

//      return highestValue.toString().split(' ').length
// };
// mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]);
// ________________________________________________________________

// ________________________________________________________________
// 18. Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.
// ans:
// var commonChars = function(words) {

//      if (words.length === 0) return [];

//      // Initialize the common character count based on the first string
//      let commonCount = {};
//      for (let char of words[0]) {
//          commonCount[char] = (commonCount[char] || 0) + 1;
//      }

//      // Intersect with the counts from the other strings
//      for (let i = 1; i < words.length; i++) {
//          let currentCount = {};
//          for (let char of words[i]) {
//              currentCount[char] = (currentCount[char] || 0) + 1;
//          }

//          // Update commonCount to keep only minimum frequencies
//          for (let char in commonCount) {
//              if (currentCount[char] !== undefined) {
//                  commonCount[char] = Math.min(commonCount[char], currentCount[char]);
//              } else {
//                  // If a character is not in the current string, remove it from commonCount
//                  delete commonCount[char];
//              }
//          }
//      }

//      // Construct the result array based on commonCount
//      let result = [];
//      for (let char in commonCount) {
//          for (let i = 0; i < commonCount[char]; i++) {
//              result.push(char);
//          }
//      }

//      return result;
// };

// commonChars(["bella","label","roller"])
// ________________________________________________________________

// ________________________________________________________________
// 19. You are given a 0-indexed array words consisting of distinct strings.

// The string words[i] can be paired with the string words[j] if:

// The string words[i] is equal to the reversed string of words[j].
// 0 <= i < j < words.length.
// Return the maximum number of pairs that can be formed from the array words.

// Note that each string can belong in at most one pair.

// ans:

// var maximumNumberOfStringPairs = function (words) {
//      let count = 0
//      let seen = new Set(); // To track seen words

//      for (let i = 0; i < words.length; i++) {
//          let reversed = words[i].split('').reverse().join(''); // Reverse the current word
//          if (seen.has(reversed)) {
//              count++;
//              seen.delete(reversed); // Remove the reversed word from the set
//          } else {
//              seen.add(words[i]); // Add the current word to the set
//          }
//      }
//      return count;
// };

// maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]);
// ________________________________________________________________

// ________________________________________________________________
// 20. Given an array of strings words and a character separator, split each string in words by separator.

// Return an array of strings containing the new strings formed after the splits, excluding empty strings.

// Notes

// separator is used to determine where the split should occur, but it is not included as part of the resulting strings.
// A split may result in more than two strings.
// The resulting strings must maintain the same order as they were initially given.

// ans:
// var splitWordsBySeparator = function (words, separator) {
//     let newArr = []

//     for(let word of words) {
//         let parts = word.split(separator)

//         for(let part of parts)
//             if(part.length > 0) {
//                 newArr.push(part)
//             }
//     }
//     return newArr
// };

// splitWordsBySeparator(["$easy$", "$problem$"], "$");
// output = [ 'easy', 'problem' ]
// ________________________________________________________________

// ________________________________________________________________
// 21. You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.
// ans:
// var countConsistentStrings = function (allowed, words) {
//      const allowedSet = new Set(allowed);
//      console.log(allowedSet)

//      const result = words.filter((word) => [...word].every((char) => allowedSet.has(char)));

//      return result.length;
// };
// countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]);
// ________________________________________________________________

// ________________________________________________________________
// 22. You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.
// Return the minimum number of operations to make all elements of nums divisible by 3.

// ans:
// var minimumOperations = function (...nums) {
//      let count = 0;
//      for (let num of nums) {
//           if (num % 3 == 1) count +=1;
//           else if (num % 3 > 1) count += 1;
//      }
//      return count;
// };
// const result = minimumOperations(3,6,9);
// console.log(result);  //output =  0
// ________________________________________________________________

// ________________________________________________________________
// 23. You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
// For each index i, names[i] and heights[i] denote the name and height of the ith person.
// Return names sorted in descending order by the people's heights.

// ans: var sortPeople = function (names, heights) {
//      const obj = {};
//      let j;
//      for (let i = 0; i < names.length; i++) {
//           for (j = 0; j < heights.length; j++) {
//                // console.log(heights[height]);
//                // console.log(heights[j]);
//                // obj.names[i] = heights[j];
//                console.log(names[i]);
//                console.log(names[j]);
//           }
//      }
//      console.log(obj);
// };
// sortPeople(["Mary", "John", "Emma"], [180, 165, 170]);
// ________________________________________________________________

// ________________________________________________________________
// 24. You are given a 0-indexed array of string words and two integers left and right.
// A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].
// ans: var vowelStrings = function (words, left, right) {
//      const isVowel = (char) => "aeiou".includes(char);

//      let count = 0;

//      for (let i = left; i <= right; i++) {
//           const word = words[i];

//           if (word.length > 0 && isVowel(word[0]) && isVowel(word[word.length - 1])) {
//                count++;
//           }
//      }

//      return count;
// };
// vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4);
// ________________________________________________________________

// ________________________________________________________________
// 25. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the
// number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important
// as well as the size of nums. Return k.

// ans:
// const removeElement = (nums, val) => {
//      let index = 0;

//      for (let i = 0; i < nums.length; i++) {
//           if (nums[i] !== val) {
//                nums[index] = nums[i]; // Shift non-val elements to the left
//                index++;
//           }
//      }

//      return index;
// };

// console.log(removeElement([3, 2, 2, 3], 3));

//  Expected output = [ 2, 2, ]

// ________________________________________________________________

// ________________________________________________________________
// 26. You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and
// nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
// where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// ans:
// const merge = (nums1, m, nums2, n) => {
//      for (let i = 0; i < n; i++) {
//           nums1[i + m] = nums2[i];
//      }

//      nums1.sort((a, b) => a - b);
//      return nums1;
// };

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// ________________________________________________________________

// ________________________________________________________________
// 27. Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be
// if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// ans:

// const searchInsert = (nums, target) => {
//      console.log(nums, target)
//      for (let i = 0; i < nums.length; i++) {
//           if (nums[i] >= target) {
//               return i;
//           }
//       }
//       return nums.length;
// };
// console.log(searchInsert([1, 3, 5, 6], 3)); //  This should have the result if we the targeted number is present in the array, then just return the index
// and if not present in that array then return
// the index where  it would be if it were inserted in order.

// ________________________________________________________________

// ________________________________________________________________
// 28. Implement a function makeCounter that accepts an optional integer value and returns a function. When the returned function is called initially,
// it returns the initial value if provided, otherwise 0. The returned function can be called repeatedly to return 1 more than the return value of the
// previous invocation.
// ans:
// export default function makeCounter(initialValue = 0) {
//      return function counterValue() {
//        let variableName = initialValue

//           initialValue +=1
//         return  variableName

//      };

//    }

//    const counter = makeCounter(0)
//    counter()
//    counter()
//    counter()
// ________________________________________________________________

// ________________________________________________________________
//29.  Function to normalize scores between 0 and 100
// function normalizeScores(scores) {
//      const maxScore = Math.max(...scores);
//      const minScore = Math.min(...scores);

//      return scores.map(score => {
//        return ((score - minScore) / (maxScore - minScore)) * 100;
//      });
//    }
// ________________________________________________________________

// ________________________________________________________________
// 30. Function to estimate overall performance based on normalized scores
// function estimatePerformance(normalizedScores) {
//      const average = normalizedScores.reduce((acc, score) => acc + score, 0) / normalizedScores.length;

//      if (average >= 90) {
//        return 'Excellent';
//      } else if (average >= 70) {
//        return 'Good';
//      } else if (average >= 50) {
//        return 'Average';
//      } else {
//        return 'Poor';
//      }
//    }
// ________________________________________________________________

// ________________________________________________________________

// 31.
//  const users = [
//      { name: 'Alice', age: 25 },
//      { name: 'Bob', age: 30 },
//      { name: 'Charlie', age: 35 },
//      { name: 'David', age: 20 }
//    ];

// Filter users who are 30 or older

//    ans:
// const result = users.filter(user=> user.age >= 30)
// console.log(result)  // Output: [ { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 } ]
// ________________________________________________________________

// ________________________________________________________________

// 32.const originalObject = {
//   name: 'Alice',
//   address: { city: 'New York', country: 'USA' }
// };
// Deep clone the object

// ans:
// const clonedObject = JSON.parse(JSON.stringify(originalObject));

// clonedObject.address.city = 'Los Angeles';

// console.log(originalObject.address.city);  // Output: 'New York'
// console.log(clonedObject.address.city);    // Output: 'Los Angeles'
// ________________________________________________________________

// ________________________________________________________________
//33. Example function simulating an API call with a delay
// function fetchData() {
//      return new Promise(resolve => {
//        setTimeout(() => {
//          resolve('Data fetched successfully!');
//        }, 2000);
//      });
//    }
// ________________________________________________________________

// ________________________________________________________________
// 34. Reverse a String:
// ans:
// function reverseString(str) {
//    return str.split('').reverse().join('');
// }
// console.log(reverseString("hello")); // Output: "olleh"
// ________________________________________________________________

// ________________________________________________________________
// 35. Check if a String is a Palindrome:
// ans:
// function findMax(arr) {
//    return Math.max(...arr);
// }
// console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
// ________________________________________________________________

// ________________________________________________________________
// 36.FizzBuzz Problem: Print numbers from 1 to 100. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz";
// and for multiples of both, print "FizzBuzz."

// ans:
// const returnFizzBuzz = ()=> {
//    for(let i = 1; i <= 100; i++) {
//       if(i % 3 === 0)
//          console.log( "Fizz")
//       else if(i % 5 === 0)
//          console.log( "Buzz")
//       else if(i % 3 === 0 && i % 5 === 0)
//          console.log( "FizzBuzz")
//       else
//       console.log("Other options")
//    }
// }

// console.log(returnFizzBuzz())
// ________________________________________________________________

// ________________________________________________________________
// 37. Two Sum Problem: Find two numbers in an array that add up to a target sum.
// ans:

// function twoSum(nums, target) {
//    for (let i = 0; i < nums.length; i++) {
//        for (let j = i + 1; j < nums.length; j++) {
//            if (nums[i] + nums[j] === target) {
//                return [i, j];
//            }
//        }
//    }
//    return [];
// }

// console.log(twoSum([2, 7, 11, 15], 9));
// ________________________________________________________________

// ________________________________________________________________
// 38. Find the Largest Number in an Array
// Given an array of numbers, return the largest number.

// ans:

// function findLargest(arr) {
// _______________________First Approach _______________________

//    let largestNumber = arr[0];
//  for(let i = 1; i < arr.length; i++) {
//   if(arr[i] > largestNumber) {
//    largestNumber = arr[i]
//   }
//  }
//  return largestNumber;

// _______________________Second Approach_______________________

// return arr.reduce((max, current) => max > current ? max : current , arr[0]);

// _______________________Third Approach_______________________

// return Math.max(...arr)

// _______________________Fourth Approach_______________________

// return arr.sort((a, b)=> b - a)[0]

// }

// console.log(findLargest([10, 20, 5, 15]));  // 20
// ________________________________________________________________

// ________________________________________________________________
// 39. Reverse a String
// Write a function that takes a string as input and returns the reversed string.

// ans:

// function reverseString(str) {
// _______________________First Approach_______________________
// return str.split('').reverse().join('')
// _______________________Second Approach_______________________
// let newArr = []
// const arr = str.split('')
// for(let i = 0; i < arr.length; i++) {
//    newArr.unshift(arr[i])
// }
// return newArr.join('')
// _______________________Third Approach_______________________
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//        newString += str[i];
//   }
//   return newString;
// }
// console.log(reverseString("hello")); // "olleh"
// ________________________________________________________________

// ________________________________________________________________
// 40. Palindrome Checker
//    Write a function to check if a given string is a palindrome.

// function isPalindrome(str) {
//      //  First approach
//      const palindrome = str.split("").reverse().join("");
//      if (str === palindrome) return true;
//      else return false;
// }
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("radar")); // true
// console.log(isPalindrome("toot")); // true
// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false
// console.log(isPalindrome("TAKE U FORWARD")); // false
// ________________________________________________________________

// ________________________________________________________________
// 41. Sum of Array Elements
// Write a function that takes an array of numbers and returns the sum of all the elements.
// ans:

// function arraySum(arr) {
//      // _______________________First Approach_______________________
//      // const sum = arr.reduce((acc, curr) => acc + curr, 0);
//      // return sum;
// }
// console.log(arraySum([1, 2, 3, 4])); // 10
// ________________________________________________________________

// ________________________________________________________________
// 42.Count Vowels and Consonants
//    Write a function to count the number of vowels and consonants in a string.
// ans:
// function countVowelsAndConsonants(str) {
//      const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//      const result = str.split(''); // Split the string into characters

//      let vowelCount = 0;
//      let consonantCount = 0;

//      // Loop through each character in the result array
//      result.forEach((char) => {
//          if (vowels.find((element) => element === char)) {
//              vowelCount++; // Increment vowel count if the character is a vowel
//          } else if (char.match(/[a-zA-Z]/)) {
//              consonantCount++; // Increment consonant count if it's a letter but not a vowel
//          }
//      });

//      console.log({ vowels: vowelCount, consonants: consonantCount });
//      return { vowels: vowelCount, consonants: consonantCount };
//  }

//  console.log(countVowelsAndConsonants("hello")); // { vowels: 2, consonants: 3 }

// ________________________________________________________________

// ________________________________________________________________
// 43. Find Duplicates in an Array
//    Given an array, return all the duplicate elements.
// ans:
// function findDuplicates(arr) {
//      let newArr = [];

//      for (let i = 0; i < arr.length; i++) {
//           for(let j = i+1; j < arr.length; j++) {
//                if(arr[i] === arr[j]) {
//                     newArr.push(arr[i])
//                }
//           }
//      }
//      return newArr
// }
// console.log(findDuplicates([1, 2, 3, 2, 4, 5, 2, 5])); // [2, 5]
// // ________________________________________________________________
