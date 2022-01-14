const $ = document;
export default class {

    constructor() {
        $.title = "Main";
    }

    async getHtml() {
        return `
            <div class="midnav">
            <a >자유게시판</a>
            <a class="nav_item" href="/enroll" data-link>등록하기</a>
        </div>

        <table id = "table" class="table">
        </table>
    
        <script>
        ${fetch("/getInfo")
        .then(res => res.json())
        .then(json => {
            json.data.map(item => {
                const date = document.createElement("div");
                const title = document.createElement("div");
                const anon = document.createElement("div");

                date.innerHTML = item.date;
                title.innerHTML = item.title;
                if(item.anonymous == 1){
                    anon.innerHTML = "익명"
                }else{
                    anon.innerHTML = "공개"
                }
                const table = document.getElementById("table");
                table.appendChild(date);
                table.appendChild(title);
                table.appendChild(anon);
            })
            
        })}
    </script>

        <div class="Num">
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="">6</a>
          </div>
        `;
    }
}