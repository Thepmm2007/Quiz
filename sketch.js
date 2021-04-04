var canva;
var contestantCount,database;
var quiz, question, contestant;
var gameState;
gameState = 0;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start()
}


function draw(){
  background("pink");

  
}
