// 1. What is JavaScript?
//JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS)

// ____________________________

// 2. Explain the difference between let, const, and var ?
// let and const is a local scoped variable declaration and var is global scoped variable decalaration.

// const checkerFunction = ()=> {
    
    // console.log(variable)

    // const variable = "const" // reference error cannot access variable before initialisation

    // let variable = "let"  // reference error cannot access variable before initialisation

    // var variable = "var"  // undefined

    // __________const section___________
    // const variable = "first const"

    // if(true) {
    //     const variable = "second const"
    //     console.log(variable) // second const
        
    // }
    // console.log(variable)  // first const
     // __________const section___________


    // __________let section___________
    // let variable = "first let"

    // if(true) {
    //     let variable = "second let"
    //     // console.log(variable) // second let
        
    // }
    // console.log(variable) // first let
    // __________let section___________

    // __________var section___________
    // var variable = "fist var"
    // if(true) {
    //     var variable = "second var"
    //     console.log(variable)  // second var
       
    // }
    //  console.log(variable)  // second var
    // __________var section___________

// }

// checkerFunction()

// Using let and const is generally preferred over var due to their block scope, which helps prevent bugs related to variable hoisting and re-declaration.

// _____________________________________________________________
// 3. How does hoisting work in JavaScript?
// a. What is hoisting? 
// ans: Hoisting means if try to access the variable of object before intialisation we get different warnings or errors
// if we use let or const for declaring that variable we will reference error cannot access variable before intialisation
// but if we use var to declare that variable we will get undefined.
// Everything inside javascript is happens in a execution context.
// firstly javascript look for is there any variable or function that is declared? if yes then the javascript firstly take that to a memory phase. now if we initalise a variable with a value, it won't assigned that first time, so when we console log that it will gives us reference error if we used let or const and undefined in var.
// _____________________________________________________________


// ________________________________________________________________
// 4. Describe the concept of closures.
// ans: When an inner function can access the values from an outer function is called as closures.

// const getUserDetailOuter = (userName) => {
//     console.log("From outer function", userName);
//     const getUserDetailInner = () => {
//         console.log("From inner function", userName);
//     };
//     return getUserDetailInner;
// }

// const userDetail = getUserDetailOuter("Kevin");
// userDetail(); // This will log: From inner function Kevin
// This is what that meant by closures that, the inner function that a function inside a function can access the values of the outer function. 
// ________________________________________________________________


// 5. What are all the looping structures in JavaScript ?
// ans: 1. While-loop
//      2. Do-While-loop
//      3. For-Loop
// while loop: A while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement.
// for loop:  A for loop provides a concise way of writing the loop structure. Unlike a while loop, for statement consumes the initialization, condition and increment/decrement in one line thereby providing a shorter, easy to debug structure of looping.
// do while: A do-while loop is similar to while loop with the only difference that it checks the condition after executing the statements, and therefore is an example of Exit Control Loop.

// ________________________________________________________________

// 6. How can the style/class of an element be changed?
// ans: Let say that we have a div and we need to change the class and style of that div.

{/* <div class="div">
Hello
</div> */}

// const result = document.getElementById('div').style.fontSize = "6rem"
// From the above we can change the font size of that div

// lets change the className of that div

// const result = document.getElementById('div').className = "new-div"

// ________________________________________________________________


// 7. What is called Variable typing in JavaScript ?
// ans: Lets say we have created a variable in javascript and named it to

// let value = "null"

// console.log(typeof value);

// value = 12

// console.log(typeof value);

// we can change the type of the variable in javascript. And we won't get any errors while changing the type.  

// ________________________________________________________________

// 8. Write a JavaScript program to find the maximum number in an array. 
// ans: const arr = [1, 2, 3, 4, 5, 6, 10]
// let newValue = Math.max(...arr);
// console.log(typeof newValue)

// ________________________________________________________________

// 9. What is Spread and Rest operator?
// ans: Spread operator: is used when we need to add a two arrays value to another array we can do that very easily

// let arr1 = [1, 2, 3, 4]
// let arr2 = [5, 6, 7, 8]

// let arr3 = [...arr1, ...arr2]
// console.log(arr3) // we are getting whole array ie, [1, 2, 3, 4, 5, 6, 7, 8]

// Rest Operator: When we are getting more parameters. we can use spread operator. spread operator is too looking like rest operator. 
 //

//  const getUserDetails = (...details)=> {
//     console.log(details)
//     let userName = [details[0]]
//     console.log(userName)
//  }  

//  getUserDetails("kevin", 22, "Software Engineer", '6LPA')

//  No we are getting all these values, simply we need to do is just put three dots and a name. Then all the values will be in that name.
//  If we need to take the values of on a separate variable we can do that by just putting the like I put in line no. 150.

// ________________________________________________________________

// 10. Explain what is callback function is and explain with an example?
// ans: A callback function is a function that is passsed to a function's argument. 
// eg is 

// const handleResult = (number, showResult)=> {
//     console.log("started")
//     showResult()
//     return number * 2

// }

// const showResult = ()=> {
//     console.log("finished")
// }
// const getResult = handleResult(2, showResult)
// console.log(getResult)

// ________________________________________________________________