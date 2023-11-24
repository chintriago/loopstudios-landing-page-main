const body = document.querySelector("body");
const header = document.getElementById("header");
const mobileMenuJs = document.getElementById("mobile-menu-js");
const hamburgerIcon = document.getElementById("hamburger-icon-js");
const exitIcon = document.getElementById("exit-icon-js");

hamburgerIcon.addEventListener('click', () => {
    mobileMenuJs.classList.remove("remove");
    header.classList.add("remove");
    body.classList.add("hidden");
});

exitIcon.addEventListener('click', () => {
    mobileMenuJs.classList.add("remove");
    header.classList.remove("remove");
    body.classList.remove("hidden");
});