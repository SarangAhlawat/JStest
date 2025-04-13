// // for loop

// for (let index = 0; index < array.length; index++) {  // ctrl + D to select all same name
//     const element = array[index];
//     // do whatever / database call etc
// }


// // while loop

// while (condition) {
    
// }

// // do while loop

// do {  // executes at least once
    
// } while (condition);


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//     for (let index1 = 0; index1 < array.length; index1++) {
//         const element = array[index1];
        
//     }
    
// }

// for (let i = 0; i<5; i++){
//     console.log(`outer loop ${i}`);

//     // for(let j=i; j<5; j++){
//     for(let j=0; j<5; j++){
//         // console.log(`inner loop ${j} and outer is ${i}`);
//         console.log(i + "*" + j + "=" + i*j);
        
//     }
    
// }



let myArr = ["ironman", "spider", "thor"]
console.log(myArr.length);

for(let i = 0; i < myArr.length; i++){
    const element = myArr[i];
    console.log(element);
    
}



// break keyword - stop executing code at this point - throw outside the loop etc
// continue keyword - don't execute the code at this point and then resume

