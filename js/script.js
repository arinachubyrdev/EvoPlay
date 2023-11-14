$(document).ready(function () {
  function initOwlCarousel() {
    $(".posts .owl-carousel").owlCarousel({
      dots: true,
      smartSpeed: 1000,
      loop: true,
      responsive: {
        0: {
          items: 1,
          margin: 10,
        },
        600: {
          items: 2,
          margin: 20,
        },
      },
    });
  }

  if (window.innerWidth <= 768) {
    initOwlCarousel();
  }
  $(window).on("resize", function () {
    if (window.innerWidth <= 768) {
      if (!$(".posts .owl-carousel").hasClass("owl-loaded")) {
        initOwlCarousel();
      }
    } else {
      if ($(".posts .owl-carousel").hasClass("owl-loaded")) {
        $(".posts .owl-carousel").trigger("destroy.owl.carousel");
      }
    }
  });
});
