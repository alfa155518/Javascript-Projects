// all variables 

let containerWords = document.querySelector(".content .words")

let categorySpan = document.querySelector(".category span")

let containerLettersGuess  = document.querySelector(".letters-guess")

// all words 
const allWords = "abcdefghijklmnopqrstuvwxyz";

// array Form Words 
let arrayWords =  Array.from(allWords);

// loop on Words 
arrayWords.forEach(word => {
    let mainSpan = document.createElement("span");

    mainSpan.className = "wordClicked"

    mainSpan.append(word)

    containerWords.appendChild(mainSpan);
});

//////////////////////////////////////*/

//////////////////////////////////////*/

// fetch JASON Fille 
let objectWordsJson =  fetch("js/words.json").then((result) => {
    return result;
}).then(result => {

    let myJson = result.json()
    return myJson

}).then(result => {

    let jsonObject = result.object;

    let objectWordsKey  = Object.keys(jsonObject);

    //random Number Key from objectWord 
    let randomObjectKey = Math.floor(Math.random() * objectWordsKey.length);

    //random name  from objectKey
    let randomObjectName = objectWordsKey[randomObjectKey];

    let randomObjectNameValue = jsonObject[randomObjectName];

    //random Number  from  randomObjectNameValue 
    let randomObjectValueNumber = Math.floor(Math.random() * randomObjectNameValue.length);

    // random object key name from objectWords
    let randomObjectValueNumberValue = randomObjectNameValue[randomObjectValueNumber];

    categorySpan.innerHTML = randomObjectName;

    let arrayRandomObjectValueNumberValue = Array.from(randomObjectValueNumberValue);

    arrayRandomObjectValueNumberValue.forEach(element => {
    
        let mainSpan  = document.createElement("span");
    
            mainSpan.className = "span-clicked"
    
            if (element == " ") {
                mainSpan.className = "has-space";
            }
            containerLettersGuess.appendChild(mainSpan);
        });
        
         // set the wrong attempts
            wrongAttempts = 0;

            let theDraw = document.querySelector(".the-draw")
        
        document.addEventListener("click", e => {
            if (e.target.className === "wordClicked") {
    
                e.target.classList.add("clicked-word");
    
                let theClickedLetter = e.target.innerHTML.toLowerCase();
    
                let lettersGuess  = document.querySelectorAll(".letters-guess span");
    
                // set the chose Status
                let theStatus = false;
    
                arrayRandomObjectValueNumberValue.forEach((letterSpan, spanIndex) => {
    
                if (theClickedLetter == letterSpan) {
                    theStatus = true;
                    lettersGuess.forEach((letter, letterGuessIndex) => {
                        
                        if (spanIndex == letterGuessIndex) {
                            letter.innerHTML = theClickedLetter;
                        };
                    
                    });
                };
    
                });

                // if the Word equal false 
                if (theStatus !== true) {
    
                    wrongAttempts++;
    
                    theDraw.classList.add(`wrong-${wrongAttempts}`)
    
                    document.querySelector(".fail").play()
    
                    if (wrongAttempts == 8) {
    
                        gameOver()
    
                        containerWords.classList.add("no-click")
                    };
                } ;
    
            };
        });
    
        // function Game Over 
        function gameOver() {
            let mainDiv = document.createElement("div")
        
            mainDiv.className = "game-over"
        
            let gameOverText = document.createTextNode(`Game Over The Word Is ${randomObjectValueNumberValue}`)
            mainDiv.appendChild(gameOverText)
        
            document.body.appendChild(mainDiv)
        }
        
    })

//////////////////////////////////////*/

//////////////////////////////////////*/

