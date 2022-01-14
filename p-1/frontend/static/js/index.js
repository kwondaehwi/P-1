import Main from "./pages/main.js";
import LogIn from "./pages/login.js";
import Enroll from "./pages/enroll.js";
import Header from "../header.js"


const navigateTo = url =>{
    history.pushState(null, null, url);
    router();
}

const router = async() => {
    const routes = [
        {path: "/", view: Main},
        {path: "/login", view: LogIn},
        {path: "/enroll", view: Enroll},
        {path: "/free", view: Main},
        {path: "/info", view: Main},
        {path: "/pro", view: Main},
        {path: "/secret", view: Main},
        {path: "/sw", view: Main},
    ];

    const pageMatches = routes.map((route) => {
        return {
          route: route, // route: route
          isMatch: route.path === location.pathname,
        };
      });

    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
    
    if(!match){
        match = {
            route: routes[0],
            isMatch: true,
        };
    }
    const header = new Header();
    const view = new match.route.view();
    const root = document.querySelector("#root");
    root.innerHTML = await header.getHtml();
    root.innerHTML += await view.getHtml();
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo("/" + e.target.id);
        }
    });
    router();
});

window.addEventListener("popstate", () => {
    router();
});