const friends = ["sokina", "jorina", "hena", "morgina", "karina"];

// console.log(friends);
// console.log(...friends);

// const newArray = ["mina", friends];
const newArray = ["mina", ...friends];
// console.log(newArray);

const numbers = [5, 7, 900, 131, 103, 151, 217, 19, 251, 293, 27, 29];

// Math.max is a default function in javascript. this number can found max number in an array

console.log(Math.max(...numbers));