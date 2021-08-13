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
zombie1.style.display = 'none'
zombie1.addEventListener('click', successHit)

let zombie2 = document.querySelector("#zombie2")
zombie2.style.display = 'none'
zombie2.addEventListener('click', successHit)

let zombie3 = document.querySelector("#zombie3")
zombie3.style.display = 'none'
zombie3.addEventListener('click', successHit)

//Game Begins
function game () {
    setInterval(beginTimer, 200)
    shots = 5
    moveRight1()
    moveRight2()
    moveRight3()
}

function moveRight1 () {
    zombie1.style.display = 'block'
    let pos1 = 0
    let move1 = setInterval(() => {
            zombie1.style.marginRight = pos1 + "px"
            pos1++
            if (pos1 > 700) {
                clearInterval(move1)
                zombie1.style.display = 'none'
                moveRightAgain1()
            } else if (gameTimer>30) {
                clearInterval(move1)
            }
        }, 6) 
    }

function moveRightAgain1 () {
    if (gameTimer < 30) {
    moveRight1() } else {
        clearInterval(move1)
    }
}

function moveRight2 () {
    zombie2.style.display = 'block'
    let pos2 = 0
    let move2 = setInterval(() => {
            zombie2.style.marginRight = pos2 + "px"
            pos2++
            if (pos2 > 700) {
                clearInterval(move2)
                zombie2.style.display = 'none'
                moveRightAgain2()
            } else if (gameTimer>30) {
                clearInterval(move2)
            }
        }, 4) 
    }

function moveRightAgain2 () {
    if (gameTimer < 30) {
    moveRight2() } else {
        clearInterval(move2)
    }
}

function moveRight3 () {
    zombie3.style.display = 'block'
    let pos3 = 0
    let move3 = setInterval(() => {
            zombie3.style.marginRight = pos3 + "px"
            pos3++
            if (pos3 > 700) {
                clearInterval(move3)
                zombie3.style.display = 'none'
                moveRightAgain3()
            } else if (gameTimer>30) {
                clearInterval(move3)
            }
        }, 8) 
    }

function moveRightAgain3 () {
    if (gameTimer < 30) {
    moveRight3() } else {
        clearInterval(move3)
    }
}


// function helloMessage () {
//     let helloUser = document.querySelector("#messageBoard")
//     helloUser.innerText = "Hello User, Game Started, Hunt Zomombies !!"
//     helloUser.style.color = "yellow"
//     helloUser.style.textAlign = "center"
//     helloUser.style.fontSize = "20px"
//     // helloUser.style.font = "Press Start 2P"

// }
function beginTimer () {
    if (gameTimer < 30) {
        gameTimer++
        let timerStart = document.querySelector("#timer")
        timerStart.innerText = `Timer: ${gameTimer}`
        let shotsSelector = document.querySelector("#ammo")
        shotsSelector.innerText = `Shots: ${shots}`
        // zombieShow()
        // helloMessage()
    } else {
        clearInterval(gameTimer = 30)
        if (gameTimer = 30 && coins >= 15) {
            alert("user won!!") 
            alert = function() {}
            restart()
        } else {
            alert ("user lost!!")
            alert = function() {}
            restart();
        }
    }

}

function reloadShots () {
    if (coins >= 3) {
    shots = shots + 5
    coins = coins - 3
    shotsSelector.innerText = `Shots: ${shots}`
    coinBoard.innerText = `Coins: ${coins}`
    }

}

function restart () {
    location.reload();
}

function successHit (e) {
    if (shots > 0) {
    deadZombie(e)
    coins++
    shots--
    coinBoard.innerText = `Coins: ${coins}`
    shotsSelector.innerText = `Shots: ${shots}`
    }

}

function deadZombie (e) {
    console.log("remove image")
    console.log(e.target)
    let targetZombie = e.target
    targetZombie.style.display = 'none'
    setTimeout(()=> {targetZombie.style.display = 'block'}, 3000)
}

class Game {
constructor (name, ) {
    this.name = name
}


}

let player = new Game


