// reduce method


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currval){
//     console.log(`acc: ${accumulator} and curval: ${currval}`);
    
//     return accumulator + currval
// }, 3) // 0 is acc initial value

const myTotal = myNums.reduce((acc, cur) => acc+cur, 0)

console.log(myTotal);
// used like in shoping machine to sum up the bill etc


const kart = [
    {
        item: "shirt",
        price: 500
    },
    {
        item: "shirt2",
        // price: "600"
        price: 600
    },
    {
        item: "shirt3",
        price: 700
    },
    {
        item: "shirt4",
        price: 800
    }
]

const total = kart.reduce((acc, item) => acc + item.price, 0)

console.log(total);
