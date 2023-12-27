// calc scroll
let scrollElement = document.querySelector(".scroll-element");

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", e => {
  let scrollTop = document.documentElement.scrollTop;

  scrollElement.style.width = `${scrollTop / height * 100}%`
})

// start typed js
var typed = new Typed(".mov", {
  strings: [, "Ahmed Hassob", "I'm front-end-developer"],
  typeSpeed: 50,
  backSpeed: 80,
  loop: true,
  showCursor: true,
  fadeOut: false,
});
// end typed js


// start body mode

let modBody = document.querySelectorAll(".mode-option span");
let colorMd = document.querySelector("body .colors-bod")



modBody.forEach((m) => {
  m.addEventListener("click", (e) => {
    
    // modBody.forEach(sp => {
    //   sp.classList.remove("active")
    // })
    // e.currentTarget.classList.add("active")
    if(e.target.dataset.mode === "  background-image: url(../images/stars1.png);") {
      colorMd.style.display = "block"
    }else {
      colorMd.style.display = "none" 
    }
    handActive(e)
  });
});



// end body mode





// check if there is local storage option
let maiColors = localStorage.getItem("color-option");

if (maiColors !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color-option")
  );
}


// settings box
document.querySelector(".toggle-settings i").onclick = function () {
  this.classList.toggle("fa-spin");

  document.querySelector(".settings-box").classList.toggle("open");
};

// switch colors
const colorsLi = document.querySelectorAll(".colors-list li");

// loop on list items
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // set color on Rot
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
      );
      localStorage.setItem("color-option", e.target.dataset.color);
      
      handActive(e);
  });
});

// random background
let backgroundOption = true;

// variable to control the interval
let backgroundInterval;

let backgroundItem = localStorage.getItem("backGround_option");

if (backgroundItem !== null) {
  if (backgroundItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  document.querySelectorAll(".Random-backgrounds span").forEach((e) => {
    e.classList.remove("active");
  });
  if (backgroundItem === "true") {
    document.querySelector(".yes").classList.add("active");
  } else {
    document.querySelector(".no").classList.add("active");
  }
}

let random = document.querySelectorAll(".random-backgrounds span");
// loop on list spans
random.forEach((span) => {
  span.addEventListener("click", (e) => {
    handActive(e);

    if (e.target.dataset.background === `yes`) {
      backgroundOption = true;
      randomizeImgs();
      localStorage.setItem("backGround_option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("backGround_option", false);
    }
  });
});

// select landing page element
let landingPage = document.querySelector(".landing-page");

// get array of imgs
let imgsArray = [
  "../images/g2.jpeg",
  "../images/g3.jpeg",
  "../images/g4.jpeg",
  "../images/g5.jpeg",
];

// function to randomize imgs
function randomizeImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // get random number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);

      // change background image url
      landingPage.style.backgroundImage =
        `url("images/` + imgsArray[randomNumber] + `")`;
    }, 3000);
  }
}

randomizeImgs();

// start my skills
let ourSkills = document.querySelector(".skills");
let aRro = document.querySelector(".scroll");

window.onscroll = function () {

  //  scroll top 
  if (window.scrollY >= 1000) {
    aRro.style.display = "block";
  } else {
    aRro.style.display = "none";
  }


  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = window.innerHeight;

  // window Scroll Top
  let windowScrollTop = window.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    document
      .querySelectorAll(".skills_box .skill_progress span")
      .forEach((skill) => {
        skill.style.width = skill.dataset.progress;
      });
  }
};

// scroll top
aRro.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// start gallery
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener(`click`, (e) => {
    let overLay = document.createElement("div");

    overLay.className = "popup-overlay";

    document.body.appendChild(overLay);

    let popupBox = document.createElement("div");

    popupBox.className = `popup-box`;

    if (img.alt !== null) {
      let imgHeeding = document.createElement("h3");
      let hedText = document.createTextNode(img.alt);
      imgHeeding.appendChild(hedText);
      popupBox.appendChild(imgHeeding);
    }

    let popupImage = document.createElement("img");

    popupImage.src = img.src;

    popupBox.appendChild(popupImage);

    document.body.appendChild(popupBox);

    let closeButton = document.createElement("span");
    let closeButtonText = document.createTextNode("X");
    closeButton.appendChild(closeButtonText);
    closeButton.className = `close-bottun`;
    popupBox.appendChild(closeButton);
  });
});
document.addEventListener("click", (e) => {
  if (e.target.className === `close-bottun`) {
    document.querySelector(".popup-box").remove();
    document.querySelector(".popup-overlay").remove();
  }
});
// end gallery

// start All links

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

let allLinks = document.querySelectorAll(".links a");

function scrollSomewhere(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollSomewhere(allBullets);
scrollSomewhere(allLinks);
// end  All Links

// start Handel active

function handActive(ev) {
  // remove active class
  ev.target.parentElement.querySelectorAll(".active").forEach((ele) => {
    ele.classList.remove("active");
  });
  // add active class
  ev.target.classList.add("active");
}
// end Handel active

// start show bullets
let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletsOption = document.querySelector(".nav-bullets");
let bulletsStorage = localStorage.getItem("showBullets");

if (bulletsStorage !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });

  if (bulletsStorage === "block") {
    bulletsOption.style.display = `block`;
    document.querySelector(".bullets-option .yes").classList.add(".active");
  } else {
    bulletsOption.style.display = `none`;
    document.querySelector(".bullets-option .no").classList.add(".active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      bulletsOption.style.display = `block`;
      localStorage.setItem(`showBullets`, `block`);
    } else {
      span.style.display = `none`;
      localStorage.setItem(`showBullets`, `none`);
    }
    handActive(e);
  });
});

// end show bullets

// start Button Reset
document.querySelector(".reset-option").onclick = function () {
  // localStorage.clear()
  localStorage.removeItem("showBullets");
  localStorage.removeItem("backGround_option");
  localStorage.removeItem("color-option");
  window.location.reload();
};
// end Button Reset

// start toggle menu

let toggleBtn = document.querySelector(".toggle-menu");
let tliNks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  tliNks.classList.toggle("open");
};
document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== tliNks) {
    if (tliNks.classList.contains("open")) {
      toggleBtn.classList.toggle("menu-active");
      tliNks.classList.toggle("open");
    }
  }
});
tliNks.onclick = function (e) {
  e.stopPropagation();
};
// end toggle menu
