import ButtonReaction from "./popMenu.js";

const $ = document;

export default function makeButton(purpose) {
  const button = $.querySelector(`.${purpose}`);
  button.addEventListener("click", () => moveToRoute(root, purpose));
}

function moveToRoute(root, purpose) {
  history.pushState(null, null, `/${purpose}`);

  switch (purpose) {
    case "menu":
      ButtonReaction();
      break;
    case "home":
      console.log("hello");
      break;
    case "login":
      console.log("hello");
      break;
  }
}
