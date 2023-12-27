let forms = document.querySelectorAll(".needs-validation");

let btnSubmit = document.querySelector(".btn");

let passwordInput = document.querySelector(".password");

(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  // Loop over Inputs In Form
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "click",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
        if (passwordInput.value === localStorage.getItem("password")) {
          window.location.replace("index.html");
        }
      },
      false
    );
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
