// use "debugger" to look for bugs and broken code.
import { Dice } from './../src/pig-dice.js';

describe('Dice', () => {

  test('should roll a random number between 1-6', () => {
    var currentRoll = new Dice();
    expect(currentRoll.rollDice()).toBeGreaterThanOrEqual(1);
    expect(currentRoll.rollDice()).toBeLessThanOrEqual(6);
  });
});
