const temp = 39
if (temp >= 40) {
    console.log("Temperature Is High");
} else {
    console.log("Temperature Is low");
}
// ==, ===, <, >, <=, >=, !=, !==

const balance = 1000
// if(balance<1200) console.log("balance is less then 1200"); // this method is not usefull

if (balance <= 500) {
    console.log("balance is less then 500");
} else if (balance <= 750) {
    console.log("balance is less then 750");
} else if (balance <= 900) {
    console.log("balance is less then 900");
} else {
    console.log("balance is less then 1200");
}


const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard) {
    console.log("continue your shopping");
}

const googleEmail = true
const appleEmail = true
if (appleEmail || googleEmail) {
    console.log("continue your shopping");
}