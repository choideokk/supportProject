const menuBtn = document.querySelector("#menuBtn");
const menuList = document.querySelector(".topMenu");

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('isVisible');
})
