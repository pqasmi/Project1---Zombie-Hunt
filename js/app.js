//initialise and declare global scope variables
let gameTimer = 0
let shots = 0
let coins = 0
let gameStarted = false
let successHitZombie = false
let beginGameTimer
let gameStatus
let move1 // declare a setinterval variable for zombie3
let move2 // declare a setinterval variable for zombie2
let move3  // declare a setinterval variable for zombie3
let succesMessageTimer


// Initialise the variables for scoreboard and set values to zero
let coinBoard = document.querySelector("#score")
coinBoard.innerText = `Coins: ${coins}`
let shotsSelector = document.querySelector("#ammo")
shotsSelector.innerText = `Shots: ${shots}`
let timerStart = document.querySelector("#timer")
timerStart.innerText = `Timer: ${gameTimer}`

//Initialise the global scope variables for game controls and assign add event listeners
let reload = document.querySelector("#getAmmo")
reload.addEventListener('click', reloadShots)
let gameStart = document.querySelector("#start")
gameStart.addEventListener('click', game)
let gameReload = document.querySelector("#restart")
gameReload.addEventListener('click', reload1)
gameReload.style.visibility = 'hidden'

let messageWindow = document.querySelector("#messageBoard")


//Event listeners for Zombies and event listeners for a successful hit.
let zombie1 = document.querySelector("#zombie1")
zombie1.style.display = 'none'
zombie1.addEventListener('click', successHit)
let zombie2 = document.querySelector("#zombie2")
zombie2.style.display = 'none'
zombie2.addEventListener('click', successHit)
let zombie3 = document.querySelector("#zombie3")
zombie3.style.display = 'none'
zombie3.addEventListener('click', successHit)
//Event listerner for unsuccessful hit

let emptyShot= document.querySelector("#screen")
emptyShot.addEventListener('click', missedShot)

//Initialise audio variables
let audioShot = new Audio('audio/shot.m4a')
let audioEmptyBarrel = new Audio('audio/emptygun.m4a')
let audioZombie = new Audio('audio/zom.m4a')
let audioThunder = new Audio('audio/thunder.m4a')

//Game Begins
function game () {
    updateMessageBoard ("Game Started!!! SHOOT ZOMBIES") 
    gameStarted = true
    audioThunder.play()
    shots = 10 // initially plater will have 10 shots.
    beginGameTimer = setInterval(beginTimer, 1000)
    setTimeout(moveRight1, 1000)
    setTimeout(moveRight2, 2000)
    setTimeout(moveRight3, 4000)
    gameReload.style.visibility = 'visible'
}

function successHit (e) {
    if (shots > 0 && gameStarted === true) {
    successHitZombie = true
    audioShot.play();
    deadZombie(e)
    if (successHitZombie === true) {updateMessageBoard ("Zombie Dead!!!")}
    succesMessageTimer = setInterval(()=>{successHitZombie = false}
    , 500)
    refreshMessage()
    shots--
    coins++
    // shots--
    coinBoard.innerText = `Coins: ${coins}`
    shotsSelector.innerText = `Shots: ${shots}`
    } else { if(gameStarted === true) {
        updateMessageBoard ("Reload Ammunition!!!")
        audioEmptyBarrel.play()
        console.log("here")
        console.log(gameStarted)}
        
    }
    
}

function deadZombie (e) {
    updateMessageBoard ("Zombie Dead!!")
    let targetZombie = e.target
    targetZombie.style.display = 'none'
    setTimeout(()=> {targetZombie.style.display = 'block'}, 3000)
    }

function missedShot () {
    console.log(gameStarted)
    if (shots >= 1 && gameStarted == true && successHitZombie === false) {    
        updateMessageBoard ("Shot Missed!!")
        refreshMessage()
        audioShot.play();
        shots--
        shotsSelector.innerText = `Shots: ${shots}`
    } else if (shots == 0 && gameStarted == true) {
        updateMessageBoard ("BUY AMMO!!, you have 0 AMMO")
        audioEmptyBarrel.play();
    }
}

function refreshMessage () {
    setTimeout(()=>{
    updateMessageBoard("SHOOT ZOMBIES and SAVE THE PLANET")
    },500)
}

