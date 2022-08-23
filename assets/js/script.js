var questionNumber = 0;
var timer = 75;
var quizOver = false;

// These variables are pulling information from the HTML document
var startButton = document.querySelector("#start");
var answerOne = document.querySelector("#answer1");
var answerTwo = document.querySelector("#answer2");
var answerThree = document.querySelector("#answer3");
var answerFour = document.querySelector("#answer4");
var quizSection = document.querySelector("#quiz-section");
var resultSection = document.querySelector("#result-section");
var submitButton = document.querySelector("#submit");

// This array holds all of the questions for the entire quiz
var questions = ["Commonly used data types DO NOT Include:","The condition in an if / else statement is enclosed with _______.","Arrays in JavaScript can be used to store _______.","String values must be enclosed within _______ when being assigned to variables.","A very useful tool used during development and debugging for printing content to the debugger is:"];

// This array holds all of the answers for each question and is split up by 1,2,3,4, answers
var answers1 = ["1. strings","1. quotes","1. numbers and strings","1. commas","1. JavaScript"]
var answers2 = ["2. booleans","2. curly brackets","2. other arrays","2. curly brackets","2. terminal/bash"]
var answers3 = ["3. alerts","3. parenthesis","3. booleans","3. quotes","3. for loops"]
var answers4 = ["4. numbers","4. square brackets","4. all of the above","4. parenthesis","4. console.log"]

// This array holds all of the correct answers for all of the questions
var correctAnswer = ["4. numbers","3. parenthesis","4. all of the above","3. quotes","4. console.log"]

// This function is is how the "Start Screen" is shown and displayed before the questions as well as hiding the start screen when the start button is pressed and displays the first question of the quiz
function start() {
    var startScreen = document.querySelector("#start-screen");
    startScreen.style.display = "none";

    var quizSection = document.querySelector("#quiz-section");
    quizSection.style.display = "inline-flex";
    quizSection.style.justifyContent = "center";

    var resultSection = document.querySelector("#result-section");
    resultSection.style.display = "none";

    var questionHeader = document.querySelector("#question");
    questionHeader.innerHTML = questions[questionNumber];
    answerOne.innerHTML = answers1[questionNumber];
    answerTwo.innerHTML = answers2[questionNumber];
    answerThree.innerHTML = answers3[questionNumber];
    answerFour.innerHTML = answers4[questionNumber];
}

// This function is how the correct and wrong line is shown on the screen depending on what answer is clicked for that question as well as decreasing the time when the wrong question is selected
function rightOrWrong(clickedButton){
    var right = correctAnswer[questionNumber];
    var clickedAnswer = clickedButton[questionNumber];
    var result = "";

    if (right === clickedAnswer) {
        result = "Correct!";
    } else {
        result = "Wrong!";
        timer = timer - 10;
    }
    var resultSection = document.querySelector("#result-section");
    resultSection.innerHTML = result;
    resultSection.style.display = "inline-flex";

    setTimeout(function() {
        if (questionNumber >= 4) {
            endScreen()
        } else {
            questionNumber++;
            start()
        }
    }, 1000);
}

// This function is what is controlling the timer on the quiz.
function startTimer() {
    var time = document.querySelector("#time");
    time.innerHTML = "Time: " + timer;

    setTimeout(function() {
        if (timer <= 0) {
            endScreen()
        } else if (!quizOver) {
            timer--;
            startTimer();
        }
    }, 1000);
}

// This function is where the end screen is displayed at the end of the quiz and allows the user to input their initials to post with their score
function endScreen() {
    quizOver = true;

    var quizSection = document.querySelector("#quiz-section");
    quizSection.style.display = "none";

    var resultSection = document.querySelector("#result-section");
    resultSection.style.display = "none";

    var endOfQuiz = document.querySelector("#end-of-quiz");
    endOfQuiz.style.display = "inline-flex";

    var finalScore = document.querySelector("#finalscore");
    finalScore.innerHTML = "Your final score is " + timer + ".";
}


startButton.addEventListener("click", start);

startButton.addEventListener("click", startTimer);

answerOne.addEventListener("click", function() {
    rightOrWrong(answers1);
});
answerTwo.addEventListener("click", function() {
    rightOrWrong(answers2)
});
answerThree.addEventListener("click", function() {
    rightOrWrong(answers3)
});
answerFour.addEventListener("click", function() {
    rightOrWrong(answers4)
});

// This is were things are getting saved to the local storage once scores/initials have been submitted
submitButton.addEventListener("click",function(event) {
    event.preventDefault();

    var initials = document.querySelector("#initials");

    localStorage.setItem(initials.value.trim(), timer);
    location.href = "scores.html";
});
