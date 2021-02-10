var timeLimit = 90;
var score = 0;
var answers = document.getElementById("quiz-holder")

function countdown() {
    timeLimit --
    displayTimer.textContent = "Time Remaining: " + timeLimit
    if(timeLeft <= 0 ) {
        console.log("Game Over");
        clearInterval(timer);
    }
};

var questionsApp = {
    questions:[
    {q:"What film of David Lynch's won the Palme d' Or at the Cannes Film Festival?",
     inputs:['Blue Velvet', 'Wild at Heart', 'Inland Empire', 'Twin Peaks: Fire Walk With Me'],
     answer:1
    },
    {q:"What favorite actor of David Lynch's first film appearance was Dune?",
    inputs:['Laura Dern', 'Miguel Ferrer', 'Kyle MacLachlan', 'Ray Wise'],
    answer:2
    },
    {q:"In what episode of Twin Peaks: The Return does Cooper return fully from the Black Lodge-induced dream state he is in?",
    inputs:['Part 16', 'Part 5', 'Part 7', 'Part 10'],
    answer:0
    },
    {q:"What film of David Lynch's won the Palme d' Or at the Cannes Film Festival?",
    inputs:['Blue Velvet', 'Wild at Heart', 'Inland Empire', 'Twin Peaks: Fire Walk With Me'],
    answer:1
    },
    {q:"What ",
    inputs:['Blue Velvet', 'Wild at Heart', 'Inland Empire', 'Twin Peaks: Fire Walk With Me'],
    answer:1
    }
    
]
}