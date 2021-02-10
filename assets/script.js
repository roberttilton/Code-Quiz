var timeLimit = 90;
var score = 0;
var question = document.getElementById("question");
var answers = document.getElementById("");
var time = document.getElementById("time");
var start = document.getElementById("start");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");

function tickTock() {
    setInterval(function countdown() {
        timeLimit--
        time.textContent = timeLimit
        if (timeLimit <= 0) {
            console.log("Game Over");
            clearInterval(timer);
        }
    }, 1000);
};


var qS = {
    // using the property "questions" to build out my questions for the quiz, which have taken a decidedly Lynchian turn
    questions: [
        {
            q: "What film of David Lynch's won the Palme d' Or at the Cannes Film Festival?",
            inputs: ['Blue Velvet', 'Wild at Heart', 'Inland Empire', 'Twin Peaks: Fire Walk With Me'],
            answer: 1
        },
        {
            q: "What favorite actor of David Lynch's first film appearance was Dune?",
            inputs: ['Laura Dern', 'Miguel Ferrer', 'Kyle MacLachlan', 'Ray Wise'],
            answer: 2
        },
        {
            q: "",
            inputs: ['Part 16', 'Part 5', 'Part 7', 'Part 10'],
            answer: 0
        },
        {
            q: "Who co-wrote Lost Highway and Wild at Heart with David Lynch?",
            inputs: ['Mark Frost', 'Stephen King', 'Barry Gifford', 'Andrew Kevin Walker'],
            answer: 2
        },
        {
            q: "What famous film franchise were two of the great David's of film, Cronenberg and Lynch, both at one point considered to helm entries in?",
            inputs: ['Indiana Jones', 'Jaws', 'Nightmare on Elm Street', 'Star Wars'],
            answer: 3
        }
    ],
}

function questionApply() {
    if (0 <= (qS.questions.length - 1)) {
        questions.innerHTML = 1 + ". " + questions[0].q;
        ans1.innerHTML = qS.questions[qS].inputs[0];
        ans2.innerHTML = qS.questions[qS].inputs[1];
        ans3.innerHTML = qS.questions[qS].inputs[2];
        ans4.innerHTML = qS.questions[qS].inputs[3];
    } else {
        alert("Quiz Completed!")
    }
}

start.addEventListener("click", questionApply)
start.addEventListener("click", tickTock);