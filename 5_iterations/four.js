const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const new1 = myNums.map((num) => num +10 )
// const new1 = myNums.map((num) => {return num +10} )

// console.log(new1);


// const new1 = myNums.map().map().filter()  // chaining
const new1 = myNums.map((num) => num*10 ).map((num) => num + 1)
            .filter((num)=> num>=41)
console.log(new1);