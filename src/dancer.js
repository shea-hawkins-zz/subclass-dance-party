// Creates and returns a new dancer object that can step

class Dancer {
  constructor(top, left, timeBetweenSteps, className) {
    this.$node = $(`<span class="dancer ${className}"></span>`);
    this.setPosition(top, left);
    this.step(timeBetweenSteps);
    this.timeBetweenSteps = timeBetweenSteps;
  }
  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
}