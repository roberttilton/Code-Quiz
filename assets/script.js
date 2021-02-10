var timeLimit = 90;
var score = 0;
var question = document.getElementById("question");
var answers = document.getElementById("");
var time = document.getElementById("time");
var start = document.getElementById("start");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 =document.getElementById("ans4");

function tickTock() {
    setInterval(function countdown() {
    timeLimit --
    time.textContent = timeLimit
    if(timeLeft <= 0 ) {
        console.log("Game Over");
        clearInterval(timer);
    }
}, 1000);
};

function qS() {
    var questionsApp = {
    // using the property "questions" to build out my questions for the quiz, which have taken a decidedly Lynchian turn
    questions:[
    {q:"What film of David Lynch's won the Palme d' Or at the Cannes Film Festival?",
     inputs:['Blue Velvet', 'Wild at Heart', 'Inland Empire', 'Twin Peaks: Fire Walk With Me'],
     answer:1
    },
    {q:"What favorite actor of David Lynch's first film appearance was Dune?",
    inputs:['Laura Dern', 'Miguel Ferrer', 'Kyle MacLachlan', 'Ray Wise'],
    answer:2
    },
    {q:"In what episode of Twin Peaks: The Return does Agent Cooper return fully from the Black Lodge-induced dream state he is in?",
    inputs:['Part 16', 'Part 5', 'Part 7', 'Part 10'],
    answer:0
    },
    {q:"Who co-wrote Lost Highway and Wild at Heart with David Lynch?",
    inputs:['Mark Frost', 'Stephen King', 'Barry Gifford', 'Andrew Kevin Walker'],
    answer:2
    },
    {q:"What famous film franchise were two of the great David's of film, Cronenberg and Lynch, both at one point considered to helm entries in?",
    inputs:['Indiana Jones', 'Jaws', 'Nightmare on Elm Street', 'Star Wars'],
    answer:3
    }
],
index:0,
load:function() {
    if (index<=questions.length-1) {
        question.innerHTML=index+ 1 + ". " +questions[index].q;
        ans1.textContent=this.questions[this.index].inputs[0];
        ans2.textContent=this.questions[this.index].inputs[1];
        ans3.textContent=this.questions[this.index].inputs[2];
        ans4.textContent=this.questions[this.index].inputs[3];
    } else {
    alert("Quiz Completed!")
    }
}
}
}


start.addEventListener("click", tickTock);
start.addEventListener("click", qS);