let playerRoundScore = 0;
let playerTotalScore = 0;
let computerRoundScore = 0;
let computerTotalScore = 0;
let rollsLeft = 3;

function rollDice() {
  if (rollsLeft > 0) {
    rollsLeft--;

    const playerDice1 = Math.floor(Math.random() * 6) + 1;
    const playerDice2 = Math.floor(Math.random() * 6) + 1;
    const computerDice1 = Math.floor(Math.random() * 6) + 1;
    const computerDice2 = Math.floor(Math.random() * 6) + 1;

    const playerRollDie1 = getDiceFace(playerDice1);
    const playerRollDie2 = getDiceFace(playerDice2);
    const computerRollDie1 = getDiceFace(computerDice1);
    const computerRollDie2 = getDiceFace(computerDice2);

    document.getElementById('player-roll-die1').textContent = playerRollDie1;
    document.getElementById('player-roll-die2').textContent = playerRollDie2;
    document.getElementById('computer-roll-die1').textContent = computerRollDie1;
    document.getElementById('computer-roll-die2').textContent = computerRollDie2;

    playerRoundScore += calculateScore(playerDice1, playerDice2);
    computerRoundScore += calculateScore(computerDice1, computerDice2);

    document.getElementById('player-round-score').textContent = playerRoundScore;
    document.getElementById('computer-round-score').textContent = computerRoundScore;
  }

  if (rollsLeft === 0) {
    endRound();
  }
}

function getDiceFace(value) {
  switch (value) {
    case 1:
      return '⚀';
    case 2:
      return '⚁';
    case 3:
      return '⚂';
    case 4:
      return '⚃';
    case 5:
      return '⚄';
    case 6:
      return '⚅';
    default:
      return '';
  }
}

function calculateScore(die1, die2) {
  if (die1 === 1 || die2 === 1) {
    return 0;
  } else if (die1 === die2) {
    return (die1 + die2) * 2;
  } else {
    return die1 + die2;
  }
}

function endRound() {
  playerTotalScore += playerRoundScore;
  computerTotalScore += computerRoundScore;
  document.getElementById('player-total-score').textContent = playerTotalScore;
  document.getElementById('computer-total-score').textContent = computerTotalScore;

  rollsLeft = 3;
  playerRoundScore = 0;
  computerRoundScore = 0;

  document.getElementById('roll-btn').disabled = true;
  document.getElementById('winner-msg').textContent = determineWinner();
}

function determineWinner() {
  if (playerTotalScore > computerTotalScore) {
    return 'Congratulations! You win!';
  } else if (playerTotalScore < computerTotalScore) {
    return 'CPU wins! Better luck next time!';
  } else {
    return 'It\'s a tie! Play again?';
  }
}

function resetGame() {
  rollsLeft = 3;
  playerRoundScore = 0;
  playerTotalScore = 0;
  computerRoundScore = 0;
  computerTotalScore = 0;

  document.getElementById('player-roll-die1').textContent = '';
  document.getElementById('player-roll-die2').textContent = '';
  document.getElementById('computer-roll-die1').textContent = '';
  document.getElementById('computer-roll-die2').textContent = '';
  document.getElementById('player-round-score').textContent = '0';
  document.getElementById('computer-round-score').textContent = '0';
  document.getElementById('player-total-score').textContent = '0';
  document.getElementById('computer-total-score').textContent = '0';
  document.getElementById('roll-btn').disabled = false;
  document.getElementById('winner-msg').textContent = '';
}
