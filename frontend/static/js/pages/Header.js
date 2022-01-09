export default function Header(root) {
    root.innerHTML=`
        <div class="burger" onclick="openNav()">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="logo">AJOU Memo</div>
        <div class="login">Log In</div>
    `
}