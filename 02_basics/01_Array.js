const array1 = [0, 1, 2, 3, 4, 5, 6]
const array2 = ["saktiman", "nagaraj"]
const array3 = new Array(1, 2, 3, 4)
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array3[2]);

// Array Method

array1.push(7)
array1.push(8)
array1.pop()
array1.unshift(9)
array1.shift()
console.log(array1);
console.log(array1.includes(7));
console.log(array1.indexOf(2));

let newArray = array1.join()
console.log(newArray);
console.log(typeof newArray);

// slice splice

let anotherArray = [0, 1, 2, 3, 4, 5]
console.log(anotherArray.slice(1, 3)); // [ 1, 2 ]
console.log(anotherArray); // [0, 1, 2, 3, 4, 5]
console.log(anotherArray.splice(1, 3)) // [ 1, 2, 3 ]
console.log(anotherArray); // changes in array => [ 0, 4, 5 ]


