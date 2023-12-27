// start all variables

let containerButtons = document.querySelector(".container-spans");

let containerAllQuestionsButton = document.querySelectorAll(".container-spans .all-spans .questions");

let containerAllQuestionsButtonSpan = document.querySelectorAll(".container-spans .all-spans span");

let quizAppContainer = document.querySelector(".quiz-app");

let categorySpans = document.querySelector(".show-app .quiz-head .category span");

let headAnswersArea = document.querySelector(".answers-area");

let theButton = document.querySelector(".submit-button .submit");

let questionCount = document.querySelector(".question-count span");

let containerBullets = document.querySelector(".bullets ");

let bulletsSpan = document.querySelector(".bullets .spans");

let answerArea = document.querySelector(".answers-area");

let theResult = document.querySelector(".result");

let countDownElement = document.querySelector(".count-down");

// set options 
let currentIndex = 0;

let theRightAnswer = 0;

let countDown;



// click to shoes quiz app  
document.body.addEventListener("click", selectQuizApp);

// function chose quiz app 
function selectQuizApp(e) {
    if (e.target.classList.contains("questions") ){
        containerButtons.classList.add("disappear");
        quizAppContainer.classList.remove("quiz-app");
    };
};




// function Select langue and sen request 
function selectLangue(request, category) {
    containerAllQuestionsButtonSpan.forEach(span => {
        span.addEventListener("click", e => {
            if (span.classList.contains("js")) {
                request.open("GET", "js/js_question.json", true);
                request.send();
            } else if (span.classList.contains("php")) {
                request.open("GET", "js/php_question.json", true);
                request.send();
            } else {
                request.open("GET", "js/html_question.json", true);
                request.send();
            };
        });
    });
};


function getQuestion() {

    let myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function() {
        
        if (this.readyState === 4 && this.status === 200) {
            let questionsObject = JSON.parse(this.responseText);
            let questionsObjectCount = questionsObject.length;

            // category langue Name 
            categorySpans.innerHTML =  questionsObject[0].category;
            
            // Randomize Questions 
            shuffle(questionsObject)

            // create bullets span and question Count
            createSpansCount(questionsObjectCount)

            // function addQuestionData
            addQuestionData(questionsObject[currentIndex], questionsObjectCount );


                 // count Down Function
                countDownTimer(10,questionsObjectCount)

                // clicking on submit 
                theButton.onclick = () => {

                    // the Right Answer 
                    let rightAnswer = questionsObject[currentIndex].right_answer;

                    // increase the Answer 
                    currentIndex++;

                    // check the Answer 
                    checkAnswer(rightAnswer, questionsObjectCount);

                    // remove Previous Questions 
                    headAnswersArea.innerHTML = '';


                // function addQuestionData
                addQuestionData(questionsObject[currentIndex], questionsObjectCount );

                // function check Bullets 
                handelBullets();

            // count Down Function
            clearInterval(countDown)
            countDownTimer(10,questionsObjectCount)

                // function Show Results
                showResults(questionsObjectCount)
                    
                };
        };
    };
    // Select langue and sen request
    selectLangue(myRequest);
};


// function GEt Question from json file 
getQuestion();

// function create bullets span and question Count
function createSpansCount(num) {

    // count span 
    questionCount.innerHTML = num;

    // create loop to Create Bullets 
    for (let i = 0; i < num; i++ ) {

        let span = document.createElement("span");

        bulletsSpan.appendChild(span);

        if (i === 0) {
            span.className = 'clicked';
        };
    };
};




    // start function addQuestionData
    function addQuestionData(obj, count)  {
        if (currentIndex < count) {

            // start create head question
        let headQuestion = document.createElement("h2");
        
        let headQuestionText = document.createTextNode(obj['title']);

        headQuestion.appendChild(headQuestionText);

        headAnswersArea.appendChild(headQuestion);

            // loop create Questions 
            for (let i = 1; i <= 4; i++) {

                let mainDiv = document.createElement("div");

                // create input radio with Properties 
                let radioInput = document.createElement("input");
                
                radioInput.type = `radio`;
                radioInput.name = `questions`;
                radioInput.id = `answer_${i}`;
                radioInput.dataset.answer = obj[`answer_${i}`];

                // make First Question Checked
                if (i === 1) {
                    radioInput.checked = true;
                }

                // create label with Properties 
                let theLabel = document.createElement("label");

                theLabel.htmlFor = `answer_${i}`
                let theLabelText = document.createTextNode(obj[`answer_${i}`]);
                theLabel.appendChild(theLabelText);
                
                mainDiv.className = `answer`;
                mainDiv.append(radioInput,theLabel);
                
                answerArea.appendChild(mainDiv);
                
                
            };

        };
    };


    // shuffle function Randomize Questions
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





    // Check Answer  True or False
    function checkAnswer(rAnswer, count) {
        let allAnswers = document.getElementsByName("questions");
        let theChosenAnswer;

        // loop on Right Answer 
        for (let i = 0; i < allAnswers.length; i++) {
            if (allAnswers[i].checked) {
                theChosenAnswer = allAnswers[i].dataset.answer;
            };
            
        };
        
        if (rAnswer === theChosenAnswer) {
            theRightAnswer++;
        };

    };

    // function add class checked on bullets
    function handelBullets() {

        let bulletsSpanContainer = document.querySelectorAll(".bullets .spans span");

        let arrayBulletsSpanContainer = Array.from(bulletsSpanContainer);
        
        arrayBulletsSpanContainer.forEach((span,index) => {
            if (currentIndex === index) {
                span.className = 'clicked'
            };
        });
    };


    // function Show Results
    function showResults(count) {
        let result;
        if (currentIndex === count) {
            theButton.remove();
            containerBullets.remove();
            
            if (theRightAnswer > (count / 2) && theRightAnswer < count ) {
            result = `<span class="good">Good : you Answered ${theRightAnswer} from ${count}</span>`;
        }else if (theRightAnswer === count) {
            result = `<span class="perfect">perfect : you Answered ${theRightAnswer} from ${count}</span>`;
        } else {
            result = `<span class="bad">bad : you Answered ${theRightAnswer} from ${count}</span>`;
        };

        theResult.innerHTML = result;
    };
    };


    // Timer Function && Next move to Question
    function countDownTimer(duration, count) {
        if (currentIndex < count) {
            let mentis, second;
            countDown = setInterval(() => {
                mentis = parseInt(duration / 60);
                second = parseInt(duration % 60);

                mentis = mentis < 10 ? `0${mentis}`: mentis;
                second = second < 10 ? `0${second}`: second;

                countDownElement.innerHTML = `${mentis} : ${second}`;

                if(--duration < 0) {
                    clearInterval(countDown)
                    theButton.click()
                };
            }, 1000);
        };
    };