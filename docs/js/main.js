$(document).ready(function(){
  
  let containerEL = document.querySelector("#project-card");

  let mixer = mixitup(containerEL, {
    classNames: {
      block: ""
    }
  })
});

const toggleMenu = document.querySelector(".toggle-menu");
const mobMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector("#overlay");
const bodyEL = document.body;

toggleMenu.addEventListener("click", function(){
  
  this.classList.toggle("active");
  mobMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  bodyEl.classList.toggle("noscroll");
})
 