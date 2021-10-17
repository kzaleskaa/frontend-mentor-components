const share = document.querySelector(".article__btn-share");
const socials = document.querySelector(".article__socials");
const text = document.querySelector(".article__share-text");

window.onclick = function (event) {
  if (event.target == share) {
    share.classList.toggle("open");
    socials.classList.toggle("hidden");
  } else if (
    event.target != share &&
    event.target != socials &&
    share.classList.contains("open")
  ) {
    share.classList.remove("open");
    socials.classList.add("hidden");
  }
};
