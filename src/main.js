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
    $(".actionButtons").show();
    $(".status").show();

    if( $('#imageToReplace').is(':empty') ) {
      $("#pusheenImage").show();
    }
    pet1.increaseHunger();
    pet1.increaseLoneliness();
    pet1.increaseSleepiness();


    $(".petNameDisplay").show();
    $(".petNameDisplay").text(pet1.name);
    $("#nameInput").hide();

    $("button[name='feed']").click(function() {
      pet1.feed();
    });

    $("button[name='play']").click(function() {
      pet1.snuggle();
    });

    $("button[name='sleep']").click(function() {
      pet1.sleep();
    });

    console.log("pet1.lonelinessLevel: " + pet1.lonelinessLevel);
    if (pet1.lonelinessLevel >= 7) {
      $("#pusheenLonelyImage").show();
      $("#pusheenImage").hide();
    }

    $("#restart").click(function() {
      console.log("click is working");
      location.reload();
    });
  });


});
