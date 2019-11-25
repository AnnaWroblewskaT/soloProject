var showMenu = document.querySelector(".show-menu");
var mobileView = document.querySelector(".menu-items");

showMenu.addEventListener('click', function () {
    mobileView.classList.toggle("mobile-view");
});