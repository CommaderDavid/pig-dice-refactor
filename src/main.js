import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Dice } from './pig-dice.js';

$(document).ready(function() {
  var diceSpin = new Dice();

  $("#roll").click(function() {

    var currentRoll = diceSpin.rollDice();

    $("#current-side").empty().append(currentRoll);
  });
});
