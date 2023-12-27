const btnSubmit = document.querySelector(".btn");

let userInput = document.querySelector(".user");

let passwordInput = document.querySelector(".password");

(() => {
  "use strict";

  let forms = document.querySelectorAll(".needs-validation");

  // Loop over Inputs In Form n
  Array.from(forms).forEach((form) => {
    form.addEventListener("click", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
      localStorage.setItem("user", userInput.value);
      localStorage.setItem("password", passwordInput.value);

      if (passwordInput.value == "") {
        console.log("bad");
      } else {
        window.location.replace("log-in.html");
      }
    });
  });
})();

// Spinner Loader
const spinnerLoader = document.querySelector(".spinner-loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    spinnerLoader.style.opacity = "0";
  }, 2000);

  setTimeout(() => {
    spinnerLoader.style.display = "none";
  }, 2000);
});
