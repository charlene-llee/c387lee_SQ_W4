scenes["scene2aa"] = {
  draw() {
    image(sceneImages["scene2aa"], 0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("You see climb onto a mast, but you need to rest.", width / 2, 100);
    text("What would you do next?", width / 2, 160);
    drawButton(
      width / 2,
      260,
      220,
      50,
      "Swing on ropes",
      isMouseOver(width / 2, 260, 220, 50),
    );

    drawButton(
      width / 2,
      330,
      220,
      50,
      "Reach for pillar",
      isMouseOver(width / 2, 330, 220, 50),
    );
  },

  mousePressed() {
    if (isMouseOver(width / 2, 260, 220, 50)) changeScene("scene3aab");
    if (isMouseOver(width / 2, 330, 220, 50)) changeScene("scene3aaa");
  },
};
