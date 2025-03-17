// _______________________________________________________________
// Q. Delay Execution
// Write a function delayedHello that takes a callback and calls it after 2 seconds.
// ans:
// function delayedHello(callback) {
//     setTimeout(()=> {
//         callback()
//     }, 2000)
// }

// delayedHello(() => console.log("Hello, after delay!"));
// _______________________________________________________________

// _______________________________________________________________
// Q. Create a function calculator that takes three parameters: two numbers and a callback function to perform an operation (add, subtract, multiply, 
// or divide).
// ans:
// function calculator(a, b, operation) {
//     return operation(a, b)
// }

// function add(x, y) {
//     return x + y;
// }

// console.log(calculator(5, 3, add)); // 8
// _______________________________________________________________

// _______________________________________________________________
// 3. Filtering an Array
// Implement a function filterArray that takes an array and a callback function, returning a new array with elements that satisfy the callback condition.
// ans:

// function filterArray(arr, callback) {
//     return arr.filter(callback)
// }

// console.log(filterArray([1, 2, 3, 4], num => num % 2 === 0)); // [2, 4]
// _______________________________________________________________

// _______________________________________________________________
// Asynchronous Map Function
// Write a function asyncMap that takes an array and a callback function, then applies the callback asynchronously to each element with a 1-second delay.

function asyncMap(arr, callback) {
return arr.forEach((num, index)=> (
    setTimeout(()=> callback(num), 1000*(index+1))
))
}

asyncMap([1, 2, 3], num => console.log(num * 2));
// _______________________________________________________________