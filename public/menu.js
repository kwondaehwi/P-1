const menuButton = document.querySelector("#jsMenu");
const menuList = document.querySelector("#jsMenuList");

function clickMenu() {
    if (menuList.classList.contains("hidden")) {
        menuList.classList.remove("hidden");
    } else {
        menuList.classList.add("hidden");
    }
}

menuButton.addEventListener("click", clickMenu);