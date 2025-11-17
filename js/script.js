// Переменные
// Для слайдера
const currentImg = document.querySelector(".slider__current-img");
const sliderBack = document.querySelector(".slider__back-btn");
const sliderForward = document.querySelector(".slider__forward-btn");
const sliderDotContainer = document.querySelector(".slider-dots");
// Слайдер
const sliderImages = [
    "./img/slider-first.jpg",
    "./img/slider-second.jpg",
    "./img/slider-third.jpg",
    "./img/slider-fourth.webp",
];
let currentSliderIndex = 0;
sliderBack.addEventListener("click", sliderEventHandlerBack);
function sliderEventHandlerBack() {
    sliderBackFun();
    dotChanging();
}
sliderForward.addEventListener("click", sliderEventHandlerForward);
function sliderEventHandlerForward() {
    sliderForwardFun();
    dotChanging();
}
// Точки для слайдера, меняющие цвет
function addSliderDots() {
    sliderDotContainer.insertAdjacentHTML("beforeend", '<div class="slider-dot"></div>');
}
let dotCount = sliderImages.length;
for (i = 0; i < dotCount; i++) {
    addSliderDots();
}
const sliderDots = document.querySelectorAll(".slider-dot");
const sliderDotsAsArray = Array.from(sliderDots);
sliderDotsAsArray.forEach(element => {
    let index = sliderDotsAsArray.indexOf(element);
    if (index === currentSliderIndex) {
        element.style.backgroundColor = "var(--top-bottom-color)";
    }
    else {
        element.style.backgroundColor = "var(--primary-color)";
    };
});
function dotChanging() {
    sliderDotsAsArray.forEach(element => {
        let index = sliderDotsAsArray.indexOf(element);
        if (index === currentSliderIndex) {
            element.style.backgroundColor = "var(--top-bottom-color)";
        }
        else {
            element.style.backgroundColor = "var(--primary-color)";
        };
    });
};
sliderDotsAsArray.forEach((dot, index) => {
    dot.addEventListener("mouseover", function () {
        setTimeout(() => {
            currentSliderIndex = index;
            currentImg.src = sliderImages[currentSliderIndex];
            dotChanging();
        }, 75);
    });
});
function sliderBackFun() {
    currentSliderIndex = currentSliderIndex - 1;
    if (currentSliderIndex < 0) {
        currentSliderIndex = sliderImages.length - 1;
    }
    currentImg.src = sliderImages[currentSliderIndex];
}
function sliderForwardFun() {
    currentSliderIndex = currentSliderIndex + 1;
    if (currentSliderIndex >= sliderImages.length) {
        currentSliderIndex = 0;
    }
    currentImg.src = sliderImages[currentSliderIndex];
}
function loopFunction(delay, callback) {
    var loop = function() {
        callback();
        setTimeout(loop, delay);
        dotChanging();
    };
    loop();
};
setTimeout(() => {
    loopFunction(5000, sliderForwardFun);
}, 5000);