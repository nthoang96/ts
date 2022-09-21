"use strict";
let user1;
user1 = {
    name: "Max",
    age: 14,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet("Hi");
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Human {
    constructor(n) {
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let human;
human = new Human("Max");
human.greet("Hi");
//# sourceMappingURL=app.js.map