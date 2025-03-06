//const and let

const countryName = "BD";

let age = 10;
age = 11;


//templete string
console.log(`hi 
    how are you? 
    i am fine
    and you
    my age is ${age}
    `)

// arrow function
//single line
const sum = (num1, num2) => num1 + num2;

//multi line
const sum2 = (num1, num2) => {
    return num1 + num2;
}


// spread operator
const number = [1, 2, 48, 77, 65]
// console.log(...number);


const human = {
    name: "munim",
    running: 23
}

const{name, running} = human;
// console.log(name, running);

const frnd = ["munim", "nibir"];
const [first, second] = frnd;
// console.log(first, second);


//keys and values
const person = {
    name: "munim",
    running: 23
}

// console.log(Object.keys(person))
// console.log(Object.values(person))


// object.entrires
console.log(Object.entries(person))


// object seal and freeze
Object.seal(person);
Object.freeze(person);