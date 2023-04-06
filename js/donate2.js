
const totalForm = document.donate;
const warningTxts = document.querySelectorAll(".rightSide .warningTxt");
const rightSideInputs = document.querySelectorAll(".rightSide input[type='text']");
const cancelBtn = document.querySelector(".rightSide .cancelBtn");

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

    if (donateAccount === "" || donateMaster === "") return;

    if (donateBirth === "" || (!isAllChecked)) return;

    let timerInterval;
    Swal.fire({
        title: '후원해주셔서 감사합니다.',
        timer: 1500,
        timerProgressBar: true,
        willClose: () => {
            clearInterval(timerInterval)
            window.location.href = "http://127.0.0.1:5500/supportProject/index.html";
        }
    })
})

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