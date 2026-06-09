// --- Shared drawing helpers ---
function drawBackground() {
  background(20);
}

function drawButton(x, y, w, h, label, isHovered) {
  push();
  rectMode(CENTER);

  if (isHovered) {
    fill(60, 60, 60, 255); // solid dark grey
    stroke(255);
    strokeWeight(2);
  } else {
    fill(120, 120, 120, 120); // transparent grey
    stroke(255, 150);
    strokeWeight(1);
  }

  rect(x, y, w, h, 10);

  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(20);
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

// --- Scene system ---
let scenes = {};
let currentScene = "scene0";

function changeScene(name) {
  currentScene = name;
}
