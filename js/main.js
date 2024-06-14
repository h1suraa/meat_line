/*---prallax for index---*/

let bg = document.querySelector('.header__bg');
let logo = document.querySelector('.header__logo');

document.onmousemove = (e)=>{
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  bg.style.transform = "translate(-" + x * 30 + "px, -" + y * 30 + "px)";
  logo.style.transform = "translate(-" + x * 35 + "px, -" + y * 35 + "px)";
};







document.querySelector('.reserve__button_wrapper').addEventListener("click", function(){
  document.querySelector('header').classList.add("open")
})

document.querySelector('.reserve__close').addEventListener('click', function(){
  document.querySelector('header').classList.remove("open")
})