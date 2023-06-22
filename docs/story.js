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
// const card01 = document.getElementById('card_01')
// let article01 = document.getElementById('article_01')
/******/ })()
;