let randomNumber;
let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let rematch = "yes";
let pointsToWin = 5;

function chooseRandom() {
    randomNumber = Math.floor(Math.random() * 3);;
    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
} 
/* This function outputs a randomly chosen option out of the three */


const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");

rockBtn.addEventListener("click",() => (getPlayerChoice("rock")))
paperBtn.addEventListener("click", () => (getPlayerChoice("paper")))
scissorsBtn.addEventListener("click", () => (getPlayerChoice("scissors")))


function getPlayerChoice(choice) {
    playerChoice = choice;
}
 
/* This function gets an input from the player and makes it lowercase.
It makes sure the input is valid (i.e one of the three options), 
and if not, it prompts the player to send another choice */

const humanScoreElement = document.querySelector("#human-score");
const computerScoreElement = document.querySelector("#computer-score");

function showScore() {
    humanScoreElement.textContent = (playerScore);
    computerScoreElement.textContent = (computerScore);
} 
/* This function shows the score of the player vs the score of the 
computer, And styles them with line breaks and wording */

const choices = document.querySelector(".picks")
const result = document.querySelector(".result");
choices.textContent = ("");
result.textContent = ("");

function showChoices(winningChoice, losingChoice, winner) {
    choices.textContent = (`${winningChoice} beats ${losingChoice}`)
    result.textContent = (`${winner} wins this round!`);
}

/* function showChoices() {
    console.log(playerChoice + " VS " + computerChoice);
    console.log(" ");
} */
/* This function shows the choice made by the player vs the computer */

function compareChoices() {
    if (computerChoice === playerChoice) {
        choices.textContent = `Both picked ${playerChoice}`;
        result.textContent = "It's a tie!";
    } else if (computerChoice === "rock" && playerChoice === "scissors"
    || computerChoice === "paper" && playerChoice === "rock" 
    || computerChoice === "scissors" && playerChoice === "paper") {
        computerScore ++;
        showScore();
        showChoices(computerChoice, playerChoice, "Computer");
    } else {
        playerScore ++;
        showScore();
        showChoices(playerChoice, computerChoice, "Human");
    };
};
/* This function conducts the main logic of the game.
It compares computerChoice with playerChoice and returns an output
relevant to who won the round (or shows a tie) and adds 1 to their
respective score.
It also uses showScore and showChoices to show what each player picked, 
and whats the current - post round, scoreboard */

function playRound() {
    chooseRandom();
    getPlayerChoice();
    compareChoices();
}
/* This function dictates the course of action for a single round.
It essentialy gets each one to choose an option and uses the compare
function to see who won the round. It also add some separation between
rounds and decorative text */

function playGame() {
    while (playerScore < pointsToWin && computerScore < pointsToWin) {
            playRound();
        }
    choices.textContent = ("Game Over!");
    if (playerScore >= pointsToWin) {
        result.textContent = ("Player wins the game!");
    } else { 
        result.textContent = ("Computer wins the game!");
    }
    rematch = prompt("Ready for a rematch?").toLowerCase();
}
/* This function dictates the course of the game.
It uses all the previous functions to play continuous rounds until
someone gets to the chosen amount of points for a win,
it than desplays an appropriate winning message and 
prompts the player asking for a remach */


alert("Welcome to Rock Paper Scissors!");

while (rematch === "yes") {
    computerScore = 0;
    playerScore = 0;
    pointsToWin = parseInt(prompt("What do you want the target score to be?"));
    playGame();
}

alert("See you next time!");

/* Lastly, this is the code for the actual game. 
It loops as long as the player wants a match (rematch === 'yes').
Resets the score.
Prompts the player asking what they want to be the winning score.
And starts the game.
when the player chooses not to have another round by not replying yes,
the program sends a bye message*/