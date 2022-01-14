export default class {

    async getHtml() {
        return `
            <div class="topnav">
                <button class="sidemenu" href="/menu" data-link>Menu</button>
                <div id="" data-link>AJOU Memo</a>
                <div id="login" data-link>Log in</a>
            </div>
            
            <div class="sidebar">
            <ul>
                <li><div id="free" data-link>자유게시판</div></li>
                <li><div id="info" data-link>정보게시판</div></li>
                <li><div id="pro" data-link>홍보게시판</div></li>
                <li><div id="secret" data-link>비밀게시판</div></li>
                <li><div id="sw" data-link>SW게시판</div></li>
            </ul> 
            </div>`;
    }
    
}
