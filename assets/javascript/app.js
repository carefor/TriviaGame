"use strict";

var allQuestions = [
{
    question: "Four friends need to cross a rickety rope bridge at night."
                      + " Unfortunately, they have only one flashlight and the bridge is too"
                      + " dangerous to cross without one. Fear of heights causes some of the"
                      + " friends to take longer to cross than others, and the bridge is only strong" 
                      + " enough to support two people at a time, moving at the speed of the"
                      + " slowest person in the pair. It takes Adam 1 minute, Bob 2 minutes," 
                      + " Charlie 7 minutes and Dave 10 minutes to cross. What is the shortest"
                      + " time needed for all four of the friends to cross the bridge?",
choices: [
      "17 minutes",
      "15 minutes",
      "12 minutes",
      "19 minutes"
    ],
    answer: "17 minutes",
    asked: 0
  },
  {
    question: "There are 30 socks in a drawer. 60% of the socks are have holes and the rest" 
                       + " do not have holes. What is the minimum number of socks that must be" 
                       + " taken from the drawer without looking in order to be certain that at least"
                       + " two socks with holes will be chosen?",
    choices: [
      "16 socks",
      "18 socks",
      "20 socks",
      "22 socks"
    ],
    answer: "20 socks",
    asked: 0
  },
  {
    question: "Four gnomes are told to stand in a straight line, one in front of the other." 
                      + " A hat is put on each of their heads. They are told that each of these hats"
                      + " was selected from a group of five hats: two polka-dotted hats and three" 
                      + " striped hats. The first gnome, standing at the front of the line, can’t see"
                      + " either of the gnomes behind him nor their hats. The second gnome, in"
                      + " the middle, can see only the first gnome and his hat. The last gnome,"
                      + " at the rear, can see both of the other gnomes and their hats. None of the"
                      + " gnomes can see the hat on his own head. They are asked to deduce its" 
                      + " color. Some time goes by as the gnomes ponder the puzzle in silence."
                      + " Finally, one gnome makes an announcement: 'My hat is striped.' He is" 
                      + " correct. Which gnome made this announcement?",
    choices: [
      "The first gnome in line",
      "The second gnome in line",
      "The third gnome in line",
      "The last gnome in line"
    ],
    answer: "The first gnome in line",
    asked: 0
  },
{
  question: "How many times a day do a clock’s hands overlap?",
    choices: [
      "21 times",
      "22 times",
      "23 times",
      "24 times"
    ],
    answer: "22 times",
    asked: 0
},
{
  question: "A criminal is condemned to death. He must choose between three rooms,"
                    + " each with its own unique form of capital punishment. The first room is"
                    + " full of raging fire, the second room is full of bloodthirsty assassins with"
                    + " loaded guns, and the third room is full of savage lions that haven't eaten"
                    + " in 3 years. Which room should he choose?",
    choices: [
      "The first room",
      "The second room",
      "The third room",
      "It doesn't matter"
    ],
    answer: "The third room",
    asked: 0
}
];

var randomIndex;
var currentQuestion;
var currentChoices;
var choiceButton;
var correctAnswer;
var idClicked;
var askedQuestion;
var correctCount;
var wrongCount;

function genQuestions () {

//Find random question not yet asked
      for (var i = 0; i < allQuestions.length; i++) {
    	do {
    		randomIndex = Math.floor(Math.random() * allQuestions.length);

    	} while (allQuestions[randomIndex].asked === 1);

            currentQuestion = allQuestions[randomIndex].question;
        $("#question-div").append(currentQuestion);
     

           currentChoices = allQuestions[randomIndex].choices;
      for (var i = 0; i < currentChoices.length; i++) {
            choiceButton = $("<input/>").attr({
                      type: "button",
                      class: "button",
                      id: currentChoices[i].toString(),
                      value: currentChoices[i].toString()
            });
            $("#choices-div").append(choiceButton); 
      }
  
      correctAnswer = allQuestions[randomIndex].answer;
      console.log("The correct answer is: " + correctAnswer);
  }
}
 genQuestions();


function chooseAnswer() {
  correctAnswer = allQuestions[randomIndex].answer;
          $("input").click(function(e){
                idClicked = e.target.id;
              if (idClicked == correctAnswer) {
              alert("Correct!");
              correctCount++;
              setTimeout(nextQuestion, 2000);
              } else {
                alert("Wrong! The answer you were looking for is: " + correctAnswer);
                wrongCount++;
                setTimeout(nextQuestion, 2000);
              }
              askedQuestion = allQuestions[randomIndex].asked;
              askedQuestion++;
              console.log("This question has been asked " + askedQuestion + " time");
            });
}
chooseAnswer();
     
function nextQuestion() {
    $(".empty-div").empty();
    genQuestions();
    runTimer();
    decrement(secondCount, 21);
    chooseAnswer();
}

//Countdown timer:

var secondCount = 21;
var intervalId;

function runTimer() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {

	secondCount--;
    
    var timeCounter = $("#time-left").html("Seconds left: " + secondCount + " seconds");            


	if (secondCount === 0) {
		//alert("Time's up! The answer you were looking for is: " + correctAnswer);
            timerDone();
            wrongCount++;
            setTimeout(nextQuestion, 2000);
	}
}

function timerDone() {
	clearInterval(intervalId);
} 


runTimer();
