// // this keyword -- tells us about current context

// const user = {
//     name: "sarang",
//     price: "99",

//     msg: function(){
//         console.log(`${this.name}, welcome to website`);
//     console.log(this);
    
// }
// }


// // user.msg()
// // user.name = "sam"
// // user.msg()

// // console.log(this); // {} // but window object in browser inspect console

// function helo(){
//     let name = "hitesh"
//     console.log(this.name); // undefine - works only in objects
//     console.log(this);
// }
// helo()



// const chai = function (){
//     let name = "hitesh"
//     console.log(this.name); // undefine - works only in objects
// }


// const chai = () => {
//     let name = "hitesh"
//     console.log(this.name); // undefine - works only in objects
// }


// const chai = () => {
//     let name = "hitesh"
//     console.log(this); // {}  // one of the difference in arrow and normal funct
// }


// const chai = () => {
//     let name = "hitesh"
// }

// chai()

// () => {}


// const add2 = (n1, n2) => {
//     return n1 + n2
// } // return keyword compulsory to get something as a result

// console.log(add2(2, 6));


// const add2 = (n1, n2) => n1 + n2  // implicit return
// const add2 = (n1, n2) => (n1 + n2 )  // no need to write return // helpful in react 



// const add2 = (n1, n2) => {name1: "hello"}  // undefined
const add2 = (n1, n2) => ({name1: "hello"})
console.log(add2(2, 6));



// const myArr = [2, 3, 4, 5, 6]

// myArr.forEach(function () {})
// myArr.forEach(() => {})
// myArr.forEach(() => ())



//// this keyword used in normal function (global object?) not in arrow function