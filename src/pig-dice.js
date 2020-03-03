export function Dice() {
  this.number;
}

Dice.prototype.tempReset = function (player) {
  player.tempScore = 0;
};

Dice.prototype.rollDice = function (player) {
  var side = Math.floor(Math.random() * 6) + 1;
  player.tempScore += side;
  return side;
};

export function PlayerScore(name) {
  this.tempScore = 0;
  this.totalScore = 0;
  this.name = name;
}

PlayerScore.prototype.addScore = function() {
  this.totalScore += this.tempScore;
  return this.totalScore;
};

export function PlayerTurn() {
  this.currentPlayer = false;
}

PlayerTurn.prototype.switchTurn = function () {
  this.currentPlayer = !this.currentPlayer;
};
