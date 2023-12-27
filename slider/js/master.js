//Get Slider Items | Array.from [ES6]
var sliderImages = Array.from(document.querySelectorAll(`.slider-container img`))

// Get Number of Slider
var SliderCount = sliderImages.length


//Set Current Slide
var currentSlide = 1;


// Slider Number Element 
var sliderNumberElement = document.getElementById(`slide-number`)


// Previous and Next Buttons 
var nextButton = document.getElementById("next") 
var prevButton = document.getElementById("prev")

// Handle Click on prev & Next 
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;



// create The main UL Element 

let paginationElement = document.createElement("ul");

// Set ID On Element ul
paginationElement.setAttribute("id", "pagination-ul");

// Create list Item 
for (let i = 1; i <= SliderCount; i++) {
    
    // Create li
    var paginationItem = document.createElement("li");

    // Set Date Index
    paginationItem.setAttribute(`data-slide`, i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i))
    
    // Append Item In Ul
    paginationElement.appendChild(paginationItem);

    // Add The Create Ul Element To Page 
    document.getElementById(`indicators`).appendChild(paginationElement);

}


// Get The Created UL
var paginationCreatedUl = document.getElementById("pagination-ul");




var paginationBullets = Array.from(document.querySelectorAll(`#pagination-ul li`));
    for (let i = 0; i < paginationBullets.length; i++) {



        paginationBullets[i].onclick = function () {
            currentSlide = parseInt( paginationBullets[i].getAttribute("data-slide"))
            check();
        }


    }
check()
// Next Slide function 
function nextSlide() {
    if (nextButton.classList.contains("disable")) {
        return false;
    } else {
        currentSlide++
        check();
    }
}

// Previous Slide function 
function prevSlide() {
    if (prevButton.classList.contains("disable")) {
        return false;
    } else {
        currentSlide--;
        check();
    }
}


// Created The Checker Function 
function check() {
    // Set The Slide Number
    sliderNumberElement.textContent = ` Slide # ` + (currentSlide )  + ` of `  +  (SliderCount) ;

    // Remove All Active 
    removeAllActive();
    
    // Set aCtive Class On Current SliderCount Slide 
    sliderImages[currentSlide - 1].classList.add("active")
    // Set Active Class on Current Pagination Item
    
    paginationCreatedUl.children[currentSlide - 1].classList.add("active")


    // Check if Current Slide is First 
    if (currentSlide == 1) {
        prevButton.classList.add("disable")
    } else {
        prevButton.classList.remove("disable")
    }
    if (currentSlide == SliderCount) {
        nextButton.classList.add("disable")
    } else {
        nextButton.classList.remove("disable")
    }
}


// Remove All active class 

function removeAllActive() {
    sliderImages.forEach(img => {
        img.classList.remove("active")
    });
    paginationBullets.forEach(li => {
        li.classList.remove("active")
    }) 

}




