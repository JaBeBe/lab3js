window.addEventListener('deviceorientation', DewInfo)

let ball = document.getElementById('ball')

function DewInfo(e) {
    let alpha = event.alpha
    let beta = event.beta
    let gamma = event.gamma
    let marLeft = ball.style.left
    let marTop = ball.style.top

    console.log(alpha, beta, gamma)
    console.log(marLeft, marTop)

    marLeft = gamma + alpha + 20
    marTop = beta + alpha + 20

    ball.style.left = marLeft + 170 + "px"
    ball.style.top = marTop + 170 + "px"
}