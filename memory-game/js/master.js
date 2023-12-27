// start All variables 

let containerName = document.querySelector(".container-name-traits .name span")

let containerTraits = document.querySelector(".container-name-traits .traits span")

let proMpt = prompt("Enter Your Name To Play")

let gameContainer = document.querySelector(".game-container")

let gameContainerBox = document.querySelectorAll(".game-container .box")

let gameContainerBoxArray = Array.from(gameContainerBox)

let orderRange = Array.from(Array(gameContainerBoxArray.length).keys())

let soundSuccess = document.querySelector(".success")

let soundWin = document.querySelector(".win")

let soundFailed = document.querySelector(".flailed")


// end All variables 


// start overlay 

let overLay = document.createElement("div")

overLay.className = "over-lay"

let start = document.createElement("p")

start.innerHTML = "START"

start.className = "start"

overLay.appendChild(start)

document.body.appendChild(overLay)


start.onclick = function() {
    
    overLay.remove()
    
    
    
    // start Timer 
    
    
    
    let counter =  setInterval(() => {

        let tiMer = document.querySelector(".container-name-traits .timer")
        
        let youLosses = document.createElement("div")
        
            youLosses.className = "losses"
        
        youLosses.innerHTML = "You Losses"

        tiMer.innerHTML--

    if (tiMer.innerHTML == 0) {
        clearInterval(counter)

        document.body.appendChild(youLosses)

        soundFailed.play()

        gameContainer.classList.add("no-click")

        
    }
}, 1000);

// end Timer 

}




// end overlay 






// start containerNameTraits
window.onload = function() {
    if (proMpt == "" || proMpt == null) {
        containerName.innerHTML = "UnKnown"
    } else {
        containerName.innerHTML = proMpt
        
    }
}
// end containerNameTraits





shuffle(orderRange)

// start order box 
gameContainerBox.forEach((box,index) => {
    box.style.order = orderRange[index]
})
// end order box 




gameContainerBoxArray.forEach(box => {
    box.addEventListener("click", e => {
        flip(box)
    })
})



// start filter all flipped box 
function flip(flipped) {
    
    flipped.classList.add("is-flipped")

    let filterBox = gameContainerBoxArray.filter(ele => ele.classList.contains("is-flipped")) 
    
    if (filterBox.length === 2) {
        noClick()
        check(filterBox[0], filterBox[1])
    }  else {

    }
}
// start filter all flipped box 



// start function no click 
function noClick() {
    gameContainer.classList.add("no-click")

    setTimeout(() => {
        gameContainer.classList.remove("no-click")
    }, 1000)
}
// end function no click 



// start function check element 
function check(firstElement, secondElement) {
        if (firstElement.dataset.name === secondElement.dataset.name) {
            firstElement.classList.remove("is-flipped")
            secondElement.classList.remove("is-flipped")

            soundSuccess.play()

            firstElement.classList.add("has-flipped")
            secondElement.classList.add("has-flipped")
        } else {
            containerTraits.innerHTML++
            setTimeout(() => {

            firstElement.classList.remove("is-flipped")
            secondElement.classList.remove("is-flipped")

            }, 1000);
            soundFailed.play()
        }
}
// end function check element 



// shuffle function 

function shuffle(array) {

    let current = array.length, temp, random

    while (current > 0) {

        random = Math.floor(Math.random() * current);

        current--;
        

        temp = array[current];

        array[current] = array[random];

        array[random] = temp;

    };
    return array;
};


