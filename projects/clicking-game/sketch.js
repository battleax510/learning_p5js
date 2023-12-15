let r = 15;
let points = 0;
let timer = 5;
let poppingSound;
let finishSound;
let backgroundMusic;
let ball; // Declare ball variable
let player; // Declare player variable
let startButton;



function preload() {
  poppingSound = loadSound('pop.wav'); // Replace with your sound file
  finishSound = loadSound('mario.party.finish.theme.wav'); 
  backgroundMusic = loadSound('pvz.short.webm');
}

function setup() {
  createCanvas(600, 400); 
  gameReset();
  startButton = createButton('Start Game');
  startButton.position(width / 2 - startButton.width / 2, height / 2 - startButton.height / 2);
  startButton.mousePressed(startGame);
  backgroundMusic.play();
  ball = new Ball();
  
}

function draw() {
  background(220);
  displayScore();
  updateTimer();
  displayTimer();
  ball.display();
  checkGameFinish();
}

function displayTimer() {
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
    // Stop the music when the background music is completed
    backgroundMusic.stop();
  } 
}

/** a functional approach to resetting the game */
function gameReset() {
  ball = new Ball();
  points = 0;
  timer = 5;
  loop();
}

function checkBallClick() {
  let d = dist(mouseX, mouseY, ball.x, ball.y);
  if (d < r) {
    ball = new Ball();
    points++;
    if (points > 1) {
      timer += 0.5;
    }
    // Play the beep sound
    poppingSound.play();
  }
}

function updateTimer() {
  if(timer > 0 && points > 0) {
    timer -= 1 / 60;
  } 
}


function startGame() {
  startButton.hide();
  gameReset();
  loop();
}

function Ball() {
  this.resetPosition = function() {
    this.x = random(r, width - r);
    this.y = random(r, height - r);
  };

  this.resetPosition(); // Initial position
  this.radius = r;

  this.display = function() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  };
}