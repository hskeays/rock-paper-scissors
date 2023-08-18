// Creates array with valid choices
const options = ["rock", "paper", "scissors"];

// Creates function to create a random choice for computer
function getComputerChoice() {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

// Creates function to get player choice, asks with prompt
// Creates loop that repeats prompt if user input != array choice
function getPlayerChoice() {
    let correctInput = false;
    while (correctInput == false) {
        // Saves prompt input to CHOICE variable
        const choice = prompt("Rock, Paper, Scissors?");
        // Continues loop if choice is null
        if (choice == null) {
            continue;
        }
        //changes prompt input to lowercase, saved in new variable
        const choiceInLower = choice.toLowerCase();
        // Stops prompt loop if prompt input is == array choice
        // Returns prompt input in lowercase
        if (options.includes(choiceInLower)) {
            input = true;
            return choiceInLower;

        }
    }
}

// Creates function to check for a winner
// Returns the winner name, or tie
function checkWinner(compChoice, playerChoice) {
    if (playerChoice == compChoice) {
        return "Tie"
    }
    else if (
        (playerChoice == "rock" && compChoice === "scissors") ||
        (playerChoice == "paper" && compChoice === "rock") ||
        (playerChoice == "scissors" && compChoice === "paper")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}

// Creates function that plays a single round
// Saves checkWinner() result in RESULT
// Returns messages of results
function playRound(compChoice, playerChoice) {
    const result = checkWinner(compChoice, playerChoice);
    if (result == "Tie") {
        return "It's a tie!"
    }
    else if (result == "Player") {
        return `You Win! ${playerChoice} beats ${compChoice}!`
    }
    else {
        return `You Lose! ${compChoice} beats ${playerChoice}!`
    }
}

// Creates function to play 5 rounds
function game() {
    console.log("Are you ready? Let's play!")

    // Creates loop to replay round 5 times
    // Logs results from playRound() function
    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice();
        const compChoice = getComputerChoice();
        console.log(playRound(compChoice, playerChoice));
    }

    console.log("Game Over!");
}

// game()