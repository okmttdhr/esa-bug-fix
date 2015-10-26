import './style.scss';
import $ from 'jquery';

const body = $('body');

// ハッシュ付きURLに直接アクセスしたときに、時々ずれた位置にスクロールしてしまうバグ
function hashScroll() {
  const hash = window.location.hash;
  setTimeout(function() {
    if ($(hash).length) {
      window.scrollTo(0, $(hash).offset().top);
    }
  }, 100);
}

body.ready(() => {
  hashScroll();
});
