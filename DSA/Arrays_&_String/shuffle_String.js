// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith
// position moves to indices[i] in the shuffled string.

// Return the shuffled string.

var restoreString = function (s, indices) {
     const indicesController = [];

     for (let i = 0; i < s.length; i++) {
          indicesController[indices[i]] = s[i];
     }
     return indicesController.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
