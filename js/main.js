$(function(){ 
  /*
1. fixed header
------------
*/
  $(window).scroll(function(){
    var sticky = $('.header__inner'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 850) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
  });

   /*
2. special slider
------------
*/

    $('.special__inner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
        
      });
   /*
3. menu tab
------------
*/

    $('.menu__content .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
	$('.menu__content').find('.menu__item-items').removeClass('active-tab').hide();
	$('.menu__content .menu__content-btn').find('.tab').removeClass('active');
	$(this).addClass('active');
	$('#'+id).addClass('active-tab').fadeIn();
	return false;
});

   /*
4. galerie slider
------------
*/
$('.galerie__inner-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        
      }
    },
    
    {
      breakpoint: 651,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }, 
  ]
});
   /*
5. show btn
------------
*/
$('.header__menu-btn').on('click', function(){
  $('.menu__list').slideToggle();
});
/*
6. anchor link
--------------
*/
$('#nav a[href^="#"]').on('click', function(event) {
  $('.navActive').removeClass('navActive');
  $(this).addClass('navActive');
  
  var target = $(this.getAttribute('href'));; 
  if( target.length ) {
      event.preventDefault();

      console.log($("body").scrollTop, target.offset().top)
      $('html').animate({
        scrollTop: target.offset().top
      }, 1000);
  }

});
 
});