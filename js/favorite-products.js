let mainCartItem = document.querySelector(".main-cart-item");

let allProductsBtn = document.querySelectorAll(".item .btn-warper .heart");

let favoriteArray;

let numberOfProductsFavorite = document.querySelector(
  ".icons ul li a .num-heart"
);

// Add Products in Page
if (localStorage.getItem(`favoriteItem`) !== null) {
  favoriteArray = JSON.parse(localStorage.getItem(`favoriteItem`));

  window.addEventListener("DOMContentLoaded", (e) => {
    if (document.querySelector(".main-cart-item")) {
      let cartItem = document.createElement("div");
      cartItem.innerHTML += JSON.parse(
        localStorage.getItem(`favoriteItem`)
      ).join("");
      cartItem.className = "cart-item";

      document.querySelector(".main-cart-item").append(cartItem);
    }
  });
} else {
  favoriteArray = [];
}

if (localStorage.getItem("product-favorite") !== null) {
  numberOfProductsFavorite.innerHTML = localStorage.getItem("product-favorite");
}

allProductsBtn.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    let parentElement = e.target.parentElement.parentElement;

    let productImg = parentElement.querySelector("img").src;
    let productName = parentElement.querySelector(".name").innerHTML;
    let productPriceOne = parentElement.querySelector(
      ".prices span:first-child"
    ).innerHTML;
    let productPriceTow = parentElement.querySelector(
      ".prices span:last-child"
    ).innerHTML;

    // function contain HTML Element
    let productComponent = cartEle(
      productImg,
      productName,
      productPriceOne,
      productPriceTow
    );

    // push function contain HTML Element in array
    favoriteArray.push(productComponent);

    // save Products IN  LocalStorage
    localStorage.setItem(`favoriteItem`, JSON.stringify(favoriteArray));

    numberOfProductsFavorite.innerHTML++;

    localStorage.setItem(
      "product-favorite",
      numberOfProductsFavorite.innerHTML
    );
  });
});

// function return HTML Element
function cartEle(img, name, priceOne, priceTow) {
  return `
    <div class="product" >
        <img style="width: 150px; height: 150px;" src="${img}" alt="">
                <h4>${name}</h4>
                <div class = 'price'>
                <span class="text-success">${priceOne}</span>
                <span class="text-secondary">${priceTow}</span>
                </div>
                <span onclick="removeProduct(this.parentElement)" class="remove-cart">Remove</span>
                <span onclick="byProduct(this.parentElement)" class="by-cart">By Product</span>
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
