export default class {
    constructor() {
        document.title = "LogIn";
    }
    async getHtml() {
        return `
        <form action="#이동할곳 URL#" name="login_form">
            <label for="fname">ID:</label><br>
            <input type="text" id="id_val" name="id_val" placeholder="아이디"><br>
            <label for="lname">Password:</label><br>
            <input type="password" id="pw_val" name="pw_val" placeholder="비밀번호"><br><br>
            <input type="button" value="로그인" onclick="check_input()">
            <input type="button" value="회원가입" onclick="check_input()">
        </form>
        `;
    }
}
