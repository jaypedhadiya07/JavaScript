const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let colorCode = "#"
    for (let i = 0; i < 6; i++) {
        colorCode += hex[Math.floor(Math.random() * 16)]
    }
    return colorCode
}
console.log(randomColor());
let changeID;
const startBtn = document.querySelector('#start')
const stoptBtn = document.querySelector('#stop')

const startColorChanging = () => {
    function chengeColor() {
        document.body.style.backgroundColor = randomColor()
    }
    if (!changeID) {
        changeID = setInterval(chengeColor, 1000);
    }
}
const stopColorChanging = () => {
    clearInterval(changeID)
    changeID = null

}
startBtn.addEventListener('click', startColorChanging)
stoptBtn.addEventListener('click', stopColorChanging)