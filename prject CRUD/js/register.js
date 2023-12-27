// all register page variables

let inputRegisterUser = document.querySelector(".register-form .user");

let inputRegisterPass = document.querySelector(".register-form .password");

let inputRegisterEmail = document.querySelector(".register-form .email");

let inputRegisterSubmit = document.querySelector(".register-form .submit");

// error Message Element
let errorMessageDiv = document.createElement("div");

errorMessageDiv.innerHTML = 'you must write all inputs';

errorMessageDiv.className = 'error-message';






// focus on the input User 
window.onload = function() {
    inputRegisterUser.focus()
}

// Start function check Register Form
inputRegisterSubmit.addEventListener("click", checkRegisterForm);

// function check Register Form
function checkRegisterForm(e) {
    e.preventDefault();

        if (inputRegisterEmail.value === '' || inputRegisterPass.value === '' || inputRegisterUser.value === '') {

            document.body.append(errorMessageDiv);

        } else {
            errorMessageDiv.remove();

            // set input value in localStorage 
            localStorage.setItem("userName", inputRegisterUser.value);

            localStorage.setItem("Email", inputRegisterEmail.value);

            localStorage.setItem("Password", inputRegisterPass.value);

            window.location = 'login.html'
        };
};
