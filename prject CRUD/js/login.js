// all login page Variables 
let inputLoginUser = document.querySelector(".login-form .login-user");

let inputLoginPass = document.querySelector(".login-form .login-password");

let inputLoginSubmit = document.querySelector(".login-form .login-submit");

// error Message Element
let errorMessageDiv = document.createElement("div");

errorMessageDiv.innerHTML = 'you must write all inputs';

errorMessageDiv.className = 'error-message';


// error Message inputs
let errorMessageInput = document.createElement("div");

errorMessageInput.innerHTML = 'User Name OR Password is Wrong';

errorMessageInput.className = 'error-message-input';


inputLoginUser.focus();

// Start function check login Form
inputLoginSubmit.addEventListener("click", checkLoginForm);

// function check login Form
function checkLoginForm(e) {
    e.preventDefault();

            // get getItem from localStorage
            if ((localStorage.getItem("userName") == inputLoginUser.value) && (localStorage.getItem("Password") == inputLoginPass.value )) {
                errorMessageInput.remove();
                window.location = 'index.html'
            } else {
                document.body.append(errorMessageInput)
            };
};

