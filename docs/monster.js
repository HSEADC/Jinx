/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
 // Горизонтальный скролл

var container = document.querySelector('.C_MonsterCards');
container.addEventListener('wheel', function (e) {
  e.preventDefault();
  container.scrollLeft += e.deltaY;
}); // Клик по карточкам

document.addEventListener('DOMContentLoaded', function () {
  var card = document.getElementById('card_01');
  card.addEventListener('click', function () {
    console.log('click');
  });
}); // function initArticles() {
//   const cards = document.querySelectorAll('.O_NarrowArticle')
// }
// const card01 = document.getElementById('card_01')
// const card02 = document.getElementById('card_02')
// const card03 = document.getElementById('card_03')
// let article01 = document.getElementById('article_01')
// let article02 = document.getElementById('article_02')
// let article03 = document.getElementById('article_03')
// card01.addEventListener('click', (e) => {
//   console.log('click_card_01')
//   article01.style.display = 'block'
//   article02.style.display = 'none'
//   article03.style.display = 'none'
// })
// card02.addEventListener('click', (e) => {
//   console.log('click_card_02')
//   article01.style.display = 'none'
//   article02.style.display = 'block'
//   article03.style.display = 'none'
// })
// card03.addEventListener('click', (e) => {
//   console.log('click_card_02')
//   article01.style.display = 'none'
//   article02.style.display = 'none'
//   article03.style.display = 'block'
// })
/******/ })()
;