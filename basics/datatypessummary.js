// Primitive (call by value)

// 7 types: String, Boolean. Number, null, undefined, Bigint, Symbol


const score = 100 // or 100.3  // statically or dynamically typed?

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid); //f
console.log(id == anotherid); //f

const num = 54646468688678676876864668n

console.log(typeof num);
console.log(typeof null); // object





// Reference (Non primitive)

// Array, Objects, Functions

// objects & browser web events or browser events mastery => JS Mastery

const heroes = ["helo", "bye"]

let obj = {
    name: "Sara",
    age: 20 // can be obj/ array/ function also
}

const myfun = function(){
    console.log("hello");
}

// console.log(myfun);
