// Problem: Find the factorial of given number ?
// ans:

const calculateFactorial = (number)=> {
    let sum = number;
    for(let i = number - 1 ; i >= 0; i--) {
        sum = sum* i
    }
    console.log(sum)
}

console.log(calculateFactorial(5))