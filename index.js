const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

function getPlayerChoice() {
    let correctInput = false;
    while (correctInput == false) {
        const choice = prompt("Rock, Paper, Scissors?");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            correctInput = true;
            return choiceInLower;

        }
    }
}

function checkWinner(compChoice, playerChoice) {
    if (playerChoice == compChoice) {
        return "Tie";
    }
    else if (
        (playerChoice == "rock" && compChoice == "scissors") ||
        (playerChoice == "paper" && compChoice == "rock") ||
        (playerChoice == "scissors" && compChoice == "paper")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(compChoice, playerChoice) {
    const result = checkWinner(compChoice, playerChoice);
    if (result == "Tie") {
        return "It's a tie!";
    }
    else if (result == "Player") {
        return `You Win! ${playerChoice} beats ${compChoice}!`;
    }
    else {
        return `You Lose! ${compChoice} beats ${playerChoice}!`;
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    console.log("Are you ready? Let's play!");
    for (let i = 0; i < 5; i++) {
        const compChoice = getComputerChoice();
        const playerChoice = getPlayerChoice();
        console.log(playRound(compChoice, playerChoice));
        if (checkWinner(compChoice, playerChoice) == "Player") {
            playerScore++;
        }
        else if (checkWinner(compChoice, playerChoice) == "Computer") {
            compScore++;
        }
    }
  
    console.log(`Player score: ${playerScore} | Computer score: ${compScore}`);
    if (playerScore > compScore) {
        console.log("YOU WIN!");
    }
    else if (playerScore < compScore) {
        console.log("YOU LOSE!");
    }
    else {
        console.log("THE GAME ENDS IN A TIE!");
    }
    console.log("Game over! Thanks for playing!");
}

// game();