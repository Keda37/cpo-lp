
// появление меток при клике в инпут и заполнении его
$('.form-show-label').click( function() {
  $(this).addClass('active');
  $(this).siblings('label').fadeIn(100);
});

$('.form-show-label').focusout(function() {
  var field = $(this).val();
  var fieldtrim = $.trim(field);
  if (fieldtrim == '') {
    $(this).removeClass('active');
    $(this).val("");
    $(this).siblings('label').fadeOut(100);
  }
});

// 
$('.form-item__input').click( function() {
  $(this).addClass('active');
});

$('.form-item__input').focusout(function() {
  var field = $(this).val();
  var fieldtrim = $.trim(field);
  if (fieldtrim == '') {
    $(this).val("");
    $(this).removeClass('active');
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