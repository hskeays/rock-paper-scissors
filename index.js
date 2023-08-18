const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

function getPlayerChoice() {
    let input = false;
    // loops until input = true
    while (input == false) {
        const choice = prompt("Rock, Paper, Scissors?");
        if (choice == null) {
            continue;
            // continuesloop
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            input = true;
            return choiceInLower;
        }
    }
}

function checkWinner(compChoice, playerChoice) {
    if (playerChoice === compChoice) {
        return "Tie"
    } 
    else if (
        (playerChoice === "rock" && compChoice === "scissors") ||
        (playerChoice === "paper" && compChoice === "rock") ||
        (playerChoice === "scissors" && compChoice === "paper")
     ){
        return "Player";
     }
     else {
        return "Computer";
    }
}

function playRound(compChoice, playerChoice) {
    const result = checkWinner(compChoice, playerChoice);
    if (result ===  "Tie") {
        return "It's a tie!"
    }
    else if (result === "Player") {
        return `You Win! ${playerChoice} beats ${compChoice}!`
    }
    else {
        return `You Lose! ${compChoice} beats ${playerChoice}!`
    }
}

function game() {
    console.log("Are you ready? Let's play!")
    
    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice();
        const compChoice = getComputerChoice();
        console.log(playRound(compChoice, playerChoice));
    }

    console.log("Game Over!");
}

game()