// start all variables 

let page = document.querySelector(".page")

let contentImg = document.querySelector(".content .image img")

let option = document.querySelector(".option")

let allOption = document.querySelectorAll(".option img")









// end all variables 




allOption.forEach(img => {
    img.addEventListener("click", e => {
        contentImg.src = img.src 
        document.body.style.backgroundColor = img.dataset.color
    })
})