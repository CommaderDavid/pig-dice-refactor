// use "debugger" to look for bugs and broken code.
import { Dice } from './../src/pig-dice.js';
import { PlayerScore } from './../src/pig-dice.js';

describe('Dice', () => {

  test('should roll a random number between 1-6', () => {
    var currentRoll = new Dice();
    var player = new PlayerScore("name");
    expect(currentRoll.rollDice(player)).toBeGreaterThanOrEqual(1);
    expect(currentRoll.rollDice(player)).toBeLessThanOrEqual(6);
  });

});

describe('PlayerScore', () => {

  var player
  var currentRoll

  beforeEach(() => {
    player = new PlayerScore("name");
    currentRoll = new Dice();
  });

  test('should add the tempScore to the total to the current player', () => {
    player.tempScore = 10;
    expect(player.addScore()).toEqual(10);
  });

  test('When rolled, the dice should add to a current temp score', () => {
    currentRoll.rollDice(player);

  });
});
