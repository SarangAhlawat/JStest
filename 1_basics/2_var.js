// investigation studies


const accountId = 213535
let accountEmail = "ghgfgjhgjjh.com" // no scope problem (recommended)
var accountPass = "5454" // block and functional scope problem
accountCity = "Jaipur" // (not recommended)
let accState;

// accountId = 2  // not allowed
accountEmail = "hiuhh.com"
accountPass = "jhhh"
accountCity = "Delhi"

console.log(accountId);

console.table([accountId, accountEmail, accountPass, accountCity, accState])