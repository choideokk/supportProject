const leftSide = document.querySelector(".leftSide");
const rightSide = document.querySelector(".rightSide");
const progressCircle1 = document.querySelector(".progressBar .circle:first-child");
const progressCircle2 = document.querySelector(".progressBar .circle:last-child");
const progressLine = document.querySelector(".progressBar .line");

const directMoneyInp = document.querySelector("#moneyInp");
const totalMoneyInp = document.querySelector(".totalCost input");
const selectInp = document.querySelector(".dnList");

const regularBtn = document.querySelector(".regularSend");
const onceBtn = document.querySelector(".onceSend");
const goNextBtn = document.querySelector(".goNextBtn");
const goBackBtn = document.querySelector(".goBackBtn");

const withdrawTxt = document.querySelector(".withdraw");
const firstInfoWrapper = document.querySelector(".firstInfoWrapper");
const firstInfo = document.querySelector(".firstInfoWrapper p");
const firstH3 = document.querySelector(".firstH3");
const secondH3 = document.querySelector(".secondH3");
const moneyLabel = document.querySelectorAll(".moneyWrapper label input[type='radio']");
const warningTxt1 = document.querySelector(".warningActTxt");
const warningTxt2 = document.querySelector(".warningMoneyTxt");

// money 버튼 누르면 총 후원금액 텍스트 바뀔수 있게
window.onload = () => {
    for (let i = 0; i < moneyLabel.length; i++) {
        moneyLabel[i].addEventListener("click", () => {
            totalMoneyInp.value = Number(moneyLabel[i].value).toLocaleString();
            directMoneyInp.value = "";
            warningTxt2.classList.add("isHidden");
        })
    }
}

// 입력할 때 천만원 이상이면 경고메세지 띄우고 입력 제한
directMoneyInp.addEventListener("keyup", () => {
    if (directMoneyInp.value.length <= 7) {
        totalMoneyInp.value = Number(directMoneyInp.value).toLocaleString();
    } else {
        directMoneyInp.value = Number(directMoneyInp.value.substr(0, 7));
        warningTxt2.textContent = "최대 후원 금액은 10,000,000 미만입니다."
        warningTxt2.classList.remove("isHidden");
    }
})

// select 값 선택 안하면 경고메세지
selectInp.addEventListener("blur", () => {
    if (selectInp.value === "") {
        warningTxt1.classList.remove("isHidden");
    } else {
        warningTxt1.classList.add("isHidden");
    }
})

// 직접 입력 칸 포커스 되면 value 초기화하고 나머지 금액버튼 선택 해제
directMoneyInp.addEventListener("focus", () => {
    directMoneyInp.value = "";
    totalMoneyInp.value = "0";
    warningTxt2.classList.add("isHidden");
    for (insideRadioBtn of moneyLabel) {
        insideRadioBtn.checked = false;
    }
});

// 정기후원 누르면 인출 관련 정보창 띄우기
regularBtn.addEventListener("click", () => {
    withdrawTxt.classList.remove("isHidden");
})

// 일시후원 누르면 인출 관련 정보창 숨기기
onceBtn.addEventListener("click", () => {
    withdrawTxt.classList.add("isHidden");
})

// 폼의 두번째 단계로 넘어가기
goNextBtn.addEventListener("click", () => {
    // select값 선택 안되면 경고메세지 띄우고 리턴
    if (document.donate.actsList.value === "") {
        warningTxt1.classList.remove("isHidden");
        return;
    };

    // 금액이 입력되지 않은 경우 경고메세지 띄우고 리턴
    if ((document.donate.money.value === "") && (document.donate.moneyInput.value === "")) {
        warningTxt2.textContent = "최소 후원 금액은 1,000원 이상입니다.";
        warningTxt2.classList.remove("isHidden");
        return;
    }

    const donateType = document.donate.sendType.value;
    const donateMoney = document.donate.money.value;
    const donateInp = document.donate.moneyInput.value;
    const donateAct = document.donate.actsList.value;

    // 금액 값을 직접 입력한 경우
    if (donateMoney === "") {
        firstInfo.textContent = `${donateType} / ${Number(donateInp).toLocaleString()} / ${donateAct}`;
    } else { // 금액 버튼을 클릭한 경우
        firstInfo.textContent = `${donateType} / ${Number(donateMoney).toLocaleString()} / ${donateAct}`;
    }

    firstH3.classList.add("isMuted");
    secondH3.classList.remove("isHidden");
    firstInfoWrapper.style.display = "flex";
    firstInfoWrapper.classList.toggle("isHidden");
    leftSide.classList.toggle("isHidden");
    rightSide.classList.toggle("isHidden");
    progressCircle1.classList.toggle("isCompleted");
    progressCircle2.classList.toggle("isCompleted2");
    progressLine.classList.toggle("isIng");
    warningTxt2.classList.add("isHidden");
})

// 변경을 누르면 1단계의 폼을 다시 보여줌
goBackBtn.addEventListener("click", () => {
    firstH3.classList.remove("isMuted");
    secondH3.classList.add("isHidden");
    firstInfoWrapper.style.display = "none";
    leftSide.classList.toggle("isHidden");
    rightSide.classList.toggle("isHidden");
    progressCircle1.classList.toggle("isCompleted");
    progressCircle2.classList.toggle("isCompleted2");
    progressLine.classList.toggle("isIng");
})