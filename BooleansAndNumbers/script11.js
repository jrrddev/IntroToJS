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