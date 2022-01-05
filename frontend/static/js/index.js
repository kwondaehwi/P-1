import Ajou_memo from "./pages/home.js";
import free_posts from "./pages/free_posts.js";
import secret_posts from "./pages/secret_posts.js";


const router = async()=>{
    const routes=[
        {path:"/",view: Ajou_memo},
        {path:"/free_posts",view:free_posts},
        {path:"/secret_posts",view:secret_posts}
    ];
    const pageMatches=routes.map((route)=>{
        return{
            route:route,
            isMatch:route.path===location.pathname
        };
    });
    let match=pageMatches.find((pageMatch)=>pageMatch.isMatch);
    if (!match) {
        match = {
            route: location.pathname,
            isMatch: true,
        };
        const page = new NotFound();
        document.querySelector("#root").innerHTML = await page.getHtml();
    } else {
        const page = new match.route.view();
        document.querySelector("#root").innerHTML = await page.getHtml();
    }
}


window.addEventListener("popstate", () => {
    router();
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            router();
        }
    });
    router();
});



