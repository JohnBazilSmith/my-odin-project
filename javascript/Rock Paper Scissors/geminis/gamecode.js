const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

// UI Elements
const messageEl = document.getElementById('message');
const pScoreEl = document.getElementById('player-score');
const cScoreEl = document.getElementById('computer-score');
const pChoiceEl = document.getElementById('player-choice-display');
const cChoiceEl = document.getElementById('computer-choice-display');
const resetBtn = document.getElementById('reset-btn');
const buttons = document.querySelectorAll('.choice-btn');

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

const playRound = (playerSelection) => {
    const computerSelection = getComputerChoice();
    
    pChoiceEl.textContent = playerSelection.toUpperCase();
    cChoiceEl.textContent = computerSelection.toUpperCase();

    if (playerSelection === computerSelection) {
        updateUI("It's a tie!", 'black');
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        updateUI(`You win! ${playerSelection} beats ${computerSelection}`, '#27ae60');
    } else {
        computerScore++;
        updateUI(`You lose! ${computerSelection} beats ${playerSelection}`, '#e74c3c');
    }
    
    pScoreEl.textContent = playerScore;
    cScoreEl.textContent = computerScore;
};

const updateUI = (msg, color) => {
    messageEl.textContent = msg;
    messageEl.style.color = color;
};

buttons.forEach(button => {
    button.addEventListener('click', () => playRound(button.dataset.choice));
});

resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    pScoreEl.textContent = '0';
    cScoreEl.textContent = '0';
    messageEl.textContent = 'Choose your weapon!';
    messageEl.style.color = 'black';
    pChoiceEl.textContent = '-';
    cChoiceEl.textContent = '-';
});