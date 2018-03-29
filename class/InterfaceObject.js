var button1;
var button2;

function setup(){
    // put setup code here
    createCanvas(400,400);

    button1 = new interface(100,200,50,"red");
    button2 = new interface(200,200,50,"green");
}

function draw(){
    //put drawing code here

    button1.display();
    button2.display();
}


function interface(tempX, tempY, tempSize, tempColor){
  this.x = tempX;
  this.y = tempY;
  this.boxSize = tempSize;
  this.boxColor = tempColor;

  this.display = function(){
    fill(this.boxColor);
    rect(this.x,this.y,this.boxSize,this.boxSize);
  }

}
