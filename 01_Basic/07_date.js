let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2023 , 0 , 23 , 5 , 3)
// console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time` 

newDate.toLocaleString('default',{
    weekday: "long",
    dayPeriod: "narrow"
})





