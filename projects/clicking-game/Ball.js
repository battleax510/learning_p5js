
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
  