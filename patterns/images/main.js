$('.button').on('click', function () {
  console.log('I was clcik');
  var id = $(this).attr('href');

  console.log(id);
  $('.image').removeClass('image-active');

    $('.button').removeClass('btn-active');

    $(this).addClass('btn-active');
    $(id).addClass('image-active');
  });
