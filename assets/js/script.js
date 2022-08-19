var questionNumber = 0;

var startButton = document.querySelector("#start");

var questions = ["Commonly used data types DO NOT Include:","The condition in an if / else statement is enclosed with _______.","Arrays in JavaScript can be used to store _______.","String values must be enclosed within _______ when being assigned to variables."];
var answers1 = ["1. strings","2. booleans","3. alerts","4. numbers"];
var answers2 = ["1. quotes","2. curly brackets","3. parenthesis","4. square brackets"];
var answers3 = ["1. numbers and strings","2. other arrays","3. booleans","4. all of the above"];
var answers4 = ["1. commas","2. curly brackets","3. quotes","4. parenthesis"];

function start() {
    var startScreen = document.querySelector("#start-screen");
    startScreen.style.display = "none";

    var quizSection = document.querySelector("#quiz-section");
    quizSection.style.display = "inline-flex";
    quizSection.style.justifyContent = "center";

    var questionHeader = document.querySelector("#question");
    questionHeader.innerHTML = questions[questionNumber];

    var answerOne = document.querySelector("#answer1");
    answerOne.innerHTML = answers1[0];
    var answerTwo = document.querySelector("#answer2");
    answerTwo.innerHTML = answers1[1];
    var answerThree = document.querySelector("#answer3");
    answerThree.innerHTML = answers1[2];
    var answerFour = document.querySelector("#answer4");
    answerFour.innerHTML = answers1[3];






}


startButton.addEventListener("click", start);




