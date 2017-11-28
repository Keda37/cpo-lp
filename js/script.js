
// появление меток при клике в инпут и заполнении его
$('.form-show-label').click( function() {
  $(this).addClass('active');
  $(this).siblings('label').fadeIn(100);
});

$('.form-show-label').focusout(function() {
  var label = $(this).attr('placeholder');
  var field = $(this).val();
  var fieldtrim = $.trim(field);
  if (fieldtrim == '') {
    $(this).attr('placeholder', label);
    $(this).removeClass('active');
    $(this).val("");
    $(this).siblings('label').fadeOut(100);
  }
});

// скролл к форме регистрации
$('.button__scroll').click(function (e) {
  e.preventDefault();
  $('html,body').animate({scrollTop:$('#register').offset().top+"px"},{duration:1E3});
});

// вызов модальных окон

$('.modal__button').click(function(e) {
  e.preventDefault();
  var modalform = $(this).attr('data-form');
  $('.modal').fadeIn(150);
  $('[data-modal="'+modalform+'"]').show();
});

// закрытие модального окна
$('.modal__form-close').click(function(e) {
  e.preventDefault();
  $('.modal').fadeOut(150);
  $('[data-modal]').hide();
});