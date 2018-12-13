// login page
let loginPage = document.getElementById("loginPage");
let loginBtn = document.getElementById("loginBtn");
let logoutBtn = document.getElementById("logoutBtn");
    loginPage.style.display = "none";// Save with cookie and delete
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
//Chat system
let chatWindow = document.getElementById("chatWindow");

function getChat(){
    let createDiv = document.createElement("div");
    createDiv.className = "ChatOut";

    let node = document.createTextNode("Hello World.");


    createDiv.appendChild(node);



    var element = document.getElementById("chatWindow");
    element.appendChild(createDiv);

}


    /*    function GetValue () {
            var area = document.getElementById ("myArea");
            alert (area.value);
        }
        function SetValue () {
            var area = document.getElementById ("myArea");
            area.value = "The new value";
        }
    </script>
</head>
<body>
    <button onclick="GetValue ();">Get the velue of the textarea!</button>
    <br />
    <button onclick="SetValue ();">Modify the value of the textarea!</button>
    <br />
    <textarea id="myArea"/>The contents of the textarea</textarea>
</body>*/
