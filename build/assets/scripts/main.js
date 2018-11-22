$(document).ready(function () {

  $('.header__menu').on('click', function () {
    $('.services--menu').toggleClass('services--menu--active');
    $('.menu__text').toggleClass('menu__text--active');
    $('.menu__close').toggleClass('menu__close--active');
    $('.menu__img').toggleClass('menu__img--active');
    $('.menu__plus').toggleClass('menu__plus--active');
  });

  $('.slide__btn, .contacts__btn, .service__btn').on('click', function () {
    $('.popup').toggleClass('popup--active');
    $('.bg').toggleClass('bg--active');
  });

  $('.bg, .popup__exit, .popup .popup__form .form__row .row__btn').on('click', function () {
    $('.popup').toggleClass('popup--active');
    $('.bg').toggleClass('bg--active');
  });

  $('.hero__slider').slick({
    arrows: false
  });
});