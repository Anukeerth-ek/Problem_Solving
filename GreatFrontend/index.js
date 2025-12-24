// 1. Implement a function makeCounter that accepts an optional integer value and returns a function. When the returned function is called initially,
//     it returns the initial value if provided, otherwise 0. The returned function can be called repeatedly to return 1 more than the return
//     value of the previous invocation.

// function makeCounter(initialValue = 0) {

//   return function () {
//     return initialValue++
//   }

// }

// const counter = makeCounter()

// console.log(counter())
// console.log(counter())
// console.log(counter())

// 2. Debouncing is a technique used to control how many times we allow a function to be executed over time.When a JavaScript function is
// debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was last called.

// You almost certainly have encountered debouncing in your daily lives before(e.g.when entering an elevator).Only after X duration of not
// pressing the "Door open" button(the debounced function not being called) will the elevator door actually close(the callback function is
//     executed).

// Implement a debounce function which accepts a callback function and a wait duration.Calling debounce() returns a function which has debounced
//  invocations of the callback function following the behavior described above.

let i = 0;

function increment() {
     i++;
     console.log(i);
}

const debounce = (callbackFn, timer) => {
     let timeOut;

     return function () {
          clearTimeout(timeOut);
          timeOut = setTimeout(() => {
               callbackFn();
          }, timer);
         console.log(timeOut)
     };
};

const debouncedIncrement = debounce(increment, 1000);

debouncedIncrement();
debouncedIncrement();
debouncedIncrement();
