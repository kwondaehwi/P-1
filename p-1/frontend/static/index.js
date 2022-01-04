const router = async() => {
    const routes = [
        {path: "/", view: () => console.log("Viewing Ajou memo")},
        {path: "/menu", view: () => console.log("Viewing Menu")},
        {path: "/log_in", view: () => console.log("Viewing Log in")},
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
    console.log(match.route.view());
};

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

window.addEventListener("popstate", () => {
    router();
});