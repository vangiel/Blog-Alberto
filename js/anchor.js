/**
 * Created by Daniel on 16/02/2017.
 */
$('a.continue__button').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 800);
});