// # primitive

// 7 types : string , number , boolean , null , undefined , symbol , bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const Bignumber = 4634364634n

// reference (non primitive)

// array , object , functions

const heros = ["shaktiman" , "naagraj" , "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
// console.log("hello world");
    
}

/* --------------------------- */

// stack(primitive) , heap(non primitive)

let myYoutubename = "palzatakiyadotcom"

let anothername = myYoutubename
anothername = "workwithme"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    Email: "nibhuzatakiya@gmail.com",
    upi: "nibhu@ypl"
}

let userTwo = userOne

userTwo.Email = "kishorzatakiya@gmail.com"

console.log(userOne.Email);
console.log(userTwo.Email);


