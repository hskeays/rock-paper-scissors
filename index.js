const btns = document.querySelectorAll(".choices");
btns.forEach(btn => btn.addEventListener('click', game));
const roundResult = document.querySelector("#roundResult");
const scoreBoard = document.querySelector("#scoreBoard");
const gameResult = document.querySelector("#gameResult");
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => window.location.reload());
let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

function checkWinner(compChoice, playerChoice) {
    if (playerChoice == compChoice) {
        return "Tie";
    } else if (
        (playerChoice == "rock" && compChoice == "scissors") ||
        (playerChoice == "paper" && compChoice == "rock") ||
        (playerChoice == "scissors" && compChoice == "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(compChoice, playerChoice) {
    const result = checkWinner(compChoice, playerChoice);
    if (result == "Tie") {
        return "It's a tie!";
    } else if (result == "Player") {
        return `You Win! ${playerChoice} beats ${compChoice}!`;
    } else {
        return `You Lose! ${compChoice} beats ${playerChoice}!`;
    }
}

function game(event) {
    const compChoice = getComputerChoice();
    const playerChoice = event.target.id;
    roundResult.textContent = playRound(compChoice, playerChoice);
    if (checkWinner(compChoice, playerChoice) == "Player") {
        playerScore++;
    } else if (checkWinner(compChoice, playerChoice) == "Computer") {
        compScore++;
    }
    scoreBoard.textContent = `Player score: ${playerScore} | Computer score: ${compScore}`;
    if (playerScore >= 5) {
        gameResult.textContent = "YOU WIN THE GAME!";
        btns.forEach(btn => btn.removeEventListener("click", game));
        reset.removeAttribute("style");
    } else if (compScore >= 5) {
        gameResult.textContent = "YOU LOSE THE GAME!";
        btns.forEach(btn => btn.removeEventListener("click", game));
        reset.removeAttribute("style");
    }
}