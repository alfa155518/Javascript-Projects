// all variables
let theInput = document.querySelector(".add-box input");

let buttonAddItem = document.querySelector(".add-box .add-item");

let errorDiv = document.createElement("div");

let allBoxesText = document.querySelector(".all-boxes .text");

let allBoxesContent = document.querySelectorAll(".all-boxes .content");

let drag = null;


window.onload = function() {
    theInput.focus();
};



// buttonAddItem.addEventListener("click", check);


buttonAddItem.addEventListener("click", e => {
    if (theInput.value == '' || theInput.value === null) {
        errorDiv.className = "error";
        
        errorDiv.innerHTML = "You must Write Any Thing in the Input ";
        
        document.body.appendChild(errorDiv);
    } else {
        errorDiv.remove();
        
    let span = document.createElement("span");

    span.className = 'childe'

    let spanText = document.createTextNode(theInput.value);
    
    span.appendChild(spanText)
    
    allBoxesText.appendChild(span)
    
        
    getItems(span)


    
};
})


buttonAddItem.addEventListener("click", focus);

function getItems(el) {
            el.addEventListener("dragstart", e => {
                drag = el;
            })


            el.addEventListener("dragend", e => {
                drag = null;
            })

            allBoxesContent.forEach(box => {
                box.addEventListener("dragover", e => {
                    e.preventDefault()
                })
            })
            allBoxesContent.forEach(box => {
                box.addEventListener("drop", e => {
                    box.append(drag)
                })
            })
}

// function check(e) {
//     if (theInput.value == '' || theInput.value === null) {
//         errorDiv.className = "error";

//         errorDiv.innerHTML = "You must Write Any Thing in the Input ";

//         document.body.appendChild(errorDiv);
//     } else {
//     errorDiv.remove();

//     let span = document.createElement("span");

//     let spanText = document.createTextNode(theInput.value);

//     span.appendChild(spanText)

//     allBoxesText.appendChild(span)

//         getItems(span)

//     };
// };

function focus(e) {
    theInput.value = '';
    theInput.focus();
}



