$('html').addClass("dd-landing");

$(document).ready(function () {
  //those two lines bellow are needed to work with
  var contentSection = $('#contentSection');
  contentSection.addClass('middle-container contact-bottom-bg');

  /* hamburger menu toggle - start */
  $(".navbar-light .navbar-toggler").on("click", function () {
    const navbarTimer = setTimeout(function () {
      $(".navbar-light .navbar-toggler").hasClass("collapsed")
        ? $(".navbar-toggler-menu-icon").removeClass("open")
        : $(".navbar-toggler-menu-icon").addClass("open");
    }, 5);
    return function () { return clearTimeout(navbarTimer); };
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

  // Mobile Only Slider
  function mobileOnlySlider($slidername, $whySliderOptions, $whySliderResponsive, $breakpoint) {
    var slider = $($slidername);
    var settings = {
      mobileFirst: true,
      ...$whySliderOptions,
      responsive: [
        ...$whySliderResponsive,
        {
          breakpoint: $breakpoint,
          settings: "unslick"
        },
      ]
    };

    slider.slick(settings);

    $(window).on("resize", function () {
      if ($(window).width() > $breakpoint) {
        return;
      }
      if (!slider.hasClass("slick-initialized")) {
        return slider.slick(settings);
      }
    });
  }


  const WHY_AND_OFFER_SLIDER = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    rows: 2,
    infinite: false,
  };

  const WHY_AND_OFFER_SLIDER_RESPONSIVE = [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        rows: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        rows: 2,
      },
    },
  ];

  mobileOnlySlider(".why-sign-up-container", WHY_AND_OFFER_SLIDER, WHY_AND_OFFER_SLIDER_RESPONSIVE, 1366);
  mobileOnlySlider(".our-offer-wrapper", WHY_AND_OFFER_SLIDER, WHY_AND_OFFER_SLIDER_RESPONSIVE, 1366);

  const HOW_IT_WORK_SLIDER = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    rows: 1,
    infinite: false,
  };

  const HOW_IT_WORK_SLIDER_RESPONSIVE = [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        rows: 1,
      },
    },
  ];

  mobileOnlySlider(".how-it-works-wrapper", HOW_IT_WORK_SLIDER, HOW_IT_WORK_SLIDER_RESPONSIVE, 991);


  // $(".how-it-works-wrapper").slick({
  //   arrows: false,
  //   slidesToShow: 3,
  //   infinite: false,
  //   dots: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 576,
  //       settings: {
  //         slidesToShow: 1,
  //         dots: true,
  //       },
  //     },
  //   ],
  // });

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
