// toggle

const menu = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
menu.onclick = function () {
    menu.classList.toggle('active');
    navigation.classList.toggle('active');
}




// slider
const slides = document.querySelectorAll('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let i = 0;

function activateSlide(n) {
    for (slide of slides)
    slide.classList.remove('active');
    slides[n].classList.add('active');
}
// previous
prev.addEventListener('click', function () {
    if (i == 0) {
        i = slides.length - 1;
        activateSlide(i);
    } else {
        i--;
        activateSlide(i);
    }
});
// next
next.addEventListener('click', function () {
    if (i == slides.length - 1) {
        i = 0;
        activateSlide(i);
    } else {
        i++;
        activateSlide(i);
    }
});

