// use "debugger" to look for bugs and broken code.
import { Dice } from './../src/pig-dice.js';

describe('Dice', () => {
  
  test('should roll a random number between 1-6', () => {
    var currentRoll = new Dice(1, 2, 3, 4, 5, 6);
    expect(currentRoll.side1).toEqual(1);
    expect(currentRoll.side2).toEqual(2);
    expect(currentRoll.side3).toEqual(3);
    expect(currentRoll.side4).toEqual(4);
    expect(currentRoll.side5).toEqual(5);
    expect(currentRoll.side6).toEqual(6);
  });
});
