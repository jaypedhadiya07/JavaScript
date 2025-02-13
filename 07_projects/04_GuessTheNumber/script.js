let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const userInput = document.getElementById('guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const StartOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let PlayGame = true


if (PlayGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enater A Valid Number')
    } else if (guess < 1) {
        alert('Please Enater A Number More Than 1')
    } else if (guess > 100) {
        alert('Please Enater A Number Less Than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayguess(guess)
            displayMessage(`Game Over. Random number is ${randomNumber}`)
            endGame()
        } else {
            displayguess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You Guessed It Right')
        endGame()
    } else if (guess > randomNumber) {
        displayMessage('Number is Tooo high')
    } else if (guess < randomNumber) {
        displayMessage('Number is Tooo low')
    }
}
function displayguess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start NewGame</h2>`
    StartOver.appendChild(p)
    PlayGame = false
    newGame()
}
function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        lowOrHi.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        StartOver.removeChild(p)
        PlayGame = true
    })
}