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