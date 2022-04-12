$(document).ready(function () {
  $(".showcase-slider-wrapper").slick({
    arrows: false,
    slidesToShow: 1,
    infinite: false,
    dots: true,
    autoplay: true,
  });

  $(".how-it-works-wrapper").slick({
    arrows: false,
    slidesToShow: 3,
    infinite: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });

  $(".dealers-wrapper").slick({
    arrows: false,
    slidesToShow: 2,
    infinite: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".partners-slider-wrapper").slick({
    arrows: false,
    slidesToShow: 5,
    infinite: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });
  $(window).on("resize orientationchange", function () {
    $(".js-slider").slick("resize");
  });
});
