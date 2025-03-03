// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

var findWordsContaining = function (words, x) {
     // with using es6 feature
     const result = words.map((word, index) => (word.includes(x) ? index : -1)).filter((index) => index !== -1);
     //    console.log('res', result)

     // without using es6 feature
     let resultArr = [];
     for (let i = 0; i < words.length; i++) {
          for (let j = 0; j < words[i].length; j++) {
               if (words[i][j] === x) {
                    resultArr.push(i);
                    break;
               }
          }
     }
     return resultArr;
};

console.log(findWordsContaining(["leet", "code"], "e"));
