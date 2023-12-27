let imaGes  = document.querySelector(".images");
let stArs = document.querySelector(".images .starts")
let moOn = document.querySelector(".images .moon")
let loGo = document.querySelector(".images .logo")
let mounTain3 = document.querySelector(".images .mountain3")
let mounTain4 = document.querySelector(".images .mountain4")
let rivEr = document.querySelector(".images .river")
let boAt = document.querySelector(".images .boat")
let mounTain7 = document.querySelector(".images .mountain7")


window.onscroll = function() {
    let value = scrollY;
    stArs.style.left = value + `px`
    moOn.style.top = value * 1.5 + `px`
    mounTain3.style.top = value * 1 +`px`
    rivEr.style.top = value + `px`
    boAt.style.left = value  + `px`
    loGo.style.fontSize = value  + `px`
    if(scrollY >= 67) {
        loGo.style.fontSize =  67 + `px`
        loGo.style.position = "fixed"
        if(scrollY >= 300) {
            loGo.style.display= `none`
        }else {
            loGo.style.display= `block`
        }
        if(scrollY >= 127){
            imaGes.style.background = `linear-gradient(#376281,#10001f)` 
        }else {
            imaGes.style.background = ` linear-gradient(#200016,#10001f)`
        }
    }
}