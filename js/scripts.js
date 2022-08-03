"use strict";

// Homepage scripts
var HomePage = function HomePage() {
  var swiper = new Swiper('.swiper-home-category', {
    slidesPerView: 6,
    spaceBetween: 35,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      576: {
        slidesPerView: 4,
        spaceBetween: 25
      },
      996: {
        slidesPerView: 6,
        spaceBetween: 35
      }
    }
  });
};

document.addEventListener('DOMContentLoaded', function () {
  var template = document.body.dataset.template;

  switch (template) {
    case 'home-page':
      HomePage();
      break;
  }
});