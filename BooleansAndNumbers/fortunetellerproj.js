const fortune1 = "Your cat will look very cuddly today."
const fortune2 = "The weather will be nice tomorrow."
const fortune3 = "Be cautious of your new neighbors."
const fortune4 = "You will find a new hobby soon."
const fortune5 = "It would be wise to avoid the color red today."

const randomNumber = Math.floor(Math.random() * 5) + 1;
//making it outputs a random whole number with min of 1 and max of 5

let selectedFortune;

if (randomNumber === 1) {
    selectedFortune = fortune1;
} else if (randomNumber === 2) {
    selectedFortune = fortune2;
} else if (randomNumber === 3) {
    selectedFortune = fortune3;
} else if (randomNumber === 4) {
    selectedFortune = fortune4;
} else if (randomNumber === 5) {
    selectedFortune = fortune5;
}
//used === strict equality

console.log(selectedFortune); //logs the output

//explanation

//the if / else is built entirely on boolean

if (randomNumber === 1) { // 2 === 1 is FALSE -> Skip this block!
  selectedFortune = fortune1;
}
else if (randomNumber === 2) { // 2 === 2 is TRUE -> Run this block!
  selectedFortune = fortune2;
}
else if (randomNumber === 3) { // Skipped completely because a previous condition was already true!
  selectedFortune = fortune3;
}
