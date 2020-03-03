import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Dice } from './pig-dice.js';
import { PlayerScore } from './pig-dice.js';
import { PlayerTurn } from './pig-dice.js';

$(document).ready(function() {
  var diceSpin = new Dice();
  var player1 = new PlayerScore("Player 1");
  var player2 = new PlayerScore("Player 2");
  var currentTurn = new PlayerTurn();

  $("#roll").click(function() {

    var currentRoll = diceSpin.rollDice(player1);
    // change later to switch players.
    var currentScore1 = player1.tempScore;
    $("#current-side").empty().append(currentRoll);
    $("#current-score").empty().append(currentScore1);

  });

  $("#end").click(function() {
    $("#player1-total").empty().append(player1.addScore());
  });
});
