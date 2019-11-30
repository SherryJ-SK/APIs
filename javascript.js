//set all elements
var timer = document.querySelector("#timer");
var cover = document.querySelector("#cover");
var start = document.querySelector("#confirm");
var quiz = document.querySelector("#quiz");
var questionDisplay = document.querySelector("#question");
var comment = document.querySelector("#comment");
var choiceGroup = document.getElementsByClassName("choice");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var scoreBtn = document.querySelector("#scorebtn");
var lastPage = document.querySelector("#lastPage");
var finalPage = document.querySelector("#finalPage");
var submit = document.querySelector("#submit");

// questions 
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["alerts", "strings", "booleans", "numbers"],
        answer: "A"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "C"
    },
    {
        title: "What is === operator?",
        choices: ["equal operator", "strict equality operator", "process operator", "convert operator"],
        answer: "B"
    },
    {
        title: "What is NOT the looping structure in JavaScript?",
        choices: ["For", "While", "do-while loops", "return"],
        answer: "D"
    },
    {
        title: "What is NOT the types of Pop up boxes available in JavaScript?",
        choices: ["Alert", "Confirm", "Function", "Prompt"],
        answer: "C"
    },
    {
        title: "What is 'this' keyword in JavaScript?",
        choices: ["An object", "The object from where it was called", "Selected element", "Undefined"],
        answer: "B"
    },
];

// set question parameters
let currentQuestionIndex = 0;
let currentScore = 0;
var timeLeft = 60;
let TIMER;
var name = "";


// button clicked quiz started
start.addEventListener("click", runQuiz);

// render countdown 
function timeStart() {
    TIMER = setInterval(renderCount, 1000);
}


function renderCount() {
    timer.value = 60 - timeLeft;
    timeLeft--;
    if (timeLeft <= 0) {
        clearInterval(TIMER);
        alert("Times Out!")
        saveScore();
    };
    timer.textContent = "Time: " + timeLeft;
}

// button clicked quiz started
function runQuiz() {
    quiz.style.display = "block";
    cover.style.display = "none";
    timeStart();
    render(questions);
}

// run questions 
function render(questions) {
    var currentQuestion = questions[currentQuestionIndex];
    var qt = currentQuestion.title;
    var qc = currentQuestion.choices;

    questionDisplay.textContent = qt;

    choiceA.textContent = qc[0];
    choiceB.textContent = qc[1];
    choiceC.textContent = qc[2];
    choiceD.textContent = qc[3];
};

quiz.addEventListener("click", buttonClick);

// pick user's choice from the button clicked
function buttonClick() {
    if (event.target.matches("button")) {
        var userChoice = event.target.id;
        console.log(userChoice);
    } else {
        alert("Please make a choice.");
    };

    // compare the user's choice with the answer in the array
    var currentQuestion = questions[currentQuestionIndex]
    if (userChoice == currentQuestion.answer) {
        comment.textContent = "Great Job!";

    } else {
        comment.textContent = "That's the wrong answer.";
        timeLeft -= 5;
    } comment.style.display = "block";

    currentQuestionIndex++;

    if (currentQuestionIndex == questions.length) {
        alert("You have complete the quiz, now check your rank");
        quizEnd();

    } else {
        render(questions);
    }

}


function quizEnd() {
    quiz.style.display = "none";
    comment.style.display = "none";
    lastPage.style.display = "block";

    clearInterval(TIMER);
    timer.textContent = "Time";
    parseInt(timeLeft);
    finalPage.textContent = "Your score is " + timeLeft;
    submit.addEventListener("click", storeName);
}


function storeName(event) {
    event.preventDefault();
    
    var initialInput = document.querySelector("#initial");

    var userInput = {
        name: initialInput.value.trim(),
        score: timeLeft
    }

    alert("You have submit your name");
    console.log(userInput);

    localStorage.setItem("user", JSON.stringify(userInput));

    window.location.href = "score.html";

}

