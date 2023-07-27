const menuButton = document.querySelector('.nav__button');
const logo = document.querySelector('.logo__icon');
const navList = document.querySelector('.nav__list');
const navLink = document.querySelectorAll('.nav__link');
const navTel = document.querySelector('.nav__tel');
const openIcon = document.querySelector('.nav__button-open-icon');
const closeIcon = document.querySelector('.nav__button-close-icon');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

const openClick = () => {
  menuButton.addEventListener('click', () => {
    if (menuButton.classList.contains('nav__button--open')) {
      nav.classList.add('nav--open');
      header.classList.add('header--opened');
      navList.classList.remove('nav__list--close');
      navList.classList.add('nav__list--open');
      menuButton.classList.remove('nav__button--open');
      menuButton.classList.add('nav__button--close');
      openIcon.style = 'display: none';
      closeIcon.style = 'display: block';
      logo.classList.add('logo__icon--open');
      logo.classList.remove('logo__icon--close');
      navTel.classList.add('nav__tel--open');
      navTel.classList.remove('nav__tel--close');
      navLink.forEach((link) => {
        link.classList.add('nav__link--opened');
        link.classList.remove('btn');
        link.classList.remove('btn--menu-link-dark');
      });
    } else if (menuButton.classList.contains('nav__button--close')) {
      nav.classList.remove('nav--open');
      header.classList.remove('header--opened');
      navList.classList.add('nav__list--close');
      navList.classList.remove('nav__list--open');
      menuButton.classList.add('nav__button--open');
      menuButton.classList.remove('nav__button--close');
      openIcon.style = 'display: block';
      closeIcon.style = 'display: none';
      logo.classList.remove('logo__icon--open');
      logo.classList.add('logo__icon--close');
      navTel.classList.remove('nav__tel--open');
      navTel.classList.add('nav__tel--close');
      navLink.forEach((link) => {
        link.classList.remove('nav__link--opened');
        link.classList.add('btn');
        link.classList.add('btn--menu-link-dark');
      });
    }
  });
};

export {openClick};
