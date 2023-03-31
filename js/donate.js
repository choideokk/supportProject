const leftSide = document.querySelector(".leftSide");
const rightSide = document.querySelector(".rightSide");
const progressCircle1 = document.querySelector(".progressBar .circle:first-child");
const progressCircle2 = document.querySelector(".progressBar .circle:last-child");
const progressLine = document.querySelector(".progressBar .line");

const directMoneyInp = document.querySelector("#moneyInp");
const totalMoneyInp = document.querySelector(".totalCost input");
const firstInfo = document.querySelector(".firstInfoWrapper");
const firstH3 = document.querySelector(".firstH3");
const secondH3 = document.querySelector(".secondH3");

const regularBtn = document.querySelector(".regularSend");
const onceBtn = document.querySelector(".onceSend");
const goNextBtn = document.querySelector(".goNextBtn");
const goBackBtn = document.querySelector(".goBackBtn");

const withdrawTxt = document.querySelector(".withdraw");
const moneyLabel = document.querySelectorAll(".moneyWrapper label input[type='radio']");

window.onload = () => {
    for (let i = 0; i < moneyLabel.length; i++) {
        moneyLabel[i].addEventListener("click", () => {
            totalMoneyInp.value = Number(moneyLabel[i].value);
        })
    }
}


directMoneyInp.addEventListener("focus", function () {
    directMoneyInp.value = "";
    for (insideRadioBtn of moneyLabel) {
        insideRadioBtn.checked = false;
    }
});

directMoneyInp.addEventListener("blur", () => {
    if (totalMoneyInp.value.trim() === "") return;

    for (mBtn of moneyLabel) {
        const insideRadioBtn = mBtn.querySelector("input[type='radio']");
    }

    totalMoneyInp.value = Number(directMoneyInp.value).toLocaleString();
    directMoneyInp.value = totalMoneyInp.value;
});

regularBtn.addEventListener("click", () => {
    withdrawTxt.classList.remove("isHidden");
})

onceBtn.addEventListener("click", () => {
    withdrawTxt.classList.add("isHidden");
})

goNextBtn.addEventListener("click", () => {
    firstH3.classList.add("isMuted");
    secondH3.classList.remove("isHidden");
    firstInfo.style.display = "flex";
    leftSide.classList.toggle("isHidden");
    rightSide.classList.toggle("isHidden");
    progressCircle1.classList.toggle("isCompleted");
    progressCircle2.classList.toggle("isCompleted2");
    progressLine.classList.toggle("isIng");
})

goBackBtn.addEventListener("click", () => {
    firstH3.classList.remove("isMuted");
    secondH3.classList.add("isHidden");
    firstInfo.style.display = "none";
    leftSide.classList.toggle("isHidden");
    rightSide.classList.toggle("isHidden");
    progressCircle1.classList.toggle("isCompleted");
    progressCircle2.classList.toggle("isCompleted2");
    progressLine.classList.toggle("isIng");
})