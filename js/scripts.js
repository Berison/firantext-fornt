"use strict";

// Default script
var DefaultScript = function DefaultScript() {
  // Burger logic
  var burger = document.querySelector('.header-main__burger'),
      burgerInner = document.querySelector('.burger-inner'); // Hidden body/html

  var hiddenBody = function hiddenBody(hidden) {
    return [document.body, document.documentElement].forEach(function (elem) {
      return hidden ? elem.classList.remove('hidden') : elem.classList.add('hidden');
    });
  };

  burgerInner.style.display = 'block';
  burger.addEventListener('click', function () {
    if (burgerInner.classList.contains('active')) {
      burgerInner.classList.remove('active');
      burger.classList.remove('active');
      hiddenBody(true);
    } else {
      burgerInner.classList.add('active');
      burger.classList.add('active');
      hiddenBody(false);
    }
  }); // Arrow up

  var buttonUp = document.querySelector('.button-up');

  var goToTop = function goToTop() {
    document.body.scrollIntoView({
      behavior: "smooth"
    });
  };

  var scrollContainer = function scrollContainer() {
    return document.documentElement || document.body;
  };

  document.addEventListener("scroll", function () {
    if (scrollContainer().scrollTop > 100) {
      buttonUp === null || buttonUp === void 0 ? void 0 : buttonUp.classList.remove("hidden");
    } else {
      buttonUp === null || buttonUp === void 0 ? void 0 : buttonUp.classList.add("hidden");
    }
  });
  buttonUp === null || buttonUp === void 0 ? void 0 : buttonUp.addEventListener('click', goToTop);
}; // Homepage scripts


var HomePage = function HomePage() {
  var swiperCategory = new Swiper('.swiper-home-category', {
    slidesPerView: 6,
    spaceBetween: 35,
    autoplay: {
      delay: 2,
      disableOnInteraction: false
    },
    speed: 4000,
    grabCursor: true,
    mousewheelControl: true,
    waitForTransition: false,
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
  var template = document.body.dataset.template; // Default script for all pages

  DefaultScript(); // Switch script for other pages

  switch (template) {
    case 'home-page':
      HomePage();
      break;
  }

  ;
});