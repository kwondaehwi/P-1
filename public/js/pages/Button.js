import Home from "./Home.js";
import ButtonReaction from "./popMenu.js";
import Post from "./Posts.js";
import Register from "./Register.js";
import Login from "./Login.js";
// import NavMenu from "./NavMenu.js";

const $ = document;

// 버튼 생성 및 해당 루트로 url 변경
export default function makeButton(purpose) {
  const button = $.querySelector(`.${purpose}`);
  button.addEventListener("click", () => moveToRoute(root, purpose));
}

// 해당 버튼에 따른 상호작용
function moveToRoute(root, purpose) {
  history.pushState(null, null, `/${purpose}`);

  switch (purpose) {
    case "menu":
      ButtonReaction();
      break;
    case "home":
      Home(root);
      break;
    case "login":
      Login(root);
      break;
    case "free-board":
      Post(root);
      break;
    case "register":
      Register(root);
      break;
  }
}
