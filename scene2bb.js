scenes["scene2bb"] = {
  draw() {
    image(sceneImages["scene2bb"], 0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("You keep climbing but your hands loose grip.", width / 2, 100);
    text("What would you do next?", width / 2, 160);
    drawButton(
      width / 2,
      260,
      220,
      50,
      "Reach for plants",
      isMouseOver(width / 2, 260, 220, 50),
    );

    drawButton(
      width / 2,
      330,
      220,
      50,
      "Reach for rock",
      isMouseOver(width / 2, 330, 220, 50),
    );
  },

  mousePressed() {
    if (isMouseOver(width / 2, 260, 220, 50)) changeScene("scene3bbb");
    if (isMouseOver(width / 2, 330, 220, 50)) changeScene("scene3bba");
  },
};
