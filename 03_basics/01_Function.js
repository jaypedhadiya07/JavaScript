function SayName() {
    console.log("j");
    console.log("a");
    console.log("y");
}
SayName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumber(10,20) // 30
// console.log("result",result); //result undefined


function addTwoNumber(number1, number2) {
    return number1 + number2
}
// console.log(addTwoNumber(10, null));  // console.log use

const result = addTwoNumber(10,20) 
console.log("result",result); //result 30

function loginUserMessage(username = "jay"){ // default value = "jay"
    // if(username === undefined){
    //     console.log("Please Enter Your Name");
    // }
    if(!username){
        console.log("Please Enter Your Name");
    }
    return `${username} Just Logged In!`

}
console.log(loginUserMessage()); //undefined Just Logged In!
console.log(loginUserMessage("jay")); //jay Just Logged In!


const user = {
    itemName: "Book",
    Price: 190
}
function HandleObject(anyObject) {
    console.log(`item name is ${anyObject.itemName} and his price is ${anyObject.Price}`);
}
// HandleObject(user) //item name is Book and his price is 190
HandleObject({
    itemName: "book",
    Price: 2000
})

// Array

// const prices = [100, 200, 300, 400]
// function priceSecondValue(secondprice){
//     console.log(`Seconprice is ${secondprice[1]}`);
// }
// priceSecondValue(prices) // 200
// priceSecondValue([100,1000,2000,3000]) // 1000

//Aarry All value Print
const prices = [100, 200, 300, 400]

function allPriceAllValue(...allvalue){
    return allvalue;
}
console.log(allPriceAllValue(10,20,30));