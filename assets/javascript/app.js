var allQuestions = [{
    question: "Four campers need to cross a rickety rope bridge at night." +
      " Unfortunately, they have only one flashlight and the bridge is too" +
      " dangerous to cross without one. Fear of heights causes some of the" +
      " campers to take longer to cross than others, and the bridge is only strong" +
      " enough to support two campers at a time, moving at the speed of the" +
      " slowest camper in the pair. It takes Adam 1 minute, Bob 2 minutes," +
      " Charlie 7 minutes and Dave 10 minutes to cross. What is the shortest" +
      " time needed for all four of the campers to cross the bridge?",
    choices: [
      "17 minutes",
      "15 minutes",
      "19 minutes",
      "None of the above"
    ],
    answer: "17 minutes",
  },
  {
    question: "There are 30 socks in a drawer. 60% of the socks are have holes and the rest" +
      " do not have holes. What is the minimum number of socks that must be" +
      " taken from the drawer without looking in order to be certain that at least" +
      " two socks with holes will be chosen?",
    choices: [
      "18 socks",
      "20 socks",
      "22 socks",
      "None of the above"
    ],
    answer: "20 socks",
  },
  {
    question: "Four gnomes are told to stand in a straight line, one in front of the other." +
      " A hat is put on each of their heads. They are told that each of these hats" +
      " was selected from a group of five hats: two polka-dotted hats and three" +
      " striped hats. The first gnome, standing at the front of the line, can’t see" +
      " either of the gnomes behind him nor their hats. The second gnome, in" +
      " the middle, can see only the first gnome and his hat. The last gnome," +
      " at the rear, can see both of the other gnomes and their hats. None of the" +
      " gnomes can see the hat on his own head. They are asked to deduce its" +
      " color. Some time goes by as the gnomes ponder the puzzle in silence." +
      " Finally, one gnome makes an announcement: \"My hat is striped.\" He is" +
      " correct. Which gnome made this announcement?",
    choices: [
      "The first gnome",
      "The second gnome",
      "The third gnome",
      "The last gnome",
    ],
    answer: "The first gnome",
  },
  {
    question: "How many times a day do a clock’s hands overlap?",
    choices: [
      "22 times",
      "23 times",
      "24 times",
      "None of the above"
    ],
    answer: "22 times",
  },
  {
    question: "A criminal is condemned to death. He must choose between three rooms," +
      " each with its own unique form of capital punishment. The first room is" +
      " full of raging fire, the second room is full of bloodthirsty assassins with" +
      " loaded guns, and the third room is full of savage lions that haven't eaten" +
      " in 3 years. Which room should he choose?",
    choices: [
      "The first room",
      "The second room",
      "The third room",
      "None of the above"
    ],
    answer: "The third room",
  },
  {
    question: "A farmer is on his way back from the market, with him he has a fox, a chicken and some" +
      " grain. When he reaches a river crossing he must use a small boat only big enough for" +
      " him and one other item. Unfortunately if the fox is left alone with the chicken it will" +
      " eat it, as will the chicken eat the grain. How many trips across the river will it take" +
      " the farmer to safely move all his belongings to the other side?",
    choices: [
      "Five crossings",
      "Six crossings",
      "Seven crossings",
      "None of the above"
    ],
    answer: "Seven crossings",
  },
  {
    question: "If it takes six moles one hour to dig six holes, how long does it take one mole to dig half a hole?",
    choices: [
      "5 minutes",
      "10 minutes",
      "1 hour",
      "None of the above"
    ],
    answer: "None of the above"
  }
];


var currentIndex;
var currentQuestion;
var newQuestion;
// var currentChoices;
var choiceButton;
var userAnswer;
var correctAnswer;
// var idClicked;
// var askedQuestion;
var timer;
var secondsCount = 30;
var correctCount = 0;
var wrongCount = 0;
var questionCount = 0;
var gameOver = false;


$("#start-btn").click(function () {
  $("#start-wrapper").css("display", "none");
  $("#count-wrapper").css("display", "flex");
  $("#question-div").css("display", "flex");
  $("#choices-div").css("display", "flex");
  timerFunction();
  genQuestions();
});


function timerFunction() {
  var timeLeft = document.getElementById("time-left");

  timer = setInterval(function () {
    timeLeft.innerHTML = secondsCount;
    secondsCount--;
    if (secondsCount === -1) {
      wrongCount++;
      $("#wrong").html(wrongCount);
      clearInterval(timer);
      transitionDelay();
    }
  }, 1000);
}

function transitionDelay() {
  setTimeout(nextQuestion, 1000);
}

//keep question from repeating
function genQuestions() {

  $(".empty-div").empty();

    questionCount++;

    if(questionCount < 8) {
    $("#questionCount").html(questionCount);

    currentIndex = Math.floor(Math.random() * allQuestions.length);

    currentQuestion = allQuestions[currentIndex];
    newQuestion = $("#question-now").html(currentQuestion.question);
    $("#question-div").html(newQuestion);

    for (var i = 0; i < currentQuestion.choices.length; i++) {
      choiceButton = $("<input/>").attr(
        {
        type: "button",
        class: "choiceButton",
        id: currentQuestion.choices[i].toString(),
        value: currentQuestion.choices[i].toString()
      }
    );
      $("#choices-div").append(choiceButton).show();
    }

    correctAnswer = currentQuestion.answer;

    allQuestions.splice(currentIndex, 1);

    $(".choiceButton").one("click", function () {
      $(this).css({
        background: "rgba(0, 0, 0, 0)",
        fontStyle: "italic",
        fontWeight: "bolder",
        fontSize: "45px",
        padding: "25px 35px",
        borderStyle: "solid",
        transform: "translateX(-4px)",
        boxShadow: "none",
        textShadow: "none",
        outline: "none"
      });
      $(".choiceButton").not(this).css({
        visibility: "hidden"
      });
      userAnswer = $(this)[0].id;
      if (userAnswer === correctAnswer) {
        correctCount++;
        $("#correct").html(correctCount);
        $(this).css({
          color: "rgb(145,214,154)",
          textShadow: "2px 2px 2px rgb(74, 172, 87)",
	        boxShadow: "inset 0 0 0 4px",
          border: "2px solid rgb(74, 172, 87)"
        });
        clearInterval(timer);
        transitionDelay()
      } else {
        wrongCount++;
        $("#wrong").html(wrongCount);
        $(this).css({
          color: "rgb(255,81,59)",
          textShadow: "2px 2px 2px rgb(194, 46, 26)",
	        boxShadow: "inset 0 0 0 4px",
          border: "2px solid rgb(194, 46, 26)"
        });
        clearInterval(timer);
        transitionDelay()
      }
    });
  } else {
    gameOver = true;
    clearInterval(timer);
    secondsCount = 0;
      $("#time-left").html(secondsCount);
    return;
  }
}

function nextQuestion() {
  clearInterval(timer);
  timerFunction();
  genQuestions();
}

// function finalResultsPopup(){
//   $("#tryagainbtn").on("click", function () {
//     startOver();
//   });
// }

// function startOver(){
//   CLEARRESULTSPOPUP;
//   RESET QUESTION ARRAY;
//   correctCount = 0;
//   wrongCount = 0;
//   questionCount = 0;
//   gameOver = false;
//   timerFunction();
//   genQuestions();
// }