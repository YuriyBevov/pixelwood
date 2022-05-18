import Swiper, { Navigation, Pagination } from 'swiper';

const interiorSwiper = document.querySelector('.interior-swiper');

interiorSwiper ?

new Swiper(interiorSwiper, {
  modules: [Navigation, Pagination],


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
}) : null;
