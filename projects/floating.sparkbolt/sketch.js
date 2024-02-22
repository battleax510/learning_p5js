let head; // A variable for the image file
let x, y; // Variables for image location
let rot; // A variable for image rotation

function setup() {
  createCanvas(500, 500);
  // Load image, initialize variables
  head = loadImage("face.jpg");
  x = 0.0;
  y = height / 2.0;
  rot = 0.0;
}

function draw() {
  background(255);
  // Translate and rotate
  translate(x, y);
  rotate(rot);
  image(head, 0, 0); // Draw image

  // Adjust variables to create animation
  x += 1.0;
  rot += 0.01;
  if (x > width) {
    x = 0;
  }
}