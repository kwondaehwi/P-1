export default class {

    async getHtml() {
        return `
            <div class="topnav">
                <button class="sidemenu" href="/menu" data-link>Menu</button>
                <a class="nav_item" href="/" data-link>AJOU Memo</a>
                <a class="nav_item" href="/login" data-link>Log in</a>
            </div>
            
            <div class="sidebar">
            <ul>
                <li><a href="/freeboard">자유게시판</a></li>
                <li><a href="/infoboard">정보게시판</a></li>
                <li><a href="/prboard">홍보게시판</a></li>
                <li><a href="/secretboard">비밀게시판</a></li>
                <li><a href="/swboard">SW게시판</a></li>
            </ul> 
            </div>`;
    }
    
}
