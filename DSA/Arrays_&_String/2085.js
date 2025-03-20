// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

var countWords = function(words1, words2) {
     let map1 = {};
     let map2 = {};
 
     // Count occurrences in words1
     for (let i = 0; i < words1.length; i++) {
         let word = words1[i];
         if (map1[word]) {
          console.log(map1)
          // console.log(map1[word])
             map1[word]++;
         } else {
             map1[word] = 1;
         }
     }
 
     // Count occurrences in words2
     for (let j = 0; j < words2.length; j++) {
         let word = words2[j];
         if (map2[word]) {
             map2[word]++;
         } else {
             map2[word] = 1;
         }
     }
 
     // Count words that appear exactly once in both arrays
     let count = 0;
 
     for (let word in map1) {
         if (map1[word] === 1 && map2[word] === 1) {
             count++;
         }
     }
 
     // console.log( count);
 };
 
 // ✅ Test cases
 console.log(countWords(["leetcode", "is", "amazing", "as", "is"], ["amazing", "leetcode", "is"]));  // Output: 2
//  console.log(countWords(["apple", "banana", "apple"], ["banana", "orange", "apple"]));               // Output: 1
//  console.log(countWords(["a", "b", "c"], ["a", "d", "e", "c"]));                                   // Output: 2
 
// console.log(countWords(["leetcode", "is", "amazing", "as", "is"], ["amazing", "leetcode", "is"]));
