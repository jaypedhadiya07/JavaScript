const user = {
    userName: "jay patel",
    price: 333,
    welcome: function () {
        console.log(`${this.userName} , Welcome to Website`);
        console.log(this);

    }
}
user.welcome()
user.userName = "yash"
user.welcome()
console.log(this);



// this keyword is not uses in function or arrow function because =>

// function instagramUser() {
//     const userId = "123abc"
//     const pass = "123"
//     console.log(this); // As per result
//     console.log(this.pass); // undefined
// }
// instagramUser()


// function instagramUser(){
//     const userId = "123abc"
//     const pass = "123"
//     console.log(this); // As per result
//     console.log(this.pass); // undefined
// }
// instagramUser()


// const instagramUser = function(){
//     const userId = "123abc"
//     const pass = "123"
//     console.log(this); // As per result
//     console.log(this.userId); // undefined
// }
// instagramUser()


// const instagramUser = () => {
//     const userId = "123abc"
//     const pass = "123"
//     console.log(this); // {}
//     console.log(this.userId); // undefined
// }
// instagramUser()



// Arrow function four Method

// const arrow1 = (num1, num2) =>{
//     return num1 + num2
// } 

// const arrow1 = (num1, num2) =>  num1 + num2

// const arrow1 = (num1, num2) => ( num1 + num2 )

// const arrow1 = (num1, num2) => ( {UserName: "jay"})

// console.log(arrow1(10, 20)); //{ UserName: 'jay' }