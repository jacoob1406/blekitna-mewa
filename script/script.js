$(document).ready(function() {

  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 40
    }, 500);
  });


  $('#click_apartments').click(function() {
    console.log('hello');
    $('#listr').css({'left': 0})
  });
});
