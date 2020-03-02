import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Dice } from './pig-dice.js';
import { PlayerScore } from './pig-dice.js';

$(document).ready(function() {
  var diceSpin = new Dice();
  var player = new PlayerScore();

  $("#roll").click(function() {

    var currentRoll = diceSpin.rollDice(player);
    var currentScore = player.tempScore;
    $("#current-side").empty().append(currentRoll);
    $("#current-score").empty().append(currentScore);

  });
});
