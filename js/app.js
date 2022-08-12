const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersindicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

//putting questions in the availablequestions array
function setAvailableQuestions() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        availableQuestions.push(quiz[i])
    }
}

//this function sets the question number, the questions and options
function getNewQuestion() {
    //seting question number
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;

    //setting questions and randomizing them
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    //gets the index of the questionindex from the availablequestions array to keep track of questions
    const repeatQuestion = availableQuestions.indexOf(questionIndex);
    //removing the questionIndex from the availableQuestion array to remove question repetition
    availableQuestions.splice(repeatQuestion, 1);
    //setting question options, gettin options length
    const optionLength = currentQuestion.options.length
    //putting options in the availableoptions array
    for (let i = 0; i < optionLength; i++) {
        availableOptions.push(i)
    }
    //emptying the optionscontainer of the previous question for the options of the new or current question
    optionContainer.innerHTML = '';

    //adding animation delays to options
    let animationDelay = 0.15;

    for (let i = 0; i < optionLength; i++) {
        //randomizing the options
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        //getting the position of optionIndex from Availableoptions
        const repeatOption = availableOptions.indexOf(optionIndex);
        availableOptions.splice(repeatOption, 1);

        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onclick", "getResult(this)")

    }




    questionCounter++

}


//function to get result of option click on the current question
function getResult(optionElement) {
    const id = parseInt(optionElement.id);
    // console.log(typeof id)
    if (id === currentQuestion.answer) {
        //sets option to GREEN 
        optionElement.classList.add("correct");
        //sets indicator to GREEN for the correct answer
        updateAnswerIndicator("correct");
        //counter for keeping track of correct answers
        correctAnswers++;
        console.log(correctAnswers)
    } else {
        //sets option to RED 
        optionElement.classList.add("wrong");
        //sets indicator to GREEN for the wrong answer
        updateAnswerIndicator("wrong");
        // if the answer is wrong then show the cprrect option by adding green to the correct option
        const optionLength = optionContainer.children.length;
        for (let i = 0; i < optionLength; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    unclickableOptions();

}

//this function makes all other options unclickable after the user has selected ONE option

function unclickableOptions() {
    const optionLength = optionContainer.children.length;
    for (let i = 0; i < optionLength; i++) {
        optionContainer.children[i].classList.add("answered");
    }
}

function answersIndicator() {
    answersindicatorContainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answersindicatorContainer.appendChild(indicator);
    }

}

function updateAnswerIndicator(markType) {
    answersindicatorContainer.children[questionCounter - 1].classList.add(markType);
}

//function for next button
function nextbtn() {
    if (questionCounter === quiz.length) {
        console.log("Quiz over");
        endGame();
    } else {
        getNewQuestion();
    }

}

//function automatically ends game on click
function endbtn() {

    console.log("Done playing");
    endGame();


}

//function for ending the game and displaying the result section
function endGame() {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    quizResult();
}

//function generates quiz results
function quizResult() {
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + quiz.length;
}

function resetQuiz() {
     questionCounter = 0;
     correctAnswers = 0;
     attempt = 0;

}
//function allows users to restart the game
function playAgain() {
    // homeBox.classList.remove("hide");
    resultBox.classList.add("hide");
    quizBox.classList.add("hide");
    resetQuiz();
    startQuiz();
}


//This Function starts the quiz
function startQuiz() {
    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");
    //this function sets all the available questions in the availablequestions array
    setAvailableQuestions();
    //this function is called to get the questions
    getNewQuestion();

    answersIndicator();
}