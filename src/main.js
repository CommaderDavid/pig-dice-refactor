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

  var playerSwitch;

  $("#roll").click(function() {
    if (currentTurn.currentPlayer === false) {
      playerSwitch = player1;
      $("#player2-total").removeClass("current-player");
      $("#player1-total").addClass("current-player");
    } else {
      playerSwitch = player2;
      $("#player1-total").removeClass("current-player");
      $("#player2-total").addClass("current-player");
    }

    var currentRoll = diceSpin.rollDice(playerSwitch, currentTurn);
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
      $("#player1-total").empty().append(playerSwitch.addScore());
    } else {
      $("#player2-total").empty().append(playerSwitch.addScore());
    }

    diceSpin.tempReset(playerSwitch);
    currentTurn.switchTurn();

    $("#current-side").empty();
    $("#current-score").empty();

    if (playerSwitch.totalScore >= 100) {
      $("#winner").show();
      $("#winner").empty().append(playerSwitch.name + " Wins!");
    }
  });
});
