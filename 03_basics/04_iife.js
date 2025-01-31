// Immediately Invoked Function Expressions (IIFE)

(function iifeuses(){
    //with function name
    console.log(`DATABASE CONNECTED`);
})(); // ; is compulsory in iife

(() => {
    //without function name
    console.log(`DATABASE CONNECTED`);
})(); // ; is compulsory in iife

((name) => {
    //without function name
    console.log(`${name} YOUR DATABASE IS CONNECTED`);
})("jay"); // ; is compulsory in iife // argument and parameter pass in function