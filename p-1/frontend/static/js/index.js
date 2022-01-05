import Main from "./pages/main.js";
import Menu from "./pages/menu.js";
import LogIn from "./pages/login.js";
import Enroll from "./pages/enroll.js";

const navigateTo = url =>{
    history.pushState(null, null, url);
    router();
}

const router = async() => {
    const routes = [
        {path: "/", view: Main},
        {path: "/menu", view: Menu},
        {path: "/login", view: LogIn},
        {path: "/enroll", view: Enroll},
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
    const view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();

    
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});

window.addEventListener("popstate", () => {
    router();
});