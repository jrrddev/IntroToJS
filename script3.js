//What Is ASCII, and How Does It Work with charCodeAt() and fromCharCode()?
//example
let letter = "A";
console.log(letter.charCodeAt(0));  // 65

let symbol = "!";
console.log(symbol.charCodeAt(0));  // 33

//vice versa
let char = String.fromCharCode(65);
console.log(char);  //  A
//for small letter (different)
char = String.fromCharCode(97);
console.log(char);  // a

//How Can You Test if a String Contains a Substring?
let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");
console.log(result);  // true
//other example
phrase = "JavaScript is awesome!";
result = phrase.includes("Awesome");
console.log(result);  // false

//slice
//start to end example
/*In JavaScript, when you pass two numbers into .slice(start, end), the rule is:
It extracts the text starting at the first number, up to but NOT including the second number.
Think of it as: slice(start here, stop right before here).*/
let message = "Hello, world!";
let greeting = message.slice(0, 5);
console.log(greeting);  // Hello
//another example
message = "Hello, world!";
world = message.slice(7);
console.log(world);  // world!
//from last, example
message = "JavaScript is fun!";
lastWord = message.slice(-4);
console.log(lastWord);  // fun!

//btw the .includes or .slice is called string method/s and inside or next of it the .slide (...) is a argument