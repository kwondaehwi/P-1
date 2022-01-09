import Home from "./pages/Home.js";
import Posts from "./pages/Posts.js";


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("nav").style.width = "178px";
}
  
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("nav").style.width = "0";
}

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path:"/menu", view:Nav},
        { path: "/board1", view: Posts },
        { path: "/board2", view: Posts },
        { path: "/board3", view: Posts },
        { path: "/board4", view: Posts },
    ];

    const pageMatches = routes.map((route) => {
        return {
            route, // route: route
            isMatch: route.path === location.pathname,
        };
    });

    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);

    if (!match) {
        match = {
            route: location.pathname,
            isMatch: true,
        };
        const page = new NotFound();
        document.querySelector("#content").innerHTML = await page.getHtml();
    } else {
        const page = new match.route.view();
        document.querySelector("#content").innerHTML = await page.getHtml();
    }
};

// 뒤로 가기 할 때 데이터 나오게 하기 위함
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