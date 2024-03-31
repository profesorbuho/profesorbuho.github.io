// Mobile menu
const body = document.querySelector("body");
const navbar = document.querySelector("#navbar");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const navlinks = document.querySelectorAll(".navlink");

openMenu.addEventListener("click", () => {
    navbar.classList.toggle("visible");
    body.setAttribute("style", "overflow: hidden;");
});

closeMenu.addEventListener("click", () => {
    navbar.classList.toggle("visible");
    body.removeAttribute("style");
});

const navlinksArray = Array.from(navlinks);
navlinksArray.forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("visible");
        body.removeAttribute("style");
    });
});