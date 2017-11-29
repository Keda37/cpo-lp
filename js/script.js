// проверка email 
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// проверка на заполненность блоков
function checkSubmitButton(formInput) {
  var $form = formInput;
  var errorInput = 0;
  var email = $form.find('.mail-input').val();

  $('input[required]', $form).each(function() {
    var valueInput = $(this).val();
    var parentInput = $(this).parent();

    if (!valueInput) {
      parentInput.addClass('has-error');
      errorInput = errorInput + 1;
    } else {
      parentInput.removeClass('has-error');

      if ($(this).hasClass('mail-input')) {
        if(validateEmail(email)) {
          parentInput.removeClass('has-error');
        } else {
         parentInput.addClass('has-error');
         errorInput = errorInput + 1;
       }
     }
   }
   return errorInput;
 })
  if(errorInput == 0)  {
    return true;
  } else {
    return false;
  }
}


// отправка форм на главной

$('.submit-button').click(function(e) {
  var formInput = $(this).parents('form');
  e.preventDefault();
  if (checkSubmitButton(formInput)) {
    if ($(this).hasClass('modal__form-submit')) {
      $(this).parents('.modal__form').hide();
      $('[data-modal="ok-form"]').fadeIn(150);
    } else {
      $('.modal').fadeIn(150);
      $('[data-modal="ok-form"]').show();
    }    
  }
});



// появление меток при клике в инпут и заполнении его
$('.form-show-label').focusin( function() {
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

// обработка инпутов в красной форме
$('.form-item__input').focusin( function() {
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