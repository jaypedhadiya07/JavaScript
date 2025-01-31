let a = 10
var b = 20
const c = 30
if (true) {
    a = 20 // let a = 20 not possible // reassign 
    b = 40 // var b = 40 & b = 40 is possible // redeclare and reassign 
    // c = 60 // const cannot update
}
console.log(a);
console.log(b);
console.log(c);

function one(){
    const UserName = "jay"
    function two(){
        const Website = "youtube"
        console.log(UserName);
    }
    // console.log(Website); // Error
    two()
}
one()


if(true){
    const UserName = "yash"
    if(UserName === "yash"){
        const Website = " youtuber"
        console.log(UserName + Website);
    }
    // console.log(Website); // Error
}
// console.log(UserName); // Error


// ++++++++++++++++++ important ++++++++++++++++++++

console.log(addOneValue(10)); // 11 it's allow
function addOneValue(num){
    return num + 1
}
// console.log(addOneValue(10)); // 11 it's allow



// console.log(addTwoValue(10)); // Error and it's not allow
const addTwoValue = function (num){
    return num + 2
}
// console.log(addTwoValue(10)); // 12 it's allow