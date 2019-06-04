var timeRemaining = 30000;
var correct = 0;
var incorrect = 0;
var clockRunning = false;

var q1 = {
    Q: "What is the only U.S. state that only borders one other?",
    a1: "Rhode Island",
    a2: "Maine",
    a3: "Washington",
    a4: "Florida",
    correct: "Maine"
}

var q2 = {
    Q: "Name the number that is three more than one-fifth of one-tenth of one-half of 5,000.",
    a1: "503",
    a2: "103",
    a3: "53",
    a4: "108",
    correct: "53"
}

var q3 = {
    Q: "What is the missing number in this sequence (1, 1, 2, 3, 5, 8, 13, __, 34)?",
    a1: "20",
    a2: "21",
    a3: "25",
    a4: "17",
    correct: "21"
}

var q4 = {
    Q: "What is the longest time a human spent in space?",
    a1: "505 days",
    a2: "1054 days",
    a3: "235 days",
    a4: "437 days",
    correct: "437 days"
}

var q5 = {
    Q: "What is the fastest production car in the world?",
    a1: "Bugatti Chiron",
    a2: "Lamborghinni Aventador",
    a3: "McLaren Senna",
    a4: "Ford GT",
    correct: "Bugatti Chiron"
}

var q6 = {
    Q: "Who is the coolest",
    a1: "Jim",
    a2: "Jerry",
    a3: "Billy",
    a4: "Bob",
    correct: "Jerry"
}



var currentQuestion = 0;
var questions = [q1, q2, q3, q4, q5, q6];

setTimeout(function(rightAnswer){
    $("#questionBox").html()
}

function displayResults(){
    if (currentQuestion === 6){
        $("#questionBox").html("<p>" + "Correct Answers " + correct + "</p>" + "<p>" + "Incorrect Answers " + incorrect + "</p>")
        return 
    }
}

function resetGame(){
    $("#questionBox").html("<button id='restart'>" + "Restart" + "</button>")
    $("#restart").on("click", function() {
        $("#questionBox").html("<button id='start'>" + "Start" + "</button>")
        correct = 0;
})
}


$(document).ready(function(){
$("#questionBox").html("<button id='start'>" + "Start" + "</button>")

$("#start").on("click", function() {

    $("#questionBox").html("<p>" + q1.Q + "</p>" + " <button class='answer-button'>" + q1.a1 + "</button>" + "<button class='answer-button'>" + q1.a2 + "</button>" + "<button class='answer-button'>" + q1.a3 + "</button>" + "<button class='answer-button'>" + q1.a4 + "</button>")

})
})

$(document).on("click", ".answer-button", function(event) {
    event.preventDefault();
    var button = $(this).text();
    if ((button === questions[currentQuestion].correct) && (currentQuestion < 7)){
        alert("correct!")
        correct++
        currentQuestion++;

        $("#questionBox").html("<p>" + questions[currentQuestion].Q + "</p>" + " <button class=' answer-button'>" + questions[currentQuestion].a1 + "</button>" + "<button class='answer-button'>" + questions[currentQuestion].a2 + "</button>" + "<button class = 'answer-button'>" + questions[currentQuestion].a3 + "</button>" + "<button class = 'answer-button'>" + questions[currentQuestion].a4 + "</button>")

    } else {
        alert("incorrect!")
        incorrect++
        currentQuestion++
        $("#questionBox").html("<p>" + questions[currentQuestion].Q + "</p>" + " <button class=' answer-button'>" + questions[currentQuestion].a1 + "</button>" + "<button class='answer-button'>" + questions[currentQuestion].a2 + "</button>" + "<button class = 'answer-button'>" + questions[currentQuestion].a3 + "</button>" + "<button class = 'answer-button'>" + questions[currentQuestion].a4 + "</button>")
    } 

})

    


