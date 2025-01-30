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