// // // for of - picks value directly


// // // aray specific rules ahead

// // // ["", "", ""]
// // // [{}, {}, {}]

// // const arr = ["1", "2", "3", "4", "5"]

// // // for (const iterator of object) {
    
// // // }


// // for (const num of arr) {
// //     console.log(num);
    
// // }

// // const greet = "Hello world"
// // for (const grt of greet){
// //     console.log(`each char is : ${grt}`);
    
// // }


// // Maps - are not iterable (can't use for in)  // it's an array method

// const map = new Map()

// map.set('IN', 'India')
// map.set('US', 'USA')
// map.set('FR', 'France')
// map.set('IN', 'India') // odered and keeps it unique


// console.log(map);

// // for (const key of map){
// //     console.log(key);
    
// // }


// for (const [key, value] of map){
//     console.log(key, ':', value);
    
// }



// // const obj = {
// //     "game1": "BGMI",
// //     "game 2": "NFS"
// // }

// // for (const key1 of obj){
// //     console.log(obj);
    
// // }  // objects are not iterable here like this using "for of"



// // for in loop - picks keys


// const obj = {
//     game1: "BGMI",
//     game2: "NFS"}


//     for (const kkey in obj){
//         // console.log(kkey);
//         // console.log(obj[kkey]);
//         console.log(`${kkey} :- ${obj[kkey]}`);
        
//     }




// const arr = ['JS', 'GO', 'PY']

// for (const ar in arr){
//     console.log(ar);
    
// }


// for (const ar in arr){
//     console.log(ar);
//     console.log(arr[ar]);
    
// }


// difference in arrays and objects - keys are index(0,1,2,3...) by default but in object we can define






// for each loop  // high order function


const arr = ['JS', 'GO', 'PY', 'C']

// arr.forEach(function (item) {  // callbaxk function (no name needed)
//     console.log(item);
    
// } )


// arr.forEach( (val) => {  // callbaxk function (no name and variable to store needed)
//     console.log(val);
    
// } )



// arr.forEach(call)  // give reference only not call/execute
// // |
// function call(vr){
//     console.log(vr);
    
// }



// arr.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })




// // // ["", "", ""]
// // // [{}, {}, {}]



const myCoding = [
    {
    languageName: "JS",
    languageFile: "two.js",
    },
    {
    languageName: "JAVA",
    languageFile: "java",
    },
    {
    languageName: "Python",
    languageFile: "py",
    }

]
myCoding.forEach((item) => {
    
    console.log(item.languageName);
    console.log(item.languageFile);
    /* JS
    two.js
    JAVA
    java
    Python
    py */
    
})

// we get values from database in array format and each value is an object