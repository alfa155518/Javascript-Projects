
// all Variables
let logOutButton = document.querySelector("nav .all-links .info .log-out");

let userName = document.querySelector("nav .all-links .info .user span");

let darkButton = document.querySelector(".all-links .mode .dark");

let lightButton = document.querySelector(".all-links .mode .light");

let allInputPrice = document.querySelectorAll(".price input")

let inputTitle = document.getElementById("title");

let inputPrice = document.getElementById("price");

let inputTaxes = document.getElementById("taxes");

let inputAds = document.getElementById("ads");

let inputDiscount = document.getElementById("discount");

let total = document.querySelector(".inputs p span");

let count = document.getElementById("count");

let category = document.getElementById("category");

let btnSubmit = document.getElementById("submit");

let arrayData;

let btnDeleteAll = document.querySelector(".delete-all");

let temp;

let mood = 'create';

let moodSearch = 'title';

let inputSearch = document.getElementById('search')








// function log out Button
logOutButton.addEventListener("click", logOut);

// function log out 
function logOut() {
    if ((localStorage.getItem("userName")) && (localStorage.getItem("Password"))) {
        localStorage.clear();
        window.location = 'register.html'
    };
};


// name of userName in main page 
if (localStorage.getItem("userName")) {
    userName.innerHTML = localStorage.getItem("userName")
} else {
    userName.innerHTML = 'Unknown'
}

// apply Dark Mode  
if (localStorage.getItem("darkMode")) {
    document.body.style.backgroundColor = localStorage.getItem("darkMode");
}

// button click to apply Dark Mode 
darkButton.onclick = function() {
    localStorage.setItem("darkMode", this.dataset.color);
    document.body.style.backgroundColor = this.dataset.color;
};

// button Click to remove Dark Mode 
lightButton.onclick = function() {
    localStorage.removeItem("darkMode");
    document.body.style.backgroundColor = this.dataset.color;
};




// loop on all Input in Price 
allInputPrice.forEach(input => {
    input.onkeyup = function() {
        getData(input);
    };
});

// function git Data 
function getData(theInput) {
    if (inputPrice.value !== '') {
        let result = (+inputPrice.value + +inputTaxes.value + +inputAds.value) - +inputDiscount.value
        total.innerHTML = result;
    } else {
        total.innerHTML = '';
    };
};


// check in localStorage is exit product 
if (localStorage.getItem("product") !== null) {
    arrayData = JSON.parse(localStorage.getItem("product"));
} else {
    arrayData = [];
}



// create Element 
btnSubmit.onclick = function() {
    const newProduct = {
        inputTitle: inputTitle.value.toLowerCase(),
        inputPrice: inputPrice.value,
        inputTaxes: inputTaxes.value,
        inputAds: inputAds.value,
        inputDiscount: inputDiscount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value.toLowerCase()
    };
    if (mood === 'create') {
        
    if (inputTitle.value != '' && inputPrice.value != '' && inputTaxes.value != '' && inputAds.value != ''  && category.value != '' ) {
        if (newProduct.count > 1) {
            for (let i = 0; i < newProduct.count; i++) {
                arrayData.push(newProduct);
            }
        } else {
            arrayData.push(newProduct);
        }
    }
    } else {
        arrayData[temp] = newProduct;

        mood = 'create';

        btnSubmit.innerHTML = 'create';

        count.style.display = 'block'
    }

    localStorage.setItem("product", JSON.stringify(arrayData))

    // function clear Data 
    clearData()

    // function showData
    showData()
}



// clear Data Inputs 
function clearData() {
    allInputPrice.forEach(input => {
        input.value = '';
    });
    inputTitle.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
};



