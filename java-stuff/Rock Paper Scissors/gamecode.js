/* generate a random choice for the computer 
using math.random */
/* get a choice from the player using prompt */
/* compare the choices and determine a winner */
/* display a win/ lose message */
/* add 1 to the wincount of the winner */
/* run another round */
/* when someone gets to 5 points display a 
total win/ lose message */
/* restart the game with a user prompt */
let randomNumber;
let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

console.log("Welcome to Rock Paper Scissors!");

function chooseRandom() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
} /* This function outputs a randomly chosen option out of the three */

function getPlayerChoice() {
    playerChoice = prompt("Choose your weapon -->").toLowerCase();
    while (playerChoice !== "rock" || playerChoice !== "paper" || playerChoice !== "scissors") {
        playerChoice = prompt("Invalid option. Please try again!").toLowerCase();
    }
    
}

function showScore() {
    console.log(" ");
    console.log("Scoreboard:");
    console.log("Player: " + playerScore + " | Computer: " + computerScore);
    console.log(" ");
}

function showChoices() {
    console.log(playerChoice + " VS " + computerChoice);
    console.log(" ");
}

function compareChoices() {
    if (computerChoice === playerChoice) {
        showChoices();
        console.log("It's a tie!");
        showScore();
    } else if (computerChoice === "rock" && playerChoice === "scissors" , 
    computerChoice === "paper" && playerChoice === "rock" , 
    computerChoice === "scissors" && playerChoice === "paper") {
        showChoices();
        console.log(computerChoice + " beats " + playerChoice + " | Computer wins!");
        computerScore ++;
        showScore();
    } else {
        showChoices();
        console.log(playerChoice + " beats " + computerChoice + " | Player wins!");
        playerScore ++;
        showScore();
    }
}

function playRound() {
    console.log("Are you ready?");
    chooseRandom();
    getPlayerChoice();
    compareChoices();
    console.log(" ");
}

while (playerScore <= 5 || computerScore <= 5) {
    if (playerScore === 5) {
        console.log("Game Over!");
        console.log("Player wins the game!");
        break;
    } else if (computerScore === 5) {
        console.log("Game Over!");
        console.log("Computer wins the game!");
        break;
    } else {
        playRound();
    }
}
