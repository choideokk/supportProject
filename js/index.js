let count = 0;
const vidTxtArr = ["동물들을 위한 캠페인", "미래세대를 위한 지구를 지키는 캠페인"];

const vidPlayer = document.querySelector(".vidPlayer video");
const vidTxt = document.querySelector(".vidPlayer .vidTxt");
const vidCarousel = document.querySelector(".vidPlayer .vidCarousel");
const prevBtn = document.querySelector(".vidPlayer .prevBtn");
const nextBtn = document.querySelector(".vidPlayer .nextBtn");

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
