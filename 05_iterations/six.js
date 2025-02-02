//  map 
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNumber = number.map( (value) => {
//     return value + 10
// })
// console.log(newNumber);

// chain of operations 
const newNumber = number.map((value) => value * 10) // 10, 20, 30,...
                        .map((value) => value + 1) // 11, 21, 31,...
                        .filter((value) => value >= 40) // 41, 51, 61,...
console.log(newNumber);                  