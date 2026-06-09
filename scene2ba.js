scenes["scene2ba"] = {
  draw() {
    image(sceneImages["scene2ba"], 0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("The air grows thin and your hands slip.", width / 2, 100);
    text("What would you do next?", width / 2, 160);
    drawButton(
      width / 2,
      260,
      220,
      50,
      "Reach for dress",
      isMouseOver(width / 2, 260, 220, 50),
    );

    drawButton(
      width / 2,
      330,
      220,
      50,
      "Reach for line",
      isMouseOver(width / 2, 330, 220, 50),
    );
  },

  mousePressed() {
    if (isMouseOver(width / 2, 260, 220, 50)) changeScene("scene3bab");
    if (isMouseOver(width / 2, 330, 220, 50)) changeScene("scene3baa");
  },
};
