var centerX = 100;
var centerY = 200;
var number = 1;
var number = 2;
var letter1 = 'a';
var letter2 = 'b';
var greeting = "hello";
var greeting2 = "goodbye";
var truthordare = true;
var truthordare2 = false;





function setup() {
  // put setup code here
  createCanvas(400,400);
  background("pink");
  console.log("Hello World!");
  console.log(number1);
  console.log("The value of letter 2" + letter2);

}

function draw() {
  // put drawing code here

  stroke(50);
  strokeWeight(15);
  fill("white");
  ellipse(centerX +200, centerY -50,100,100);

  stroke(5);
  strokeWeight("black");
  fill("black");
  ellipse(centerX +200, centerY -25,50,45);


  stroke(50);
  strokeWeight(15);
  fill("white");
  ellipse(centerX +10, centerY -50,100,100);

  stroke(5);
  strokeWeight("black");
  fill("black");
  ellipse(centerX +10, centerY -25,50,45);

  stroke(4);
  strokeWeight(10);
  line(centerX +100, centerY +100, centerX +200, centerY +100);

  background(lightgray);
}
