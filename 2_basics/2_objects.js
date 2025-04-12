// // // two ways to make objects... literal or constructor
// // // singleton - from constructor (treated like one)

// // // object literals ->

// // // Object.create // from constructor method

// // const jsuser = {
// //     name: "Sarang", // name is also treated like string like "name"
// //     "full name": "sarahl",
// //     0: 123,
// //     // mySym: "mykey1",
// //     // [mySym]: "mykey1", // error ??
// //     logIn: false,
// //     lastIn: ["sun", "tue"]
// // } 

// // // console.log(jsuser.logIn);
// // // console.log(jsuser['logIn']);
// // // // console.log(jsuser.full name);
// // // console.log(jsuser["full name"]);


// // const mySym = Symbol("key1");

// // // console.log(jsuser.mySym);
// // // console.log(typeof jsuser.mySym);

// // // console.log(jsuser[mySym]);
// // // console.log(typeof jsuser[mySym]);


// // // jsuser.name = "ahlawat"

// // // console.log(jsuser['name']);

// // // Object.freeze(jsuser)  // unfreeze if you want to edit
// // // jsuser.name = "aaaaahlawat"
// // // console.log(jsuser['name']);

// // // console.log(jsuser);

// // jsuser.greeting = function(){
// //     console.log("Hello");
    
// // }

// // // console.log(jsuser.greeting); // [Function (anonymous)] // func not executed but it's a reference
// // console.log(jsuser.greeting());

// // jsuser.greeting2 = function(){
// //     console.log(`Hello jsuser ${this.name}`); // this references for the same object we are on
    
// // }

// // console.log(jsuser.greeting2());



// // singleton ->

// const tinder = new Object()  // singleton // constructor
// // const tinder = {} // non-singleton

// tinder.id = "123ab"
// tinder.name = "mark"
// tinder.logIn = "true"
// // console.log(tinder);

// const regularUser = {
//     email: "ghfj@com",
//     fullName: {
//         username: {
//             first: "sarang",
//             last: "ahlawat"
//         }
//     }

// }

// // console.log(regularUser.fullName.username.first);
// // console.log(regularUser.fullName?.username.first); // if not exixt in some cases of api

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// // const obj3 = {obj1, obj2}
// // const obj3 = Object.assign(obj1, obj2) // all values going to obj1 (target)
// // console.log(obj1);
// // const obj3 = Object.assign({}, obj1, obj2) // all values going to {} (optional)


// const obj3 = {...obj1, ...obj2} // spread and combine
// console.log(obj3);

// user = [
//     {
//         email: "",
//         id: ""
//     },
//     {
//         email: "fddsf",
//         id: ""
//     },
//     {
//         email: "",
//         id: ""
//     },
//     {
//         email: "",
//         id: ""
//     },
// ]


// user[1].email // like we'll get data from database
// console.log(user[1].email);


// console.log(Object.keys(tinder));  // array
// console.log(Object.values(tinder));  // array
// console.log(Object.entries(tinder));


// console.log(tinder.hasOwnProperty("logIn")); // true



// destructure of objects

const course = {
    name: "js",
    price: 999,
    inst: "hitesh"
}

// course.name

const {name} = course
const {name: n} = course // can rename

console.log(name);
console.log(n);


// const nav = ({company}) => {  // in reach props

// }

// nav(company = "hitesh")


// API

// ex: https://api.github.com/users/sarangahlawat



// {
//     "name1": "hit",    // JSO N
//     "cname": "js",
//     "price": "free"
// }


// [
//     {},
//     {

//     },
//     {}
// ]

// random user me api - google
// json formatter - online
// JavaScript Object Notation

