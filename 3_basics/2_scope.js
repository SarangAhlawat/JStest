// // {}  //scope

// let a = 10  // global scope
// const b = 20
// // var c = 30 // don't work well in scopes

// // {scope if comes with func or if/else}
// if(true){
//     let a = 100 // not defined outside  // block scope
// const b = 200 // not defined outside
// // var c = 30 // or c = 30

// console.log("inner:", a);

// }


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// // console.log(c);




// function one(){
//     const name = "sarang"
//     function two(){
//         const web = "yt"
//         console.log(name);
        
//     }
//     // console.log(web); // not defined outside two  // line by line execution
//     two()
    
// }

// one()  

// // child can access parent's variable in nested scope

// if (true){
//     const name1 = "sar"
//     if(name1 === "sar"){
//         const web1 = " yt1"
//         console.log(name1 + web1);
        
//     }
//     // console.log(web1);
    
// }

// // console.log(name1);



// interesting... 
// Mini hoisting -- hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution



// add1(5) // can be accessed before initialization
console.log(add1(5))

function add1(num){
    return num +1
}

// add1(5)  // only return not print

// add2(5) // cannot be accessed befor initialization like this
const add2 = function(num){ // function but called expression // js variable can hold nything  // declared here + hold
    return num + 2
}

add2(5)