// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

var findWordsContaining = function(words, x) {
    // with using es6 feature
   const result = words.map((word, index) => word.includes(x) ? index : -1).filter((index)=> index!== - 1);
   console.log('res', result)
};  

console.log(findWordsContaining(["leet","code"],"a"))