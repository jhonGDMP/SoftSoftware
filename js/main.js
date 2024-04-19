//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});


//Navigation bar effects on scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () =>{ header.classList.toggle('shadow', window.scrollY > 0);
});

//Responsive navigation menu toggle

const menuBtn = document.querySelector(".nav-menu-btn");

const closeBtn = document.querySelector(".nav-close-btn");

const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

//tentativa de fazer o slide ficar automatico

// let timeRunning = 3000;
// let timeAutoNext = 7000;

// let runTimeOut;
// let runNextAuto = setTimeout(() => {
//     next.click();
// }, timeAutoNext)