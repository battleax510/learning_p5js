let backgroundImage;
let isMouthOpen = false;

function preload() {
    // Load your image here
    backgroundImage = loadImage('ixalan.image.trex.jpg');
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    // Set the background to the loaded image
    background(backgroundImage);

    drawHead();
}

function drawHead() {
    // Draw head
    stroke(0);
    noFill();
    ellipse(width / 2, height / 2, 200, 200);

    // Draw eyes
    ellipse(width / 2 - 40, height / 2 - 30, 20, 20);
    ellipse(width / 2 + 40, height / 2 - 30, 20, 20);

    // Draw nose
    line(width / 2 - 5, height / 2 + 10, width / 2 + 5, height / 2 + 10);

    // Draw mouth
    const mouthHeight = isMouthOpen ? 20 : 5;
    arc(width / 2, height / 2 + 30, 100, mouthHeight, 0, PI);
}

function keyPressed() {
    if (key === ' ') {
        toggleMouth();
    }
}

function toggleMouth() {
    isMouthOpen = !isMouthOpen;
}