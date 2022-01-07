let mainPageState = {page_id: 0, data: 'main'}
let uploadState = {page_id: 1, data: 'upload'};
let loginState = {page_id: 2, data: 'login'};
let signInState = {page_id: 3, data: 'sign_in'};
let urlMainPage = location.origin + '/';
let urlUpload = location.origin + '/upload';
let urlLogin = location.origin + '/login';
let urlSignIn = location.origin + '/sign_in';

const getOutButton = document.querySelector("#jsGoOut");
const uploadButton = document.querySelector("#jsUpload");
const loginButton = document.querySelector("#jsLogin");
const menuListPage = document.querySelector("#jsMenuList");
const signInButton = document.querySelector("#jsSignIn");
const page1 = document.querySelector("#jsPage1");
const page2 = document.querySelector("#jsPage2");
const page3 = document.querySelector("#jsPage3");
const page4 = document.querySelector("#jsPage4");

function changeURL() {
    if (window.location.pathname !== '/') {
        switch (window.location.pathname) {
            case '/upload':
                menuListPage.classList.add("hidden");
                page1.classList.add("hidden");
                page2.classList.remove("hidden");
                page3.classList.add("hidden");
                page4.classList.add("hidden");
                break;
            case '/login':
                menuListPage.classList.add("hidden");
                page1.classList.add("hidden");
                page2.classList.add("hidden");
                page3.classList.remove("hidden");
                page4.classList.add("hidden");
                break;
            case '/sign_in':
                menuListPage.classList.add("hidden");
                page1.classList.add("hidden");
                page2.classList.add("hidden");
                page3.classList.add("hidden");
                page4.classList.remove("hidden");
                break;
        }
    } else {
        menuListPage.classList.add("hidden");
        page1.classList.remove("hidden");
        page2.classList.add("hidden");
        page3.classList.add("hidden");
        page4.classList.add("hidden");
    }
}

function clickUploadButton() {
    history.pushState(uploadState, null, urlUpload); 
    changeURL();
}

function clickLoginButton() {
    history.pushState(loginState, null, urlLogin);
    changeURL();
}

function clickSignInButton() {
    history.pushState(signInState, null, urlSignIn);
    changeURL();
}

function clickGetOutButton() {
    history.pushState(mainPageState, null, urlMainPage);
    changeURL();
}

window.addEventListener('popstate', changeURL);

uploadButton.addEventListener("click", clickUploadButton);
loginButton.addEventListener("click", clickLoginButton);
signInButton.addEventListener("click", clickSignInButton);
getOutButton.addEventListener("click", clickGetOutButton);