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

var container = document.querySelector('.C_StoryCards');
container.addEventListener('wheel', function (e) {
  e.preventDefault();
  container.scrollLeft += e.deltaY;
}); // Скролл на середину окна с сюжетом

var cards = document.querySelector('.C_StoryCards');
var screen768 = window.matchMedia('(min-device-width: 463px) and (max-device-width: 768px)');

if (screen768.matches) {
  cards.scrollTop = 80;
}

var screenmobile = window.matchMedia('(max-device-width: 462px)');

if (screenmobile.matches) {
  cards.scrollTop = 77;
} // Клик по карточкам


var card01 = document.getElementById('story_card_01');
var card02 = document.getElementById('story_card_02');
var card03 = document.getElementById('story_card_03');
var card04 = document.getElementById('story_card_04');
var card05 = document.getElementById('story_card_05');
var card06 = document.getElementById('story_card_06');
var card07 = document.getElementById('story_card_07');
var card08 = document.getElementById('story_card_08');
var card09 = document.getElementById('story_card_09');
var card10 = document.getElementById('story_card_10');
var card11 = document.getElementById('story_card_11');
var article01 = document.getElementById('article_01');
var article02 = document.getElementById('article_02');
var article03 = document.getElementById('article_03');
var article04 = document.getElementById('article_04');
var article05 = document.getElementById('article_05');
var article06 = document.getElementById('article_06');
var article07 = document.getElementById('article_07');
var article08 = document.getElementById('article_08');
var article09 = document.getElementById('article_09');
var article10 = document.getElementById('article_10');
var article11 = document.getElementById('article_11');
card01.addEventListener('click', function (e) {
  article01.style.display = 'block';
  article02.style.display = 'none';
  article03.style.display = 'none';
  article04.style.display = 'none';
  article05.style.display = 'none';
  article06.style.display = 'none';
  article07.style.display = 'none';
  article08.style.display = 'none';
  article09.style.display = 'none';
  article10.style.display = 'none';
  article11.style.display = 'none';
});
card02.addEventListener('click', function (e) {
  article01.style.display = 'none';
  article02.style.display = 'block';
  article03.style.display = 'none';
  article04.style.display = 'none';
  article05.style.display = 'none';
  article06.style.display = 'none';
  article07.style.display = 'none';
  article08.style.display = 'none';
  article09.style.display = 'none';
  article10.style.display = 'none';
  article11.style.display = 'none';
});
card03.addEventListener('click', function (e) {
  article01.style.display = 'none';
  article02.style.display = 'none';
  article03.style.display = 'block';
  article04.style.display = 'none';
  article05.style.display = 'none';
  article06.style.display = 'none';
  article07.style.display = 'none';
  article08.style.display = 'none';
  article09.style.display = 'none';
  article10.style.display = 'none';
  article11.style.display = 'none';
});
card04.addEventListener('click', function (e) {
  article01.style.display = 'none';
  article02.style.display = 'none';
  article03.style.display = 'none';
  article04.style.display = 'block';
  article05.style.display = 'none';
  article06.style.display = 'none';
  article07.style.display = 'none';
  article08.style.display = 'none';
  article09.style.display = 'none';
  article10.style.display = 'none';
  article11.style.display = 'none';
});
card05.addEventListener('click', function (e) {
  article01.style.display = 'none';
  article02.style.display = 'none';
  article03.style.display = 'none';
  article04.style.display = 'none';
  article05.style.display = 'block';
  article06.style.display = 'none';
  article07.style.display = 'none';
  article08.style.display = 'none';
  article09.style.display = 'none';
  article10.style.display = 'none';
  article11.style.display = 'none';
});
card06.addEventListener('click', function (e) {
  article01.style.display = 'none';
  article02.style.display = 'none';
  article03.style.display = 'none';
  article04.style.display = 'none';
  article05.style.display = 'none';
  article06.style.display = 'block';
  article07.style.display = 'none';
  article08.style.display = 'none';
  article09.style.display = 'none';
  article10.style.display = 'none';
  article11.style.display = 'none';
});
card07.addEventListener('click', function (e) {
  article01.style.display = 'none';
  article02.style.display = 'none';
  article03.style.display = 'none';
  article04.style.display = 'none';
  article05.style.display = 'none';
  article06.style.display = 'none';
  article07.style.display = 'block';
  article08.style.display = 'none';
  article09.style.display = 'none';
  article10.style.display = 'none';
  article11.style.display = 'none';
});
card08.addEventListener('click', function (e) {
  article01.style.display = 'none';
  article02.style.display = 'none';
  article03.style.display = 'none';
  article04.style.display = 'none';
  article05.style.display = 'none';
  article06.style.display = 'none';
  article07.style.display = 'none';
  article08.style.display = 'block';
  article09.style.display = 'none';
  article10.style.display = 'none';
  article11.style.display = 'none';
});
card09.addEventListener('click', function (e) {
  article01.style.display = 'none';
  article02.style.display = 'none';
  article03.style.display = 'none';
  article04.style.display = 'none';
  article05.style.display = 'none';
  article06.style.display = 'none';
  article07.style.display = 'none';
  article08.style.display = 'none';
  article09.style.display = 'block';
  article10.style.display = 'none';
  article11.style.display = 'none';
});
card10.addEventListener('click', function (e) {
  article01.style.display = 'none';
  article02.style.display = 'none';
  article03.style.display = 'none';
  article04.style.display = 'none';
  article05.style.display = 'none';
  article06.style.display = 'none';
  article07.style.display = 'none';
  article08.style.display = 'none';
  article09.style.display = 'none';
  article10.style.display = 'block';
  article11.style.display = 'none';
});
card11.addEventListener('click', function (e) {
  article01.style.display = 'none';
  article02.style.display = 'none';
  article03.style.display = 'none';
  article04.style.display = 'none';
  article05.style.display = 'none';
  article06.style.display = 'none';
  article07.style.display = 'none';
  article08.style.display = 'none';
  article09.style.display = 'none';
  article10.style.display = 'none';
  article11.style.display = 'block';
});
/******/ })()
;