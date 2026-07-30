//How Does isNaN Work
//In JavaScript, NaN stands for "Not a Number"

//NaN is typically the result of operations that should return a number but can't produce a meaningful numerical value.
//for example
let result = 0 / 0;
console.log(result);
//In this case, dividing zero by zero is mathematically undefined, so JavaScript returns NaN

//One peculiar property of NaN is that it's not equal to anything, including itself
console.log(NaN === NaN)

// Here's how isNaN() behaves
console.log(isNaN(NaN));       // true
console.log(isNaN(undefined)); // true
console.log(isNaN({}));        // true

console.log(isNaN(true));      // false
console.log(isNaN(null));      // false
console.log(isNaN(37));        // false

console.log(isNaN("37"));      // false: "37" is converted to 37
console.log(isNaN("37.37"));   // false: "37.37" is converted to 37.37
console.log(isNaN(""));        // false: empty string is converted to 0
console.log(isNaN(" "));       // false: string with a space is converted to 0

console.log(isNaN("blabla"));  // true: "blabla" is not a number

//another
console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0));      // true

console.log(Number.isNaN("NaN"));      // false
console.log(Number.isNaN(undefined));  // false
console.log(Number.isNaN({}));         // false
console.log(Number.isNaN("blabla"));   // false

//Number.isNaN() provides a more reliable way to check for NaN values
let a = 0;
let b = 0;
result = a / b;

if (Number.isNaN(result)) {
    result = "Error: Division resulted in NaN";
}

console.log(result); // "Error: Division resulted in NaN"
