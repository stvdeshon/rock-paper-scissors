const gameChoices = ['Rock', 'Paper', 'Scissors'];

function computerChoice() {
    const choice = Math.floor(Math.random()*gameChoices.length);
    return gameChoices[choice];
}

function playerChoice() {
    let player = window.prompt('Rock, Paper, or Scissors?');
    fixedPlayer = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    return fixedPlayer;
}


function playRound(player, computer) {
    if (player === 'Rock' && computer === 'Scissors') {
        return 'You won! ';
    } else if (player === 'Rock' && computer === 'Paper') {
        return 'You lost! ';
    } else if (player === 'Rock' && computer === 'Rock') {
        return 'There was a tie! ';
    } else if (player === 'Paper' && computer === 'Rock') {
        return 'You won! ';
    } else if (player === 'Paper' && computer === 'Scissors') {
        return 'You lost! ';
    } else if (player === 'Paper' && computer === 'Paper') {
        return 'There was a tie! ';
    } else if (player === 'Scissors' && computer === 'Paper') {
        return 'You won! ';
    } else if (player === 'Scissors' && computer === 'Rock') {
        return 'You lost! ';
    } else if (player === 'Scissors' && computer === 'Scissors') {
        return 'There was a tie! ';
    } else {
        return 'You must choose either Rock, Paper, or Scissors! ';
    }
}

function game() {
    let i = 1
    let rounds = ''
    while (i <= 5) {
        rounds += playRound(playerChoice(), computerChoice());
        i++
    }
    return rounds
}

console.log(game());