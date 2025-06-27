const user = {
    username: "jay",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log(this);
    }
}

// console.log(user.getUserDetails()); 
/* {
  username: 'jay',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
} */
// console.log(this); //creat a new empty {}

function User(username, loginCount, signedIn) {
    this.username = username,
        this.loginCount = loginCount,
        this.signedIn = signedIn

    this.greeting = function () {
        console.log("hii welcome ti this jay world");
    }
    // return this // after this second method this keyword is optionnal
}

/* const userOne = User("jay",8,true)
const userTwo = User("yash",12,false)
console.log(userOne);
console.log(userTwo); */ // userOne's value is overhide by userTwo's value 


const userOne = new User("jay", 8, true) // like this way is right and not any value overhide and create are new two object 
const userTwo = new User("yash", 12, false)
console.log(userOne);
// console.log(userTwo.username); // yash
console.log(userTwo.constructor);



// JavaScript examples of object creation with this behavior: object literals vs constructor functions with new.

// Show difference between object literals and constructor functions using this and new