//working with numbers and arithmetic operations
const num1 = 10;
const num2 = 20;
const num3 = 5;
const result1 = num1 + num2;
const result2 =  num2 + num3;
const result3 = num1 + num3;
console.log(result1);
console.log(result2);
console.log(result3);
//for multiplication
const result4 = num1 * num2;
const result5 = num2 * num1;
const result6 = num2 * num1 * num3;
console.log(result4);
console.log(result5);
console.log(result6);

//How Do the Increment and Decrement Operators Work?
//prefix
let x = 5;
console.log(++x); // 6
console.log(x); // 6
//postfix
let y = 5;
console.log(y++); // 5
console.log(y); // 6
//another example foe subtraction prefix and postfix
x = 5;
console.log(--x); // 4
console.log(x); // 4
y = 5;
console.log(y--); // 5
console.log(y); // 4
//use cases
let a = 5;
let b = ++a;
console.log(b); // 6 (a was incremented before assignment)
let c = 5;
let d = c++;
console.log(d); // 5 (c was incremented after assignment)

