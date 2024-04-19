// hamburger = document.querySelector(".hamburger");
// hamburger.onclick = function(){
//     navBar = document.querySelector(".nav-bar");
//     navBar.classList.toggle("active");
// }


let header = document.querySelector('header');

window.addEventListener('scroll', () =>{ header.classList.toggle('shadow', window.scrollY > 0);
});
