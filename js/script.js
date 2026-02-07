// Переменные
// Массив карточек
const data = [
    {
        id: 0,
        img: "./img/card-images/dignics-05.jpg",
        alt: "Dignics 05",
        name: "Butterfly Dignics 05",
        price: "8000",
        inactivePrice: "10000₽",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "rubber",
    },
    {
        id: 1,
        img: "./img/card-images/dignics-09c.webp",
        alt: "Dignics 09c",
        name: "Butterfly Dignics 09c",
        price: "9000",
        inactivePrice: "11000₽",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "rubber",
    },
    {
        id: 2,
        img: "./img/card-images/tenergy-05.png",
        alt: "Tenergy 05",
        name: "Butterfly Tenergy 05",
        price: "7000",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "rubber",
    },
    {
        id: 3,
        img: "./img/card-images/tenergy-19.jfif",
        alt: "Tenergy 19",
        name: "Buttefly Tenergy 19",
        price: "9000",
        inactivePrice: "10000₽",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "rubber",
    },
    {
        id: 4,
        img: "./img/card-images/viscaria.jpg",
        alt: "Viscaria",
        name: "Butterfly Viscaria",
        price: "15000",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "blade",
    },
    {
        id: 5,
        img: "./img/card-images/tb-alc.jpg",
        alt: "Timo Boll ALC",
        name: "Butterfly Timo Boll ALC",
        price: "20000",
        inactivePrice: "21000₽",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "blade",
    },
    {
        id: 6,
        img: "./img/card-images/tb-zlc.webp",
        alt: "Timo Boll ZLC",
        name: "Butterfly Timo Boll ZLC",
        price: "21500",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "blade",
    },
    {
        id: 7,
        img: "./img/card-images/feint-long-3.jpg",
        alt: "Feint Long III",
        name: "Butterfly Feint Long III",
        price: "9000",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "rubber",
    },
    {
        id: 8,
        img: "./img/card-images/feint-long-2.jfif",
        alt: "Feint Long II",
        name: "Butterfly Feint Long II",
        price: "8000",
        inactivePrice: "8500₽",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "rubber",
    },
    {
        id: 9,
        img: "./img/card-images/mizuno-wave-drive-9-white.jfif",
        alt: "Mizuno wave drive 9",
        name: "Mizuno wave drive 9",
        price: "12000",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "shoe",
    },
    {
        id: 10,
        img: "./img/card-images/mizuno-wave-drive-neo-3-black.jfif",
        alt: "Mizuno wave drive neo 3",
        name: "Mizuno wave drive neo 3",
        price: "13000",
        inactivePrice: "15000₽",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "shoe",
    },
    {
        id: 11,
        img: "./img/card-images/zyre-03.jpg",
        alt: "Zyre 03",
        name: "Butterfly Zyre 03",
        price: "15000",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "rubber",
    },
    {
        id: 12,
        img: "./img/card-images/bleugrip-c1.jpg",
        alt: "BlueGrip C1",
        name: "Butterfly BlueGrip C1",
        price: "8000",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "rubber",
    },
    {
        id: 13,
        img: "./img/card-images/bluegrip-c2.jpg",
        alt: "BlueGrip C2",
        name: "Butterfly BlueGrip C2",
        price: "8000",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "rubber",
    },
    {
        id: 14,
        img: "./img/card-images/skachkov-carbon.jpg",
        alt: "Skachkov Carbon",
        name: "Donic Skachkov Carbon",
        price: "6000",
        inactivePrice: "6500₽",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "blade",
    },
    {
        id: 15,
        img: "./img/card-images/bt-shoe.jfif",
        alt: "Butterfly Shoe",
        name: "Butterfly Shoe",
        price: "15000",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "shoe",
    },
    {
        id: 16,
        img: "./img/card-images/tenergy-05fx.jpg",
        alt: "Tenergy 05-FX",
        name: "Butterfly Tenergy 05-FX",
        price: "7500",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "rubber",
    },
    {
        id: 17,
        img: "./img/card-images/killer.jpg",
        alt: "Killer",
        name: "Killer шипы",
        price: "4000",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "rubber",
    },
    {
        id: 18,
        img: "./img/card-images/doctor-ko.png",
        alt: "Dr. Neubauer KO",
        name: "Dr. Neubauer KO",
        price: "6000",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "rubber",
    },
    {
        id: 19,
        img: "./img/card-images/petr-korbel.jfif",
        alt: "Petr Korbel JP",
        name: "Donic Petr Korbel JP",
        price: "9000",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "blade",
    },
    {
        id: 20,
        img: "./img/card-images/primorac.jpg",
        alt: "Primorac",
        name: "Donic Primorac",
        price: "10000",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "blade",
    },
    {
        id: 21,
        img: "./img/card-images/rozena.jpg",
        alt: "Rozena",
        name: "Butterfly Rozena",
        price: "8000",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "rubber",
    },
    {
        id: 22,
        img: "./img/card-images/ovtcharov-carbon.jpg",
        alt: "Ovtcharov Carbon",
        name: "Donic Ovtcharov Carbon",
        price: "12000",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "blade",
    },
    {
        id: 23,
        img: "./img/card-images/donic-desto.jpg",
        alt: "Donic Desto",
        name: "Donic Desto",
        price: "4500",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "rubber",
    },
    {
        id: 24,
        img: "./img/card-images/donic-waldner.jpg",
        alt: "Donic Waldner",
        name: "Donic Waldner",
        price: "7500",
        inactivePrice: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores dolores similique vel officiis laborum iure consequuntur aliquid veniam a voluptas nesciunt, unde et inventore, mollitia nisi impedit ipsam enim pariatur facere dolorum distinctio! Eveniet asperiores tenetur, aliquid assumenda provident nisi quod quidem voluptatum inventore!",
        type: "blade",
    },
];
const bladeLink = document.querySelectorAll(".blade");
const rubberLink = document.querySelectorAll(".rubber");
const shoeLink = document.querySelectorAll(".shoe");
const clothingLink = document.querySelectorAll(".clothing");
const showWholeCatalogue = document.querySelector(".whole-catalogue h2");
const showWholeCatalogueMobile = document.querySelector(".popular-goods_small__main-heading--sub");
let activeCategory = null;
showWholeCatalogue.addEventListener("click", () => {
    activeCategory = null;
    cardsContainer.innerHTML = "";
    shownCardsCount = 0;
    render();
});
showWholeCatalogueMobile.addEventListener("click", () => {
    activeCategory = null;
    cardsContainer.innerHTML = "";
    shownCardsCount = 0;
    render();
});
bladeLink.forEach(element => {
    element.addEventListener("click", () => {
        renderCategory("blade");
    })
})
rubberLink.forEach(element => {
    element.addEventListener("click", () => {
        renderCategory("rubber");
    })
})
shoeLink.forEach(element => {
    element.addEventListener("click", () => {
        renderCategory("shoe");
    })
})
clothingLink.forEach(element => {
    element.addEventListener("click", () => {
        renderCategory("clothing");
    })
})
function renderCategory(type) {
    activeCategory = type;
    cardsContainer.innerHTML = "";
    hideShowMore();
    data.forEach((element) => {
        if (type === element.type) {
            cardsContainer.insertAdjacentHTML("beforeend",
            `<div class="card" data-id="${element.id}">
    <div class="card__picture-wrapper">
        <img src="${element.img}" alt="${element.alt}" class="card__picture">
    </div>
    <div class="card__content">
        <span class="card__name">${element.name}</span>
        <div class="card__prices">
            <div class="card__price active">${element.price}₽</div>
            ${element.inactivePrice
                ? `<div class="card__price inactive">${element.inactivePrice}</div>`
                : ""}
        </div>
    </div>
</div>`
            );
        }
    })
    if (isMobile) {
        setTimeout(() => {
            closeAccordion();
        }, 100);
    };
}
let shownCardsCount = 0;
let showCardsStep = 12;
// Определение мобильного устройтсва
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// Для слайдера
const slider = document.querySelector(".slider");
const sliderImg = Array.from(document.querySelectorAll(".slider__img"));
const sliderBack = document.querySelector(".slider__back-btn");
const sliderForward = document.querySelector(".slider__forward-btn");
const sliderDotContainer = document.querySelector(".slider-dots");
let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 50;
let startX = 0;
let startY = 0;
let currentX = 0;
let deltaX = 0;
let startTime = 0;
let isDragging = false;
const DISTANCE_RATIO = 0.35;
const VELOCITY_THRESHOLD = 0.35;
// Для меню
const hamburgerBtn = document.querySelector(".hamburger-menu__btn");
const adaptiveNav = document.querySelector(".hamburger-menu__nav");
// Для поиска
const searchInput = document.querySelector("#mainSearch");
const hamburgerInput = document.querySelector("#mainHamburgerSearch");
const toggleContainer = document.querySelector(".toggle");
const header = document.querySelector("header");
const noCardsBlock = document.querySelector(".no-cards__container");
let foundCount = 0;
// Для информации о карточках
const cardInfoWrapper = document.querySelector(".card-info__wrapper");
const cardInfo = document.querySelector(".card-info");
const cardInfoImg = document.querySelector(".card-info__img img");
const cardInfoHideBtn = document.querySelector(".card-info__exit-img");
const htmlTag = document.querySelector("html");
const body = document.querySelector("body");
// Для подсказок при мобильном поиске
const toolTipContainer = document.querySelector(".search-tool-tips");
const toolTip = document.querySelectorAll(".tool-tip");
const hamburgerInputIcon = document.querySelector(".hamburger-menu__search-icon");
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
const footerLogo = document.querySelector(".footer__logo");
const footerNavigation = document.querySelector(".footer__navigation");
const footerBall = document.querySelector(".footer-ball");
const footerBallButterfly = document.querySelector(".footer-ball__butterfly");
const ballButterflyArr = [footerBall, footerBallButterfly];
const footerBallWings = document.querySelectorAll(".footer-ball__wing");
// Движение мячика в футере
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
// Увеличение размера мячика при ховере
footerLogo.addEventListener("mouseenter", resizeBallFun);
footerLogo.addEventListener("mouseleave", resizeBallBackFun);
function resizeBallFun() {
    ballButterflyArr.forEach((element) => {
        if (element.classList.contains("ball-hover")) {
            return;
        }
        else {
            element.classList.add("ball-hover");
        };
    })
    footerBallWings.forEach((element) => {
        if (element.classList.contains("ball-hover")) {
            return;
        } else {
            element.classList.add("ball-hover");
        }
    })
};
footerNavigation.addEventListener("mouseenter", resizeBallFun);
footerNavigation.addEventListener("mouseleave", resizeBallBackFun);
function resizeBallBackFun() {
    ballButterflyArr.forEach((element) => {
        if (element.classList.contains("ball-hover")) {
            element.classList.remove("ball-hover");
        }
        else {
            return;
        };
    })
    footerBallWings.forEach((element) => {
        if (element.classList.contains("ball-hover")) {
            element.classList.remove("ball-hover");
        } else {
            return;
        }
    })
}
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
// Предотвращение багов при изменении размера экрана
window.addEventListener("resize", HeaderReset);
if (screen.orientation) {
    screen.orientation.addEventListener("change", HeaderReset);
}
let resizeTimer;

