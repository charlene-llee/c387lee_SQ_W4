let sceneImages = {};

function preload() {
  sceneImages["scene0"] = loadImage("assets/images/0.jpg"); //Photo by Patrika [5]
  sceneImages["scene1a"] = loadImage("assets/images/1a.jpg"); //Photo by Patrika [4]
  sceneImages["scene1b"] = loadImage("assets/images/1b.jpg"); //Photo by Patrika [1]

  sceneImages["scene2aa"] = loadImage("assets/images/2aa.jpg"); //Photo by Patrika [2]
  sceneImages["scene2ab"] = loadImage("assets/images/2ab.jpg"); //Photo by Patrika [3]
  sceneImages["scene2ba"] = loadImage("assets/images/2ba.jpg"); //Photo by Patrika [6]
  sceneImages["scene2bb"] = loadImage("assets/images/2bb.jpg"); //Photo by Patrika [7]

  sceneImages["scene3aaa"] = loadImage("assets/images/0.jpg"); //Photo by Patrika [5]
  sceneImages["scene3aab"] = loadImage("assets/images/3aab.jpg"); //Photo by Patrika [8]
  sceneImages["scene3aba"] = loadImage("assets/images/0.jpg"); //Photo by Patrika [5]
  sceneImages["scene3abb"] = loadImage("assets/images/3aab.jpg"); //Photo by Patrika [8]
  sceneImages["scene3baa"] = loadImage("assets/images/0.jpg"); //Photo by Patrika [5]
  sceneImages["scene3bab"] = loadImage("assets/images/3aab.jpg"); //Photo by Patrika [8]
  sceneImages["scene3bba"] = loadImage("assets/images/0.jpg"); //Photo by Patrika [5]
  sceneImages["scene3bbb"] = loadImage("assets/images/3aab.jpg"); //Photo by Patrika [8]
}

function setup() {
  createCanvas(800, 450);
  textFont("monospace");
}

function draw() {
  drawBackground();

  if (scenes[currentScene] && scenes[currentScene].draw) {
    scenes[currentScene].draw();
  }
}

function mousePressed() {
  if (scenes[currentScene] && scenes[currentScene].mousePressed) {
    scenes[currentScene].mousePressed();
  }
}
