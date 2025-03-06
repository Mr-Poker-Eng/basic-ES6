// destructuring on object

const hena = {
    name: 'hena',
    age: 10,
    friends: ["apurbo", "munim", "nibir", "tawseef"],
    status: "not found"
}

// const henaStatus = hena.status;
// const henaName = hena.name;
// const henaAge = hena.age;
// const henaFriends = hena.friends;


// destructuring 

const {name, age, status, friends} = hena;

// console.log(friends);


// destructuring on array

const person = ["apurbo", {name: "munim"}, "nibir", "tawseef"];
// console.log(person[1]);

const [bondhu1, bondhu2, bondhu3, bondhu4] = person;
console.log(bondhu4);