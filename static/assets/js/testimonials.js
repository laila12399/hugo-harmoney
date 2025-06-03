document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper[data-swiper="testimonials"]', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});
