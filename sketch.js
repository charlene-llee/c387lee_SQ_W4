let sceneImages = {};

function preload() {
  sceneImages["scene0"] = loadImage("assets/images/0.jpg");
  sceneImages["scene1a"] = loadImage("assets/images/1a.jpg");
  sceneImages["scene1b"] = loadImage("assets/images/1b.jpg");

  sceneImages["scene2aa"] = loadImage("assets/images/2aa.jpg");
  sceneImages["scene2ab"] = loadImage("assets/images/2ab.jpg");
  sceneImages["scene2ba"] = loadImage("assets/images/2ba.jpg");
  sceneImages["scene2bb"] = loadImage("assets/images/2bb.jpg");

  sceneImages["scene3aaa"] = loadImage("assets/images/3aaa.jpg");
  sceneImages["scene3aab"] = loadImage("assets/images/3aab.jpg");
  sceneImages["scene3aba"] = loadImage("assets/images/3aba.jpg");
  sceneImages["scene3abb"] = loadImage("assets/images/3abb.jpg");
  sceneImages["scene3baa"] = loadImage("assets/images/3baa.jpg");
  sceneImages["scene3bab"] = loadImage("assets/images/3bab.jpg");
  sceneImages["scene3bba"] = loadImage("assets/images/3bba.jpg");
  sceneImages["scene3bbb"] = loadImage("assets/images/3bbb.jpg");
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
