// Problem: Find the factorial of given number ?
// ans:

const calculateFactorial = (number) => {
     let sum = 1;
     for (let i = number; i > 0; i--) {
          sum = sum * i;
     }
     return sum;
};

console.log(calculateFactorial(5));

export {calculateFactorial}
