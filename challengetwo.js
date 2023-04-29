let bubbles = [];

function setup() {
  createCanvas(960, 540);

  // create 50 bubbles with random position and size
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let radius = random(20, 50);
    let speedX = random(-1, 1);
    let speedY = random(-1, 1);
    bubbles.push(new Bubble(x, y, radius, speedX, speedY));
  }
}

function draw() {
  background(220);

  // update and show bubbles
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].update();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, radius, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  move() {
    // jitter randomly
    this.x += random(-1, 1) + this.speedX;
    this.y += random(-1, 1) + this.speedY;

    // keep within bounds
    this.x = constrain(this.x, this.radius, width - this.radius);
    this.y = constrain(this.y, this.radius, height - this.radius);
  }

  update() {
    // do nothing for now
  }

  show() {
    push();
    noStroke();
    fill(random(255), random(255), random(255), 150);
    ellipse(this.x, this.y, this.radius * 2);
    pop();
  }
}
