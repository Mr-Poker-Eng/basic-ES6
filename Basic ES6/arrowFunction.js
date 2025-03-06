// average function
function sum(num1, num2){
    sum =  num1 + num2;
    return sum;
}

const result = sum(10, 20);
// console.log(result);


// another way to write a function

const sum2 = function (num1, num2){
    return num1 + num2;
}

// console.log(sum2(40, 20))

//---------------------------------------------
// arrow Function
// const sum=()=>

// for single line function
const sum4 = (num1, num2) => num1 + num2;
// console.log(sum4(50, 20));

// for multiple line function
const sum5 = (num1, num2) => {
    sum = num1 + num2;
    return sum;
}

// console.log(sum5(70, 20));


/* three ways to write arrow function
const myName = () => console.log('jhon');
const square = a => a*a;
const add = (a, b) => a+b;
*/

const test = () => console.log("hello empty");
// test()


const square = x => x * x;
// console.log(square(10))


const sum6 = (a, b) => a + b;

// normal function
document.getElementById("title").addEventListener("click", function(){

});


//arrow function
document.getElementById("title").addEventListener("click", (event)=>{
    console.log(event);
});