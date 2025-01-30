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