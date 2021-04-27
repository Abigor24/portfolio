let menu = document.querySelector(".header__menu");
let dropMenu = document.querySelector(".header__drom-menu");
menu.addEventListener("click", function () {
    menu.classList.toggle("active");
    dropMenu.classList.toggle("active");
})