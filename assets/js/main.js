(function($) {
  "use strict";


  $(window).scroll(function(){
    if($(this).scrollTop() > 300){
        $('.fixed_top').addClass('d-flex')
    } else{
        $('.fixed_top').removeClass('d-flex')
    }
});
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  var swiper = new Swiper(".hero_slider", {
    direction: "vertical",
    loop: true,
      centeredSlides: true,
      roundLengths: true,
      // mousewheel: true,
      grabCursor: true,
      speed: 1000,
      loop: true,
      pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
          delay: 3000,
      },
  });

  
  var swiper2 = new Swiper(".timeline_slider", {
      loop: true,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
  });

  var swiper3 = new Swiper(".team_slider", {
      slidesPerView: 5,
      loop: true,
      speed: 1000,
      spaceBetween: 30,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      autoplay: {
          delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
  });

  $('select').niceSelect();

 
})(jQuery);
