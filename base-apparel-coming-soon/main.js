const complexEmailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const email=document.querySelector('input.email');
const btn=document.querySelector('button.accept');
const error=document.querySelectorAll('.error');

const check=(e)=> {
    e.preventDefault();
    if(complexEmailRegex.test(email.value)) {
        email.value="";
        email.style.border="1px solid hsl(0, 36%, 70%)";
        error.forEach(function(el) {
            el.style.display="none";
        })
    }
    else {
        email.style.border="2px solid red";
        error.forEach(function(el) {
            el.style.display="block";
        })
    }
}

btn.addEventListener('click', check);