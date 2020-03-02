// use "debugger" to look for bugs and broken code.
import { Dice } from './../src/pig-dice.js';
import { PlayerScore } from './../src/pig-dice.js';

describe('Dice', () => {

  test('should roll a random number between 1-6', () => {
    var currentRoll = new Dice();
    var player = new PlayerScore();
    expect(currentRoll.rollDice(player)).toBeGreaterThanOrEqual(1);
    expect(currentRoll.rollDice(player)).toBeLessThanOrEqual(6);
  });

});

describe('PlayerScore', () => {

  // test('Name should be given to idetify current player', () => {
  //   var currentScore = new PlayerScore();
  // });

  test('When rolled, the dice should add to a total current score', () => {
    var currentScore = new PlayerScore();
    var currentRoll = new Dice();
    expect(currentScore.tempScore).toBeGreaterThanOrEqual(1);
  });
});
