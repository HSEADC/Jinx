/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
 // горизонтальный скролл

var container = document.querySelector('.C_StoryCards');
container.addEventListener('wheel', function (e) {
  e.preventDefault();
  container.scrollLeft += e.deltaY;
}); // скролл на середину окна с сюжетом

var cards = document.querySelector('.C_StoryCards');
var screen768 = window.matchMedia('(min-device-width: 463px) and (max-device-width: 768px)');

if (screen768.matches) {
  cards.scrollTop = 80;
}

var screenmobile = window.matchMedia('(max-device-width: 462px)');

if (screenmobile.matches) {
  cards.scrollTop = 77;
}
/******/ })()
;