$(document).ready(function(){
  
  let containerEL = document.querySelector('#project-card');

  let mixer = mixitup(containerEL, {
    classNames: {
      block: ""
    }
  })

  // Подключение точек пагинации справа page-nav
	$('#page-nav').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
		begin: function () {},
		end: function () {},
		scrollChange: function ($currentListItem) {}
	});

    // Form validate
  $('.contact-form').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      subject: {
        required: true
      },
      message: {
        required: true
      }
    },

    messages: {
      email: {
        required: 'Введите email',
        email: 'отсутствует символ @'
      },
      subject: {
        required: 'Введите тему сообщения'
      },
      message: {
        required: 'Введите текст сообщения'
      }
    },

    submitHandler: function (form) {
      ajaxFormSubmit();
    }
  })

  // Функция AJAX запроса на сервер

  function ajaxFormSubmit() {
    let string = $('.contact-form').serialize(); //Сохраняем данные введенные в форму в строку

    // Формируем AJAX запрос
    $.ajax({
      type: "POST", //Тип запроса - POST
      url: "php/mail.php", //Куда отправляем запрос
      data: string, // Какие данные отправляем, в данном случае отправляем переменную string

      // Функция если все прошло успешно
      success: function (html) {
        $(".contact-form").slideUp(800);
        $('#answer').html(html);
      }
    })
    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false, чтобы прервать цепочку срабатывания остальных функций
    return false;
  }


  const toggleMenu = document.querySelector('.toggle-menu');
  const mobMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector("#overlay");
  const bodyEL = document.body;

  //клик по гамбургеру
  toggleMenu.addEventListener('click', function(){

  this.classList.toggle('active');
  mobMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  bodyEl.classList.toggle('noscroll');
  });

  //клик по мобильному меню
  mobMenu.addEventListener('click', function(){
  this.classList.remove('active');
  toggleMenu.classList.remove('active');
  overlay.classList.remove('active');
  bodyEl.classList.remove('noscroll');
  });

  //клик по overlay
  overlay.addEventListener('click', function(){
  this.classList.remove('active');
  toggleMenu.classList.remove('active');
  mobMenu.classList.remove('active');
  bodyEl.classList.remove('noscroll');
  });

  //form placeholder
  const formItems = document.querySelectorAll('.form-field');

  for(let item of formItems){
  const thisParent = item.closest('.form-item');
  const thisPlaceholder = thisParent.querySelector('.fake-placeholder');
  //Если инпут в фокусе
  item.addEventListener('focus', function(){
    thisPlaceholder.classList.add('active');
  });

  //Если инпут теряет фокус
  item.addEventListener('blur', function(){
    if(item.value.length > 0){
      thisPlaceholder.classList.add('active');
    }

    else{
      thisPlaceholder.classList.remove('active');
    }
  })
  };
  
})

    


