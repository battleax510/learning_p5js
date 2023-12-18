
let poppingSound;
let finishSound;
let backgroundMusic;

let player; // Declare player variable
let startButton;


let mosaicSize = 20;
let tileColor;
let colorChangeDelay = 30;
// adjust the delay value to control color change speed

function preload() {

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
  frameRate(colorChangeDelay);
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
  let timerColor = color(0,255,0);
  let len = map(timer, 0, 10, 0, 200);
  rect(15, 50, 20, len);
}


function startGame() {
    startButton.hide();
    initializeGame();
    canvasClickable = true;
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
  
  

