import styles from './style.scss';
import $ from 'jquery'

$(document).ready(function(e) {
  console.log('load');
  const hash = window.location.hash;
  setTimeout(function() {
    if ($(hash).length) {
      window.scrollTo(0, $(hash).offset().top);      
    }
  }, 100);
});
