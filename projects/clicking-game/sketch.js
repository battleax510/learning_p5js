let r = 15;
let points = 0;
let timer = 5;
let beepSound;
let finishSound;
let backgroundMusic;
let gameStarted = false;

function preload() {
  beepSound = loadSound('path/to/your/beep-sound.mp3'); // Replace with your sound file
  finishSound =loadSound('path/to/your/beep-sound.mp3'); 
  backgroundMusic = loadSound('path/to/your/background-music.webm');
}

function setup() {
  let canvas = createCanvas(600, 400); 
  centerCanvas();
  backgroundMusic.play();
  startButton = createButton('Start Game');
  startButton.position(width / 2 - 50, height / 2 -15);
  startButton.mousePressed(startGame);
}

function draw() {
  background(220);
  if(gameStarted) {
  displayScore();
  updateTimer();
  displayTimer();
  checkGameFinish();
  displayBall();
  }
  
}

  
function displayTimer() {
    let len = map(timer, 0, 10, 0, 200);
    rect(15, 50, 20, len);
  }

function mousePressed() {
  if(gameStarted){
    checkBallClick();
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
    // Stop the music when the background msuic is completed
    backgroundMusic.stop();
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


function updateTimer() {
  if(timer > 0 && points > 0) {
    timer -= 1 / 60;
  } 
}


function displayBall() {
  player = createVector(mouseX, mouseY);
  ellipse(ball.x, ball.y, r * 2);
}

function startGame() {
  console.log('Game Started');
  startButton.hide();
  gameStarted = true;
}