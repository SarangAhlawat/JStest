// // numbers...

// const score = 400

// const balance = new Number(100)
// console.log(balance);
// console.log(typeof balance); // Number inside an object // defined in an object
// console.log(score);
// console.log(typeof score);



// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(4));

// const prcise = 123.7675

// console.log(prcise.toPrecision(3));

// const hund = 1000000

// console.log(hund.toLocaleString('en-IN')); // 10,00,000




// maths library ...

console.log(Math);


console.log(Math.abs(-4));  // Absolute value

console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(2, 4, 4, 5, 6, 7));


console.log(Math.random());  // always b/w 0 & 1
console.log((Math.random()*10) + 1); // 1 to 9

console.log(Math.floor(Math.random()*10) + 1); // number (without decimals)

const random = (Math.random()*10) + 1
console.log(random.toPrecision(1))  // string (without decimals)


const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max-min +1)) + min));