// Creates and returns a new dancer object that can step

class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.setPosition(top, left);
    this.step(timeBetweenSteps);
  }
  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
  step(timeBetweenSteps) {
    setTimeout(this.step.bind(this), timeBetweenSteps);
  }
}