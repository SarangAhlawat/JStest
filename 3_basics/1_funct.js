// // function myName(){
// //     console.log("Sarang");
    
// // }

// // myName // reference - only says it stay there

// // myName() // execute

// // function add(n1, n2){ // n1 nd n2 are parameters
// //     // n1 + n2
// //     console.log(n1 + n2);
// //     let result = n1 + n2
// //     return result
// //     // return n1 + n2
// //     console.log(); // no print after return
    
// // }

// // // add(3,"6") // arguments pass
// // add(3,null) 

// // const re = add(4,7)

// // console.log("result: ", re);



// // function loginMessage(username){
// //     return `${username} just logged in`
// // }


// function loginMessage(username = "hi you"){  // default values
//     // if(username === undefined){
//     if(!username){
//         console.log("please enter a username");
//         // return 0 - no
//         return
        
//     }
//     return `${username} just logged in`
// }



// console.log(loginMessage("Sarang"))
// console.log(loginMessage()) // undefined
// // console.log(loginMessage(""))




// function calcCartPrice(num1){

//     return num1
// }

// function calcCartPrice(val1, ...num1){  // rest operator (in this case) - passing multiple values

//     return num1
// }

// // console.log(calcCartPrice(3, 5, 4)); // only 3 will print
// console.log(calcCartPrice(3, 5, 4));



const user = {
    name: "sarang",
    price: 99
}

function handleObj(anyobj){
    console.log(`username is ${anyobj.name} and price is ${anyobj.price}`);
    
}

// handleObj(user)
handleObj({
    name: "SAR",
    price: "200"
})

const arr = [200, 300, 400]

function getArr (ar){
    return ar[1]
}

// console.log(getArr(arr));
console.log(getArr([200, 300, 400]));
