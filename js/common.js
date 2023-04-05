const menuBtn = document.querySelector(".menuBtn");
const menuList = document.querySelector(".topMenu");
const subscribeForm = document.querySelector(".subscribeForm");
const emailInput = document.querySelector(".subscribeForm input[type='email']");


menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('isVisible');
    menuBtn.classList.toggle('isCross');
})

subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailInput.value.trim() === "") return;
    else {
        Swal.fire({
            title: '뉴스레터를 구독하시겠습니까?',
            text: "매달 1일부터 만나보실 수 있습니다",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#28B171',
            cancelButtonColor: '#d33',
            confirmButtonText: '구독',
            cancelButtonText: '취소'
        }).then((result) => {
            if (result.isConfirmed) {
                let timerInterval;
                Swal.fire({
                    title: '구독 완료!',
                    timer: 1500,
                    timerProgressBar: true,
                    willClose: () => {
                        clearInterval(timerInterval)
                        emailInput.value = ""
                    }
                })
            }
        });
    }
})