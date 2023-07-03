// P5js testing/learning.

let x = 200;
let y = 200;
let trailCanvas;


function setup() {
  createCanvas(400, 400);
  trailCanvas = createGraphics(400, 400);
  trailCanvas.clear();
  // trailCanvas.background(255, 0, 0);
  background(0);
}

function draw() {
  
   background(0);
  x += random(-5, 5);
  y += random(-5, 5);
  
  
  // if (mouseIsPressed) {
    trailCanvas.fill(255, 150);
    trailCanvas.noStroke();
  let shootX = random(width);
  let shootY = random(height);
  trailCanvas.ellipse(shootX, shootY, 10, 10);
//     trailCanvas.ellipse(mouseX, mouseY, 60, 60)
    
    
    
  // }
  image(trailCanvas, 0, 0)
  fill(255, 0, 0);
  stroke(255);
  rectMode(CENTER);
  rect(x, y, 20, 20);
}
