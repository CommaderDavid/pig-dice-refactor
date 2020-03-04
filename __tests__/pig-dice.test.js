// use "debugger" to look for bugs and broken code.
import { Dice } from './../src/pig-dice.js';
import { PlayerScore } from './../src/pig-dice.js';
import { PlayerTurn } from './../src/pig-dice.js';

describe('Dice', () => {

  var player
  var currentRoll

  beforeEach(() => {
    player = new PlayerScore("name");
    currentRoll = new Dice();
  });

  test('should roll a random number between 1-6', () => {
    expect(currentRoll.rollDice(player)).toBeGreaterThanOrEqual(1);
    expect(currentRoll.rollDice(player)).toBeLessThanOrEqual(6);
  });

  test('when one is rolled, should clear the temp score of current player', () => {
    player.tempScore = 15;
    currentRoll.tempReset(player);
    expect(player.tempScore).toEqual(0);
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
    // create a modified tempscore and see if it works in the add score prototype.
    player.tempScore = 10;
    expect(player.addScore()).toEqual(10);
  });

  test('When rolled, the dice should add to a current temp score', () => {
    // create an instance of the dice roll, then compare temp score to that roll
    currentRoll.rollDice(player);
    expect(player.tempScore).toBeGreaterThanOrEqual(1);
    expect(player.tempScore).toBeLessThanOrEqual(6);
  });
});

describe('PlayerTurn', () => {

  test('should switch players when the end turn button is clicked', () => {
    var turn = new PlayerTurn();
    turn.switchTurn();
    expect(turn.currentPlayer).toEqual(true);
  });

});
