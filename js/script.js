let header = document.getElementById("header");
let mobileMenuJs = document.getElementById("mobile-menu-js");
let hamburgerIcon = document.getElementById("hamburger-icon-js");
let exitIcon = document.getElementById("exit-icon-js");

hamburgerIcon.addEventListener('click', () => {
    mobileMenuJs.classList.remove("remove");
    header.classList.add("remove");
});

exitIcon.addEventListener('click', () => {
    mobileMenuJs.classList.add("remove");
    header.classList.remove("remove");
});