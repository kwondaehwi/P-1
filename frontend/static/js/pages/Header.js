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


/* Set the width of the side navigation to 250px */
export function openNav() {
    document.getElementById("nav").style.width = "178px";
}

/* Set the width of the side navigation to 0 */
export function closeNav() {
    document.getElementById("nav").style.width = "0";
}
