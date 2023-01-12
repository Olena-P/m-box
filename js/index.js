window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};

function burgerMenu(selector) {
  let menu = document.querySelector(selector);
  let button = menu.querySelector(".burger-menu_button");
  let body = document.querySelector("body");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  function toggleMenu() {
    if (menu.classList.contains("header-nav_active")) {
      menu.classList.remove("header-nav_active");
      body.style.overflow = "visible";
    } else {
      menu.classList.add("header-nav_active");
      body.style.overflow = "hidden";
    }
  }
}

burgerMenu(".header");
