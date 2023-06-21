/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('mp_articles');
  var list = document.getElementById('mp_articles_list');
  var btn_text = document.getElementById('mp_articles_text');
  var mp_list_wrapper = document.getElementById('mp_list_wrapper');
  var menu = document.getElementById('menu');
  var burger = document.getElementById('burger');
  burger.addEventListener('click', function () {
    menu.classList.toggle('Opened');
  });
  button.addEventListener('click', function () {
    button.classList.toggle('Opened');
    list.classList.toggle('Opened');
    btn_text.classList.toggle('Opened');
    mp_list_wrapper.classList.toggle('Opened');
  });
  var screenmobile = window.matchMedia('(max-device-width: 462px)');

  if (screenmobile.matches) {
    var plusSlides = function plusSlides(n) {
      showSlides(slideIndex += n);
    };

    var showSlides = function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName('A_MenuCardMobile');

      if (n > slides.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = slides.length;
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }

      slides[slideIndex - 1].style.display = 'block';
    };

    var arrowRight = document.getElementById('ArrowRight');
    var arrowLeft = document.getElementById('ArrowLeft');
    arrowRight.addEventListener('click', function () {
      plusSlides(1);
    });
    arrowLeft.addEventListener('click', function () {
      plusSlides(-1);
    });
    var slideIndex = 1;
    showSlides(slideIndex);
  }
});
/******/ })()
;