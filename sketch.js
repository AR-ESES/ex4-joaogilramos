let espLarg = 5;
let espAltura = 5;
let intervalo = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(0);
}

function draw() {
  background(0);
  
  let offsetX = (width - (espLarg * (width / espLarg + intervalo) - intervalo)) / 2;
  let offsetY = (height - (espAltura * (height / espAltura + intervalo) - intervalo)) / 2;

  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(offsetX + i * (width / espLarg + intervalo), offsetY + j * (height / espAltura + intervalo));
      drawAvatar();
      pop();
    }
  }
}

function drawAvatar() {
  fill(255, 204, 0);
  ellipse(200, 200, 150, 200);

  fill(255);
  ellipse(175, 170, 40, 50);
  ellipse(225, 170, 40, 50);

  fill(0);
  ellipse(175, 170, 20, 30);
  ellipse(225, 170, 20, 30);

  fill(255);
  rect(170, 230, 60, 20);
  fill(255, 0, 0);
  rect(170, 230, 60, 10);
}

