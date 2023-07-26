import Swiper from '../../vendor/swiper';

const hero = document.querySelector('.hero__wrapper');
const heroPagination = document.querySelector('.hero__pagination');

const tours = document.querySelector('.tours__wrapper');
const toursButtonPrev = document.querySelector('.tours__button-prev');
const toursButtonNext = document.querySelector('.tours__button-next');

const training = document.querySelector('.training__coaches');
const trainingButtonPrev = document.querySelector('.training__button-prev');
const trainingButtonNext = document.querySelector('.training__button-next');

const reviews = document.querySelector('.reviews__wrapper');
const reviewsButtonPrev = document.querySelector('.reviews__button-prev');
const reviewsButtonNext = document.querySelector('.reviews__button-next');

const advantages = document.querySelector('.advantages__wrapper');
let advantagesSwiper;
const advantagesButtonPrev = document.querySelector('.advantages__button-prev');
const advantagesButtonNext = document.querySelector('.advantages__button-next');

const initHeroSwiper = () => new Swiper(hero, {
  direction: 'horizontal',
  slidesPerView: 1,
  speed: 300,
  pagination: {
    el: heroPagination,
    clickable: true,
    type: 'bullets',
  },
});

const initToursSwiper = () => new Swiper(tours, {
  direction: 'horizontal',
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: toursButtonNext,
    prevEl: toursButtonPrev,
  },
});

const initTrainingSwiper = () => new Swiper(training, {
  direction: 'horizontal',
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: trainingButtonNext,
    prevEl: trainingButtonPrev,
  },
});

const initReviewsSwiper = () => new Swiper(reviews, {
  direction: 'horizontal',
  breakpoints: {
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: reviewsButtonNext,
    prevEl: reviewsButtonPrev,
  },
});

const initAdvantagesSwiper = () => {
  const initSwiper = () => {
    if (window.innerWidth > 1200 && !advantagesSwiper) {
      advantagesSwiper = new Swiper(advantages, {
        direction: 'horizontal',
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 2,
        spaceBetween: 30,
        navigation: {
          nextEl: advantagesButtonNext,
          prevEl: advantagesButtonPrev,
        },
      });
    } else if (window.innerWidth < 1200 && advantagesSwiper) {
      advantagesSwiper.destroy();
    }
  };
  initSwiper();
  window.addEventListener('resize', () => {
    initSwiper();
  });
};

export {initHeroSwiper, initToursSwiper, initTrainingSwiper, initReviewsSwiper, initAdvantagesSwiper};
