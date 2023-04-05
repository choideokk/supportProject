let count = 0;
const vidTxtArr = ["따뜻하고 아름다운 세상, 당신의 나눔으로 시작됩니다.", "미래세대를 위한 지구를 지키는 캠페인에 동참하세요"];

const vidPlayer = document.querySelector(".vidPlayer video");
const vidTxt = document.querySelector(".vidPlayer .vidTxt");
const vidCarousel = document.querySelector(".vidPlayer .vidCarousel");

const noticeWrapper = document.querySelector(".inNoticesBlock .innerBlock");

const prevBtn = document.querySelector(".vidPlayer .prevBtn");
const nextBtn = document.querySelector(".vidPlayer .nextBtn");
const locateBtns = document.querySelectorAll(".locateBtn");

const subscribeForm = document.querySelector(".subscribeForm");


for (let i = 0; i < locateBtns.length; i++) {
    locateBtns[i].addEventListener("click", (e) => {
        for (btn of locateBtns) {
            btn.classList.remove("isActive");
        }
        locateBtns[i].classList.add("isActive");
        noticeWrapper.style.top = `${e.target.dataset.position}px`;
    });
}

prevBtn.addEventListener("click", () => {
    prevBtn.classList.toggle("isHidden");
    vidTxt.textContent = vidTxtArr[0];
    vidCarousel.style.transform = "translateX(0%)";
    nextBtn.classList.toggle("isHidden");
})


nextBtn.addEventListener("click", () => {
    prevBtn.classList.toggle("isHidden");
    vidTxt.textContent = vidTxtArr[1];
    vidCarousel.style.transform = "translateX(-100%)";
    nextBtn.classList.toggle("isHidden");
})

subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("제출!");
})