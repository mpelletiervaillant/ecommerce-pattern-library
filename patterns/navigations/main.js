$('.filter a').on('click', function () {
  console.log('I was click');
  var id = $(this).attr('href');

  console.log(id);
  $('.category-all').removeClass('category-all');

    $('.button').removeClass('btn-active');

    $(this).addClass('btn-active');
    $(id).addClass('category-hidden');
  });
