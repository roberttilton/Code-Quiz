var timeLimit = 90;
var score = 0;
var answers = document.querySelectorAll('#quizHolder')

function countdown() {
    timeLimit --
    displayTimer.textContent = "Time Remaining: " + timeLimit
    if(timeLeft <= 0 ) {
        console.log("Game Over");
        clearInterval(timer);
    }