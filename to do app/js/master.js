let theInput = document.querySelector(".add-task input")

let theAddButton = document.querySelector(".add-task .plus")

let taskContainer = document.querySelector(".task-content")

let taskCount = document.querySelector(".tasks-count span")

let taskCompleted = document.querySelector(".tasks-completed span")

let containerAlert = document.querySelector(".container-alert") 

let ButtonOk = document.querySelector(".container-alert .ok") 

let buttonDeleteAll = document.querySelector(".delete-all")

let buttonFinishedAll = document.querySelector(".finished-all")







// focus function 
window.onload = function() {
    theInput.focus()
}



theAddButton.onclick = function() {


    if(theInput.value === "") {
        sweetAlert()
    } else {
        // noTaskMsg.remove()

        let noTaskMsg = document.querySelector(".task-content .no-task-message")

        if (document.body.contains(document.querySelector(".task-content .no-task-message"))) {
            noTaskMsg.remove()
        }

        let mainSpan =  document.createElement("span")

        mainSpan.className = "task-box"

        let deleteElement= document.createElement("span")
        
        deleteElement.className = "delete"
        
        let deleteText = document.createTextNode("Delete")
        
        deleteElement.appendChild(deleteText)
        
        let text = document.createTextNode(theInput.value)
        
        mainSpan.appendChild(text)

        mainSpan.appendChild(deleteElement)

        taskContainer.appendChild(mainSpan)
        
        theInput.value = ""
        
        theInput.focus()
        
        // remove task-Box
        deleteElement.addEventListener("click", e => {
            mainSpan.remove()
            if (taskContainer.childElementCount == 0) {
                createNoTasks()
            }
        })

        // add or remove class finished 
        mainSpan.addEventListener("click", e => {
            e.target.classList.toggle("finished")
            calculate()
        })
        
        // remove all tasks-box 
        buttonDeleteAll.addEventListener("click", e => {
            mainSpan.remove()
            if (taskContainer.childElementCount == 0) {
                createNoTasks()
                calculate()
            }
        })
        
        // add or remove class finished from all tasks-box 
        buttonFinishedAll.addEventListener("click", e => {
            mainSpan.classList.toggle("finished")
            calculate()
        })
    }

    calculate()
    

}






// start function no tasks show 

function createNoTasks() {
    let msgSpan = document.createElement("span")

    let msgText = document.createTextNode("no Tasks To Show")

    msgSpan.appendChild(msgText)

    msgSpan.className = "no-task-message"

    taskContainer.appendChild(msgSpan)

}








// start Sweet Alert 

let overLay = document.createElement("div")

overLay.className = "over-lay"


function sweetAlert() {
    containerAlert.classList.add("open")

    document.body.appendChild(overLay)

    ButtonOk.onclick = function() {
    containerAlert.classList.remove("open")

    overLay.remove()
    }
}


// start function calculate all Tasks and Completed 

function calculate() {
        taskCount.innerHTML = document.querySelectorAll(".task-content .task-box").length;


        taskCompleted.innerHTML = document.querySelectorAll(".task-content .finished").length;

}








