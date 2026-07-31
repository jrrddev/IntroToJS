//What Are Switch Statements and How Do They Differ from If/Else Chains
/*A switch statement evaluates an expression and matches its value against a series of case clauses.
When a match is found, the code block associated with that case is executed.

//basic structure example of switch statement

switch (expression) {
    case value1:
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    default:
    // code to be executed if expression doesn't match any case
}

The break statement at the end of each case is crucial.
It tells the program to exit the switch block once a matching case has been executed.
Without it, the program would continue executing subsequent cases, a behavior known as "fall-through".
 */

//switch statements are typically used when you're comparing a single variable against multiple possible values.
//They're especially useful when you have many potential conditions to check against a single variable.
let dayOfWeek = 3;

switch (dayOfWeek) {
    case 1:
        console.log("It's Monday! Time to start the week strong.");
        break;
    case 2:
        console.log("It's Tuesday! Keep the momentum going.");
        break;
    case 3:
        console.log("It's Wednesday! We're halfway there.");
        break;
    case 4:
        console.log("It's Thursday! Almost the weekend.");
        break;
    case 5:
        console.log("It's Friday! The weekend is near.");
        break;
    case 6:
        console.log("It's Saturday! Enjoy your weekend.");
        break;
    case 7:
        console.log("It's Sunday! Rest and recharge.");
        break;
    default:
        console.log("Invalid day! Please enter a number between 1 and 7.");
}
//compare to if else, switch is clean
// user roles use case example
/*
if (role === "admin") {
    showAdminMenu();
} else if (role === "editor") {
    showEditorMenu();
} else if (role === "author") {
    showAuthorMenu();
} else if (role === "subscriber") {
    showSubscriberMenu();
} else {
    showGuestMenu();
}
 */
//in switch
/*
switch (role) {
    case "admin":      showAdminMenu(); break;
    case "editor":     showEditorMenu(); break;
    case "author":     showAuthorMenu(); break;
    case "subscriber": showSubscriberMenu(); break;
    default:           showGuestMenu();
}
 */

//basically switch Code isn't just written for computers to run; it's written for humans to read.
//another example
let day = "Saturday";
switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday. Time to work!");
        break;

    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
}
//another
let keyPressed = "KeyA"; // User pressed 'A'
switch (keyPressed) {
    case "ArrowUp":
        moveUp();
        break;
    case "ArrowDown":
        moveDown();
        break;
    // No default needed here!
}
console.log("Game continues running...");

//this use case example is for if else, and is more complex logical evaluation that switch can hard to handle
let creditScore = 720;
let annualIncome = 60000;
let loanAmount = 200000;

let eligibilityStatus;

if (creditScore >= 750 && annualIncome >= 80000) {
    eligibilityStatus = "Eligible for premium loan rates.";
} else if (creditScore >= 700 && annualIncome >= 50000) {
    eligibilityStatus = "Eligible for standard loan rates.";
} else if (creditScore >= 650 && annualIncome >= 40000) {
    eligibilityStatus = "Eligible for subprime loan rates.";
} else if (creditScore < 650) {
    eligibilityStatus = "Not eligible due to low credit score.";
} else {
    eligibilityStatus = "Not eligible due to insufficient income.";
}

console.log(eligibilityStatus);