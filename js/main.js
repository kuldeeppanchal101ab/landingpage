$(document).ready(function () {
  /* hamburger menu toggle - start */
  $(".navbar-light .navbar-toggler").on("click", function () {
    const navbarTimer = setTimeout(() => {
      $(this).hasClass("collapsed")
        ? $(".navbar-toggler-menu-icon").removeClass("open")
        : $(".navbar-toggler-menu-icon").addClass("open");
    }, 5);
    return () => clearTimeout(navbarTimer);
  });
  /* hamburger menu toggle - end */

  /* slick slider - start */
  $(".showcase-slider-wrapper").slick({
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    dots: true,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    fade: true
  });

  $(".how-it-works-wrapper").slick({
    arrows: false,
    slidesToShow: 3,
    infinite: false,
    dots: false,
    // adaptiveHeight: true,
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
    $(".slick-slider").slick("resize");
  });
  /* slick slider - end */
});
