//What Are Binary Logical Operators, and How Do They Work?
/*
Logical AND (&&) Goal:
 Look for the first falsy value.
 How it works: It evaluates from left to right. If it encounters a falsy value, it stops immediately and returns it (this is called short-circuiting).
 If both values are truthy, it returns the second (rightmost) value.
 Examples:
 true && 'hello' --> 'hello'(Left is truthy, so it returns the right value)
 false && 'hello' --> false (Left is falsy, so it stops and returns false)
 2 < 3 && 3 < 4 --> true (Both sides evaluate to true)
 */
//sample
if (2 < 3 && 3 < 4) {
    console.log('The if block runs');
} else {
    console.log('The else block runs');
}

/*
Logical OR (||)
Goal: Look for the first truthy value.
How it works: It evaluates from left to right. As soon as it finds a truthy value, it stops immediately and returns it.
If both values are falsy, it returns the second (rightmost) value.
Examples:
'cat' || 'dog' --> 'cat' (First value is truthy, so it stops and returns 'cat')
"" || 'default' --> 'default' (Empty string is falsy, so it returns the right/truthy value)
0 || false --> false (Both are falsy, so it returns the second falsy value)
 */
//sample
let userInput; //falsy
if (userInput || 'Guest') {
    console.log('A user is present');
} else {
    console.log('No user detected');
}

/*
Nullish Coalescing Operator (??)
Goal: Provide a fallback default value, but ONLY if the left side is null or undefined.
Why it exists: || treats 0 and "" as falsy, which can cause bugs if 0 or "" are valid inputs. ?? ignores standard falsy values like 0 or "" and only triggers on null or undefined.
How it works: If the left value is null or undefined, it returns the right value. Otherwise, it returns the left value.
Examples:
null ?? 'default' --> 'default' (Left is null, so fallback to right)
undefined ?? 'default' --> 'default' (Left is undefined, so fallback to right)
0 ?? 100 --> 0 (0 is not null/undefined, so it keeps 0!)
"" ?? "hello" --> "" ("" is not null/undefined, so it keeps ""!)
 */
//sample
const result = null ?? 'default';
console.log(result); // default

//another sample
const userSettings = {
    theme: null,
    volume: 0,
    notifications: false,
};
let theme = userSettings.theme ?? 'light';
console.log(theme); // light