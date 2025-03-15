// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

// ans:

var finalValueAfterOperations = function (operations) {

     // First solution
     let value = 0;
     for (let x = 0; x < operations.length; x++) {
          if (operations[x] === "++X" || operations[x] === "X++") {
               value = value + 1;
          } else if (operations[x] === "--X" || operations[x] === "X--") {
               value = value - 1;
          }
     }
     return value;

     //  Second solution
     const result = operations.reduce((acc, curr) => (curr.includes("+") ? (acc += 1) : (acc -= 1)), 0);
     return result;

};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