function HeaderReset() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        cardsContainer.innerHTML = "";
        foundCount = 0;
        shownCardsCount = 0;
        if (searchInput.value.trim()) {
            searchRender();
        }
        else if (activeCategory) {
            renderCategory(activeCategory);
        }
        else {
            render();
        };
        noCardsBlock.classList.remove("visible");
        adaptiveNav.classList.remove("visible");
        toggleContainer.classList.remove("toggle-invisible");
        header.classList.remove("header-toggle");
    }, 200);
}
// Скрытие подсказок при фокусауте input
hamburgerInput.addEventListener("focusout", inputHideToolTips);
hamburgerInput.addEventListener("focus", inputShowToolTips);
if (hamburgerInput.value == "") {
    inputHideToolTips();
}
function inputHideToolTips() {
    toolTip.forEach((element) => {
        setTimeout(() => {
            element.style.display = "none";
        }, 150);
    })
}
function inputShowToolTips() {
    toolTip.forEach((element) => {
        element.style.display = "flex";
    })
}
// Скрытие .toggle при введение чего-либо в поле на мобиле
hamburgerInput.addEventListener("input", () => {
    if (hamburgerInput.value.trim() !== "") {
        toggleContainer.classList.add("toggle-invisible");
        header.classList.add("header-toggle");
        adaptiveNav.classList.remove("visible");
    } else {
        toggleContainer.classList.remove("toggle-invisible");
        header.classList.remove("header-toggle");
    }
});
// Скрытие мобильной клавы при нажатии Enter
hamburgerInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter" ||event.keyCode === 13) {
        hamburgerInput.blur();
    }
})
// Render
document.addEventListener("DOMContentLoaded", render);
showMoreCardsBtn.blur();
showMoreCardsBtn.addEventListener("click", () => {
    const scrollY = window.scrollY;
    render();
    window.scrollTo({ top: scrollY });
});
function render() {
    const currentArray = data.slice(shownCardsCount, shownCardsCount + showCardsStep);
    currentArray.forEach((element) => {
        cardsContainer.insertAdjacentHTML("beforeend",
            `<div class="card" data-id="${element.id}">
    <div class="card__picture-wrapper">
        <img src="${element.img}" alt="${element.alt}" class="card__picture">
    </div>
    <div class="card__content">
        <span class="card__name">${element.name}</span>
        <div class="card__prices">
            <div class="card__price active">${element.price}₽</div>
            ${element.inactivePrice
                ? `<div class="card__price inactive">${element.inactivePrice}</div>`
                : ""}
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
hamburgerInput.addEventListener("input", mobileSearch);
function searchRender() {
    hideShowMore();
    showMoreCardsBtn.classList.remove("invisible-show-more");
    foundCount = 0;
    noCardsBlock.classList.remove("visible");
    cardsContainer.innerHTML = "";
    if (searchInput.value === "") {
        cardsContainer.innerHTML = "";
        noCardsBlock.classList.remove("visible");
        shownCardsCount = 0;
        render();
        return;
    }
    data.forEach((element) => {
        if (element.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
            foundCount++;
            cardsContainer.insertAdjacentHTML("beforeend", `<div class="card" data-id="${element.id}">
    <div class="card__picture-wrapper">
        <img src="${element.img}" alt="${element.alt}" class="card__picture">
    </div>
    <div class="card__content">
        <span class="card__name">${element.name}</span>
        <div class="card__prices">
            <div class="card__price active">${element.price}₽</div>
            ${element.inactivePrice
                ? `<div class="card__price inactive">${element.inactivePrice}</div>`
                : ""}
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
        hideShowMore();
    };
};
// Мобильный поиск
function getBestMatches(data, query, limit = 4) {
    query = query.toLowerCase();
    return data.filter(item => item.name.toLowerCase().includes(query))
    .sort((a, b) => {
        const aStarts = a.name.toLowerCase().startsWith(query);
        const bStarts = b.name.toLowerCase().startsWith(query);
        return bStarts - aStarts;
    })
    .slice(0, limit);
}
function mobileSearch() {
    const value = hamburgerInput.value.trim().toLowerCase();
    if (!value) {
        toolTipContainer.classList.remove("tool-tip-container-visible");
        toolTip.forEach(tip => {
            tip.style.display = "none";
        });
        return;
    }
    toolTipContainer.classList.add("tool-tip-container-visible");
    const matches = getBestMatches(data, value, 4);
    toolTip.forEach((tip, index) => {
        const match = matches[index];
        if (!match) {
            tip.style.display = "none";
            return;
        }
        tip.style.display = "flex";
        tip.querySelector(".tool-tip__img img").src = match.img;
        tip.querySelector(".tool-tip__text").textContent = match.name;
    })
}
// Показ инфы о карточках при нажатии на всплывающие подсказки
toolTipContainer.addEventListener("pointerdown", toolTipClick);
function toolTipClick(e) {
    setTimeout(() => {
        hamburgerInput.blur();
    }, 155);
    e.preventDefault();
    const clickedToolTip = e.target.closest(".tool-tip");
    if (!clickedToolTip) return;
    const cardNameTT = clickedToolTip.querySelector(".tool-tip__text").textContent;
    const cardData = data.find(item => item.name === cardNameTT);
    if (!cardData) return;
    cardInfoWrapper.querySelector(".card-info__img img").src = cardData.img;
    cardInfoWrapper.querySelector(".card-info__heading").textContent = cardData.name;
    cardInfoWrapper.querySelector(".card-info__description").textContent = cardData.description;
    cardInfoWrapper.querySelector(".card-info__price").textContent = cardData.price + "₽";
    document.body.classList.add("card-none");
    htmlTag.classList.add("card-none");
    cardInfo.classList.add("visible-card-info");
    document.querySelector(".modal-overlay").classList.add("visible");
}
// Функция удаления кнопки "Еще"
function hideShowMore() {
    showMoreCardsBtn.classList.add("invisible-show-more");
}
// Показ информации о товаре при нажатии на карточку
cardsContainer.addEventListener("click", showCardModal);
function showCardModal(event) {
    const clickedCard = event.target.closest(".card");
    if (!clickedCard) return;
    const cardId = Number(clickedCard.dataset.id);
    const cardData = data.find(item => item.id === cardId);
    if (!cardData) return;
    cardInfoWrapper.querySelector(".card-info__img img").src = cardData.img;
    cardInfoWrapper.querySelector(".card-info__heading").textContent = cardData.name;
    cardInfoWrapper.querySelector(".card-info__description").textContent = cardData.description;
    cardInfoWrapper.querySelector(".card-info__price").textContent = cardData.price + "₽";
    document.body.classList.add("card-none");
    htmlTag.classList.add("card-none");
    cardInfo.classList.add("visible-card-info");
    document.querySelector(".modal-overlay").classList.add("visible");
};
cardInfoHideBtn.addEventListener("click", hideCardInfo);
function hideCardInfo() {
    hamburgerInput.value = "";
    document.body.classList.remove("card-none");
    htmlTag.classList.remove("card-none");
    cardInfo.classList.remove("visible-card-info");
    document.querySelector(".modal-overlay").classList.remove("visible");
    inputHideToolTips();
}
// Движение мячика в футере
sliderBack.addEventListener("click", sliderEventHandlerBack);
sliderForward.addEventListener("click", sliderEventHandlerForward);
// Адаптивное меню-гамбургер
let hamburgerFun = () => {
    if (adaptiveNav.classList.contains("visible")) {
        adaptiveNav.classList.remove("visible");
    }
    else {
        adaptiveNav.classList.add("visible");
    }
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
slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    startTime = Date.now();
    isDragging = true;
    sliderImg.forEach(img => {
        img.style.transition = "none";
    });
}, { passive: true });
slider.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - startX;
    const diffY = currentY - startY;
    if (Math.abs(diffY) > Math.abs(diffX)) {
        isDragging = false;
        return;
    }
    deltaX = diffX;
    sliderImg.forEach((img, index) => {
        img.style.transform = `translateX(calc(${(index - currentSliderIndex) * 100}% + ${deltaX}px))`;
    });
}, { passive: true });
slider.addEventListener("touchend", () => {
    if (!isDragging) return;

    isDragging = false;

    const elapsedTime = Date.now() - startTime;
    const velocity = Math.abs(deltaX) / elapsedTime;
    const slideWidth = slider.offsetWidth;

    sliderImg.forEach(img => {
        img.style.transition = "transform 0.3s ease";
    });

    if (
        Math.abs(deltaX) > slideWidth * DISTANCE_RATIO ||
        velocity > VELOCITY_THRESHOLD
    ) {
        if (deltaX < 0) {
            sliderForwardFun();
        } else {
            sliderBackFun();
        }
    }

    dotChanging();
    changeSlide();
});
function handleSwipe() {
    const deltaX = touchStartX - touchEndX;
    if (Math.abs(deltaX) < swipeThreshold) return;
    if (deltaX > 0) {
        sliderForwardFun();
    } else {
        sliderBackFun();
    }
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