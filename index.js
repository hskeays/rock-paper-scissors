function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}

function play(compChoice, playerChoice) {

    if (playerChoice === "Rock" && getComputerChoice() === "Scissors") {
        return "You Win! Rock beats scissors";
    } else if (playerChoice === "Rock" && getComputerChoice() === "Paper") {
        return "You Lose! Paper beats rock";
    } else if (playerChoice === "Paper" && getComputerChoice() === "Rock") {
        return "You Win! Paper beats rock";
    } else if (playerChoice === "Paper" && getComputerChoice() === "Scissors") {
        return "You Lose! Scissors beats paper";
    } else if (playerChoice === "Scissors" && getComputerChoice() === "Paper") {
        return "You Win! Scissors beats paper";
    } else if (playerChoice === "Scissors" && getComputerChoice() === "Rock") {
        return "You Lose! Rock beats Scissors";
    } else {
        return "Same choice! Try Again!";
    }
}