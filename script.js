//Player Name
let playerName = prompt('Welcome to Death House. What name shall we put on your tombstone?')

//Start of the Game
const startGame = () => {
    let houseChoice = prompt(`Welcome, ${playerName}. You have entered an old creepy house. You can either go upstairs (U), continue down the hallway (H) or go into the basement (B). Which do you choose (U, H, or B)?`)
    if (houseChoice.toUpperCase() == 'U') {
        upstairs()
    } else if (houseChoice.toUpperCase() == 'H') {
        hallway()
    } else if (houseChoice.toUpperCase() == 'B') {
        basement()
    } else {
        startGame()
    }
}
//Upstairs Scenario
const upstairs = () => {
    let upstairsChoice = prompt(`You are at the top of the stairs. Do you go right or left? R or L.`)
    if (upstairsChoice.toLocaleUpperCase() == 'R') {
        upstairsR()
    } else if (upstairsChoice.toUpperCase() == 'L') {
        upstairsL()
    } else {
        upstairs()
    }
} 
//Upstairs Right    
const upstairsR = () => {
    let upstairDoors = prompt (`${playerName}, you are facing three doors. Do you choose door number 1, 2, or 3?`) 
    switch (parseInt(upstairDoors)) {
        case 1:
            alert (`${playerName}, you find a pot of gold! Enjoy the high life!`)
            playAgain()
            break
        case 2:
            alert (`${playerName}, you stumble into a hole, plummeting to your death.`)
            playAgain()
            break
        case 3:
            alert (`${playerName}, you are transported to the Price is Right where you win the Showcase Showdown!`)
            playAgain()
            break
        default:
            upstairsR()
    }
}

//Upstairs Left
const upstairsL = () => {
    let upstairAxe = prompt (`${playerName}, you see a fire axe hanging on the wall. Do you pick it up? Y or N.`)
    switch (upstairAxe.toUpperCase()) {
        case 'Y':
            alert(`As you slowly turn, Smokey the Bear appears and whispers to you: Only you, ${playerName}, can prevent forest fires.`)
            playAgain()
            break
        case 'N':
            alert(`You are attacked by a crazed pharmaceutical salesman. Unfortunatley, ${playerName}, all hope of surviving ends.`)
            playAgain()
            break
        default:
        upstairsL()
    }
}
//Hallway Scenario
const hallway = () => {
    let hallwayChoice = prompt (`You slowly walk down the dark dank hallway. At the end, you can either enter the kitchen or dining room. Which do you choose - K or D?`) 
    if (hallwayChoice.toUpperCase() == 'K') {
        hallwayK()
    } else if (hallwayChoice.toUpperCase() == 'D') {
        hallwayD()
    } else {
        hallway()
    }
}
//Hallway Kitchen
const hallwayK = () => {
    let kitchen = prompt(`${playerName}, you notice a large cleaver on the counter. Do you pick it up? Y or N. `)
    if (kitchen.toUpperCase() == 'Y') {
        cleaverYes()
    } else if (kitchen.toUpperCase() == 'N') {
        cleaverNo()
    } else {
        hallwayK()
    }
}

const cleaverYes = () => {
    alert (`Suddenly, a sadistic clown comes from behind you. Startled, you quickly react by killing him with the cleaver. ${playerName}, you live to see another day.`)
    playAgain()
}

const cleaverNo = () => {
    alert(`You are attcked by a sadistic clown. Sadly, ${playerName}, you are dead!`)
    playAgain()
}

//Hallway Dinning Room
const hallwayD = () => {
    let dinningRoom = prompt(`You notice a delicious looking plate of food on the table. ${playerName}, do you partake? Y or N.`)
    switch (dinningRoom.toUpperCase()) {
        case 'Y':
            alert(`${playerName}, the food is poisionous! You have an angonizing death.`)
            playAgain()
            break
        case 'N':
            alert(`${playerName}, you are too smart for this cursed house. Good choice. You just avoided dying from poision.`)
            playAgain()
            break
        default:
            hallwayD()
    }
}
//Basement Scenario
const basement = () => {
    let basementChoice = prompt(`You make your way down creaky stairs. You see light coming from behind a door. Do you open the door or choose to run back the way you came? Open or Run.`)
    switch (basementChoice.toString()) {
        case 'Open':
            alert(`${playerName}, you are greeted by aliens. They beam you aboard their ship where you are studied and quickly rejected.`)
            playAgain()
            break
        case 'Run':
            alert(`${playerName}, as you head back up the stairs, something grabs your ankle dragging you back down to your death.`)
            playAgain()
            break
        default:
            basement()
    }
}

//Play Again
const playAgain = () => {
    if(confirm(`Play again, ${playerName}?`) == true) {
        startGame()
    } else {
        alert(`Thanks for playing, ${playerName}`)
    }
}
startGame()

