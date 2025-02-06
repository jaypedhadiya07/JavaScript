const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((buttons) => {
    console.log(buttons);
    buttons.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = "grey"
        }
        else if (e.target.id === 'white') {
            body.style.backgroundColor = "white"
        }
        else if (e.target.id === 'blue') {
            body.style.backgroundColor = "blue"
        }
        else if (e.target.id === 'yellow') {
            body.style.backgroundColor = "yellow"
        }
    })
})