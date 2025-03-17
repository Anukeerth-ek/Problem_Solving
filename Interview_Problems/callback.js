// Q. Delay Execution
// Write a function delayedHello that takes a callback and calls it after 2 seconds.

function delayedHello(callback) {
    setTimeout(()=> {
        callback()
    }, 2000)
}

delayedHello(() => console.log("Hello, after delay!"));
// _______________________________________________________________

// Q. Create a function calculator that takes three parameters: two numbers and a callback function to perform an operation (add, subtract, multiply, 
// or divide).


function calculator(a, b, operation) {
    // Call the operation function with a and b
}

function add(x, y) {
    return x + y;
}

console.log(calculator(5, 3, add)); // 8