export default class {
    constructor() {
        document.title = "Main";
    }
    async getHtml() {
        return `
            <div class="topnav">
            <a class="nav_item" href="/menu" data-link>Menu</a>
            <a class="nav_item" href="/" data-link>AJOU Memo</a>
            <a class="nav_item" href="/login" data-link>Log in</a>
            </div>

            <div class="midnav">
            <a >자유게시판</a>
            <a class="nav_item" href="/enroll" data-link>등록하기</a>
        </div>
    
        <table class="table">
            <thead>
                <tr>
                    <th>날짜</th>
                    <th>제목</th>
                    <th>익명</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>12/18</td>
                    <td>아주 비기너 참여하시는 ...</td>
                    <td>익명</td>
                </tr>
                <tr>
                    <td>12/18</td>
                    <td>아주 비기너 참여하시는 ...</td>
                    <td>익명</td>
                </tr>
                <tr>
                    <td>12/18</td>
                    <td>아주 비기너 참여하시는 ...</td>
                    <td>익명</td>
                </tr>
            </tbody>
        </table>
    
        <div class="Num">
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="">6</a>
          </div>
        `;
    }
}