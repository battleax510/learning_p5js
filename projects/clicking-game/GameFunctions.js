let r = 15;
let points = 0;
let timer = 5;
let canvasClickable = false; // Initially is set to false
let ball; // Declare ball variable



function initializeGame() {
    ball = new Ball();
    points = 0;
    timer = 5;
    canvasClickable = false;
    noLoop();
  }


  function updateTimer() {
    if(timer > 0 && points > 0) {
      timer -= 1 / 60;
    } 
  }


function displayScore() {
    textSize(20);
    text(points, 20, 30);
  }
  

function checkGameFinish() {
    if (timer < 0) {
      noLoop();
      textAlign(CENTER);
      textSize(50);
      text('FINISH', width / 2, height / 2);
      finishSound.play();
      // Stop the music when the background music is completed
      backgroundMusic.stop();
    } 
  }


  