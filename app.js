const toggleIcon = document.querySelector("#navbar_toggle_icon_container");
const navbarMenuList = document.querySelector("#navbar_menu_list");

// Add click event on toggle icon and show/hide navbar menu list
toggleIcon.addEventListener("click", () => {
    navbarMenuList.classList.toggle('nav__active');
});
