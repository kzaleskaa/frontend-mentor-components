const menu = document.getElementById("menu");
const toggle = document.querySelector(".toggle");

const showMenu = () => {
  let toggleAtribute = toggle.getAttribute("aria-expanded");

  if (toggleAtribute == "true") toggleAtribute = "false";
  else toggleAtribute = "true";

  toggle.setAttribute("aria-expanded", toggleAtribute);
};

const resizeWindow = () => {
  if (this.window.innerWidth >= 1024) {
    toggle.setAttribute("aria-expanded", false);
  }
};

toggle.addEventListener("click", showMenu);
window.addEventListener("resize", resizeWindow);
