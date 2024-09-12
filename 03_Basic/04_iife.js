// Immediately invoked function expression (iife)

(function chai(){
    console.log(`db connected`);
    
})();

(() => {
    console.log(`db connected two`);
    
})()