AOS.init({once: true});

var bannerSwiper = new Swiper(".bannerSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },
});

var servSlider = new Swiper(".serv-slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    320:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

var testswiper = new Swiper(".testiswiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 6000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var videoSwiper = new Swiper(".videoSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 6000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var serviceSwiper = new Swiper(".serviceSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 6000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});


var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter-outer').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});


$(document).on("scroll", function(){
  var scrollPos = $(document).scrollTop();
  if(scrollPos >= 590){
    $( ".service-tabs-wrapp" ).first().addClass('fixed');
  }else{
    $( ".service-tabs-wrapp" ).first().removeClass('fixed');
  }
});

// jQuery('.gallery').featherlightGallery({ gallery: { fadeIn: 300, fadeOut: 300 }, openSpeed: 300, closeSpeed: 300 }); jQuery('.gallery2').featherlightGallery({ gallery: { next: 'next »', previous: '« previous' }, variant: 'featherlight-gallery2' });


$(".gallerin").hide();
	$(".gallerin:first").show();
	$(".tab-switch").click(function() {
	$(".gallery-wrapp .gallerin").hide();
	var activeTab = $(this).attr("rel"); 
	$("#"+activeTab).fadeIn();		
	$(".tab-switch").removeClass("active");
	$(this).addClass("active");
    });



$(".js-video-button").modalVideo({
	youtube:{
	controls:0,
	nocookie: true
	}
	});

  jQuery(document).ready(function() {
    'use strict';
    jQuery('.videobox').flashy({
      showClass: 'fx-fadeIn',
      hideClass: 'fx-fadeOut'
    });
    });

    jQuery(document).ready(function() {
      'use strict';
      jQuery('.videobox1').flashy({
        showClass: 'fx-fadeIn',
        hideClass: 'fx-fadeOut'
      });
      });


      $('.pop-up-toggle').on('click', function(e) {
        $('.pop-up-wrapp').addClass("show"); //you can list several class names 
        e.preventDefault();
      });

      $('.close').on('click', function(e) {
        $('.pop-up-wrapp').removeClass("show"); //you can list several class names 
        e.preventDefault();
      });

      $('.overlay-toggle').on('click', function(e) {
        $('.overlay').toggleClass("show"); 
        $(this).toggleClass("active")
        e.preventDefault();
      });

      $('.read-btn').on('click', function(e) {
        $(this).closest('.author-des').toggleClass("readmore");
        $(this).toggleClass("active");
        if($(this).hasClass("active")){
        $(this).text("Read Less")
        }else{
          $(this).text("Read More")
        }
        e.preventDefault();
      });
    
      document.addEventListener('DOMContentLoaded', function() {
        var paragraphs = document.querySelectorAll('.author-des p');
  
        paragraphs.forEach(function(paragraph) {
          var style = window.getComputedStyle(paragraph);
          var paragraphHeight = paragraph.clientHeight;
          var lineHeight = parseFloat(style.lineHeight) || 1.2 * parseFloat(style.fontSize);
          var lineClamp = Math.floor(paragraphHeight / lineHeight);
          if (lineClamp <= 4) {
            var readMoreButton = paragraph.nextElementSibling;
            if (readMoreButton && readMoreButton.classList.contains('read-btn')) {
              readMoreButton.classList.add('hidden');
            }
          }
        });
      });
