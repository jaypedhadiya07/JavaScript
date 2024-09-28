// Primitive
/* 7 Types : Boolean,undefined,null,Number,Symbol,BigInt,String*/

const Bool = true; //==> boolean
let undefined; //==> undefined
const Temp = null; //==>object
const Number = 123; //==>number
const Ex1 = Symbol(123); //==>symbol
const Ex2 = Symbol(123); //==>symbol
console.log(Ex1 == Ex2); //==>symbol
const BigNumber = 1238465n //==>bigint
const name = "jay" //==>string


// reference (Non - Primitive)
/* Array,Object,Function */

let Hreoes = ["saktiman", "nagraj", "doga"]
console.log(Hreoes); //==>object

let obj = {
    name: "jay",
    age: 19
}
console.log(obj); //==>object

function printName(name) {
    console.log("Hello, " + name + "! Nice to meet you.");
}
printName("jay") //==>function

console.log(typeof printName);