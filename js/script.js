let header = document.getElementById("header");
let mobileMenu = document.getElementById("mobile-menu-2");
let navBlack = document.getElementById("nav-black");
let mobileMenuOpen = document.getElementById("mobile-menu-1");

mobileMenu.addEventListener('click', () => {
    navBlack.classList.remove("remove");
    header.classList.add("remove");
});

mobileMenuOpen.addEventListener('click', () => {
    navBlack.classList.add("remove");
    header.classList.remove("remove");
});