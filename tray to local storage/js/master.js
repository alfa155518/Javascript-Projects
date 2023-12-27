let allSpans = document.querySelectorAll(".buttons span")

let result = document.querySelector(".result > span")

let theInput = document.getElementById("the-input")


allSpans.forEach(span => {
    span.addEventListener("click", e => {
        

        if (e.target.classList.contains("check-item")) {
            checkItem()
        } 
        if (e.target.classList.contains("add-item")) {
            addItem()
        } 
        if (e.target.classList.contains("delete-item")) {
            deleteItem()
        } 
        if (e.target.classList.contains("show-item")) {
            showItem()
        } 


    })
})


function checkInput() {
    if (theInput.value == '') {
        result.innerHTML = `input Cant Be Empty`
    }
}


function checkItem() {

        if (theInput.value !== '') {

            if(localStorage.getItem(theInput.value)) {

                result.innerHTML = `Found Local Item called <span>${theInput.value}</span>`

            } 
            else {
                result.innerHTML = `No Local Item called <span>${theInput.value}</span>`
            }

        } else {
            checkInput()
        }
}

function addItem() {
    if (theInput.value !== '') {

        localStorage.setItem(theInput.value, "test")

            result.innerHTML = `added Local Item called <span>${theInput.value}</span>`

            theInput.value = ''

        } else {
            checkInput()
        }
}


function deleteItem() {
    if (theInput.value !== '') {

        if (localStorage.getItem(theInput.value)) {

            localStorage.removeItem(theInput.value)
            theInput.value = ''
                result.innerHTML = `deleted Local Item called <span>${theInput.value}</span>`
        } else {
            result.innerHTML = `no found local storage called ${theInput.value}`
        }

        } else {
            checkInput()
        }
}

function showItem() {
    if (localStorage.length) {
        for(let [key,value] of Object.entries(localStorage)) {
            result.innerHTML += `<span>${key}</span>`
        }
    } else {
        result.innerHTML = `local Storage is empty`
    }
}


