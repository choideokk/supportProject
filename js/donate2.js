
const totalForm = document.donate;
const warningTxts = document.querySelectorAll(".rightSide .warning1");
const checkTxt = document.querySelector(".rightSide .checkTxt");
const rightSideInputs = document.querySelectorAll(".rightSide input[type='text']");
const cancelBtn = document.querySelector(".rightSide .cancelBtn");

// input창 비어있으면 경고 메세지
for (let i = 0; i < rightSideInputs.length; i++) {
    rightSideInputs[i].addEventListener("blur", () => {
        if (rightSideInputs[i].value === "") {
            warningTxts[i].classList.remove("isHidden");
        } else {
            warningTxts[i].classList.add("isHidden");
        }
    })
}

totalForm.addEventListener("submit", (e) => {
    let isAllChecked = false;
    e.preventDefault();
    const donateAccount = document.donate.account.value;
    const donateMaster = document.donate.master.value;
    const donateBirth = document.donate.birth.value;
    const donateCheck = document.querySelectorAll(".rightSide input[type='checkbox']");
    isAllChecked = donateCheck[0].checked && donateCheck[1].checked;

    // 값 비어있으면 제출 X
    if (donateAccount === "" || donateMaster === "" || donateBirth === "") return;

    // 필수 동의사항 다 체크되지 않으면 메세지 띄우고 제출 X
    if (!isAllChecked) {
        checkTxt.classList.remove("isHidden");
        return;
    }


    // 성공적으로 제출 시 alert창 띄우고 메인으로 리다이렉트
    let timerInterval;
    Swal.fire({
        title: '후원해주셔서 감사합니다.',
        timer: 1500,
        timerProgressBar: true,
        willClose: () => {
            clearInterval(timerInterval)
            window.location.href = "../index.html";
        }
    })
})

// 후원 취소 confirm창 띄우고 메인으로 리다이렉트
cancelBtn.addEventListener("click", () => {
    Swal.fire({
        title: '정말로 후원을 취소하시겠습니까?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#797979',
        confirmButtonText: '네',
        cancelButtonText: '아니요'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "../index.html";
        }
    })
})