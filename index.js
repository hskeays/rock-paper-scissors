// Generates random string choice
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}


// Creates window prompt for user input
const userInput = window.prompt("Rock, Paper, or Scissors! :")

if (userInput.toLowerCase() === "rock" || "paper" || "scissors") {
    console.log(playRound(getComputerChoice(), userInput.toLowerCase()));
}

function playRound(compChoice, playerChoice) {
    if (playerChoice.toLowerCase() === "rock" && compChoice === "scissors") {
        return "You Win! Rock beats scissors";
    } else if (playerChoice.toLowerCase() === "rock" && compChoice === "paper") {
        return "You Lose! Paper beats rock";
    } else if (playerChoice.toLowerCase() === "paper" && compChoice === "rock") {
        return "You Win! Paper beats rock";
    } else if (playerChoice.toLowerCase() === "paper" && compChoice === "scissors") {
        return "You Lose! Scissors beats paper";
    } else if (playerChoice.toLowerCase() === "scissors" && compChoice === "paper") {
        return "You Win! Scissors beats paper";
    } else if (playerChoice.toLowerCase() === "scissors" && compChoice === "rock") {
        return "You Lose! Rock beats Scissors";
    } else {
        return playRound(getComputerChoice(), userInput.toLowerCase());
    }
}

// in progress

// function game() {
//     console.log(playRound(getComputerChoice(), userInput.toLowerCase()));
//     console.log(playRound(getComputerChoice(), userInput.toLowerCase()));
//     console.log(playRound(getComputerChoice(), userInput.toLowerCase()));
//     console.log(playRound(getComputerChoice(), userInput.toLowerCase()));
//     console.log(playRound(getComputerChoice(), userInput.toLowerCase()));
// }