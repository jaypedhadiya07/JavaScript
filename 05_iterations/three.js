//  for of

const arr1 = [1, 2, 3, 4, 5, 6]
for (const num of arr1) {
    console.log(num)
}

const greeting = "Hello World!"
for (const greet of greeting) {
    console.log(`Each Char is ${greet}`);
}


// MAP

const country = new Map()
country.set("IN", "India")
country.set("USA", "United State Of America")
country.set("FR", "France")
country.set("IN", "India")
for (const [key,value] of country) {
    console.log(`${key}:-${value}`);
}

const myObj = {
    name1: "jay",
    name2: "yash",
    name3: "nevil",
    name4: "raj"
}
// for (const key of myObj) {
//     console.log(key);
// } // give error because is a not iterable

// for in loooop

for (const key in myObj) {
    console.log(myObj[key]);
}


// const arr1 = [1, 2, 3, 4, 5, 6]
// for (const num of arr1) {
//     console.log(num)
// }
for (const key in arr1) {
    // console.log(key); // give index
    console.log(arr1[key]);
}


// const greeting = "Hello World!"
// for (const greet of greeting) {
//     console.log(`Each Char is ${greet}`);
// }
for (const key in greeting) {
    console.log(greeting[key]);
}


// const country = new Map()
// country.set("IN", "India")
// country.set("USA", "United State Of America")
// country.set("FR", "France")
// country.set("IN", "India")
// for (const [key,value] of country) {
//     console.log(`${key}:-${value}`);
// }
for (const key in country) {
    console.log(key); // not a run because map is a iterable
}