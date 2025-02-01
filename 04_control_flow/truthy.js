const userEmail = {}

if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Don't have user Email");
}

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// true, "0", "false", {}, [], function(){}, " "

const emptyarr = []
if (emptyarr.length === 0) {
    console.log("Array is empty");
}
const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Opertor (??): null , undefined

// let a;
// a = 10 ?? 12 // 10
// a = null ?? 10 // 10
// a = undefined ?? 10 // 10
// a = null ?? 10 ?? 12 // 10 
// console.log(a);



// ternary operator
// condition ? true : false;
const tern = 20  
tern > 10 ? console.log("true") : console.log("false");