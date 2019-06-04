var timeRemaining = 30000;
var correct = 0;
var clockRunning = false;
var question1 = "";

var q1 = {
    Q: "What is your favorite board game?",
    a1: "Chess",
    a2: "Checkers",
    a3: "Monopoly",
    a4: "Risk",
    correct: "Risk"
}

var q2 = {
    Q: "What is your favorite movie",
    a1: "Batman",
    a2: "Superman",
    a3: "Pocahantos",
    a4: "Red Riding Hood",
    correct: "Batman"
}

var q3 = {
    Q: "Who is the coolest",
    a1: "Jim",
    a2: "Jerry",
    a3: "Billy",
    a4: "Bob",
    correct: "Jerry"
}

var q4 = {
    Q: "Who is the coolest",
    a1: "Jim",
    a2: "Jerry",
    a3: "Billy",
    a4: "Bob",
    correct: "Jerry"
}

var q5 = {
    Q: "Who is the coolest",
    a1: "Jim",
    a2: "Jerry",
    a3: "Billy",
    a4: "Bob",
    correct: "Jerry"
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

function displayResults(){
    if (currentQuestion === 6){
        $("#questionBox").html("<p>" + "Correct" + correct + "/6" + "</p>")
    }
}

function resetGame(){
    correct = 0;
    $("#questionBox").html("<button id='restart'>" + "Restart" + "</button>")
    $("#start").on("click", function() {
        $("#questionBox").html("<button id='start'>" + "Start" + "</button>")
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
    if ((button === questions[currentQuestion].correct) && (currentQuestion < 3)){
        alert("correct!")
        correct++
        currentQuestion++;

        $("#questionBox").html("<p>" + questions[currentQuestion].Q + "</p>" + " <button class=' answer-button'>" + questions[currentQuestion].a1 + "</button>" + "<button class='answer-button'>" + questions[currentQuestion].a2 + "</button>" + "<button class = 'answer-button'>" + questions[currentQuestion].a3 + "</button>" + "<button class = 'answer-button'>" + questions[currentQuestion].a4 + "</button>")

    } else {
        alert("incorrect!")
        currentQuestion++
        $("#questionBox").html("<p>" + questions[currentQuestion].Q + "</p>" + " <button class=' answer-button'>" + questions[currentQuestion].a1 + "</button>" + "<button class='answer-button'>" + questions[currentQuestion].a2 + "</button>" + "<button class = 'answer-button'>" + questions[currentQuestion].a3 + "</button>" + "<button class = 'answer-button'>" + questions[currentQuestion].a4 + "</button>")
    } 

})

    


