//how to change the casing for a string
let greeting = "Hello, World!";
let uppercaseGreeting = greeting.toUpperCase();
console.log(uppercaseGreeting);
//lowercase
let shout = "I AM LEARNING JAVASCRIPT!";
let lowercaseShout = shout.toLowerCase();
console.log(lowercaseShout);  // "i am learning javascript!"

//How Can You Trim Whitespace from a String?
let message = "   Hello!   ";
console.log(message); // "   Hello!   "
let trimmedMessage = message.trim();
console.log(trimmedMessage);  // "Hello!"
//for trimstart
greeting = "   Hello!   ";
console.log(greeting);  // "   Hello!   "
let trimmedStart = greeting.trimStart();
console.log(trimmedStart);  // "Hello!   "

//How Can You Replace Parts of a String with Another?
//syntax / formula - string.replace(searchValue, newValue);
let text = "I love JavaScript";
console.log(text);
let newtext = text.replace("JavaScript", "Coding");
console.log(newtext);
/*By default, the replace() method will only replace the first occurrence of the searchValue.
If the value appears multiple times in the string, only the first one will be replaced*/
//for example
let phrase = "Hello, world! Welcome to the world of coding.";
console.log(phrase);  // "Hello, world! Welcome to the world of coding."
let updatedPhrase = phrase.replace("world", "universe");
console.log(updatedPhrase);  // "Hello, universe! Welcome to the world of coding."

//string repeat - string.repeat(count);
let name = "jared"
let repeatname = name.repeat(3)
console.log(repeatname);
//you can do it as this for more readable code
let repeatcount = 5;
name = "jrrd";
let jrrd5x = name.repeat(repeatcount);
console.log(jrrd5x);






