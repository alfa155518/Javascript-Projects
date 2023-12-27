// all variables

let theInput = document.querySelector(".git-repos input");

let getButton = document.querySelector(".get-buttons");

let reposData = document.querySelector(".show-data") 

// function click Button 
getButton.onclick = function(){
    getRepos()
}


// function Get repos 
function getRepos() {
    if (theInput.value == "") {
        reposData.innerHTML = "<span>Please Write User name github </span>"
    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((result) => {
            return result.json()
        })

        .then((data) => {
            reposData.innerHTML = ""

            data.forEach((element) => {

                let mainDiv = document.createElement("div");

                let repoName = document.createTextNode(element.name)

                mainDiv.appendChild(repoName)

                let theUrl = document.createElement("a")

                let theUrlText = document.createTextNode("Visit")

                theUrl.href = `https://github.com/${theInput.value}/${element.name}`

                theUrl.setAttribute("target", "_blank")

                theUrl.appendChild(theUrlText)

                mainDiv.appendChild(theUrl)

                let starsSpan = document.createElement("span")

                // container Stars 
                let starsText  =  document.createTextNode(`Stars ${element.stargazers_count}`);


                // container Forks 
                let containerForks = document.createElement("span")

                let spanForks = document.createTextNode(`Forks ${element.forks_count}`)
    
                let containerCreatedAt = document.createElement("span")
    
                // container Created-AT 
                let spanCreatedAt = document.createTextNode(`Created-At ${element.created_at}`)

                containerCreatedAt.appendChild(spanCreatedAt)
    
                mainDiv.appendChild(containerCreatedAt)
    
                containerForks.appendChild(spanForks)
    
                mainDiv.appendChild(containerForks)

                starsSpan.appendChild(starsText)

                mainDiv.appendChild(starsSpan)

                mainDiv.className = "repo-box"

                // append mainDiv in repos Data 
                reposData.appendChild(mainDiv)
            });
        })
    }
}













































// fetch("https://api.github.com/users/alfa155518/repos")
// .then((result) => {
//     let myData = result.json();
//     return myData;
// })
// .then((full) => {
//     full.length = 5
//     return full
// })
// .then((full) => {
//     console.log(full[2].name)
// })