let mainCartItem = document.querySelector(".main-cart-item");

let allProductsBtn = document.querySelectorAll(".all-products .item .btn");

let newArray;

let numberOfProducts = document.querySelector(".icons ul li a .shop");

// Add Products in Page
if (localStorage.getItem(`item`) !== null) {
  newArray = JSON.parse(localStorage.getItem(`item`));

  window.addEventListener("DOMContentLoaded", (e) => {
    if (document.querySelector(".main-cart-item")) {
      let cartItem = document.createElement("div");
      cartItem.innerHTML += JSON.parse(localStorage.getItem(`item`)).join("");
      cartItem.className = "cart-item";
      document.querySelector(".main-cart-item").append(cartItem);
    }
  });
} else {
  newArray = [];
}

if (localStorage.getItem("product-number") !== null) {
  numberOfProducts.innerHTML = localStorage.getItem("product-number");
}

allProductsBtn.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    let parentElement = e.target.parentElement;

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
    newArray.push(productComponent);

    // save Products IN  LocalStorage
    localStorage.setItem(`item`, JSON.stringify(newArray));

    numberOfProducts.innerHTML++;

    localStorage.setItem("product-number", numberOfProducts.innerHTML);
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
