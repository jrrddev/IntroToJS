//What Is the Math Object in JavaScript, and What Are Some Common Methods?
//math random
const randomnumber = Math.random(); //btw .random outputs decimal only
console.log(randomnumber);

//math min max
const smallest = Math.min(1, 3, 6, 9);
console.log(smallest);
const largest = Math.max(1, 3, 6, 9);
console.log(largest);
/*
tip for use case: If user tries to set volume to 120, Math.min caps it at 100
let safeVolume = Math.min(userVolume, 100);
 */

//math floor ceil, round up down
//math floor always rounds down to the nearest integer
console.log(Math.floor(4.7)); //4
console.log(Math.floor(4.1)) //4
//math ceil always rounds up to the nearest integer
console.log(Math.ceil(4.1)) //5
console.log(Math.ceil(4.9)) //5
console.log(Math.ceil(4.0)) //(If it's already a whole number, it stays 4)
//math round is normal round up and down
console.log(Math.round(4.4)) //4
console.log(Math.round(4.5)) //5
console.log(Math.round(4.9)) //5

//important formula
//Math.floor(Math.random() * (max - min + 1)) + min;
//sample
const max = 10;
const min = 5;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; //formula to hit the min max declared in the variables (5-10)
console.log(randomNum);
//Generating a random number between 20 and 1 would look like this:
const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumBtw1And20);

//Math.trunc - removes the decimal part of a number, returning only the integer portion, without rounding:
console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(9.1)); // 9

//If you need to get the square root or cube root of a number, you can use the Math.sqrt() and Math.cbrt() methods
console.log(Math.sqrt(81)); // 9
console.log(Math.cbrt(27)); // 3