"use strict";
// const userName = "Max";
// // userName = "Max";
// let age = 30;
// age = 29;
// arrow function
const add = (a, b = 1) => a + b; // Only can set default param on the right
const printOutput = (output) => console.log(output);
printOutput(add(5));
// ... operators
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);
const person = {
    firstName: "Max",
    age: 30,
};
const copiedPerson = Object.assign({}, person);
// Rest Parameter
const add2 = (...numbers /** or number[] */) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
// const addedNumbers = add2(5, 10, 2, 3.7);
const addedNumbers = add2(5, 10, 2);
console.log(addedNumbers);
// Array and Object destructuring
const hobby1 = hobbies[0];
const hobby2 = hobbies[1];
const [h1, h2, ...remainingHobbies] = hobbies;
const { firstName: userName, age } = person;
// console.log(firstName) Error
console.log(userName, age);
//# sourceMappingURL=app.js.map