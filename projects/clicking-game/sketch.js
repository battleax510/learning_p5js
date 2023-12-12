let r = 15;
let points = 0;
let timer = 5;
let beepSound;
let finishSound;

function preload() {
  beepSound = loadSound('path/to/your/beep-sound.mp3'); // Replace with your sound file
  finishSound =loadSound('path/to/your/beep-sound.mp3'); 
}

function setup() {
  createCanvas(600, 400);
  gameReset();
}

function draw() {
  background(220);
  displayScore();
  checkGameFinish();
  player = createVector(mouseX, mouseY);
  ellipse(ball.x, ball.y, r * 2);

  if (timer > 0 && points > 0) {
    timer -= 1 / 60;
  }

  let len = map(timer, 0, 10, 0, 200);
  rect(15, 50, 20, len);


}

function mousePressed() {
  checkBallClick();
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
  } 
}

/** a functional approach to reseting the game */
function gameReset() {
  ball = createVector(random(r, width - r), random(r, height - r));
  points = 0;
  timer = 5;
  loop();
}
  
function checkBallClick() {
  let d = dist(mouseX, mouseY, ball.x, ball.y);
  if (d < r) {
    ball = createVector(random(r, width - r), random(r, height - r));
    points++;
    if (points > 1) {
      timer += 0.5;
    }
    // Play the beep sound
    beepSound.play();
  }
}
