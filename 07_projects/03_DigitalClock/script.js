const clock = document.getElementById('clock')

setInterval(function () {
    let data = new Date()
    clock.innerHTML = data.toLocaleTimeString()
}, 1000)