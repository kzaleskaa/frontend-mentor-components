const share=document.querySelector('.article__btn-share');
const socials=document.querySelector('.article__socials');

share.addEventListener("click", function(){
    share.classList.toggle("open");
    socials.classList.toggle('hidden');
});