/*
  Content
*/

// Full-screen Video
$(function(){
  if($('#video').length) {
    $('body').addClass('overlay-active');
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
    $(window).resize(function(){
      $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
    });
  }
});