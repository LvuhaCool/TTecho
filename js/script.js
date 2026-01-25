// Переменные
// Определение мобильного устройтсва
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// Для слайдера
const sliderContainer = document.querySelector(".slider");
const sliderImg = Array.from(document.querySelectorAll(".slider__img"));
const sliderBack = document.querySelector(".slider__back-btn");
const sliderForward = document.querySelector(".slider__forward-btn");
const sliderDotContainer = document.querySelector(".slider-dots");
// Для меню
const hamburgerBtn = document.querySelector(".hamburger-menu__btn");
const adaptiveNav = document.querySelector(".hamburger-menu__nav");
const sliderMargin = document.querySelector(".slider");
// Для секции "О нас"
const moreTextParagraph = document.querySelector(".about__text_more");
const showMore = document.querySelector(".about__unfold");
const showLess = document.querySelector(".about__fold");
// Для отображения аккордеона на кнопке "Популярное"
const accordionTriggerText = document.querySelector("#accordionHeading");
const accordionContainer = document.querySelector(".popular-accordion__show-hide");
const accordionOptions = document.querySelectorAll(".popular-accordion__option");
// Для кнопки "показать еще" на главной странице
const showMoreCardsBtn = document.querySelector(".cards__show-more-btn");
const cardsContainer = document.querySelector(".cards");
// Для футера
const footer = document.querySelector("footer");
const ball = document.querySelector(".footer-ball");
let targetX = 0;
let targetY = 0;
let xPos = 0;
let yPos = 0;
footer.addEventListener("mousemove", ballFun);
function ballFun(e) {
    const rect = footer.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;
}
function animate() {
    xPos += (targetX - xPos) * 0.1;
    yPos += (targetY - yPos) * 0.1;
    ball.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    requestAnimationFrame(animate);
}
if (isMobile) {
    footer.removeEventListener("mousemove", ballFun);
    ball.classList.add("mobile-hidden");
}
animate();
// Проверка на мобильное устройство или десктоп
window.onload = () => {
    if (isMobile) {
        sliderBack.classList.add("none");
        sliderForward.classList.add("none");
    }
    sliderImg.forEach((img, index) => {
        img.style.transform = `translateX(${index * 100}%)`;
    });
    changeSlide();
};
// Движение мячика в футере

sliderBack.addEventListener("click", sliderEventHandlerBack);
sliderForward.addEventListener("click", sliderEventHandlerForward);
// Адаптивное меню-гамбургер
let hamburgerFun = () => {
    sliderMargin.classList.toggle("active");
    adaptiveNav.classList.toggle("visible");
}
hamburgerBtn.addEventListener("click", hamburgerFun);
// Слайдер
let currentSliderIndex = 0;
let sliderTimer;
function sliderEventHandlerBack() {
    sliderBackFun();
    dotChanging();
    changeSlide();
}
function sliderEventHandlerForward() {
    sliderForwardFun();
    dotChanging();
    changeSlide();
}
// Точки для слайдера, меняющие цвет
function addSliderDots() {
    sliderDotContainer.insertAdjacentHTML("beforeend", '<div class="slider-dot"></div>');
}
let dotCount = sliderImg.length;
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
            changeSlide();
            dotChanging();
        }, 75);
    });
});
// Автоматика слайдера
function sliderBackFun() {
    currentSliderIndex = currentSliderIndex - 1;
    if (currentSliderIndex < 0) {
        currentSliderIndex = sliderImg.length - 1;
    }
}
function sliderForwardFun() {
    currentSliderIndex = currentSliderIndex + 1;
    if (currentSliderIndex >= sliderImg.length) {
        currentSliderIndex = 0;
    }
}
function changeSlide() {
    sliderImg.forEach((element, index) => {
        element.style.transform = `translateX(${(index - currentSliderIndex) * 100}%)`;
    });
}
// Гармошка для описания "О нас"
showMore.addEventListener("click", unfoldFunction)
function unfoldFunction() {
    moreTextParagraph.classList.add("expanded");
    showMore.classList.add("invisible");
}
showLess.addEventListener("click", foldFunction)
function foldFunction() {
    moreTextParagraph.classList.remove("expanded");
    showMore.classList.remove("invisible");
}
// Аккордеон для популярных категорий товаров
const accordionFirstFun = () => {
    accordionContainer.classList.toggle("visible");
    accordionOptions.forEach(element => {
        element.classList.toggle("visible");
    });
}
const accordionSecondFun = () => {
    accordionContainer.classList.toggle("visible");
    accordionOptions.forEach(element => {
        element.classList.toggle("visible");
    });
}
accordionTriggerText.addEventListener("mouseenter", accordionFirstFun);
accordionTriggerText.addEventListener("mouseleave", accordionFirstFun);
accordionContainer.addEventListener("mouseenter", accordionFirstFun);
accordionContainer.addEventListener("mouseleave", accordionFirstFun);
// Функция кнопки "еще" на главной
showMoreCardsBtn.addEventListener("click", showMoreCardsFun);
function showMoreCardsFun() {
    const cardsSnippet = `<div class="card">
                    <div class="card__picture-wrapper">
                        <img src="./img/tenergy-test-good.png" alt="Tenergy 05" class="card__picture">
                    </div>
                    <div class="card__content">
                        <span class="card__name">Butterfly Tenergy 05</span>
                        <div class="card__prices">
                            <div class="card__price active">5000₽</div>
                            <div class="card__price inactive">6000₽</div>
                        </div>
                    </div>
                </div>`;
    for (i = 0; i < 12; i++) {
        cardsContainer.insertAdjacentHTML("beforeend", cardsSnippet);
    }
}