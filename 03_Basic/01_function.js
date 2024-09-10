

function sayMyName() {
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName()

// function addTwoNumbers(number1,number2){ //parameter
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,4) // argument

function addTwoNumbers(number1,number2){ //parameter
    
    // let result = number1 + number2
    // console.log("hitesh");
    // return result
    

}

const result = addTwoNumbers(3,4) // argument

// console.log("Result:" ,result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400,2000));

const user = {
    username: "hitesh",
    price: 399
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user);
handleObject({
    username: "hitesh",
    price: 499
})

const myNewArray = [200,400,500,2000]

function returnSecondaryvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondaryvalue(myNewArray));
console.log(returnSecondaryvalue([200,400,500,2000]));



