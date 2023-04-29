let bubbles = [];
let donuts = [];
let squares = [];

function setup() {
  createCanvas(960, 540);

  // create 50 bubbles with random position and size
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let radius = random(10, 30); // smaller radius
    let speedX = random(-0.5, 0.5); // slower speed
    let speedY = random(-0.5, 0.5); // slower speed
    bubbles.push(new Bubble(x, y, radius, speedX, speedY));
  }

  // create 50 donuts with random position and size
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let radius = random(10, 30); // smaller radius
    let speedX = 5; // slower speed
    let speedY = random(-0.5, 0.5); // slower speed
    donuts.push(new Donut(x, y, radius, speedX, speedY));
  }
  
  // create 50 squares with random position and size
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(10, 30); // smaller size
    let speedX = 5; // slower speed
    let speedY = random(-0.5, 0.5); // slower speed
    squares.push(new Square(x, y, size, size, speedX, speedY));
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

  // update and show donuts
  for (let i = 0; i < donuts.length; i++) {
    donuts[i].move();
    donuts[i].update();
    donuts[i].show();
  }
  for (let i = 0; i < donuts.length; i++) {
    squares[i].move();
    squares[i].update();
    squares[i].show();
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
    this.x += random(-0.5, 0.5) + this.speedX; // slower movement
    this.y += random(-0.5, 0.5) + this.speedY; // slower movement

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
    let x1 = this.x - this.radius;
    let y1 = this.y + this.radius;
    let x2 = this.x + this.radius;
    let y2 = this.y + this.radius;
    let x3 = this.x;
    let y3 = this.y - this.radius;
    triangle(x1, y1, x2, y2, x3, y3);
    pop();
  }
}
class Donut {
  constructor(x, y, radius, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    // keep within bounds
    if (this.x + this.radius > width || this.x - this.radius < 0) {
      this.speedX *= -1;
    }
    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.speedY *= -1;
    }
  }

  update() {
    // do nothing for now
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(frameCount); // rotate the donut
    stroke(0);
    strokeWeight(4);
    fill(255, 204, 0);
    ellipse(0, 0, this.radius * 2);
    fill(102, 51, 0);
    ellipse(0, 0, this.radius * 1.2);
    pop();
  }
}
class Square {
  constructor(x, y, width, height, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = width;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    // keep within bounds
    if (this.x + 10 > width || this.x - 10 < 0) {
      this.speedX *= -1;
    }
    if (this.y + 10 > height || this.y - 10 < 0) {
      this.speedY *= -1;
    }
  }

  update() {
    // do nothing for now
  }

  show() {
    push();
    translate(this.x, this.y);
    stroke('red')
    fill('orange')
    rect(100, 100,20,20);
    pop();
  }
}
