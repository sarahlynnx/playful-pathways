
$(document).ready(function () {
  $('.img-carousel').owlCarousel({
    items: 3,
    center: false,
    loop: true,
    margin: 5,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      }
    }
  });

  $('.quotes-carousel').owlCarousel({
    items: 1,
    center: true,
    loop: true,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });
});
