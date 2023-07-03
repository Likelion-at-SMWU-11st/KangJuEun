const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const hi=document.querySelector("#hi");

function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName=loginInput.value;
    hi.innerText=`만나서 반가워요 ${userName}!`;
    hi.classList.remove("hidden");
}

loginForm.addEventListener("submit", loginSubmit);