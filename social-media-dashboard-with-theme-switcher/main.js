const checkbox = document.getElementById("checkbox");
const theme = document.querySelector(".theme-name");
const body = document.body;

checkbox.addEventListener("change", () => {
  //change the theme of the website
  body.classList.toggle("dark");
  body.classList.toggle("light");

  if (body.classList.contains("dark")) {
    theme.textContent = "Dark Mode";
  } else if (body.classList.contains("light")) {
    theme.textContent = "Light Mode";
  }
});
