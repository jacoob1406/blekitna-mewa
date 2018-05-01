$(window).on('load', function (){
    $('.loader-circle').fadeOut();
    $('.loader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow': 'visible' });
});


$(document).ready(function() {

  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top}, 500);
  });

  $('#menu').click(function () {
    console.log('hello');
    $('#ulnav').toggleClass('active');
});

$('#ulnav').click(function () {
    $(this).toggleClass('active');
});


  $('#click_apartments').click(function() {
    console.log('hello');
    //$('#listr').css({'left': '2.5%'});
    $('#listr').toggleClass('toggle_left');
    $('#close_plans').toggleClass('none');
    $('#open_plans').toggleClass('none');
  });
});
