//How Do the parseFloat() and parseInt() Methods Work
//parseFloat() and parseInt() are two essential methods in JavaScript for converting strings to numbers

/*
Let's start with parseFloat(). This method parses a string argument and returns a floating-point number.
It's designed to extract a number from the beginning of a string, even if the string contains non-numeric characters later on.
Remember that floats are numbers with decimal points.
 */
console.log(parseFloat("3.14"));     // 3.14
console.log(parseFloat("3.14 abc")); // 3.14
console.log(parseFloat("3.14.5"));   // 3.14
console.log(parseFloat("abc 3.14")); // NaN

/*
parseInt(), on the other hand, parses a string argument and returns an integer. Like parseFloat(),
it starts from the beginning of the string, but it stops at the first non-digit character.
*/
console.log(parseInt("42"));       // 42
console.log(parseInt("42px"));     // 42
console.log(parseInt("3.14"));     // 3
console.log(parseInt("abc123"));   // NaN

//more examples
console.log(parseFloat("+3.14"));  // 3.14
console.log(parseInt("-42"));      // -42

//What Is the toFixed() Method, and How Does It Work

/*
The .toFixed() method is a built-in JavaScript function that formats a number using fixed-point notation.
It's particularly useful when you need to control the number of decimal places in a number,
especially for displaying currency values or when working with precise measurements.
 */

/*It's important to note that .toFixed() returns a string, not a number.
This is because the method is primarily intended for formatting numbers for display, not for further calculations.
 */

let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"
//more examples
console.log((3.14159).toFixed(3));  // "3.142"
console.log((3.14449).toFixed(3));  // "3.144"
console.log((3.14550).toFixed(3));  // "3.146"
num = 3.14159;
console.log(num.toFixed()); // "3"
//real example
let price = 19.99;
let taxRate = 0.12;
let total = price + (price * taxRate);
console.log("Total: PHP" + total.toFixed(2)); // "Total: PHP22.39"

