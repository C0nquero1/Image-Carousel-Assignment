const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;
const size = images[0].clientWidth;

function updateCarousel() {
    carouselImages.style.transform = `translateX(${-size * counter}px)`;
}

nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) counter = -1;
    counter++;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) counter = images.length;
    counter--;
    updateCarousel();
});

window.addEventListener('resize', () => {
    updateCarousel();
});
function updateCarousel() {
    const size = images[0].clientWidth; // Moved the line inside the function
    carouselImages.style.transform = `translateX(${-size * counter}px)`;
}