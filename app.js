const toggleIcon = document.querySelector("#navbar-toggle-icon-container");
const navbarMenuList = document.querySelector("#navbar-menu-list");
const nameHeaderElement = document.querySelector("#name-h1-element");
const nameText = "adriano díaz benítez";
let start = 0;

// Add click event on toggle icon and show/hide navbar menu list
toggleIcon.addEventListener("click", () => {
  navbarMenuList.classList.toggle("nav__active");
});

// Name typewrite effect
const typewrite = () => {
  if (start < nameText.length) {
    nameHeaderElement.innerHTML += nameText.charAt(start++);
    setTimeout(typewrite, 100);
  }
};

typewrite();
