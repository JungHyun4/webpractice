const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const newIdInput = document.querySelector("#modal input");
const newIdform = document.querySelector("#modal form");
const logoutButton = document.querySelector("#logout-button");
const signinButton = document.querySelector("#sign-in-button");
const signinModal = document.querySelector("#modal"); 
const closeButton = document.getElementById("X-button");
const mdOverLay = document.querySelector(".md_overlay")
const toDoForm = document.getElementById("todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
let users1 = [];
let users2 = [];
let isLogin = "false";

function onLoginSubmit(event){
    const nowUser = loginInput.value;
    if (users2.includes(nowUser) === true){
        event.preventDefault();
        localStorage.setItem(USERNAME_KEY, nowUser);
        paintGreetings(nowUser);
        loginInput.value = "";
        loginForm.classList.add(HIDDEN_CLASSNAME);
        greeting.classList.remove(HIDDEN_CLASSNAME);
        toDoForm.classList.remove(HIDDEN_CLASSNAME);
        isLogin = "ture";
        localStorage.setItem("isLogin" , isLogin);
    }
    else{
        alert(`name ${nowUser} is not our user.`);
    }
}

function onLogoutClick(event){
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
}

function paintGreetings(username){
    greeting.innerText = `Hi , ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
function openModal(event){
    signinModal.classList.remove(HIDDEN_CLASSNAME);
}
function closeModal(event){
    signinModal.classList.add(HIDDEN_CLASSNAME);
    newIdInput.value = "";
}
function submitNewId(event){
    event.preventDefault();
    const newId = newIdInput.value;
    newIdInput.value = "";
    const newIdObj = newId;
    users1.push(newIdObj);
    saveId();
    make();
    closeModal();
    alert("사용자 등록이 완료 되었습니다.")
    
}
function saveId(){
    localStorage.setItem("users",JSON.stringify(users1));
    localStorage.getItem("users").split(`"`)
}
function make(){
    try{
        if (localStorage.getItem("users").length != 0){
            src = localStorage.getItem("users").split(`"`)
        for (var i = 1; i < src.length; i+=2 ){
            users1.push(src[i]);
            users2.push(src[i]);
                }
            }
        }
    catch{
        console.log("에러가 발생했어용")
        }
    }


const savedUserName = localStorage.getItem(USERNAME_KEY);

closeButton.addEventListener("click",closeModal);
mdOverLay.addEventListener("click",closeModal);

if (savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit" , onLoginSubmit);
}
else{
    paintGreetings(savedUserName);
}
make();

if (loginForm.classList.contains(HIDDEN_CLASSNAME)){
    isLogin = "true";
    localStorage.setItem("isLogin","true");
}
if (isLogin === "true"){
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
}
signinButton.addEventListener("click",openModal);
logoutButton.addEventListener("click",onLogoutClick);
newIdform.addEventListener("submit",submitNewId)