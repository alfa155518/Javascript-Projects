// Make Line Scroller
let lineScroller = document.querySelector(".scroller");

let documentHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", (e) => {
  let documentScrollTop = document.documentElement.scrollTop;

  lineScroller.style.width = `${(documentScrollTop / documentHeight) * 100}%`;
});

// Arrow Scroll To Top
let scrollTop = document.querySelector(".scroll-top");

// function Scroll To Top
window.onscroll = function () {
  if (window.scrollY >= 600) {
    scrollTop.classList.add("appear");
  } else {
    scrollTop.classList.remove("appear");
  }
};

// function Scroll To Top
scrollTop.addEventListener("click", handelScroll);

// function Scroll To Top
function handelScroll() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}


let linksProducts = document.querySelectorAll(".links-products li");

let itemsProducts = document.querySelectorAll(".all-products .item");

let imgProduct = document.querySelectorAll(".all-products .item .img-empty");

let imgsProduct = document.querySelectorAll(".all-products .item .images img");

let imgsProductLazyLoad = document.querySelectorAll(".all-products .item img");

// function change image Product
imgsProduct.forEach((img) => {
  img.addEventListener("click", (e) => {
    let product = e.target.parentElement.parentElement;
    let emptyImg = product.querySelector(".all-products .item .img-empty");
    emptyImg.src = e.target.src;
  });
});

// loop on li Taps
linksProducts.forEach((li) => {
  li.addEventListener("click", doAll);
});

// function Changes Taps
function doAll(e) {
  linksProducts.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });

  itemsProducts.forEach((item) => {
    item.style.display = "none";
  });

  document.querySelectorAll(this.dataset.item).forEach((item) => {
    item.style.display = "block";
  });
}

// Lazy Load Option
const option = {
  root: null,
  threShold: 0,
  rootMargin: "0px 0px -500px 0px"
};

// Make Lazy Load
const imgObs = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entre) => {
    if (entre.isIntersecting) {
      const myImg = entre.target;

      myImg.setAttribute("src", myImg.getAttribute("data-src"));
    }
  });
}, option);

imgsProductLazyLoad.forEach((img) => {
  imgObs.observe(img);
});

// function Show Details
let productsInfo = document.querySelectorAll(".item .btn-warper i:first-child");

productsInfo.forEach((btn) => {
  btn.addEventListener("click", showDetails);
});

function showDetails(e) {
  const parentItem = e.target.parentElement.parentElement;
  let img = parentItem.querySelector("img").src;
  let stars = parentItem.querySelector(".stars").innerHTML;
  let name = parentItem.querySelector(".name").innerHTML;
  let prises = parentItem.querySelector(".prices").innerHTML;

  let component = handelProductInfo(img, stars, name, prises);

  let mainPopup = document.querySelector(".main-popup-info");
  mainPopup.classList.add("appear");
  mainPopup.innerHTML = component;
}

function handelProductInfo(imgOne, tow, three, fur) {
  return `
  <div class='parent-info'>
  <img src='${imgOne}'></img>
  <div>${tow}</div>
  <span class='name'>${three}</span>
  <div>${fur}</div>
  <div onclick="(this.parentElement.remove())" class='btn-close'></div>
  </div>
  
  `;
}

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
