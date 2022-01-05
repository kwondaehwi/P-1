export default class {
    constructor() {
        document.title = "Main";
    }
    async getHtml() {
        return `
            <h1>This is Main Page</h1>
        `;
    }
}