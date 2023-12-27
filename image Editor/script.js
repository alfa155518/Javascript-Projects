// All Variables
let saturate = document.getElementById("saturate");

let contrast = document.getElementById("contrast");

let brightness = document.getElementById("brightness");

let grayscale = document.getElementById("grayscale");

let sepia = document.getElementById("sepia");

let blur = document.getElementById("blur");

let hueRotate = document.getElementById("hue-rotate");

let invert = document.getElementById("invert");

let btnUpload = document.querySelector(".btn-upload");

let allInputs = document.querySelectorAll(".item input");

let imgUploaded = document.querySelector(".img-uploaded");

let resetBtn = document.querySelector(".btn-reset");

let inputImg = document.querySelector(".img-and-btn input");

let sectionImg = document.querySelector(".img-and-btn");

let btnDownload = document.querySelector(".download");

let canvasImg = document.getElementById("canvas-img");

let theContext = canvasImg.getContext("2d");

// btn Upload Image
btnUpload.addEventListener("click", handel);

// function Upload Image
function handel() {
  imgUploaded.classList.add("active");

  resetBtn.classList.add("active");

  btnDownload.classList.add("active");

  const fr = new FileReader();
  fr.addEventListener("load", (e) => {
    imgUploaded.src = fr.result;
    imgUploaded.onload = function () {
      canvasImg.width = imgUploaded.width;
      canvasImg.height = imgUploaded.height;
      theContext.drawImage(
        imgUploaded,
        0,
        0,
        canvasImg.width,
        canvasImg.height
      );
      imgUploaded.style.display = "none";
    };
  });
  fr.readAsDataURL(inputImg.files[0]);
}

// set Filters
allInputs.forEach((input) => {
  input.addEventListener("input", handelUpdate);
});

// function Set Filters
function handelUpdate() {
  theContext.filter = `
  saturate(${saturate.value}%)
  contrast(${contrast.value}%)
  brightness(${brightness.value}%)
  grayscale(${grayscale.value})
  sepia(${sepia.value}%)
  blur(${blur.value}px)
  hue-rotate(${hueRotate.value}deg)
  invert(${invert.value}%)
  `;
  theContext.drawImage(imgUploaded, 0, 0, canvasImg.width, canvasImg.height);
}

// Reset All Filters And Inputs
resetBtn.addEventListener("click", handelResetInputs);

// function Reset All Filters And Inputs
function handelResetInputs() {
  allInputs.forEach((input) => {
    input.value = 0;
    const suffix = input.dataset.sizing || "";
    theContext.filter = `${input.id}(${input.value + suffix})`;
    theContext.drawImage(imgUploaded, 0, 0, canvasImg.width, canvasImg.height);
  });
}

// btn Download Image
btnDownload.onclick = function () {
  btnDownload.href = canvasImg.toDataURL("image/jpeg");
};
