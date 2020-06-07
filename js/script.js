$('.header__burger').click(function () {
  $('.header__burger').toggleClass('active');
  $('.header__menu').toggleClass('active');
});

$(document).ready(function () {
  $('.gallery__slider').slick({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.about__slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true
  });
});