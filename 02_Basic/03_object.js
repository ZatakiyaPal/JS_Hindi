// singleton
// object.create in this singleton is use

// object literals
const mySym = Symbol("key1")

const JsUser = {
    "name": "hitesh" ,
    "age": 18,
    "mySym" : "mykey1",
    "location": "jaipur",
    "email": "palzat@gmail.com",
    "isloggedIn": false,
    "lastLoginDays": ["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.mySym);

JsUser.email = "pal123@yahoo.com"
Object.freeze(JsUser)
JsUser.email = "pal123@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");   
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);   
}

console.log(JsUser.greeting);
