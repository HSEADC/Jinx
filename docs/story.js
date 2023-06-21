/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
 // Горизонтальный скролл

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