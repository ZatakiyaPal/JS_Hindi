const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "samm"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: "hitesh",
//         lastname: "chodhary"
//     }
// }

// console.log(regularUser.fullname);

// const obj1 = {1: "a" , 2: "b"}
// const obj2 = {3: "a" , 4: "b"}
// const obj4 = {5: "a" , 6: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = object.assign({}.obj1,onj2,obj4)
// const obj3 = {...obj1 , ...obj2 , ...obj4}
// console.log(obj3);

// const user = [
//     {
//         id : 1,
//         email : "h@gmail.com"
//     },
//     {
//         id : 1,
//         email : "h@gmail.com"
//     },
//     {

//     },
//     {
        
//     },
//     {

//     },
//     {

//     }

// ]


// console.log(tinderUser);

//console.log(Object.keys(tinderUser));

const course = {
    coursename : "js in hindi",
    courseInstructor : "hitesh",
    price : "999",
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

