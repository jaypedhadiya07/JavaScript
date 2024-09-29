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


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive)it's provide copd , Heap (Non - Primitive) it's provide references

/* let Name = "jay"

let SecondName = Name
SecondName = "patel"

console.log(SecondName);
console.log(Name); */

/* let UserOne = {
    Email : "jay@gmail.com",
    Upi : "51@boi.in"
} 

UserTow = UserOne
UserTow.Email = "patel's.com"
console.log(UserOne.Email);
console.log(UserTow.Email); */