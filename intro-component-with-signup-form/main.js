const fname = document.querySelector(".name");
const surname = document.querySelector(".surname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector(".forms__container");
const mailFormat =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkEmpty(fname, "First Name cannot be empty");
  checkEmpty(surname, "Last Name cannot be empty");
  checkEmail(email);
  checkEmpty(password, "Password cannot be empty");
});

const checkEmpty = (element, message) => {
  if (element.value === "") showError(element, message);
  else showSuccess(element);
};

const checkEmail = (element) => {
  if (element.value === "") showError(element, "Email cannot be empty");
  else {
    if (validateEmail(element)) showSuccess(element);
    else showError(email, "Looks like this is not an email");
  }
};

const validateEmail = (mail) => {
  if (mailFormat.test(mail.value)) {
    return true;
  }
  return false;
};

const errorSettings = (element, classAdd, classRemove, message) => {
  const errorMessage = element.parentElement.querySelector("p");
  errorMessage.innerText = message;
  element.classList.add(classAdd);
  element.classList.remove(classRemove);
};

const showError = (element, message) => {
  errorSettings(element, "error", "success", message);
};

const showSuccess = (element) => {
  errorSettings(element, "success", "error", "");
};
