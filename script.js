const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
const caviar_names = document.querySelectorAll('#catalog-red-text, #catalog-black-text, #catalog-offer-text');
let count = 0;
let width;

function text_move() {

    console.log(count, caviar_names[count]);

    if(count == 0) {
        caviar_names[1].style.textDecoration = 'underline';
        caviar_names[0].style.textDecoration = 'none';
        caviar_names[2].style.textDecoration = 'none';
    }
    if(count == 1) {
        caviar_names[2].style.textDecoration = 'underline';
        caviar_names[0].style.textDecoration = 'none';
        caviar_names[1].style.textDecoration = 'none';
    }
    if(count == 2) {
        caviar_names[0].style.textDecoration = 'underline';
        caviar_names[1].style.textDecoration = 'none';
        caviar_names[2].style.textDecoration = 'none';
    }
}

function init() {
    // caviar_names[1].style.textDecoration = 'underline';

    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    text_move();
}

window.addEventListener("resize", function () {
    images[0].src = 'css/images/catalog-mixed.png';
    images[1].src = 'css/images/catalog-red.png';
    images[2].src = 'css/images/catalog-black.png';
    if (width < 500) {
        images[0].src = 'css/images/mobile-catalog-mixed.png';
        images[1].src = 'css/images/mobile-catalog-red.png';
        images[2].src = 'css/images/mobile-catalog-black.png';
    }
});

