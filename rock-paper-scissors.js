const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('.choices');
const reset = document.querySelector('#reset');
let userWins = 0;
let compWins = 0;

function computerChoice() {
    const gameChoices = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random()*gameChoices.length);
    return gameChoices[choice];
}

function playerChoice(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerChoice();
    playRound(playerSelection, computerSelection);
}

rock.addEventListener('click', playerChoice);
paper.addEventListener('click', playerChoice);
scissors.addEventListener('click', playerChoice);

function winner() {
  userWins++;
  const userWin = document.querySelector('#outcome');
  userWin.textContent = "You won this round!";
  updateScore();
  if (userWins == 5) {
      userWin.textContent = "You won the whole thing!";
      rock.disabled = true;
      paper.disabled = true;
      scissors.disabled = true;
  }
}

function loser() {
  compWins++;
  const compWin = document.querySelector('#outcome');
  compWin.textContent = "Your opponent won this round!";
  updateScore();
  if (compWins == 5) {
      compWin.textContent = "You lost the game!";
      rock.disabled = true;
      paper.disabled = true;
      scissors.disabled = true;
  }
}

function tie() {
  const tied = document.querySelector('#outcome');
  tied.textContent = "It's a tie!";
}

function updateScore() {
    const playerScore = document.querySelector('#userscore');
    const computerScore = document.querySelector('#computerscore');
    playerScore.textContent = userWins;
    computerScore.textContent = compWins;
}

function playRound(player, computer) {
    if (player === 'rock' && computer === 'scissors') {
        winner();
    } else if (player === 'rock' && computer === 'paper') {
        loser();
    } else if (player === 'rock' && computer === 'rock') {
        tie();
    } else if (player === 'paper' && computer === 'rock') {
        winner();
    } else if (player === 'paper' && computer === 'scissors') {
        loser();
    } else if (player === 'paper' && computer === 'paper') {
        tie();
    } else if (player === 'scissors' && computer === 'paper') {
        winner();
    } else if (player === 'scissors' && computer === 'rock') {
        loser();
    } else if (player === 'scissors' && computer === 'scissors') {
        tie();
    } 
}

function restart() {
    if (userWins == 5 || compWins == 5) {
        window.location.reload();
    }
}

reset.addEventListener('click', restart);