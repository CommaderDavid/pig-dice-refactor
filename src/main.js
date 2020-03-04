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
    var playerSwitch;
    if (currentTurn.currentPlayer === false) {
      playerSwitch = player1;
    } else {
      playerSwitch = player2;
    }

    var currentRoll = diceSpin.rollDice(playerSwitch);
    // change later to switch players.
    var currentScore = playerSwitch.tempScore;
    if (currentRoll === 1) {
      $("#current-side").empty().append("Oh.... Too Bad!");
      $("#current-score").empty().append("Looosser!");
    } else {
      $("#current-side").empty().append(currentRoll);
      $("#current-score").empty().append(currentScore);
    }

  });

  $("#end").click(function() {
    if (currentTurn.currentPlayer === false) {
      $("#player1-total").empty().append(player1.addScore());
      diceSpin.tempReset(player1);
    } else {
      $("#player2-total").empty().append(player2.addScore());
      diceSpin.tempReset(player2);
    }

    currentTurn.switchTurn();

    $("#current-side").empty();
    $("#current-score").empty();
  });
});
