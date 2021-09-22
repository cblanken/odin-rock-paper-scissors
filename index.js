// Rock, Paper, Scissors

// Game Setup/State
const clickEvent = function (e) {
   playRound(e.target.alt, computerPlay()); 
};

const choiceButtons = document.querySelectorAll('#choices > button')
choiceButtons.forEach((btn) => {
   btn.addEventListener('click', clickEvent);
});

let p1Score = 0, p2Score = 0, tieScore = 0;
const maxScore = 5;
const p1ScoreCell = document.querySelector('#p1-score');
const p2ScoreCell = document.querySelector('#p2-score');
const tieScoreCell = document.querySelector('#tie-score');

let x_beats_y = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper',
};

function computerPlay() {
    // Generate PRN between 0 and 2 inclusive
    const min = 0;
    const max = 3;
    const rand = Math.floor(Math.random() * (max - min) + min);
    const choice = Object.keys(x_beats_y)[rand];
    return choice;
}

function getWinner(p1, p2) {
    p1 = p1.toLowerCase();
    p2 = p2.toLowerCase();
    if (x_beats_y[p1] === p2) {
        console.log(`Player 1 wins! ${p1} beats ${p2}`);
        return 1;
    }
    else if (x_beats_y[p2] === p1) {
        console.log(`Player 2 wins! ${p2} beats ${p1}`);
        return 2;
    }
    else {
        console.log(`Both players LOSE! It's a TIE!`);
        return 0;
    }
}

function playRound(p1, p2) {
    const winner = getWinner(p1, p2); 
    switch (winner) {
        case 0:
            updateScore(tieScoreCell, ++tieScore);
            break;
        case 1:
            updateScore(p1ScoreCell, ++p1Score);
            break;
        case 2:
            updateScore(p2ScoreCell, ++p2Score);
            break;
    }
}

const winnerAnnouncement = document.createElement('h2');
const gameOverAnnouncement = document.createElement('h2');
gameOverAnnouncement.textContent = "Game Over!";

function updateScore (node, score) {
    node.textContent = score.toString();
    if (Number(p1ScoreCell.textContent) >= maxScore) { 
        winnerAnnouncement.textContent = "Player 1 Wins! Congratulations!";
        document.querySelector('body').appendChild(gameOverAnnouncement);
        document.querySelector('body').appendChild(winnerAnnouncement);
        choiceButtons.forEach((btn) => {
           btn.removeEventListener('click', clickEvent);
        });
    }
    else if (Number(p2ScoreCell.textContent) >= maxScore) {
        winnerAnnouncement.textContent = "Player 2 Wins! Congratulations!";
        document.querySelector('body').appendChild(gameOverAnnouncement);
        document.querySelector('body').appendChild(winnerAnnouncement);
        choiceButtons.forEach((btn) => {
           btn.removeEventListener('click', clickEvent);
        });
    }
}
