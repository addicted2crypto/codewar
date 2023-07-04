// p5.js bouncing circles that bounce off the ends of the page no matter the size it will query and rendor correctly.

var x = 0;
var y = 0;
// var y = 0;
var speed1 = 3;



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background(0);
  stroke(255);
  strokeWeight(15);
  noFill();
  ellipse(x, 300, 250, 250);
  ellipse(300, y, 250, 250);
  x += speed1;
   y += speed1;
  
  
  rect(260,280, 110, 55);
  
  
  
  
  if(x > width){
    speed1 = - 3;
    
  
  }
  if(x < 0)
  speed1 += 3;
}
if(y == 0){
  speed1 += 3;
}