// function show Data 
function showData() {
    let table = '';
    for (let i = 0; i < arrayData.length; i++) {
        table += `
        
        <tr>
        <td>${i}</td>
        <td>${arrayData[i].inputTitle}</td>
        <td>${arrayData[i].inputPrice}</td>
        <td>${arrayData[i].inputTaxes}</td>
        <td>${arrayData[i].inputAds}</td>
        <td>${arrayData[i].total}</td>
        <td>${arrayData[i].count}</td>
        <td>${arrayData[i].category}</td>
        <td><button onclick = "updateProduct(${i})" id="update">Update</button></td>
        <td><button onclick = "deleteProduct(${i})" id="delete">Delete</button></td>
        </tr>
        ` 
    };
    
    document.getElementById("tbody").innerHTML = table;

    // add active class to btnDeleteAll
    if (arrayData.length > 0) {
        btnDeleteAll.innerHTML = `
        <button onclick = "deleteAllProduct()">Delete All (${arrayData.length})</button>
        
        `
    } else {
        btnDeleteAll.innerHTML = ''
    }
};

showData();

    // Delete Product 
function deleteProduct(i) {
        arrayData.splice(i,1);
        localStorage.product = JSON.stringify(arrayData);
        showData();
        
    };



// Delete All Products
function deleteAllProduct() {
    arrayData.length = 0;
    localStorage.removeItem("product");
    showData();
};



// update Product 
function updateProduct(i) {
    inputTitle.value = arrayData[i].inputTitle;

    inputPrice.value = arrayData[i].inputPrice;

    inputTaxes.value = arrayData[i].inputTaxes;

    inputAds.value = arrayData[i].inputAds;

    inputDiscount.value = arrayData[i].inputDiscount;

    
    getData();
    
    count.style.display = 'none';

    category.value = arrayData[i].category;

    btnSubmit.innerHTML = 'Update';

    mood = 'Update';

    temp = i;

    scroll({
        top:0,
        behavior:'smooth'
    });
};


// search Product 
function searchMood(id) {
    if (id === 'search-title') {
        moodSearch = 'title';
    } else {
        moodSearch = 'category';
    };
    inputSearch.placeholder = ' search By ' + moodSearch 
    inputSearch.focus()
    inputSearch.value = '' 
    showData();
};


function searchData(value) {
    let table = '';

    for (let i = 0; i < arrayData.length; i++) {

        if (moodSearch = 'title') {
    
            for (let i = 0; i < arrayData.length; i++) {
                if (arrayData[i].inputTitle.includes(value.toLowerCase())) {
                    table += `
            
                    <tr>
                    <td>${i}</td>
                    <td>${arrayData[i].inputTitle}</td>
                    <td>${arrayData[i].inputPrice}</td>
                    <td>${arrayData[i].inputTaxes}</td>
                    <td>${arrayData[i].inputAds}</td>
                    <td>${arrayData[i].total}</td>
                    <td>${arrayData[i].count}</td>
                    <td>${arrayData[i].category}</td>
                    <td><button onclick = "updateProduct(${i})" id="update">Update</button></td>
                    <td><button onclick = "deleteProduct(${i})" id="delete">Delete</button></td>
                    </tr>
                    ` 
                }
                
            }
        } 
        else {
            for (let i = 0; i < arrayData.length; i++) {
                if (arrayData[i].category.includes(value.toLowerCase())) {
                    table += `
            
                    <tr>
                    <td>${i}</td>
                    <td>${arrayData[i].inputTitle}</td>
                    <td>${arrayData[i].inputPrice}</td>
                    <td>${arrayData[i].inputTaxes}</td>
                    <td>${arrayData[i].inputAds}</td>
                    <td>${arrayData[i].total}</td>
                    <td>${arrayData[i].count}</td>
                    <td>${arrayData[i].category}</td>
                    <td><button onclick = "updateProduct(${i})" id="update">Update</button></td>
                    <td><button onclick = "deleteProduct(${i})" id="delete">Delete</button></td>
                    </tr>
                    ` 
                }
                
            }
        }
    }

    document.getElementById("tbody").innerHTML = table;
}









