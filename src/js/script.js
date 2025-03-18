// menu

let overlay = document.getElementById('overlay');
let openMenu = document.getElementById('openMenu');
let mobileMenu = document.querySelector('.mobileMenu');

openMenu.addEventListener('click', function () {
  overlay.classList.add('active');
  mobileMenu.classList.add('active');
})
overlay.addEventListener('click', function () {
  overlay.classList.remove('active');
  mobileMenu.classList.remove('active');
})
// swiper

var games = new Swiper(".games", {
  slidesPerView: 1,
  spaceBetween: 27,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    }
  },
});
var casino = new Swiper(".casino", {
  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
});
var testimonials = new Swiper(".testimonials", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2,
    }
  },
});
var faqs = new Swiper(".faqs", {
  slidesPerView: 1,
  spaceBetween: 22,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
});