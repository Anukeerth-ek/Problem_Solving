const findWords = (word) => {
     const row1 = new Set("qwertyuiop");
     const row2 = new Set("asdfghjkl");
     const row3 = new Set("zxcvbnm");

     const canBeTypedOnOneRow = (word) => {
          // Helper function to check if a given word can be typed using only one row

          const lowerWord = word.toLowerCase();
          //     console.log('check', lowerWord)
          let row = null;

          //     console.log("lower", lowerWord[0]);
          //     console.log("row1", row1);

          if (row1.has(lowerWord[0])) {
               row = row1;
               //    console.log("row", row1.has(lowerWord[0]));
          } else if (row2.has(lowerWord[0])) row = row2;
          else if (row3.has(lowerWord[0])) row = row3;

          return row ? [...lowerWord].every((char) => row.has(char)) : false;
     };

     return word.filter(canBeTypedOnOneRow);
};

console.log(findWords(["wire", "angry", "lad", "Max", "john", "anu"]));

export default findWords;
