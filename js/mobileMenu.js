const burgerMenu = document.querySelector(".header-container-button");
const closeButton = document.querySelector(".header__mobileMenu--button");
const mobileMenu = document.querySelector(".header__mobileMenu");
const mobileMenuList = document.querySelector(".mobileMenu__list");

burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

closeButton.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});

mobileMenuList.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});
