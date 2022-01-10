import Header from "./pages/Header.js";
import Navigation from "./pages/Navigation.js";
// import createButton from "./pages/Button.js";

const $ = document;

const state = {
  state: "main",
};

// 처음 페이지가 시작될때 보이는 화면
function init() {
  const root = $.querySelector("#root");
  Header(root);
  Navigation(root);
}

init();
