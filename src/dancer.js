// Creates and returns a new dancer object that can step

const SPEED = 70000;

class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.destination = [];
    this.timeBetweenSteps = timeBetweenSteps;
    this.setDestination(50, 50);
  }
  step() {
    if (this.destination.length === 2) {
      this.stepToPoint();
    }
  }
  setDestination(x, y) {
    this.destination = [x, y]; 
  }
  stepToPoint() {
    let [destX, destY] = this.destination;
    var dx = destX - this.left;
    var dy = destY - this.top;
    this.left += dx * this.timeBetweenSteps / SPEED;
    this.top += dy * this.timeBetweenSteps / SPEED;
  }
}
