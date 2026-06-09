scenes["scene3bba"] = {
  draw() {
    image(sceneImages["scene3bba"], 0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(28);
    text("YOU FELL BACK DOWN", width / 2, 100);

    drawButton(
      width / 2,
      330,
      220,
      50,
      "Try again",
      isMouseOver(width / 2, 330, 220, 50),
    );
  },

  mousePressed() {
    if (isMouseOver(width / 2, 330, 220, 50)) changeScene("scene0");
  },
};
