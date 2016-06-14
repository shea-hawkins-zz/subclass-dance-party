// Creates and returns a new dancer object that can step

class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
  }
  step() {}
  stepToPoint(x, y) {
    this.top = x;
    this.left = y;
  }
}
