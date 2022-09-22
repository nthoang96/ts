"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});
promise.then((data) => {
    data.split(" ");
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Max" }, { age: 1 });
mergeObj.age;
function countAndPrint(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndPrint("Hi there!"));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "Max" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const namesReadOnly = ["Max", "Anna"];
//# sourceMappingURL=app.js.map