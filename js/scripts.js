"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  buttonUp === null || buttonUp === void 0 ? void 0 : buttonUp.addEventListener('click', goToTop); // Anchor

  var allAnchor = document.querySelectorAll('.anchor');
  allAnchor.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var element = document.querySelector(anchor.getAttribute('href'));
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
      });
    });
  }); // Shopping cart

  var cartButton = document.querySelector('.header-main__list .checkout'),
      cartMini = document.querySelector('.cart-mini-inner'),
      cartMiniClose = document.querySelector('.cart-mini-inner .close');
  cartButton === null || cartButton === void 0 ? void 0 : cartButton.addEventListener('click', function (e) {
    e.preventDefault();
    cartMini.classList.contains('active') ? cartMini.classList.remove('active') : cartMini.classList.add('active');
  });
  cartMiniClose === null || cartMiniClose === void 0 ? void 0 : cartMiniClose.addEventListener('click', function () {
    return cartMini.classList.remove('active');
  });
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
}; // Product page


var ProductPage = function ProductPage() {
  var swiper = new Swiper(".swiper-product-page", {
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    direction: "vertical",
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 22,
        loop: true,
        direction: "horizontal"
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 32,
        loop: true,
        direction: "horizontal"
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 32,
        loop: true,
        direction: "vertical",
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  });
  var swiperRadios = new Swiper(".option-radios-swiper", {
    slidesPerView: 3,
    spaceBetween: 32,
    scrollbar: {
      el: '.swiper-scrollbar'
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 31,
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 31,
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      },
      1050: {
        slidesPerView: 3,
        spaceBetween: 32,
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      }
    }
  });
  var swiperRecomended = new Swiper(".swiper-recomended", {
    slidesPerView: 4,
    spaceBetween: 32,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 32
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 32
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 32
      }
    }
  }); // Plus minus logic

  var btnPlus = document.querySelectorAll('.product-count .plus'),
      btnMinus = document.querySelectorAll('.product-count .minus');
  btnPlus.forEach(function (button) {
    button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
      var input = button.parentElement.querySelector('input'),
          max = +input.dataset.max;
      if (input.value < max) input.value = +input.value + 1;
    });
  });
  btnMinus.forEach(function (button) {
    button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
      var input = button.parentElement.querySelector('input'),
          min = +input.dataset.min;
      if (input.value > min) input.value = +input.value - 1;
    });
  });
  setTimeout(function () {
    // All slides
    var slides = document.querySelectorAll('.swiper-product-page .swiper-slide'),
        imageInner = document.querySelector('.product-page-head-inner__left .image');
    slides.forEach(function (slide) {
      slide.addEventListener('click', function () {
        var srcSlide = slide.querySelector('img').getAttribute('src');
        imageInner.querySelector('img').setAttribute('src', srcSlide);
      });
    });
  }, 0); // Add active select

  var selectSpan = document.querySelectorAll('.option-input-inner_select .active-text');
  selectSpan === null || selectSpan === void 0 ? void 0 : selectSpan.forEach(function (select) {
    select.addEventListener('click', function () {
      var parent = select.parentElement,
          input = parent.querySelector('input'),
          listItem = parent.querySelectorAll('.list p');
      parent.classList.contains('active') ? parent.classList.remove('active') : parent.classList.add('active');
      listItem.forEach(function (item) {
        item.addEventListener('click', function () {
          var value = item.textContent;
          select.innerHTML = value;
          input.value = value;
          listItem.forEach(function (elem) {
            return elem.classList.remove('active');
          });
          item.classList.add('active');
          parent.classList.remove('active');
        });
      });
    });
  }); // Tabs

  var tabsItemsHead = document.querySelectorAll('.product-page-tabs .product-page-tabs__head .item-head'),
      tabsItemsInner = document.querySelectorAll('.product-page-tabs .product-page-tabs__inner .item-inner');
  tabsItemsHead.forEach(function (item, index) {
    item.addEventListener('click', function () {
      if (window.innerWidth < 768) {
        if (item.classList.contains('active')) {
          tabsItemsHead.forEach(function (elem) {
            return elem.style.display = 'block';
          });
        } else {
          tabsItemsHead.forEach(function (elem) {
            return elem.style.display = 'none';
          });
          item.style.display = 'block';
        }
      }

      [].concat(_toConsumableArray(tabsItemsHead), _toConsumableArray(tabsItemsInner)).forEach(function (elem) {
        return elem.classList.remove('active');
      });
      item.classList.add('active');
      tabsItemsInner[index].classList.add('active');
    });
  }); // Dependence

  var allInputRadio = document.querySelectorAll('.option-radio input'),
      allDependenceInner = document.querySelectorAll('.option-dependence-inner');
  allInputRadio.forEach(function (input) {
    input.addEventListener('change', function () {
      var currentInner = _toConsumableArray(allDependenceInner).filter(function (elem) {
        var _elem$dataset, _input$dataset;

        return ((_elem$dataset = elem.dataset) === null || _elem$dataset === void 0 ? void 0 : _elem$dataset.dependence) == ((_input$dataset = input.dataset) === null || _input$dataset === void 0 ? void 0 : _input$dataset.dependence);
      });

      if (currentInner.length > 0) {
        currentInner[0].style.display = 'block';
      } else if (currentInner.length == 0) {
        allDependenceInner.forEach(function (elem) {
          return elem.style.display = 'none';
        });
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', function () {
  var template = document.body.dataset.template; // Default script for all pages

  DefaultScript(); // Switch script for other pages

  switch (template) {
    case 'home-page':
      HomePage();
      break;

    case 'product-page':
      ProductPage();
      break;
  }

  ;
});