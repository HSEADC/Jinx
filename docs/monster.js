/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
 // Бургер-меню

document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('mp_articles');
  var list = document.getElementById('mp_articles_list');
  var btn_text = document.getElementById('mp_articles_text');
  var mp_list_wrapper = document.getElementById('mp_list_wrapper');
  var menu = document.getElementById('menu');
  var burger = document.getElementById('burger'); // Бургер-меню в статьях

  burger.addEventListener('click', function () {
    menu.classList.toggle('Opened');
  });
  button.addEventListener('click', function () {
    button.classList.toggle('Opened');
    list.classList.toggle('Opened');
    btn_text.classList.toggle('Opened');
    mp_list_wrapper.classList.toggle('Opened');
  });
}); // Горизонтальный скролл

var container = document.querySelector('.C_MonsterCards');
container.addEventListener('wheel', function (e) {
  e.preventDefault();
  container.scrollLeft += e.deltaY;
}); // Клик по карточкам
// document.addEventListener('DOMContentLoaded', () => {
//   const card = document.getElementById('card_01')
//   card.addEventListener('click', () => {
//     console.log('click')
//   })
// })
// function initArticles() {
//   const cards = document.querySelectorAll('.O_NarrowArticle')
// }

var card01 = document.getElementById('card_01');
var card02 = document.getElementById('card_02');
var card03 = document.getElementById('card_03');
var article01 = document.getElementById('article_01');
var article02 = document.getElementById('article_02');
var article03 = document.getElementById('article_03');
card01.addEventListener('click', function (e) {
  console.log('click_card_01');
  article01.style.display = 'block';
  article02.style.display = 'none';
  article03.style.display = 'none';
});
card02.addEventListener('click', function (e) {
  console.log('click_card_02');
  article01.style.display = 'none';
  article02.style.display = 'block';
  article03.style.display = 'none';
});
card03.addEventListener('click', function (e) {
  console.log('click_card_02');
  article01.style.display = 'none';
  article02.style.display = 'none';
  article03.style.display = 'block';
});
/******/ })()
;