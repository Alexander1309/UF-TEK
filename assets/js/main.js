const iconOpen = document.getElementById("iconOpen");
const iconClose = document.getElementById("iconClose");
const menu = document.getElementById("menu");

function openMenu() {
  menu.classList.add("show");
  menu.style.zIndex = "-1";

  iconOpen.style.display = "none";
  iconClose.style.display = "block";
}

function closeMenu() {
  menu.classList.add("hide");
  setTimeout(() => {
    menu.classList.remove("show", "hide");
    menu.style.zIndex = "-1";
  }, 300);

  iconOpen.style.display = "block";
  iconClose.style.display = "none";
}

iconOpen.addEventListener("click", openMenu);
iconClose.addEventListener("click", closeMenu);
