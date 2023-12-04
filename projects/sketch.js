let isMouthOpen = false;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    drawHead();
}

function drawHead() {
    // Draw head with brown fill
    fill(139, 69, 19); // RGB values for brown
    stroke(0);
    ellipse(width / 2, height / 2, 200, 200);

    // Draw eyes
    ellipse(width / 2 - 40, height / 2 - 30, 20, 20);
    ellipse(width / 2 + 40, height / 2 - 30, 20, 20);

    // Draw nose
    line(width / 2 - 5, height / 2 + 10, width / 2 + 5, height / 2 + 10);

    // Draw mouth
    if (isMouthOpen) {
        ellipse(width / 2, height / 2 + 30, 60, 20);
    } else {
        // Slightly curved line for closed mouth
        noFill();
        beginShape();
        curveVertex(width / 2 - 30, height / 2 + 30);
        curveVertex(width / 2 - 15, height / 2 + 30);
        curveVertex(width / 2, height / 2 + 25);
        curveVertex(width / 2 + 15, height / 2 + 30);
        curveVertex(width / 2 + 30, height / 2 + 30);
        endShape();
    }
}

function keyPressed() {
    if (key === ' ') {
        toggleMouth();
    }
}

function toggleMouth() {
    isMouthOpen = !isMouthOpen;
}