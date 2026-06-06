// scenes.js — shared drawing helpers

function drawBackground(col) {
  background(col);
}

function drawButton(x, y, w, h, label) {
  let hovered = isMouseOver(x, y, w, h);
  push();
  rectMode(CENTER);
  fill(hovered ? color(80, 80, 100) : color(40, 40, 60));
  stroke(hovered ? color(180, 180, 220) : color(80, 80, 100));
  strokeWeight(2);
  rect(x, y, w, h, 8);
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(18);
  text(label, x, y);
  pop();
}

function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}
