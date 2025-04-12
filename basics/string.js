// const name = "sarang" // object t backside
// const count = 50

// // console.log(name + count + " value");


// console.log(`My name is ${name} and my repo count is ${count}`);  // string interpolation


const gameName = new String('Sarang') // string is an object so by this we can have multiple methods

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__); // prototype
// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // no original string change as it is primitive data type
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('r'));


const newStr = gameName.substring(0,3) // 0, 1, 2

console.log(newStr);

// const another = gameName.slice(0, 4)
const another = gameName.slice(-5, 4)
console.log(another);

const new1 = "    hello "
const new2 = new1.trim()  // see MDN resources also

console.log(new1);
console.log(new2);

const url = "https://sarang.com/hello%20"

console.log(url.replace('%20', '-'));
console.log(url.includes('sarang')); // true

// string into array

console.log(gameName.split("a")); //   [ 'S', 'r', 'ng' ]
