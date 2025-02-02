//  reduce method

const myArray = [1, 2, 3]

const Total = myArray.reduce(function (acc, curr) {
    console.log(`acc is ${acc} and cueeval is ${curr}`);
    return acc + curr
}, 0)
console.log(Total);

// reduce in arrow function

// const Total = myArray.reduce( (acc,curr) => (acc+curr),2)
// console.log(Total);


const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "java course",
        price: 999
    },
]

const totalPrice = shoppingCart.reduce( (acc , itemName) => (acc+itemName.price),0)
console.log(totalPrice);