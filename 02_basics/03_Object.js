// Singleton
// Object.create

// object literals

const MySym = Symbol("Key1")
const JsUser = {
    Name: "jay",
    Age: 19,
    "full name": "jay pedhadiya",
    [MySym]: "MyKey1",
    Location: "Rajkot",
    Email: "jay123@gmil.com",
    isLoggedIn: false,
    LastLogginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.Email);
// console.log(JsUser["full name"]); //  this mathod is usefull
// console.log(JsUser["Email"]); //  this mathod is usefull
// console.log(JsUser[MySym]) 
// JsUser.Email = "jay123google.com"
// console.log(JsUser.Email);
// Object.freeze(JsUser)
// JsUser.Email = "jay123apple.com"
// console.log(JsUser);

JsUser.Greeting = function name() {
    console.log("Hello");
}
console.log(JsUser.Greeting());

JsUser.GreetingTwo = function name() {
    console.log(`Hello ${this.Name}`);
}
console.log(JsUser.GreetingTwo());