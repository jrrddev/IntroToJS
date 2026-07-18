//manipulating strings

let greet = "Hello World";
console.log(greet[1]) //e

let greeting = "hello";
let firstTwo = greeting[0] + greeting[1]; // he
console.log(firstTwo);

//to  access last
let greet2 = "hello";
console.log(greet2[greet2.length - 1]); // "o"

// newline of string /n same as <br> in html
let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);

// this is error - let statement = "She said, "Hello!""; - instead use this
let statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"
// another example
let quote = 'It\'s a beautiful day!';
console.log(quote); // It's a beautiful day!



//template literal
const name = "jared";
const greeting1 = `Hello, ${name}!`;

console.log(greeting1);

// template literal with string interpolation
const name1 = "Jared";
const age = 18;
const message = `My name is ${name1} and I am ${age} years old.`;
console.log(message);
//another example
let uno = 1
let dos = 2
//for string interpolation
let words = `the sum of 1 and 2 is ${uno + dos}`;
console.log(words);
//regular string concatenation
words = "the sum of 1 and 2 is " + (uno + dos);
console.log(words);
//more example
const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
    (score / highestScore) * 100
}%.`;
console.log(output);


//how to find a position of a substring in a string
let sentence = "JaavScript is awesome!";
let position = sentence.indexOf("awesome!");
console.log(position); // 14

//another example
sentence = "JavaScript is awesome, and JavaScript is powerful!";
position = sentence.indexOf("JavaScript", 10);
//the 10 there is a command to skip the first 10 words and index the words after the 10
console.log(position); // 27