const menu = document.querySelector(".menu");
const menuBtn = document.querySelector("#hidden-menu");
const hiddenMenu = document.querySelector(".menu-links");
const hiddenMenuLinks = hiddenMenu.querySelectorAll("li");
const menuBtnLastLine = menuBtn.querySelector("#line-3");
const header = document.querySelector("header");

// При кликане на menu/x-icon/линковете в менюто, полето се появява или скрива //

function showHideMenu() {
 
   menu.classList.toggle("active");
   menuBtnLastLine.classList.toggle("active");
   
};



hiddenMenuLinks.forEach((hiddenLink) => {

hiddenLink.addEventListener("click", showHideMenu);

});


menuBtn.addEventListener("click", showHideMenu);




   







