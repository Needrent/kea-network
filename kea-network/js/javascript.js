// login page
let loginPage = document.getElementById("loginPage");
let loginBtn = document.getElementById("loginBtn");
let logoutBtn = document.getElementById("logoutBtn");

loginBtn.addEventListener("click", login);

function login(){
    loginPage.style.display = "none";
}
function logout(){
    loginPage.style.display = "block";
    menu.style.display = "none";
    menuBtn.addEventListener("click",openNav);
    menuBtn.removeEventListener("click",closeNav);

}
//menu
let menuBtn = document.getElementById("sidebarIcon");
let menu = document.getElementById("menu");

menuBtn.addEventListener("click",openNav);
menuBtn.removeEventListener("click",closeNav);

function openNav(){
    menu.style.display = "block";
    menuBtn.removeEventListener("click",openNav);
    menuBtn.addEventListener("click",closeNav);
    logoutBtn.addEventListener("click", logout);
}

function closeNav(){
    menu.style.display = "none";
    menuBtn.addEventListener("click",openNav);
    menuBtn.removeEventListener("click",closeNav);

}
