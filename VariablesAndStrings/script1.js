//fast concatenation

//instead of
let firstname = "jerus";
let lastname = "verana";
console.log(firstname + " " + lastname);
//make it this so no hassle " " space string so...
firstname = "jerus";
lastname = "verana";
let fullname = `${firstname} ${lastname}`;
console.log(fullname);

//data types or typeof
let age = 18;
console.log(typeof age); //number

let isUserLoggedIn = true;
console.log(typeof isUserLoggedIn); // boolean

let exampleVariable = null;
console.log(typeof exampleVariable); // "object"

//data
let pet = {
    name: "Fluffy",
    age: 3,
    type: "dog"
};
console.log(pet);