//Functions are reusable pieces of code that perform a specific task or calculate a value.
//Think of functions as a machine that takes some input, does some operations on it, and then produces an output
function greet1() {
    console.log("Hello World!");
}
//to call the function
greet1(); //Hello World!

//greet function that uses parameters and arguments
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Jared");
greet("Jade");
//to avoid issues
//If you want a function that can either take a custom name or default to "World" if you leave it empty, you can give the parameter a default value
function sample(name = "Guest") {
    console.log("Hello, " + name + "!");
}

sample();        // Logs: Hello, Guest!
sample("Alice"); // Logs: Hello, Alice!

//pro tip dont use 2 functions with the same name/indentifier to avoid conflict

//When a function finishes its execution, it will always return a value. By default, the return value will be undefined
function doSomething() {
    console.log("Doing something...");
}
let result = doSomething();
console.log(result); // undefined

//If you need your function to return a specific value, then you will need to use the return statement.
//Here is an example of using a return statement to return the sum of two values
function calculateSum(num1, num2) {
    return num1 + num2;
}
console.log(calculateSum(3, 4)); //7
console.log(calculateSum(5, 6)); //11

//you can also create what's called an anonymous function.
//An anonymous function is a function without a name that can be assigned to a variable
const sum = function (num1, num2) {
    return num1 + num2;
};
console.log(sum(3, 4)); // 7