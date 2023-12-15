let r = 15;
let points = 0;
let timer = 5;
let poppingSound;
let finishSound;
let backgroundMusic;
let ball; // Declare ball variable
let player; // Declare player variable
let startButton;

let canvasClickable = false; // Initially is set to false


let mosaicSize = 20;
let tileColor;

function preload() {
  mosaicImage =

  poppingSound = loadSound('pop.wav'); // Replace with your sound file
  finishSound = loadSound('mario.party.finish.theme.wav'); 
  backgroundMusic = loadSound('pvz.short.webm');
}

function setup() {
  createCanvas(600, 400); 

  initializeGame();
  startButton = createButton('Start Game');
  startButton.position(width / 2 - startButton.width / 2, height / 2 - startButton.height / 2);
  startButton.mousePressed(startGame);
  backgroundMusic.play();
  backgroundMusic.setLoop(true);
}

function draw() {
  background(255);
  for (let x = 0; x < width; x += mosaicSize) {
    for (let y = 0; y < height; y += mosaicSize) {
      tileColor = color(random(255), random(255), random(255)); // Random color for each tile
      fill(tileColor);
      square(x,y,mosaicSize)
    }
  }

  displayScore();
  updateTimer();
  displayTimer();
  if(canvasClickable){
    ball.display();
    checkBallClick();
  }
  checkGameFinish();
}

function displayTimer() {
  let len = map(timer, 0, 10, 0, 200);
  rect(15, 50, 20, len);
}

function mousePressed() {
  // Disable canvas click if the game hasn't started
  if (canvasClickable && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
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
    // Stop the music when the background music is completed
    backgroundMusic.stop();
  } 
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
  initializeGame();
  canvasClickable = true;
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
    fill('white');
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  };
}

function initializeGame() {
  ball = new Ball();
  points = 0;
  timer = 5;
  canvasClickable = false;
  noLoop();
}