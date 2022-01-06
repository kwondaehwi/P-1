export default class {
    constructor() {
        document.title = "secret_pages";
    }
    async getHtml() {
        return `
            <h1>This is 비밀게시판</h1>
        `;
    }
}

