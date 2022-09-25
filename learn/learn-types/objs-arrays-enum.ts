enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[]; // array
  role: [number, string]; // #tupple added by TS: Fixed-length array
  type: Role;
} = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
  type: Role.ADMIN,
};

person.role.push("admin");

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.type === Role.ADMIN) {
  console.log("Admin");
}

// Any
let freetime: any;
freetime = true;
