const share = document.querySelector(".article__btn-share");
const socials = document.querySelector(".article__socials");
const text = document.querySelector(".article__share-text");

window.onclick = function (event) {
  let ariaBtn = share.getAttribute("aria-expanded");

  if (event.target == share) {
    if (ariaBtn == "false") {
      share.setAttribute("aria-expanded", "true");
    } else {
      share.setAttribute("aria-expanded", "false");
    }
    socials.classList.toggle("hidden");
  } else if (
    event.target != socials &&
    event.target != text &&
    ariaBtn == "true"
  ) {
    share.setAttribute("aria-expanded", "false");
    socials.classList.add("hidden");
  }
};
