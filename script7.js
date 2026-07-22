//What Are Conditional Statements, and How Do If/Else If/Else Statements Work?
//true and false, the false is either empty string or in integer is 0 the true is opposite
//example
if (null) {
    console.log("this will not run");
}

if ("wassup") {
    console.log("this will run");
}
//another example
let age = 20;
if (age >= 18) {
    console.log("youre eligible to vote");
}
//next example lets add else
age = 17;
if (age >= 18) {
    console.log("youre eligible to vote");
} else {
    console.log("youre not eligible to vote");
}
//for multiple if else conditions
let score = 90;
 if (score >= 90) {
     console.log("you got an A");
}
 else if (score >= 80) {
     console.log ("you got a B");
 }
 else if (score >= 70) {
     console.log ("you got a C");
 }
 else {
     console.log ("you failed");
 }

 //ternary operator
//basic syntax logic --- condition ? expressionIfTrue : expressionIfFalse;
const temperature = 30;
 const weather = temperature > 25 ? "sunny" : "cool";
 console.log(`its a ${weather} day`);