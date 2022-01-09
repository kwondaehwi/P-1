export default class {
  constructor() {
    document.title = "Home";
  }
  async getHtml() {
    return `
    <div class="upper">
    <a href="/posts" class="nav-item" data-link>자유게시판</a>
    <a href="/register" class="nav-item" data-link>등록하기</a>
  </div>
            <h1>This is Home Page</h1>
        `;
  }
}
