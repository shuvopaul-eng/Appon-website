 jQuery(document).ready(function(){
        jQuery('#demo1').skdslider({
          slideSelector: '.slide',
          delay:5000,
          animationSpeed:2000,
          showNextPrev:true,
          showPlayButton:true,
          autoSlide:true,
          animationType:'fading'
        });

        jQuery('#demo2').skdslider({
          slideSelector: '.slide',
          delay:5000, 
          animationSpeed: 1000,
          showNextPrev:true,
          showPlayButton:false,
          autoSlide:true,
          animationType:'sliding'
        });
    });

    $('.autoplay').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    });

    $('.single-item').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      dots: true,
    });

    $('.top-to').click(function(){
      $('html').animate({
        scrollTop: 0
      });
    });

    $(window).scroll(function(){
      $scrolling=$(this).scrollTop();
      if($scrolling > 300){
        $('.top-to').fadeIn();
      }else{
        $('.top-to').fadeOut();
      }
    });

    $(document).ready(function(){
      $('.venobox').venobox(); 
  });

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});



$('.aaa').counterUp({
  delay: 20,
  time: 1000
});

$('.aba').counterUp({
  delay: 10,
  time: 1000
});

$('.aab').counterUp({
  delay: 15,
  time: 1000
});
$('.aa').counterUp({
  delay: 25,
  time: 1000
});



new WOW().init();


$('.testimonial-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  asNavFor: '.clint-picture'
});
$('.clint-picture').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.testimonial-text',
  dots: false,
  arrows: false,
  centerMode: true,
  centerPadding: 0,
  autoplay: true
});

$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});