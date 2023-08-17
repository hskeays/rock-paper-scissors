function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}

function play(compChoice, playerChoice) {

    if (playerChoice.toLowerCase() === "rock" && getComputerChoice() === "scissors") {
        return "You Win! Rock beats scissors";
    } else if (playerChoice.toLowerCase() === "rock" && getComputerChoice() === "paper") {
        return "You Lose! Paper beats rock";
    } else if (playerChoice.toLowerCase() === "paper" && getComputerChoice() === "rock") {
        return "You Win! Paper beats rock";
    } else if (playerChoice.toLowerCase() === "paper" && getComputerChoice() === "scissors") {
        return "You Lose! Scissors beats paper";
    } else if (playerChoice.toLowerCase() === "scissors" && getComputerChoice() === "paper") {
        return "You Win! Scissors beats paper";
    } else if (playerChoice.toLowerCase() === "scissors" && getComputerChoice() === "rock") {
        return "You Lose! Rock beats Scissors";
    } else {
        return "Same choice! Try Again!";
    }
}

function game() {

}