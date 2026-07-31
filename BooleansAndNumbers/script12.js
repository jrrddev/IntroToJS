//How Do Comparisons Work with Null and Undefined Data Types
/*
When comparing null and undefined using the equality operator (==), JavaScript performs type coercion.
This means it tries to convert the operands to the same type before making the comparison.
In this case, null and undefined are considered equal
 */
console.log(null == undefined); // true
//However, when using the strict equality operator (===), which checks both value and type without performing type coercion, null and undefined are not equal
console.log(null === undefined); // false
/*
This difference is important to keep in mind when writing conditional statements or performing equality checks in your code.
When comparing null or undefined with other values using the equality operator (==), the behavior can be unexpected.
 */
console.log(null == 0);  // false
console.log(null == ''); // false
console.log(undefined == 0); // false
console.log(undefined == ''); // false
/*
These comparisons return false because null and undefined are only equal to each other
(and themselves) when using the equality operator.
The behavior of null in other comparisons is particularly tricky
 */
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
//undefined, on the other hand, always converts to NaN in numeric contexts, which makes all numeric comparisons with undefined return false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0); // false