// sketch.js — p5.js engine
function setup() {
  createCanvas(800, 450);
  textFont("monospace");
  goToScene(scene0);
}

function draw() {
  currentScene.draw();
}

function mousePressed() {
  currentScene.mousePressed();
}
