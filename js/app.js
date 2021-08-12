//initialise and declare global scope variables
let gameTimer = 0
let shots = 0
let coins = 0

// scoreboard values set to zero

let coinBoard = document.querySelector("#score")
coinBoard.innerText = `Coins: ${0}`
let shotsSelector = document.querySelector("#ammo")
shotsSelector.innerText = `Shots: ${shots}`
let timerStart = document.querySelector("#timer")
timerStart.innerText = `Timer: ${gameTimer}`

//EventListeners for clicks
let reload = document.querySelector("#getAmmo")
reload.addEventListener('click', reloadShots)

let gameStart = document.querySelector("#start")
gameStart.addEventListener('click', game)

let gameReload = document.querySelector("#restart")
gameReload.addEventListener('click', restart)

//Event listeners for Zombies

let zombie1 = document.querySelector("#zombie1")
zombie1.addEventListener('click', successHit)

let zombie2 = document.querySelector("#zombie2")
zombie2.addEventListener('click', successHit)

let zombie3 = document.querySelector("#zombie3")
zombie3.addEventListener('click', successHit)

function game () {
    console.log("game on")
    setInterval(beginTimer, 1000)
    shots = 5
}

function beginTimer () {
    if (gameTimer < 30) {
        console.log(gameTimer)
        gameTimer++
        let timerStart = document.querySelector("#timer")
        timerStart.innerText = `Timer: ${gameTimer}`
        let shotsSelector = document.querySelector("#ammo")
        shotsSelector.innerText = `Shots: ${shots}`
        zombieShow()
    } else {
        clearInterval(gameTimer = 30)
        if (timer = 30 && coins >= 15) {
            alert("user won!!") 
            alert = function() {};
        } else {
            alert ("user lost!!")
            alert = function() {};
        }
    }

}

// function zombieShow () {
//     zombie1.innerHTML = src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHj-FTZUT1nt7qVtvkyY9VsCgDnFplqex3g&usqp=CAU"
// }

function reloadShots () {
    if (coins >= 3) {
    shots = shots + 5
    coins = coins - 3
    let shotsSelector = document.querySelector("#ammo")
    shotsSelector.innerText = `Shots: ${shots}`
    let coinBoard = document.querySelector("#score")
    coinBoard.innerText = `Coins: ${coins}`
    }

}

function restart () {
    location.reload();
}

function successHit () {
    if (shots > 0) {
    deadZombie()
    coins++
    shots--
    let coinBoard = document.querySelector("#score")
    coinBoard.innerText = `Coins: ${coins}`
    let shotsSelector = document.querySelector("#ammo")
    shotsSelector.innerText = `Shots: ${shots}`
    }

}

function deadZombie () {
    console.log("remove image")
    let row1 = document.querySelector("#row1")
    row1.removeChild(row1.childNodes[1])
}

class Game {
constructor (name, ) {
    this.name = name
}


}

let player = new Game


