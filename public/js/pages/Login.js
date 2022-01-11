const $ = document;

export default function Login(root, purpose) {
  const login = $.createElement("div");
  // history.pushState({ data: `${purpose}` }, null, `${purpose}`);
  login.innerHTML = `
  <div class="login-box">
  <h1> Login Page </h1>
  ID: <input type="text" name="id" pattern="^([a-z0-9_]){6,50}$">
  Password: <input type="password" name="passwd">
</div>
      `;

  // 대체해야할 페이지가 존재하면 지워버리고 새 것을 삽입한다.
  const toBeReplaced = $.querySelector(".replace");
  if (toBeReplaced) {
    console.log(toBeReplaced);
    toBeReplaced.remove();
  }
  const toBeReplacedNav = $.querySelector(".replace-on");
  if (toBeReplacedNav) {
    console.log(toBeReplacedNav);
    toBeReplacedNav.remove();
  }
  login.classList.add("login-box", "replace");
  root.appendChild(login);
}
