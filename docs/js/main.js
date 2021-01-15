$(document).ready(function(){
  
  let containerEL = document.querySelector('#project-card');

  let mixer = mixitup(containerEL, {
    classNames: {
      block: ""
    }
  })
});

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

/* //form placeholder
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
    if(item.value.lenght > 0){
      thisPlaceholder.classList.add('active');
    }

    else{
      thisPlaceholder.classList.remove('active');
    }
  })
};

// Form validate
$('.contacts-form').validate({
  rules: {
    email: {
      required: true,
      email: true
    },
    subject: {
      required: true
    },
    massage: {
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
  }
}) */
