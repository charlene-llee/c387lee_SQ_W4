scenes["scene0"] = {
  draw() {
    image(sceneImages["scene0"], 0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(
      "You wake up at the base of a mountain stranded in water.",
      width / 2,
      120,
    );

    text("What would you do next?", width / 2, 160);

    drawButton(
      width / 2,
      260,
      220,
      50,
      "Grab up",
      isMouseOver(width / 2, 260, 220, 50),
    );

    drawButton(
      width / 2,
      330,
      220,
      50,
      "Take risk",
      isMouseOver(width / 2, 330, 220, 50),
    );
  },

  mousePressed() {
    if (isMouseOver(width / 2, 260, 220, 50)) changeScene("scene1a");
    if (isMouseOver(width / 2, 330, 220, 50)) changeScene("scene1b");
  },
};
