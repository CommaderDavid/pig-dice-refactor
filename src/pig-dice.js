export function Dice() {
  this.number;
}

Dice.prototype.rollDice = function (player) {
  var side = Math.floor(Math.random() * 6) + 1;
  player.tempScore += side;
  return side;
};

export function PlayerScore() {
  this.tempScore = 0;
};
