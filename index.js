// Rock, Paper, Scissors

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

function playRound(p1, p2) {
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

// Game Loop
let p1Score = 0, p2Score = 0, ties = 0;
for (let i = 0; i < 5; i++) {
    const p1 = prompt("Enter rock, paper, or scissors to play");
    const p2 = computerPlay();
    winner = playRound(p1, p2);
    if (winner === 0) { ties++ };
    if (winner === 1) { p1Score++ };
    if (winner === 2) { p2Score++ }; 
}

console.table( {"Player1": p1Score, "Player2": p2Score, "TIES": ties} );
