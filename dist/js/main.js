$(function () {
   let iconMenu = document.querySelector(".icon-menu");
   let body = document.querySelector("body");
   let menuBody = document.querySelector(".menu__body");
   if (iconMenu) {
      iconMenu.addEventListener("click", function () {
         iconMenu.classList.toggle("active");
         body.classList.toggle("lock");
         menuBody.classList.toggle("active");
      });
   }
   let move_array = [];
   if ($('*[data-move]')) {
      $.each($('*[data-move]'), function (index, val) {
         if ($(this).data('move') != '' && $(this).data('move') != null) {
            $(this).attr('data-move-index', index);
            move_array[index] = {
               'parent': $(this).parent(),
               "index": $(this).index()
            };
         }
      });
   }
   function dynamic_adaptive() {
      let w = $(window).outerWidth();
      $.each($('*[data-move]'), function (index, val) {
         if ($(this).data('move') != '' && $(this).data('move') != null) {
            let dat_array = $(this).data('move').split(',');
            let dat_parent = $('.' + dat_array[0]);
            let dat_index = dat_array[1];
            let dat_bp = dat_array[2];
            if (w < dat_bp) {
               if (!$(this).hasClass('js-move_done_' + dat_bp)) {
                  if (dat_index > 0) {
                     $(this).insertAfter(dat_parent.find('*').eq(dat_index - 1));
                  } else {
                     $(this).prependTo(dat_parent);
                  }
                  $(this).addClass('js-move_done_' + dat_bp);
               }
            } else {
               if ($(this).hasClass('js-move_done_' + dat_bp)) {
                  dynamic_adaptive_back($(this));
                  $(this).removeClass('js-move_done_' + dat_bp);
               }
            }
         }
      });
   }
   function dynamic_adaptive_back(el) {
      let index_original = el.data('move-index');
      let move_place = move_array[index_original];
      let parent_place = move_place['parent'];
      let index_place = move_place['index'];
      if (index_place > 0) {
         el.insertAfter(parent_place.find('*').eq(index_place - 1));
      } else {
         el.prependTo(parent_place);
      }
   }
   $(window).resize(function (event) {
      dynamic_adaptive();
   });
   dynamic_adaptive();

   // $('.home__decor-item').parallax();

   document.addEventListener("mousemove", parallax);
   const elem = document.querySelector("#parallax1")
   const elem1 = document.querySelector("#parallax2")
   const elem2 = document.querySelector("#parallax3")
   const elem3 = document.querySelector("#parallax4")
   const elem4 = document.querySelector("#parallax5")
   const elem5 = document.querySelector("#parallax6")
   const elem6 = document.querySelector("#parallax7")
   const elem7 = document.querySelector("#parallax8")
   const elem8 = document.querySelector("#parallax9")
   // Magic happens here
   function parallax(e) {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      console.log(x);
      elem.style.backgroundPosition = x;
      elem1.style.backgroundPosition = x;
      elem2.style.backgroundPosition = x;
      elem3.style.backgroundPosition = x;
      elem4.style.backgroundPosition = x;
      elem5.style.backgroundPosition = x;
      elem6.style.backgroundPosition = x;
      elem7.style.backgroundPosition = x;
      elem8.style.backgroundPosition = x;
   }

   $('.sale__inner').slick({
      //autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      fade: true,
      accessibility: false,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      //asNavFor:'',
      appendDots: '.sale-slider__pagination',
      appendArrows: '.sale-slider__pagination',
      nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrow-prev.svg" alt=""></button>',
      prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrow-next.svg" alt=""></button>',

      responsive: [
         {
            breakpoint: 951,
            settings: {
               arrows: false,
               autoplay: true,
            }
         },
      ]
   });
   $('.popular__inner').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      appendDots: '.popular__pagination',
      nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrow-prev.svg" alt=""></button>',
      prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrow-next.svg" alt=""></button>',
      responsive: [
         {
            breakpoint: 1167,
            settings: {
               slidesToShow: 2,
               arrows: false,
               autoplay: true,
               autoplaySpeed: 3000,
            }
         },
         {
            breakpoint: 764,
            settings: {
               slidesToShow: 1,
               arrows: false,
               autoplay: true,
               autoplaySpeed: 3000,
            }
         },
      ]
   });
   new WOW().init();
   $("#phone").mask("+7(999) 999-9999");
});