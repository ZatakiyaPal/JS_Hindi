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
    console.log("hello world");
    
}