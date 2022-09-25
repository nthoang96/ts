interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

// type Person = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

let user1: Person;

user1 = {
  name: "Max",
  age: 14,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi");

// Interface as function types
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

// implement interface into class
interface Named {
  readonly name?: string;

  outputName?: string; // if you don't want every class used this interface alway use this property used "?" beside
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Human implements Greetable {
  // Can implement multi interface
  name?: string;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

let human: Greetable;

human = new Human("Max");
// human.name = "1" //error
human.greet("Hi");
