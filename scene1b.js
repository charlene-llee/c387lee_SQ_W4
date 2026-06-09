scenes["scene1b"] = {
  draw() {
    image(sceneImages["scene1b"], 0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("You made it safely. But you are tired...", width / 2, 100);
    text("What would you do next?", width / 2, 160);
    drawButton(
      width / 2,
      260,
      220,
      50,
      "Grab laundry line",
      isMouseOver(width / 2, 260, 220, 50),
    );

    drawButton(
      width / 2,
      330,
      220,
      50,
      "Continue hanging",
      isMouseOver(width / 2, 330, 220, 50),
    );
  },

  mousePressed() {
    if (isMouseOver(width / 2, 260, 220, 50)) changeScene("scene2ba");
    if (isMouseOver(width / 2, 330, 220, 50)) changeScene("scene2bb");
  },
};
