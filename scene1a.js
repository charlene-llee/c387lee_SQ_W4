scenes["scene1a"] = {
  draw() {
    image(sceneImages["scene1a"], 0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("You begin climbing and find new things.", width / 2, 100);
    text("What would you do next?", width / 2, 160);
    drawButton(
      width / 2,
      260,
      220,
      50,
      "Explore new area",
      isMouseOver(width / 2, 260, 220, 50),
    );

    drawButton(
      width / 2,
      330,
      220,
      50,
      "Grab moss",
      isMouseOver(width / 2, 330, 220, 50),
    );
  },

  mousePressed() {
    if (isMouseOver(width / 2, 260, 220, 50)) changeScene("scene2aa");
    if (isMouseOver(width / 2, 330, 220, 50)) changeScene("scene2ab");
  },
};
