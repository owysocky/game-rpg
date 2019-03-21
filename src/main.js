import Player from './../src/player';
import Wizzard from './../src/wizzard';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  $('#haiku').submit(function(event) {
    event.preventDefault();

    let firstWizzard = new Wizzard ("Olyard", 100, 50, 50, 95, 70);

    let secondWizzard = new Wizzard ("Pashard", 100, 100, 20, 60, 100);

  });
});
