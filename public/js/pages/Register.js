export default class {
  constructor() {
    document.title = "Register";
  }
  async getHtml() {
    return `
    <form action="처리할페이지주소"  method="post" class="posting-box">
    <select name="posting-type form-element">
      <option value="start" selected> 게시판을 선택해 주세요
      <option value="free-board"> 자유 게시판
      <option value="private-board"> 비밀 게시판
      <option value="info-board"> 정보 게시판
      <option value="promo-board"> 홍보 게시판
      <option value="sw-board"> SW 게시판
  </select>
  <input type="text" name="posting-title" class="form-element" placeholder="제목을 입력해 주세요">
  <textarea name="posting-content" class="form-element" rows="20" cols="70" placeholder="내용"></textarea>
  <input type="submit" class="form-element btn" value="글쓰기">
  </form>
        `;
  }
}
