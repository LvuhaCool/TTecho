// Переменные
// Массив карточек
const data = [
    {
        id: 0,
        img: "./img/card-images/dignics-05.jpg",
        alt: "Dignics 05",
        name: "Butterfly Dignics 05",
        price: "8000",
        inactivePrice: "10000₽"
    },
    {
        id: 1,
        img: "./img/card-images/dignics-09c.webp",
        alt: "Dignics 09c",
        name: "Butterfly Dignics 09c",
        price: "9000",
        inactivePrice: "11000₽"
    },
    {
        id: 2,
        img: "./img/card-images/tenergy-05.png",
        alt: "Tenergy 05",
        name: "Butterfly Tenergy 05",
        price: "7000",
        inactivePrice: ""
    },
    {
        id: 3,
        img: "./img/card-images/tenergy-19.jfif",
        alt: "Tenergy 19",
        name: "Buttefly Tenergy 19",
        price: "9000",
        inactivePrice: "10000₽"
    },
    {
        id: 4,
        img: "./img/card-images/viscaria.jpg",
        alt: "Viscaria",
        name: "Butterfly Viscaria",
        price: "15000",
        inactivePrice: ""
    },
    {
        id: 5,
        img: "./img/card-images/tb-alc.jpg",
        alt: "Timo Boll ALC",
        name: "Butterfly Timo Boll ALC",
        price: "20000",
        inactivePrice: "21000₽"
    },
    {
        id: 6,
        img: "./img/card-images/tb-zlc.webp",
        alt: "Timo Boll ZLC",
        name: "Butterfly Timo Boll ZLC",
        price: "21500",
        inactivePrice: ""
    },
    {
        id: 7,
        img: "./img/card-images/feint-long-3.jpg",
        alt: "Feint Long III",
        name: "Butterfly Feint Long III",
        price: "9000",
        inactivePrice: ""
    },
    {
        id: 8,
        img: "./img/card-images/feint-long-2.jfif",
        alt: "Feint Long II",
        name: "Butterfly Feint Long II",
        price: "8000",
        inactivePrice: "8500₽"
    },
    {
        id: 9,
        img: "./img/card-images/mizuno-wave-drive-9-white.jfif",
        alt: "Mizuno wave drive 9",
        name: "Mizuno wave drive 9",
        price: "12000",
        inactivePrice: ""
    },
    {
        id: 10,
        img: "./img/card-images/mizuno-wave-drive-neo-3-black.jfif",
        alt: "Mizuno wave drive neo 3",
        name: "Mizuno wave drive neo 3",
        price: "13000",
        inactivePrice: "15000₽"
    },
    {
        id: 11,
        img: "./img/card-images/zyre-03.jpg",
        alt: "Zyre 03",
        name: "Butterfly Zyre 03",
        price: "15000",
        inactivePrice: ""
    },
    {
        id: 12,
        img: "./img/card-images/bleugrip-c1.jpg",
        alt: "BlueGrip C1",
        name: "Butterfly BlueGrip C1",
        price: "8000",
        inactivePrice: ""
    },
    {
        id: 13,
        img: "./img/card-images/bluegrip-c2.jpg",
        alt: "BlueGrip C2",
        name: "Butterfly BlueGrip C2",
        price: "8000",
        inactivePrice: ""
    },
    {
        id: 14,
        img: "./img/card-images/skachkov-carbon.jpg",
        alt: "Skachkov Carbon",
        name: "Donic Skachkov Carbon",
        price: "6000",
        inactivePrice: "6500₽"
    },
    {
        id: 15,
        img: "./img/card-images/bt-shoe.jfif",
        alt: "Buttrfly Shoe",
        name: "Buttrfly Shoe",
        price: "15000",
        inactivePrice: ""
    },
    {
        id: 16,
        img: "./img/card-images/tenergy-05fx.jpg",
        alt: "Tenergy 05-FX",
        name: "Butterfly Tenergy 05-FX",
        price: "7500",
        inactivePrice: ""
    },
    {
        id: 17,
        img: "./img/card-images/killer.jpg",
        alt: "Killer",
        name: "Killer шипы",
        price: "4000",
        inactivePrice: ""
    },
    {
        id: 18,
        img: "./img/card-images/doctor-ko.png",
        alt: "Dr. Neubauer KO",
        name: "Dr. Neubauer KO",
        price: "6000",
        inactivePrice: ""
    },
    {
        id: 19,
        img: "./img/card-images/petr-korbel.jfif",
        alt: "Petr Korbel JP",
        name: "Donic Petr Korbel JP",
        price: "9000",
        inactivePrice: ""
    },
    {
        id: 20,
        img: "./img/card-images/primorac.jpg",
        alt: "Primorac",
        name: "Donic Primorac",
        price: "10000",
        inactivePrice: ""
    },
    {
        id: 21,
        img: "./img/card-images/rozena.jpg",
        alt: "Rozena",
        name: "Butterfly Rozena",
        price: "8000",
        inactivePrice: ""
    },
    {
        id: 22,
        img: "./img/card-images/ovtcharov-carbon.jpg",
        alt: "Ovtcharov Carbon",
        name: "Donic Ovtcharov Carbon",
        price: "12000",
        inactivePrice: ""
    },
    {
        id: 23,
        img: "./img/card-images/donic-desto.jpg",
        alt: "Donic Desto",
        name: "Donic Desto",
        price: "4500",
        inactivePrice: ""
    },
    {
        id: 24,
        img: "./img/card-images/donic-waldner.jpg",
        alt: "Donic Waldner",
        name: "Donic Waldner",
        price: "7500",
        inactivePrice: ""
    },
];
let shownCardsCount = 0;
let showCardsStep = 12;
// Определение мобильного устройтсва
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// Для слайдера
const sliderImg = Array.from(document.querySelectorAll(".slider__img"));
const sliderBack = document.querySelector(".slider__back-btn");
const sliderForward = document.querySelector(".slider__forward-btn");
const sliderDotContainer = document.querySelector(".slider-dots");
// Для меню
const hamburgerBtn = document.querySelector(".hamburger-menu__btn");
const adaptiveNav = document.querySelector(".hamburger-menu__nav");
// Для поиска
const searchInput = document.querySelector(".header__input");
const hamburgerInput = document.querySelector(".hamburger-menu__input");
const toggleContainer = document.querySelector(".toggle");
const header = document.querySelector("header");
const noCardsBlock = document.querySelector(".no-cards__container");
let foundCount = 0;
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
// Скрытие .toggle при введение чего-либо в поле на мобиле
hamburgerInput.addEventListener("input", () => {
    if (hamburgerInput.value.trim() !== "") {
        toggleContainer.classList.add("toggle-invisible");
        header.classList.add("header-toggle");
    } else {
        toggleContainer.classList.remove("toggle-invisible");
        header.classList.remove("header-toggle");
    }
});
// Скрытие мобильной клавы при нажатии Enter
hamburgerInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter" ||event.keyCode === 13) {
        hamburgerInput.blur();
        header.classList.remove("toggle-invisible");
    }
})
// Render
document.addEventListener("DOMContentLoaded", render);
showMoreCardsBtn.addEventListener("click", render);
function render() {
     if (searchInput.value != "" && cardsContainer.innerHTML != "" || hamburgerInput.value != "" && cardsContainer.innerHTML != "") {
        cardsContainer.innerHTML = "";
        searchInput.value = "";
        hamburgerInput.value = "";
    }
    const currentArray = data.slice(shownCardsCount, shownCardsCount + showCardsStep);
    currentArray.forEach((element) => {
        cardsContainer.insertAdjacentHTML("beforeend",
            `<div class="card">
                    <div class="card__picture-wrapper">
                        <img src="${element.img}" alt="${element.alt}" class="card__picture">
                    </div>
                    <div class="card__content">
                        <span class="card__name">${element.name}</span>
                        <div class="card__prices">
                            <div class="card__price active">${element.price}₽</div>
                            <div class="card__price inactive">${element.inactivePrice}</div>
                        </div>
                    </div>
                </div>`
        );
    })
    shownCardsCount += showCardsStep;
    if (shownCardsCount >= data.length) {
        hideShowMore();
    }
    else {
        showMoreCardsBtn.classList.remove("invisible-show-more");
    }
};
// Функция поиска
searchInput.addEventListener("input", searchRender);
hamburgerInput.addEventListener("input", searchRender);
function searchRender() {
     const query =
        searchInput.value !== ""
            ? searchInput.value
            : hamburgerInput.value;
    showMoreCardsBtn.classList.remove("invisible-show-more");
    foundCount = 0;
    noCardsBlock.classList.remove("visible");
    cardsContainer.innerHTML = "";
    if (query === "") {
        cardsContainer.innerHTML = "";
        noCardsBlock.classList.remove("visible");
        shownCardsCount = 0;
        render();
        return;
    }
    data.forEach((element) => {
        if (element.name.toLowerCase().includes(query.toLowerCase())) {
            foundCount++;
            cardsContainer.insertAdjacentHTML("beforeend", `<div class="card">
                    <div class="card__picture-wrapper">
                        <img src="${element.img}" alt="${element.alt}" class="card__picture">
                    </div>
                    <div class="card__content">
                        <span class="card__name">${element.name}</span>
                        <div class="card__prices">
                            <div class="card__price active">${element.price}₽</div>
                            <div class="card__price inactive">${element.inactivePrice}</div>
                        </div>
                    </div>
                </div>`);
        }
    })
    if (foundCount == 0) {
        noCardsBlock.classList.add("visible");
        hideShowMore();
    }
    else {
        noCardsBlock.classList.remove("visible");
        shownCardsCount = 0;
    }
}
// Функция удаления кнопки "Еще"
function hideShowMore() {
    showMoreCardsBtn.classList.add("invisible-show-more");
}
// Движение мячика в футере
sliderBack.addEventListener("click", sliderEventHandlerBack);
sliderForward.addEventListener("click", sliderEventHandlerForward);
// Адаптивное меню-гамбургер
let hamburgerFun = () => {
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
function openAccordion() {
    accordionContainer.classList.add("visible");
    accordionOptions.forEach(el => el.classList.add("visible"));
}

function closeAccordion() {
    accordionContainer.classList.remove("visible");
    accordionOptions.forEach(el => el.classList.remove("visible"));
}
accordionTriggerText.addEventListener("mouseenter", openAccordion);
accordionTriggerText.addEventListener("mouseleave", closeAccordion);

accordionContainer.addEventListener("mouseenter", openAccordion);
accordionContainer.addEventListener("mouseleave", closeAccordion);
