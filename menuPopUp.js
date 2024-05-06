const menu = document.querySelector(".menu");
const menuBtn = document.querySelector("#hidden-menu");

// При кликане на меню бутона полето се появява и скрива //

menuBtn.addEventListener("click", () => {

   if(menu.style.top == "0%") {
    
      menuBtnLastLine.classList.add("active");
      menu.style.top = "15%";
      
   } else {
      menuBtnLastLine.classList.remove("active");
    menu.style.top = "0%";
    
   }

});

// При кликане на някой от линковете в менюто, полето отново се скрива //

const hiddenMenu = document.querySelector(".menu-links");
const hiddenMenuLinks = hiddenMenu.querySelectorAll("li");
const x_Icon = menu.querySelector(".X-icon");
const menuBtnLastLine = menuBtn.querySelector("#line-3");
const allButtons = document.querySelectorAll("button");



function hideMenu() {

   menu.style.top = "0%";
   menuBtnLastLine.classList.toggle("active");
   x_Icon.classList.toggle("active");

};


hiddenMenuLinks.forEach((hiddenLink) => {

hiddenLink.addEventListener("click",hideMenu);

});
x_Icon.addEventListener("click",hideMenu);






