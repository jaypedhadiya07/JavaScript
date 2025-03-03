const promiseOne = new Promise(function (resolve, reject) {
    // DO an async task
    // DB call, cryptography, network
    setTimeout(() => {
        console.log("task compelete");
        resolve()
    }, 1000);
})
promiseOne.then(() => {
    console.log("ok");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("task 2 compeleted");
        resolve()
    }, 1000);

}).then(() => {
    console.log("2 ok");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ user: "jay", Email: "jay@ec.com" })
    }, 1000);
})
promiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    let error = false

    setTimeout(() => {
        if (!error) {
            resolve({ user: "yash" })
        } else {
            reject("ERROR: Something Went Wrong")
        }
    }, 500);
})
promiseFour.then((user) => {
    console.log(user);
    return user.user
}).then((user) => {
    console.log(user);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Work is Done");
})

const promiseFive = new Promise((resolve, reject) => {
    let error = true

    setTimeout(() => {
        if (!error) {
            resolve({ user: "JS" })
        } else {
            reject("ERROR: JS Went Wrong")
        }
    }, 2000);
})
async function testPromiseFive() {
    try {
        const five = await promiseFive
        console.log(five);
    } catch (error) {
        console.log(error);
    }
}
testPromiseFive()

// async function promiseSix() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await res.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// promiseSix()


// BEST METHOD 

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })