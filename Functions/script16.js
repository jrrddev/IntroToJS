//What Is Scope in Programming, and How Does Global, Local, and Block Scope Work?
/*
Scope in programming refers to the visibility and accessibility of variables in different parts of your code.
It determines where variables can be accessed or modified.
In JavaScript, understanding scope is crucial for writing clean, efficient, and bug-free code.
There are three main types of scope: global scope, local scope, and block scope.
 */
/*
Global scope is the outermost scope in a JavaScript program.
Variables declared in the global scope are accessible from anywhere in your code, including within functions and blocks.
These variables are often called global variables.
While global variables can be convenient, they should be used sparingly as they can lead to naming conflicts and make your code harder to maintain.
 */
let globalVar = "I'm a global variable";

function printGlobalVar() {
    console.log(globalVar);
}
printGlobalVar(); // "I'm a global variable"
//notice that the variable is written outside - thats a difference point

//Local scope, on the other hand, refers to variables that are only accessible within a function.
function greet() {
    let message = "Hello, local scope!";
    console.log(message);
}
greet(); // "Hello, local scope!"
// console.log(message); // This will throw an error
//In this code, message is a local variable within the greet function.
//It can be used inside the function, but trying to access it outside the function will result in an error

//A block is any code section within curly braces, {}, such as in if statements, for loops, or while loops
if (true) {
    let blockVar = "I'm in a block";
    console.log(blockVar); // "I'm in a block"
}
    console.log(blockVar); // This will throw an error
//blockVar is only accessible within the if block. Trying to access it outside the block will result in an error