// var c = 300  // global scope
let a = 300

if (true) {     // local scope
    let a = 10
    const b = 20
    var c = 30
    console.log("inner",a);
    
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

console.log(a);
// console.log(b);
// console.log(c);


