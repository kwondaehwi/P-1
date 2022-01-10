export default class {
  constructor() {
    document.title = "Login";
  }
  async getHtml() {
    return `
      <div class="upper">
      <a href="/posts" class="nav-item" data-link>자유게시판</a>
      <a href="/register" class="nav-item" data-link>등록하기</a>
    </div>
    <div class="box">
    <input type="text" name="id" pattern="^([a-z0-9_]){6,50}$">
    <input type="password" name="passwd">
  </div>
          `;
  }
}
