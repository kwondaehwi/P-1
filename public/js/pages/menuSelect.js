import Post from "./Posts.js";

export default function handleMenuClick() {
  const hiddenMenu = document.querySelectorAll(".board-menu");
  //   const purpose = hiddenMenu[1].textContent;
  hiddenMenu.forEach((buttonName) => {
    const post = buttonName.textContent;
    const newURL = buttonName.id;
    buttonName.addEventListener("click", () => moveToRoute(root, post, newURL));
  });
  //   hiddenMenu[1].addEventListener("click", () => moveToRoute(root, purpose));
}

// 해당 버튼에 따른 상호작용
function moveToRoute(root, post, newURL) {
  history.pushState(null, null, `${newURL}`);
  switch (post) {
    case "자유 게시판":
      Post(root);
      break;
    case "비밀 게시판":
      Post(root);
      break;
    case "정보 게시판":
      Post(root);
      break;
    case "홍보 게시판":
      Post(root);
      break;
    case "SW 게시판":
      Post(root);
      break;
  }
}
// function createButtons(buttonNames) {
//   buttonNames.forEach((buttonName) => {
//     createButton(buttonName);
//     const purpose = "free-board";
//     history.pushState({ data: `${purpose}` }, null, `${purpose}`);
//   });
// }
