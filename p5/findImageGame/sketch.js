var targetPosX = [0];

var targetPosY = [500];

var imageSize = 150;

var yellow

var bgImage

var pics = [];

var outputText = "HELLO!";

var currentBox = 0;

var startGame;

var sg = false;

function preload(){
  yellow = loadImage("assets/yellow.png");



}

function setup(){
  createCanvas(400,400);
  bgImage = yellow;
  console.log("First position in targetPosX: " + targetPosX[0]);
  console.log("3rd position in targetPosX: " + targetPosX[2]);
  startGame = createButton("Begin");
  startGame.position(width/ 3, 400);
  startGame.mousePressed(function(){
    sg = true;
  });
}


function draw(){

  background(255);
  image(bgImage, 0,0);



  if(sg == true){

  fill(251,173,68);
  rect(0,0,400,90);
  rect(targetPosX[0], targetPosY[1], imageSize, imageSize);
  fill(254,216,94);
  rect(0,90,400,90);
  rect(targetPosX[1], targetPosY[1], imageSize, imageSize);
  fill(242,104,39);
  rect(0,150,400,90);
  rect(targetPosX[1], targetPosY[1], imageSize, imageSize);
  fill(246,136,56);
  rect(0,220,400,90);
  rect(targetPosX[2], targetPosY[1], imageSize, imageSize);
  fill(250,231,112);
  rect(0,300,400,90);
  rect(targetPosX[3], targetPosY[1], imageSize, imageSize);


  if(mouseX >= targetPosX[0] && mouseX < targetPosX[1] && mouseY >= targetPosY[0] && mouseY < targetPosY[1]){
    console.log("Box 1");
    image(pics[0], targetPosX[0], targetPosY[0]);
    currentBox = 1;
  }

  if(mouseX >= targetPosX[1] && mouseX < targetPosX[2] && mouseY >= targetPosY[0] && mouseY < targetPosY[1]){
    console.log("Box 2");
    image(pics[1], targetPosX[1], targetPosY[0]);
    currentBox = 2;

  }

  if(mouseX >= targetPosX[2] && mouseX < targetPosX[3] && mouseY >= targetPosY[0] && mouseY < targetPosY[1]){
    console.log("Box 3");
    image(pics[2], targetPosX[2], targetPosY[0]);
    currentBox = 3;
  }
}
  textSize(32);
  text(outputText, 100,150);

  if(currentBox == 3){
    console.log("You won!");
    outputText = "You Won!"
  }else if(currentBox == 1 || currentBox == 2){
    console.log("You lose!");
    outputText = "You lose!"
  }else{
    outputText = "HELLO";

  }

}
