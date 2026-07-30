//What Are Compound Assignment Operators in JavaScript, and How Do They Work?
let num = 5;
num = num + 2;
console.log(num); // 7
//you can write something like this
num = 5;
num += 2;
console.log(num); // 7

//boolean
let isOldEnoughToDrive = true;
if (isOldEnoughToDrive) {
    console.log("You're old enough to drive"); // You're old enough to drive
} else {
    console.log("Sorry, you are not old enough to drive");
}
//example2
let psswd = false;
if (psswd) {
    console.log("correct login");
} else {
    console.log("wrong password");
}

//to compare 2 values use this
console.log(5 == "5");
//more examples
console.log(5 == 5); // true
console.log(10 > 3); // true
let score = 5;
console.log(score == 5); // true
let name = "Alex";
console.log(name == "Alex"); // true

//for strict equality heres the example ===
console.log(5 === '5'); // false
/*
5 === "5" // false (because Number is not String)
5 === 5   // true
 */

