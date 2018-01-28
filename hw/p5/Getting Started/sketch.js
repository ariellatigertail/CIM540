var centerX = 100;
var centerY = 200;


function setup() {
  // put setup code here
  createCanvas(400,400);
  background("pink");

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
