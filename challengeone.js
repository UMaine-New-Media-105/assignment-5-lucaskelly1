let bubbles = [];

function setup() {
  createCanvas(960, 540);

  // create 5 bubbles with random position and size
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let radius = random(20, 50);
    bubbles.push(new Bubble(x, y, radius));
  }
}

function draw() {
  background(220);

  // update and show bubbles
  for (let bubble of bubbles) {
    bubble.move();
    bubble.update();
    bubble.show();
  }
}

class Bubble {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
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
