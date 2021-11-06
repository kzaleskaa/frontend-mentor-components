const menu = document.getElementById("menu");
const toggle = document.querySelector(".toggle");

const showMenu = () => {
  console.log("ok");
  toggle.classList.toggle("show");
  menu.classList.toggle("show");
};

const resizeWindow = () => {
  if (this.window.innerWidth >= 1024) {
    menu.classList.remove("show");
  }
};

toggle.addEventListener("click", showMenu);
window.addEventListener("resize", resizeWindow);
