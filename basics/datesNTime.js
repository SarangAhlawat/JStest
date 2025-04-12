// Dates

let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toJSON);
console.log(myDate.toJSON());
console.log( typeof myDate);  // object 


let myDate1 = new Date(2023, 0, 3);
let myDate2 = new Date(2023, 0, 3, 5, 4);

console.log(myDate1);
console.log(myDate1.toString());
console.log(myDate2.toLocaleDateString());

let myDate3 = new Date("03-01-2024");
console.log(myDate3.toLocaleDateString());


let timeStamp = Date.now()  // for quiz and all

console.log(timeStamp);
console.log(myDate3.getTime());  /// for hotel booking etc

console.log(Date.now()); // ms
console.log(Date.now()/1000); // sec
console.log(Math.floor(Date.now()/1000));


let dateNew = new Date()

console.log(dateNew.getMonth()+1);


`${dateNew.getDay()} and time ${dateNew.getTime()}`
console.log(`date is ${dateNew.getDay()} and time is ${dateNew.getTime()}`);


dateNew.toLocaleString('defaut', {
    weekday: "long",
    day: "2-digit",
    // timeZone: ''
})


 console.log(dateNew.toLocaleString('defaut', {
    weekday: "long",
    day: "2-digit",
    // timeZone: ''
}));
 