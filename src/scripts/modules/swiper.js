import Swiper, { Navigation, Pagination } from 'swiper';

const mainSwiper = document.querySelectorAll('.main-swiper');

if( mainSwiper ) {
  mainSwiper.forEach(slider => {
    new Swiper(slider, {
      modules: [Navigation, Pagination],

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    })
  })
};

const switchers = document.querySelectorAll('.visual__button-group button');
const sliderBoxes = document.querySelectorAll('.visual__slider-box');

switchers.forEach(switcher => {
  switcher.addEventListener('click', (evt) => {

    switchers.forEach(btn => {
      if(btn !== evt.target) {
        btn.classList.remove('active');
      } else {
        btn.classList.add('active')
      }
    })

    sliderBoxes.forEach(box => {
      if(box.getAttribute('data-type') !== evt.target.getAttribute('data-type')) {
        box.classList.remove('active');
      } else {
        box.classList.add('active');
      }
    });
  });
});


