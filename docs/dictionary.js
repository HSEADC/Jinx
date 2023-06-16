/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

console.log('Тестикс');
var container = document.querySelector('.C_MonsterCards');
container.addEventListener('wheel', function (e) {
  e.preventDefault();
  container.scrollLeft += e.deltaY;
});
/******/ })()
;