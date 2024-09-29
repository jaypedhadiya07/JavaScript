let value = 123
console.log(value);

let valueTow = new Number(123)
console.log(valueTow);

let balance = new Number(123.8925)
console.log(balance.toString().length);

console.log(balance.toFixed(2));

console.log(balance.toPrecision(3));

let hundreds = 10000000000
console.log(hundreds.toLocaleString('en-IN')); //Indian Value 

// ++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4)); // only - to + not + to -
console.log(Math.round(45.83));
console.log(Math.ceil(45.19));
console.log(Math.floor(45.89));
console.log(Math.min(2 , 7 , 9 , 10 , 78));
console.log(Math.max(2 , 7 , 9 , 10 , 78));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

let min = 10 
let max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 