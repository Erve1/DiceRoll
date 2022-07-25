// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const doubleBtn = document.getElementById("doubleBtn")

function showResetButton() {
    rollBtn.style.display = "none"
    doubleBtn.style.display = "none"
    resetBtn.style.display = "block"
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    if (player1Turn){
        if (player1Score >= 30 && player2Score < (player1Score - 12)) {
                    message.textContent = "Player 1 Won! 🎉"
                    showResetButton();           
        } 
        if (player1Score >=30 && player2Score > (player1Score - 13)) {
                    message.textContent = "Last Chance for Player 2! 😬"
        }}
        
    if (player1Turn === false) {
        if (player1Score >= 30 && player2Score < player1Score) {
            message.textContent = "Player 1 Won! 🎉"
            showResetButton()
        } 
        else if (player1Score >= 30 && player2Score > player1Score) {
            message.textContent = "Player 2 Won! 🎉"
            showResetButton()           
        }  
        else if (player1Score >= 30 && player2Score === player1Score) {
            message.textContent = "It's a Tie! 🎉"
            showResetButton()             
        }
        else if (player2Score >= 30 && player2Score > player1Score){
            message.textContent = "Player 2 Won! 🎉"
            showResetButton()       
        }
        else if (player2Score >= 30 && player2Score < player1Score) {
            message.textContent = "Player 1 Won! 🎉"
            showResetButton()   
        }
    }
        player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    doubleBtn.style.display = "block"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}

//Double or nothing button

doubleBtn.addEventListener("click", function() {
const chance = Math.random()
const receivedPoints = 2 * ( Math.floor(Math.random() * 6) + 1 )

if (chance < 0.5) {
    if (player1Turn) {
        player1Score += receivedPoints
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = receivedPoints
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += receivedPoints
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = receivedPoints
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    if (player1Turn){
        if (player1Score >= 30 && player2Score < 18) {
                    message.textContent = "Player 1 Won! 🎉"
                    showResetButton();           
        } 
        if (player1Score >=30 && player2Score > 17) {
                    message.textContent = "Last Chance for Player 2! 😬"
        }}
        
    if (player1Turn === false) {
        if (player1Score >= 30 && player2Score < player1Score) {
            message.textContent = "Player 1 Won! 🎉"
            showResetButton()
        } 
        else if (player1Score >= 30 && player2Score > player1Score) {
            message.textContent = "Player 2 Won! 🎉"
            showResetButton()           
        }  
        else if (player1Score >= 30 && player2Score === player1Score) {
            message.textContent = "It's a Tie! 🎉"
            showResetButton()             
        }
        else if (player2Score >= 30 && player2Score > player1Score){
            message.textContent = "Player 2 Won! 🎉"
            showResetButton()       
        }
        else if (player2Score >= 30 && player2Score < player1Score) {
            message.textContent = "Player 1 Won! 🎉"
            showResetButton()   
        }
    }
            
} else {
    if (player1Turn) {
        player1Score += 0
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = 0
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Badluck 😭. Player 2 Turn"
    } else {
        player2Score += 0
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = 0
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Badluck 😭. Player 1 Turn"
    }
    if (player1Turn){
        if (player1Score >= 30 && player2Score < 18) {
                    message.textContent = "Player 1 Won! 🎉"
                    showResetButton();           
        } 
        if (player1Score >=30 && player2Score > 17) {
                    message.textContent = "Last Chance for Player 2! 😬"
        }}
        
    if (player1Turn === false) {
        if (player1Score >= 30 && player2Score < player1Score) {
            message.textContent = "Player 1 Won! 🎉"
            showResetButton()
        } 
        else if (player1Score >= 30 && player2Score > player1Score) {
            message.textContent = "Player 2 Won! 🎉"
            showResetButton()           
        }  
        else if (player1Score >= 30 && player2Score === player1Score) {
            message.textContent = "It's a Tie! 🎉"
            showResetButton()             
        }
        else if (player2Score >= 30 && player2Score > player1Score){
            message.textContent = "Player 2 Won! 🎉"
            showResetButton()       
        }
        else if (player2Score >= 30 && player2Score < player1Score) {
            message.textContent = "Player 1 Won! 🎉"
            showResetButton()   
        }
    }
}
    
player1Turn = !player1Turn

})
