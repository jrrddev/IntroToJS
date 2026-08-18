//What Are Arrow Functions, and How Do They Work?
//last time we did
function greetings1(name) {
    console.log("Hello, " + name + "!");
}
// But another way to write functions in JavaScript is to create an arrow function expression
const greetings2 = (name) => {
    console.log("Hello, " + name + "!");
};
//If your parameter list only has one parameter in it, then you can remove the parentheses like this
const greetings3 = name => {
    console.log("Hello, " + name + "!");
};
//If your arrow function has no parameters, then you must use the parentheses like this
const greetings4 = () => {
    console.log("Hello");
};

//When first learning about functions, you had to wrap the function body in curly braces.
//But if your function body only contains a single line of code, you can remove the curly braces
const greetings5 = name => console.log("Hello, " + name + "!");
/*
It is important to note that removing the parentheses and curly braces for regular function syntax will not work.
You will get errors if you tried to do something like this
This will produce syntax errors
function greetings name console.log("Hello, " + name + "!");
 */

//Another key concept is the return statement
const calculateArea = (width, height) => {
    const area = width * height;
    return area;
};
console.log(calculateArea(5, 3)); // 15
//We are creating a variable inside the function called area and then returning that variable.
//But we could clean up our code a bit and return the calculation itself
const calculateArea1 = (width, height) => {
    return width * height;
};
console.log(calculateArea(5, 3)); // 15
/*
If you tried to remove the curly braces and place the calculation on the same line,
then you would get an Uncaught SyntaxError: Unexpected token 'return' message:

const calculateArea = (width, height) => return width * height;

The reason why you are getting this error, is because you need to remove the return statement.
When you remove that return statement, the error will disappear and the function will still implicitly return the calculation.
*/
const calculateArea2 = (width, height) => width * height;

//tip
/*
When you remove the curly braces {} and write everything on one line, JavaScript does what is called an implicit return.
It behaves the exact same way as writing the return keyword manually.
Both of these do the exact same thing
Explicit Return (uses {} and return):

const calculateArea = (width, height) => {
  return width * height;
};

Implicit Return (no {}, no return keyword needed):

const calculateArea = (width, height) => width * height;
 */

//The only time you must write the word return is when your function uses curly braces {} to contain multiple lines of code.