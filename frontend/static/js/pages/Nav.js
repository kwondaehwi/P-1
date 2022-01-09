export default function Nav(root) {
   root.innerHTML=`
            <a href="/" class="nav_item" data-link>자유 게시판</a>
            <a href="/board1" class="nav_item" data-link>비밀 게시판</a>
            <a href="/board2" class="nav_item" data-link>정보 게시판</a>
            <a href="/board3" class="nav_item" data-link>홍보 게시판</a>
            <a href="/board4" class="nav_item" data-link>SW 게시판</a>
        `
}