// // control or logic flow - which code to run when... if all the code not to be run altogether

// // if

// if (true) {
//     // to be executed
// }
// if (false) {
//     // not to be executed
// }

// // <, >, <=, >=, ==, !=, ===, !==

// const score = 80
// if(score > 50){
//     const power = "fly"; // not var - to keep in scope
//     console.log(`User powers is: ${power}`)
// }


// const bal = 200
// // if(bal >= 100) console.log(`Balance is ${bal}`);  // implcit scope
// if(bal >= 100) console.log(`Balance is ${bal}`), console.log("hello");  // not recommended
 


// const userIn = true;
// const debit = true;

// if(userIn && debit){
//     console.log("Allowed");
    
// }

// // const key = "1"
// // switch (key) {
// //     case value: // 1
// //         console.log("a");
        
// //         break;  // if not break then it'll execute all the code below except default
// //     case value: // 2
        
// //         break;

// //     default:
// //         break;
// // }


// // const email = "Hello@@gmail.com" // got
// // const email = "" // not
// // const email = []  // yes

// // if (email){
// //     console.log("Got the mail");
    
// // }else {
// //     console.log("didn't get the mail");
    
// // }


// // falsy values

// // false, 0, -0, Bigint 0n, null, undefined, NaN, ""


// // truthy values 

// // true, "0", 'false'/"false", " ", [], {}, function(){}


// // const email = []  

// // if (email.length !== 0){
// //     console.log("Got the mail");
    
// // }else {
// //     console.log("didn't get the mail");
    
// // }


// const obj = {} 
// if (Object.keys(obj).length !== 0){
//     console.log("Got the mail");
    
// }else {
//     console.log("didn't get the mail");
    
// }




// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = null ?? any function
// val1 = undefined ?? 10
val1 = null ?? 5 ?? 10   // multiple functions returns different values  // assigns first value it gets // 5


console.log(val1);


// ternary operator

// condition ? ture : false

const price = "200"
// const price = "2"

price>20?console.log("YEs"):console.log("NO");
;
