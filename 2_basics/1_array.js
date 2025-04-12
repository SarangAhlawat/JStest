// // array

// const myArr = [0,1,2,3,4,5, true, "sarang"]

// console.log(myArr[3]);
//  // copy in array make shallow copy - share the same reference  (deep copy is opp.)

//  const arr = new Array(1, 2, 3, 4)
//  console.log(arr);
 
//  // have prototype also - in array

//  // Array methods

//  myArr.push(8)
//  myArr.pop()
// myArr.unshift(2)
// myArr.shift()

//  console.log(myArr);

//  console.log(myArr.includes(9));
//  console.log(myArr.indexOf(3));
 
//  const nw = myArr.join()

 
//  console.log(typeof nw);
//  console.log(myArr);

//  // slice and splice

//  console.log("A", myArr);
 

//  const myn1 = myArr.slice(1,4)

//  console.log(myn1);
//  console.log("B", myArr); // slice - doesn't manipulates original array
 

 
//  const myn2 = myArr.splice(1,4)

//  console.log(myn2);
//  console.log("C", myArr);  // splice - manipulates original array
 


const marvel = ["ironman", "spider", 'thor']
const dc = ['superman', "batman", "flash"]

// marvel.push(dc) // array inside array
// const neww = marvel.concat(dc)

// // console.log(marvel);
// // console.log(marvel[3][0]);
// console.log(neww);


const all = [...marvel, ...dc] // spread operator

// console.log(all);


const nwarr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [22, 33]]]

// console.log(nwarr);

// let usable_arr = nwarr.flat(Infinity)
// let usable_arr = nwarr.flat(1)
// console.log(usable_arr);



Array.isArray("sarang")

// console.log(
//     Array.isArray("sarang")
//     );


// console.log(
//     Array.from("sarang")
//     );


console.log(Array.from({name: "sarang"})); // specify keys or values array to be made


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
