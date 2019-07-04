import './style.scss';
import $ from 'jquery';

let num = 0;

setInterval(() => {
  $('#main').html(`You've been on this page for ${num} seconds.`);
  num += 1;
}, 1000);
