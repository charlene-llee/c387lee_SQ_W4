scenes["scene2ab"] = {
  draw() {
    image(sceneImages["scene2ab"], 0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("You make it safely! But your hands are trembling...", width / 2, 100);
    text("What would you do next?", width / 2, 160);
    drawButton(
      width / 2,
      260,
      220,
      50,
      "Leap up",
      isMouseOver(width / 2, 260, 220, 50),
    );

    drawButton(
      width / 2,
      330,
      220,
      50,
      "Be safe",
      isMouseOver(width / 2, 330, 220, 50),
    );
  },

  mousePressed() {
    if (isMouseOver(width / 2, 260, 220, 50)) changeScene("scene3abb");
    if (isMouseOver(width / 2, 330, 220, 50)) changeScene("scene3aba");
  },
};