function moveRight1 () {
    if (gameTimer < 30) {
    zombie1.style.display = 'block'
    audioZombie.play()
    let pos1 = 0
    move1 = setInterval(() => {
            zombie1.style.marginRight = pos1 + "px"
            pos1++
            
            if (pos1 > 700) {
                clearInterval(move1)
                zombie1.style.display = 'none'
                moveRightAgain1()
            } else if (gameTimer>30) {
                clearInterval(move1)
            }
        }, 11) 
}}

function moveRightAgain1 () {
    if (gameTimer < 30) {
    moveRight1() } else {
        clearInterval(move1)
    }
}

function moveRight2 () {
    if (gameTimer < 30 ) {
    zombie2.style.display = 'block'
    let pos2 = 0
    move2 = setInterval(() => {
            zombie2.style.marginRight = pos2 + "px"
            pos2++
            if (pos2 > 700) {
                clearInterval(move2)
                zombie2.style.display = 'none'
                moveRightAgain2()
            } else if (gameTimer>30) {
                clearInterval(move2)
            }
        }, 9) 
}}

function moveRightAgain2 () {
    if (gameTimer < 30) {
    moveRight2() } else {
        clearInterval(move2)
    }
}

function moveRight3 () {
    if(gameTimer < 30) {
    zombie3.style.display = 'block'
    let pos3 = 0
    move3 = setInterval(() => {
            zombie3.style.marginRight = pos3 + "px"
            pos3++
            if (pos3 > 700) {
                clearInterval(move3)
                zombie3.style.display = 'none'
                moveRightAgain3()
            } else if (gameTimer>30) {
                clearInterval(move3)
            }
        }, 10) 
}}

function moveRightAgain3 () {
    if (gameTimer < 30) {
    moveRight3() } else {
        clearInterval(move3)
    }
}

function beginTimer () {
    if (gameTimer < 30) {
        gameTimer++
        let timerStart = document.querySelector("#timer")
        timerStart.innerText = `Timer: ${gameTimer}`
        shotsSelector.innerText = `Shots: ${shots}`
    } else {
        clearInterval(gameTimer = 30)
        if (gameTimer == 30 && coins >= 12) {
            gameStatus = "Game WON!!!" 
            restart()
        } else {
            gameStatus = "Game Lost!!!" 
            restart()
        }
    }
}

function updateMessageBoard (message) {
    messageWindow.innerHTML = message 
    messageWindow.style.color = "red"
    messageWindow.style.backgroundColor = "yellow"
    messageWindow.style.paddingTop = "10px"
    messageWindow.style.fontSize = "14px" 
}

function reloadShots () {
    if (gameStarted == true) {
        if (coins >= 2) {
            updateMessageBoard ("AMMO Reloaded, GO SHOOT ZOMBIES!!")
            audioEmptyBarrel.play()
            shots = shots + 6
            coins = coins - 2
            shotsSelector.innerText = `Shots: ${shots}`
            coinBoard.innerText = `Coins: ${coins}`
        } else {
            updateMessageBoard("YOU DONT HAVE ENOUGH COINS TO BUY AMMO, Go SHOOT ZOMBIES")
            audioEmptyBarrel.play()
        }
    } else {
        messageWindow.innerHTML = "<br>Game Not started, <br><br>Press 'Start' button to PLAY"
        messageWindow.style.backgroundColor = "yellow"
        messageWindow.style.color = 'red'
        messageWindow.style.marginTop = "12px"
        setInterval(()=> {
            reload1()}, 2000)
    }}


function restart () {
    clearInterval(beginGameTimer)
    clearInterval(succesMessageTimer)
    updateMessageBoard(gameStatus)
    gameStarted = false
    row1.innerHTML = 'none'
    row2.innerHTML = 'none'
    row3.innerHTML = 'none'
    audioZombie.pause()
    clearInterval(move1)
    clearInterval(move2)
    clearInterval(move3)
    resetScore()
}

function resetScore () {
    gameTimer = 30
    coinBoard.innerText = `Coins: ${coins}`
    setTimeout(()=> {
    messageWindow.innerHTML = "Press Re-Start to Play Again"
    messageWindow.style.color = 'yellow'
    messageWindow.style.backgroundColor = 'orange'
    gameReload.style.backgroundColor = "yellow"
    gameReload.style.color = "red"
    }, 6000)
    shotsSelector.innerText = `Shots: ${shots}`
    timerStart.innerText = `Timer: ${gameTimer}`
}

function reload1 () {
    location.reload();
}


    class Game {
constructor (name, ) {
    this.name = name
}
}



