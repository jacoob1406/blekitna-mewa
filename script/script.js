$(document).ready(function() {

  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top + 60
    }, 500);
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
    $('#listr').css({'left': 0})
  });
});
