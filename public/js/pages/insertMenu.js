// const menuBar = document.querySelector(".menu-bar");
// const hiddenMenu = document.querySelector(".hidden");

// // 메뉴버튼이 눌리면 메뉴 화면 생성 및 제거
// function handleMenuClick() {
//   hiddenMenu.classList.toggle("hidden-menu");
//   hiddenMenu.classList.toggle("hidden");
// }

// menuBar.addEventListener("click", handleMenuClick);


const menuBar1 = document.querySelector(".menu-bar");

// 메뉴버튼이 눌리면 메뉴 화면 생성 및 제거
function handleMenuClick() {
    const hiddenMenuDiv = document.createElement('div');

    document.body.append(hiddenMenuDiv)
}

menuBar1.addEventListener("click", handleMenuClick);