// Immediately Invoked Function Expression (IIFE)
// for immidiate database connection and more

(function chai(){ //names iife
    console.log(`DB connected`);
    
})();  // need to put this semicolon to make it know where to stop context

// chai ()

// (declaration definition)(call)
// IIFE - immidiately execute, to prevent from global scope pollution variables and declaration


// (() => {
//     console.log(`Hello`);
    
// }) ();


((name) => { // unnamed iife
    console.log(`Hello ${name}`);
    
}) ("Sarang");