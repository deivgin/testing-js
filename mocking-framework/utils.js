function getWinner(player1, player2) {
  const winningNumber = Math.random();

  if (winningNumber < 1 / 3) {
    return player1;
  }

  if (winningNumber < 2 / 3) {
    return player2;
  }

  return null;
}

module.exports = { getWinner };
