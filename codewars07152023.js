// altered previos p5js bubble ineteractive build to include BTC images stored locally.

let bubbles = [];

let btcImages;

function preload() {
btcImages = loadImage('/libraries/images/btc1.png');
// for (let i = 0; i < 5; i++) {
  // flowers[i] = loadImage('libraries/images/' + i + 'png')
// }
}

function setup() {
  createCanvas(900, 800);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 10);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].clicked(mouseX, mouseY);
    
    // if (bubbles[i].contains(mouseX, mouseY)) {
      // bubbles.splice(i, 1);
    }
  }


function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    // if (bubbles[i].contains(mouseX, mouseY)) {
      // bubbles[i].changeColor(255);
    // } else {
      // bubbles[i].changeColor(0);
    // }
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.image = img;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    image(btcImages, this.x, this.y);
    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
  }
}
