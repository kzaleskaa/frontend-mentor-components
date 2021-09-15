//slider list - contains image, quote, name and position of employee 
const slideList=[{
    img: "images/image-tanya.jpg",
    text: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`,
    name: 'Tanya Sinclair',
    position: 'UX Engineer'
}, {
    img: "images/image-john.jpg",
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`,
    name: 'John Tarkpor',
    position: 'Junior Front-end Developer'
}
];

//button - next and previous slide
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');

//elements to change
const image=document.querySelector('img.slider');
const pText=document.querySelector('p.slider');
const h1=document.querySelector('h1.slider');
const h2=document.querySelector('h2.slider');

//element to animate
const textDiv=document.querySelector('.text');

//counter - current number of slide
let active=0;

//animate image and text
const animation=()=> {
    image.animate([
        { transform: 'translateY(-100%)' },
        { transform: 'translateY(0%)' }
      ], {
        duration: 900
      });
      textDiv.animate([
        { opacity: '0' },
        { opacity: '1' }
      ], {
        duration: 900
      });
}

//animate and change elements
const changeSlide=()=> {
    image.src=slideList[active].img;
    pText.textContent=slideList[active].text;
    h1.textContent=slideList[active].name;
    h2.textContent=slideList[active].position;
    animation();
}

//change slide on 'keydown' event
const keyChangeSlide=(e)=> {
   if(e.keyCode==37 || e.keyCode==39) {
       e.keyCode==37 ? active-- : active++;
       if(active<0 || active>slideList.length-1) active<0 ? active=slideList.length-1 : active=0;
    
       changeSlide();
   }
}

//change slide on 'click' event
const changeSlidePrev=()=> {
    active==0 ? active=slideList.length-1 : active--;
    changeSlide();
}

const changeSlideNext=()=> {
    active==slideList.length-1 ? active=0 : active++;
    changeSlide();
}

//first function call
changeSlide();

//event listener for buttons and window 
window.addEventListener('keydown', keyChangeSlide);
prev.addEventListener('click', changeSlidePrev);
next.addEventListener('click', changeSlideNext);