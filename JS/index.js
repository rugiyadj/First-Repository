const burger = document.querySelector(".burger")
const nav = document.querySelector(".header_nav")
burger.addEventListener("click", () => {
    burger.classList.toggle("burger__active")
    nav.classList.toggle("header_nav_active")
})