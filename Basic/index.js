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


// 3. How does hoisting work in JavaScript?
// a. What is hoisting? 
// ans: Hoisting means if try to access the variable of object before intialisation we get different warnings or errors
// if we use let or const for declaring that variable we will reference error cannot access variable before intialisation
// but if we use var to declare that variable we will get undefined