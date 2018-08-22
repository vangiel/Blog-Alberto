/**
 * Created by Daniel on 16/02/2017.
 */

//Anchor

$('a.continue__button').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 800);
  $('.main-nav').addClass("fixed");
});

// Sticky menu

var scroll;
var flag = false;

$(window).scroll(function () {
  scroll = $(window).scrollTop();

  if(scroll > 400){
    if (!flag) {
      $('.main-nav').addClass("fixed");
      flag = true;
    }
  }else{
    if (flag) {
      $('.main-nav').removeClass("fixed");
      flag = false;
    }
  }
});
