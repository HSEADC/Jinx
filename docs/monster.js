/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
 // Горизонтальный скролл

var container = document.querySelector('.C_MonsterCards');
container.addEventListener('wheel', function (e) {
  e.preventDefault();
  container.scrollLeft += e.deltaY;
}); // Клик по карточкам

var card = document.getElementById('card_01');
card.addEventListener('click', function (e) {
  console.log('click');
});
/******/ })()
;