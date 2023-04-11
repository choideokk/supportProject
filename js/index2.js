let timer;
let isCounting = false;

const firstNum = document.querySelector(".rightWing .firstNum");
const secondNum = document.querySelector(".rightWing .secondNum");
const thirdNum = document.querySelector(".rightWing .thirdNum");
const companyInfoWrapper = document.querySelector(".companyInfoBottom .rightWing");

const eventPercent = document.querySelector(".percent span");
const eventCarouselInner = document.querySelector(".eventBLWrapper ul");
const goLeftBtn = document.querySelector(".goLeftBtn");
const goRightBtn = document.querySelector(".goRightBtn");

const companyInfoH1 = document.querySelector(".companyInfoWrapper h1");
const firstH1 = document.querySelector(".firstH1");
const secondH1 = document.querySelector(".secondH1");
const lastH1 = document.querySelector(".lastH1");

// 이벤트 슬라이드 왼쪽 이동
goLeftBtn.addEventListener("click", () => {
    eventCarouselInner.classList.add("goLeft");
    eventCarouselInner.classList.remove("goRight");
    eventPercent.style.transform = "translateX(0)";
})

// 이벤트 슬라이드 오른쪽 이동
goRightBtn.addEventListener("click", () => {
    eventCarouselInner.classList.add("goRight");
    eventCarouselInner.classList.remove("goLeft");
    eventPercent.style.transform = `translateX(50%)`;
})

// 위에서 아래로 스크롤할 때
let waypoint1 = new Waypoint({
    element: firstNum,
    handler: function (direction) {
        if (direction === "down") {
            countUp2(firstNum, 60);
            countUp2(secondNum, 40);
            countUp2(thirdNum, 15);
        }
    },
    offset: 'bottom-in-view'
})

// 아래에서 위로 스크롤할 때
let waypoint2 = new Waypoint({
    element: thirdNum,
    handler: function (direction) {
        if (direction === "up") {
            countUp2(firstNum, 60);
            countUp2(secondNum, 40);
            countUp2(thirdNum, 15);
        }
    },
    offset: '80px'
})

// 스크롤 시에 화면에 보이면 이벤트 추가
window.onscroll = () => {
    scrollAniEvent(companyInfoH1);
    scrollAniEvent(firstH1);
    scrollAniEvent(secondH1);
    scrollAniEvent(lastH1);
}

function countUp2(element, interval) {
    const max = element.dataset.num;
    let now = 0;

    // 실행중이면 리턴
    if (element.textContent != 0 && element.textContent != max) return;

    // 0으로 초기화
    element.textContent = 0;

    const handler = setInterval(() => {
        // 목표에 도달하면 정지
        if (now == max) {
            clearInterval(handler);
            return;
        }
        now++;
        element.textContent = now;
    }, interval);
}

// 화면에 보이면 fadeInUp 애니메이션 추가
function scrollAniEvent(element) {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight && elementTop > 0) {
        element.classList.add("animate__fadeInUp");
    } else {
        element.classList.remove("animate__fadeInUp");
    }
}