export default class {
    constructor() {
        document.title = "Enroll";
    }
    async getHtml() {
        return `
        <form action="#이동할곳 URL#" name="enroll_form">
            <input type="text" placeholder="게시판을 선택해주세요"><br>
            <input type="text" placeholder="제목을 입력해주세요"><br>
            <input type="text" placeholder="내용을 입력해주세요"><br>
            <input type="button" value="글쓰기" onclick="check_input()">
        </form>
        `;
    }
}
