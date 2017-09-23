"use strict";

var allQuestions = [
//Question 1
{
    question: "Who is the strongest?",
    choices: [
      "Superman",
      "The Terminator",
      "Waluigi, obviously",
      "Minding his own business, so stop asking"
    ],
    answer: "Superman",
    asked: 0
  },
  //Question 2
  {
    question: "What is the best site ever created?",
    choices: [
      "SitePoint",
      "Simple Steps Code",
      "Trick question; they're both the best",
      "Minding his own business, so stop asking"
    ],
    answer: "SitePoint",
    asked: 0
  },
  //Question 3
  {
    question: "Where is Waldo really?",
    choices: [
      "Antarctica",
      "Exploring the Pacific Ocean",
      "Sitting in a tree",
      "Minding his own business, so stop asking"
    ],
    answer: "Antarctica",
    asked: 0
  }
];

var qaContainer = document.getElementById("qa-container");
var questionDiv = document.getElementById("question");
var choiceZeroDiv = document.getElementById("choice0");
var choiceOneDiv = document.getElementById("choice1");
var choiceTwoDiv = document.getElementById("choice2");
var choiceThreeDiv = document.getElementById("choice3");
var randomizeClass = document.getElementsByClassName("randomized");

//var questionArray = new Array();
//var choicesArray = new Array();
//var answerArray = new Array();
//var askedArray = new Array();


function genQuestions () {

//make question array
	//for (var i = 0; i < allQuestions.length; i++) {
    	//	questionArray.push(allQuestions[i].question);
	//}

//make choices array
	//for (var i = 0; i < allQuestions.length; i++) {
    	//	choicesArray.push(allQuestions[i].choices);
	//}

//make answer array
	//for (var i = 0; i < allQuestions.length; i++) {
    	//	answerArray.push(allQuestions[i].answer);
	//}

//make already asked array
	//for (var i = 0; i < allQuestions.length; i++) {
    	//	askedArray.push(allQuestions[i].asked);
	//}


//Find random question not yet asked
    for (var i = 0; i < allQuestions.length; i++) {
    	do {
    		var randomIndex = Math.floor(Math.random() * allQuestions.length);

    	} while (allQuestions[randomIndex].asked === 1);

//Ask question
        var currentQuestion = allQuestions[randomIndex].question;
        questionDiv.innerHTML = currentQuestion;

// Randomize choices and remove from their own array        
        var currentChoices = allQuestions[randomIndex].choices;
        console.log(currentChoices);


        ffunction startGame(){
	for(var i = 0; i < allQuestions.length; i++){
		dices[i] = DICE(6);
		$(".d"+i).append("f");
	}
}
}
	//$(".randomized").each(function(index) {
 	//$(this).text(currentChoices[Math.floor(Math.random()*currentChoices.length)]);
 	//function randomizeChoices() {
    	//	currentChoices.sort(function(a, b) {
    	//	return 0.5 - Math.random() 
    	//	} );
   		//randomizeClass.innerHTML = currentChoices;
   	//}

        var askedQuestion = allQuestions[randomIndex].asked;
        // Mark question as asked when moving to next turn
        allQuestions[randomIndex].asked++;
//need to deal with array of choices
//function to call all of the arrays' index 0...
console.log(currentQuestion);
console.log(currentChoices);
console.log(askedQuestion);
	}
}

 genQuestions();

//use slideshow ex for next function

//Countdown timer:

var secondCount = 21;

var intervalId;

var correctAnswer;

function runTimer() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {

	secondCount--;
    	
	$("#time-left").html("Seconds left: " + secondCount + " seconds");

	if (secondCount === 0) {
		timerDone();
		alert("Time's up!");
	}
}

function timerDone() {
	clearInterval(intervalId);
	$("#question").html("The answer you were looking for is " + correctAnswer); 
} 


//runTimer();

//when that question is over, delay and move to next

