import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Pet } from './petObject.js';

$(document).ready(function() {
  $("#nameInput").submit(function(event) {
    event.preventDefault();
    let pet1 = new Pet;
    pet1.name = $("input[type='text']").val();

    pet1.increaseHunger();
    pet1.increaseLoneliness();
    pet1.increaseSleepiness();

    $(".petNameDisplay").show();
    $(".petNameDisplay").text(pet1.name);
    $("#nameInput").hide();
  });
});
