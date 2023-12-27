
// Array contains all Words
const allWords = [
    "Hello",
    "Code",
    "Town",
    "Country",
    "Testing",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Paradigm",
    "Styling",
    "Cascade",
    "Coding",
    "Funny",
    "Working",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

// words hard mode 
const wordModeHard = [
    "Programming",
    "Javascript",
    "Destructuring",
    "Documentation",
    "Dependencies",
    "Linkedin",
    "Youtube",
]



// all Variables
let buttonsModsContainer = document.querySelector(".buttons");

let buttonsMode = document.querySelectorAll(".buttons span");

let mode = document.querySelector(".mode");

let modeSeconds = document.querySelector(".seconds");

let startButton = document.querySelector(".start-button");

let randomWord = document.querySelector(".random-word");

let allWordsGenerator = document.querySelector(".all-words")

let input = document.querySelector("input[type='text']");

let timeLeft = document.querySelector(".time span");

let scoreSpanOne = document.querySelector(".score span:first-child");

let scoreSpanTow = document.querySelector(".score span:not(:first-child)");

let finish = document.querySelector(".finish");


// Object contains Lvl
const lvl = {
    "easy": 6,
    "normal": 4,
    "hard": 5,
};


    // select mode 
    function select() {

        buttonsMode.forEach(span => {
            span.addEventListener("click", e => {
                if (e.target.dataset.mode === 'easy' || e.target.dataset.mode === 'normal') {
                    let  defaultLvl =  e.target.dataset.mode;

                    defaultLvlSeconds = lvl[defaultLvl];

                        mode.innerHTML = defaultLvl;
                        
                        modeSeconds.innerHTML = defaultLvlSeconds;

                        startButton.classList.add("appear");
                        // set total Score & score
                        scoreSpanOne.innerHTML = 0;
                        scoreSpanTow.innerHTML = allWords.length;

                        // click start button  
                        startButton.onclick = function() {
                            this.remove();
                            buttonsModsContainer.remove()
                            input.focus();
                            // remove all item from wordModeHard Array 
                            wordModeHard.length = 0;

                            // function Generator Words 
                            genWords();
                        };
                };
            });
        });
        
    };

// no copy and paste in the input  
input.onpaste = function() {
    return false;
};

// function select mode 
select()

buttonsMode.forEach(span => {
    span.addEventListener("click", e => {
        if (e.target.dataset.mode === 'hard' ) {
            let  defaultLvl =  e.target.dataset.mode;

            defaultLvlSeconds = lvl[defaultLvl];

                mode.innerHTML = defaultLvl;
                
                modeSeconds.innerHTML = defaultLvlSeconds;

                startButton.classList.add("appear");

            // set total Score & score
                scoreSpanOne.innerHTML = 0;
                scoreSpanTow.innerHTML = wordModeHard.length;

                // click start button
                startButton.onclick = function() {
                    this.remove();
                    buttonsModsContainer.remove()
                    input.focus();

                    // remove all item from allWords Array 
                    allWords.length = 0;

                    // function Generator Words 
                    genWordsHard();
                };
        };
    });
});

function genWordsHard() {
    // generate radom word  
    let random = wordModeHard[Math.floor(Math.random() * wordModeHard.length)];

    let randomIndex = wordModeHard.indexOf(random);

    wordModeHard.splice(randomIndex,1);

    randomWord.innerHTML = random;

    allWordsGenerator.innerHTML = ''

    // loop to Generator all Words 
    for (let i = 0; i < wordModeHard.length; i++) {

        let div = document.createElement("div");

        let text = document.createTextNode(wordModeHard[i]);

        div.appendChild(text);

        allWordsGenerator.appendChild(div);
    };

    // function check Words 
    check()
};




function genWords() {
    // generate radom word  
    let random = allWords[Math.floor(Math.random() * allWords.length)];

    let randomIndex = allWords.indexOf(random);

    allWords.splice(randomIndex,1);

    randomWord.innerHTML = random;

    allWordsGenerator.innerHTML = ''

    // loop to Generator all Words 
    for (let i = 0; i < allWords.length; i++) {

        let div = document.createElement("div");

        let text = document.createTextNode(allWords[i]);

        div.appendChild(text);

        allWordsGenerator.appendChild(div);
    };

    // function check Words 
    check()
};



function check() {
    timeLeft.innerHTML = defaultLvlSeconds;
    let interval =  setInterval(() => {
    timeLeft.innerHTML--;
        if (timeLeft.innerHTML === '0') {
            clearInterval(interval)

            if (randomWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = ''
                scoreSpanOne.innerHTML++;

                if (allWords.length > 0) {
                    genWords();
                    
                }else if (wordModeHard.length > 0) {
                    genWordsHard()
                }else {
                    goodMessage(); 
                };
                
            } else {
            loseMessage()
            };
        };
        }, 1000);
};




// congratulations message 
function goodMessage() {
    scoreSpanOne.innerHTML= scoreSpanTow.innerHTML;
                    let span = document.createElement("span");
    
                    span.className = 'good';
    
                    let text = document.createTextNode("Congratulations");
    
                    span.appendChild(text);
    
                    finish.appendChild(span);

                    localStorage.setItem("score", span.innerHTML)

                    localStorage.setItem("data",new Date().getDate())
    
                    allWordsGenerator.remove();
};

// lose Message 
function loseMessage () {
    let span = document.createElement("span");
    
    span.className = 'bad'

    let text = document.createTextNode("Game Over");

    span.appendChild(text)

    finish.appendChild(span)

    localStorage.setItem("score", span.innerHTML)

    localStorage.setItem("data",new Date().getDate())
}



