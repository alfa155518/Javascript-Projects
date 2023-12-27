// all variables

let user = document.querySelector(".nav .icons .user");

let logIn = document.querySelector(".page .log-in");

let containerNav = document.querySelector(" header nav");

let bars = document.querySelector(".nav .icons .bars");

let sideBar = document.querySelector(".side-bar");

let sideBarClose = document.querySelector(".side-bar .close");

let arrowToTop  = document.querySelector(".arrow")

let addToFavorite = document.querySelectorAll(".products-card .image .requirements i:first-child");

let addToShopping = document.querySelectorAll(".products-card .image .requirements .shop");

let allLi = document.querySelectorAll(".popular-product .products-name ul li");

let allCards = document.querySelectorAll(".products-card .card");

let navHeart = document.querySelector("nav .heart span")

let navShop = document.querySelector("nav .shop span")




// switch between Products 
allLi.forEach(li => {
    li.addEventListener("click", switchProducts);
})


// function to switch between Products 
function switchProducts() {
    allLi.forEach(li => {
        li.classList.remove("active");
        this.classList.add("active");
    });
    allCards.forEach(card => {
        card.style.display = 'none';
    });
    document.querySelectorAll(this.dataset.name).forEach(el => {
        el.style.display = 'block';
    });
};


/**//**//**//**//**//**//**//**//**/
/**//**//**//**//**//**//**//**//**/


// click user 
user.addEventListener("click", e => {
    logIn.classList.toggle("open");
})

// click to open sidebar
bars.onclick = function() {
    sideBar.classList.add("open");
}

// click to exit sidebar 
sideBarClose.onclick = function() {
    sideBar.classList.remove("open");
}



/**//**//**//**//**//**//**//**//**/
/**//**//**//**//**//**//**//**//**/

window.onscroll = function() {
    if (window.scrollY >= 200) {
        containerNav.classList.add("fixed");

        arrowToTop.classList.add("appear");
    } else {    
        containerNav.classList.remove("fixed");
        
        arrowToTop.classList.remove("appear");
    }
};

// click arrow to go top page
arrowToTop.onclick = function() {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
/**//**//**//**//**//**//**//**//**/
/**//**//**//**//**//**//**//**//**/


// add to favorite
addToFavorite.forEach(heart => {
    heart.addEventListener("click", e => {
        navHeart.innerHTML++;
    })
})

// add to shopping
addToShopping.forEach(shop => {
    shop.addEventListener("click", e => {
        navShop.innerHTML++;
    })
})

/**//**//**//**//**//**//**//**//**/
/**//**//**//**//**//**//**//**//**/