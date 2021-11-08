const messages = [...document.querySelectorAll(".messages > li")];

for (let i = 0; i < messages.length; i++) {
  setTimeout(
    () =>
      messages[i].classList.contains("messages__task")
        ? (messages[i].style.display = "grid")
        : (messages[i].style.display = "block"),
    i * 900
  );
}
