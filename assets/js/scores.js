var clearScores = document.querySelector("#clear")
var goBack = document.querySelector("#go-back");

function highScores() {

    var numberOfScores = Object.keys(localStorage);
    var scores = document.querySelector("#scores");
console.log(numberOfScores);
    for (var i=0; i<numberOfScores.length; i++){
        var tag = document.createElement("p");
        var initial = numberOfScores[i];
        var initialScores = localStorage.getItem(initial);
        var text = document.createTextNode(i+1 + ". " + initial +" - " + initialScores);
        tag.appendChild(text);
        scores.appendChild(tag);
    }
}

function clear() {
    localStorage.clear();
    location.reload();
}

window.onload = function() {
    highScores();
}

clearScores.addEventListener("click", clear);

goBack.addEventListener("click", function() {
    location.href = "index.html";
});