const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
let slideNumber = 0;

// image slider next button

nextBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active');
});
// image slider previous button
prevBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active');
});

// image slider autoplay
let playSLider;

let repeater = () => {
    playSLider = setInterval(function () {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber++;

        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0;
        }

        slides[slideNumber].classList.add('active');
        slideIcons[slideNumber].classList.add('active');
    }, 4000);
}

repeater();
// start the image slider autoplay again on mouseout
slider.addEventListener('mouseover', () => {
    clearInterval(playSLider);
});

// stop the image slider autoplay on mouseover
slider.addEventListener('mouseout', () => {
    repeater();
});