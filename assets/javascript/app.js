var timeRemaining = 30000;
var correct = 0;
var clockRunning = false;
var question1 = "";

var startScreen = {
    s: "Start"
}



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

var currentQuestion = 0;
var questions = [q1, q2, q3];

$(document).ready(function(){

$("#questionBox").append("<button id='start'>" + startScreen.s + "</button>")

$("#start").on("click", function() {

    $("#questionBox").html("<p>" + q1.Q + "</p>" + " <button class='answer-button'>" + q1.a1 + "</button>" + "<button class='answer-button'>" + q1.a2 + "</button>" + "<button class='answer-button'>" + q1.a3 + "</button>" + "<button class='answer-button'>" + q1.a4 + "</button>")

})
})

$(document).on("click", ".answer-button", function(event) {
    event.preventDefault();
    var button = $(this).text();
    console.log(button);
    if ((button === questions[currentQuestion].correct) && (currentQuestion < 3)){
        alert("correct!")
        correct++
        // increment correct answers
        // display updated number of correct answers
        // display next question and buttons
        currentQuestion++;

        $("#questionBox").html("<p>" + questions[currentQuestion].Q + "</p>" + " <button class=' answer-button'>" + questions[currentQuestion].a1 + "</button>" + "<button class='answer-button'>" + questions[currentQuestion].a2 + "</button>" + "<button class = 'answer-button'>" + questions[currentQuestion].a3 + "</button>" + "<button class = 'answer-button'>" + questions[currentQuestion].a4 + "</button>")

    } else if (currentQuestion === 3){

        $("#questionBox").html("<p>" + "Correct" + correct + "/3" + "</p>")
    
    
    
    } else {
        alert("incorrect!")
        currentQuestion++
        
        $("#questionBox").html("<p>" + questions[currentQuestion].Q + "</p>" + " <button class=' answer-button'>" + questions[currentQuestion].a1 + "</button>" + "<button class='answer-button'>" + questions[currentQuestion].a2 + "</button>" + "<button class = 'answer-button'>" + questions[currentQuestion].a3 + "</button>" + "<button class = 'answer-button'>" + questions[currentQuestion].a4 + "</button>")
        // increment incorrect
        // display next 
    } 

})

    


