export function Dice() {
  this.number;
}

Dice.prototype.rollDice = function () {
  var side = Math.floor(Math.random() * 6) + 1;
  return side;
};
