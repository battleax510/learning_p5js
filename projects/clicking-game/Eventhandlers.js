
/** Eventhandlers.js */





function mousePressed() {
  // Disable canvas click if the game hasn't started
  if (canvasClickable && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    checkBallClick();
  }
}
