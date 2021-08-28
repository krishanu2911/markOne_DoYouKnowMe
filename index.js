var readlineSync = require('readline-sync');
var score = 0;
var level = 1;
function welcomeUser(){
var userName = readlineSync.question("what's your name? ");
console.log("Hi "+ userName + " So, Do you Know Krishanu");
}

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are right!!!");
    score++;
    if(score == 3){
      level= 2;
    }
    if(score == 5){
      level= 3;
    }

  }
  else{
    console.log("worng");
  }
  console.log( "Your score : " + score);
  console.log("current level " + level);
  console.log("-----------------");
  
}


var questions = [{
    question: "where Do I live ? ",
    answer: "Vadodara",
   },{
     question: "what is my favorite cartoon",
     answer: "Doremon",
   },{
     question: "my favorite laptop",
     answer: "macbookpro",
     },{
     question: "what is my nature (introvert/ extrovert",
     answer: "introvert",
     },{
     question: "what do i love most other than coding",
     answer: "gym",
     }

   ];
function gamePart(){
for (var i=0; i<questions.length; i++){
var currentQuestion = questions[i];

play(currentQuestion.question,currentQuestion.answer)
}
};
function finalScore(){
console.log("Final score "+ score+ " and Final level reached "+ level);
console.log("****************");
};

welcomeUser();
gamePart();
finalScore();

