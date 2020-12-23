$(document).ready(function(){
  
  let containerEL = document.querySelector("#project-card");

  let mixer = mixitup(containerEL, {
    classNames: {
      block: ""
    }
  })
});

/* form placeholder */
const formItems = document.querySelector(".email");

for (let item of formItems){
  const thisParent = item.closest(".form-email");
  const thisPlaceholder = thisParent.querySelector(".fake-placeholder");

  /* если инпут в фокусе */
  item.addEventListener("focus", function(){
    thisPlaceholder.classList.add("active");
  });

  /* если инпут теряет фокус */
  item.addEventListener("blur", function(){

    if(item.value.length > 0){
      thisPlaceholder.classList.add("active");
    }
    else{
      thisPlaceholder.classList.remove("active");
    }
  })
}
