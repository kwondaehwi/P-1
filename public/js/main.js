import Header from "./pages/Header.js";
import Navigation from "./pages/Navigation.js";
// import createButton from "./pages/Button.js";

const $ = document;

const state = {
  state: "main",
};

function init() {
  const root = $.querySelector("#root");
  Header(root);
  Navigation(root);
}

init();
