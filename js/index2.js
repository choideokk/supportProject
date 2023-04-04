let timer;
let isCounting = false;
const firstNum = document.querySelector(".rightWing .firstNum");
const secondNum = document.querySelector(".rightWing .secondNum");
const thirdNum = document.querySelector(".rightWing .thirdNum");
const companyInfoWrapper = document.querySelector(".companyInfoWrapper .rightWing");

const eventPercent = document.querySelector(".percent span");
const eventCarouselInner = document.querySelector(".eventBLWrapper ul");
const goLeftBtn = document.querySelector(".goLeftBtn");
const goRightBtn = document.querySelector(".goRightBtn");

const companyInfoH1 = document.querySelector(".companyInfoWrapper h1");
const firstH1 = document.querySelector(".firstH1");
const secondH1 = document.querySelector(".secondH1");
const lastH1 = document.querySelector(".lastH1");

goLeftBtn.addEventListener("click", () => {
    eventCarouselInner.style.transform = "translateX(0)";
    eventPercent.style.transform = "translateX(0)";
})
goRightBtn.addEventListener("click", () => {
    eventCarouselInner.style.transform = `translateX(-${(100 / 3)}%)`;
    eventPercent.style.transform = `translateX(50%)`;
})

window.onscroll = () => {
    const infoTop = companyInfoWrapper.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (infoTop < windowHeight && infoTop > 0) {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                countUp();
            }, 200)
        }
    } else {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                countReset();
            }, 200)
        }
    }

    scrollAniEvent(companyInfoH1);
    scrollAniEvent(firstH1);
    scrollAniEvent(secondH1);
    scrollAniEvent(lastH1);
}

function countUp() {
    let firstCount = 0;
    let secondCount = 0;
    let thirdCount = 0;

    if (isCounting === true) return;
    if (firstNum.textContent === "33") return;
    if (secondNum.textContent === "52") return;
    if (thirdNum.textContent === "148") return;

    isCounting = true;
    const firstInterval = setInterval(() => {
        firstNum.textContent = `${firstCount++} `;
        if (firstCount === 34) {
            clearInterval(firstInterval);
        };
    }, 50);


    const secondInterval = setInterval(() => {
        secondNum.textContent = `${secondCount++} `;
        if (secondCount === 53) {
            clearInterval(secondInterval);
        };
    }, 30);

    const thirdInterval = setInterval(() => {
        thirdNum.textContent = `${thirdCount++} `;
        if (thirdCount === 149) {
            clearInterval(thirdInterval);
        };
    }, 11);
}

function countReset() {
    firstNum.textContent = 0;
    secondNum.textContent = 0;
    thirdNum.textContent = 0;
    isCounting = false;
}

function scrollAniEvent(element) {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight && elementTop > 0) {
        element.classList.add("animateOne");
    } else {
        element.classList.remove("animateOne");
    }
}