// 헤더 html 추가 및 버튼 기능 활성화
import createButton from "./Button.js";

const $ = document;

export default function Header(root) {
  const header = $.createElement("header");
  header.innerHTML = `<i class="fas fa-bars menu"></i>
  <span class="home"k>AJOU Memo</span>
  <span class="login">Log in</span>`;
  root.appendChild(header);

  createButton("menu");
  createButton("home");
  createButton("login");
}
