const person ={
    name: "munim",
    age: 23,
    country: "BD"
}
// Object.seal(person)
Object.freeze(person);

person.age = 24;
person.status = "not found";
// console.log(person) 

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

// loop in object
// console.log(person["name"])
// console.log(person.name)

for(let key in person){
    // console.log(`key: ${key} value: ${person[key]}`)
}

// console.log(Object.entries(person));

for(let [key, value] of Object.entries(person)){
    // console.log(key)
    console.log(`key: ${key} value: ${value}`)

}