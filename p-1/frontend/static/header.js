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
                <li><a href="/free" data-link>자유게시판</a></li>
                <li><a href="/info" data-link>정보게시판</a></li>
                <li><a href="/pro" data-link>홍보게시판</a></li>
                <li><a href="/secret" data-link>비밀게시판</a></li>
                <li><a href="/sw" data-link>SW게시판</a></li>
            </ul> 
            </div>`;
    }
    
}
