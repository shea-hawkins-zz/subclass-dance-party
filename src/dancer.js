// Creates and returns a new dancer object that can step

class Dancer {
  constructor(ctx, top, left, timeBetweenSteps, className) {
    this.ctx = ctx;
    this.top = top;
    this.left = left;
    this.$node = $(`<span class="dancer ${className}"></span>`);
    this.setPosition(top, left);
    this.timeBetweenSteps = timeBetweenSteps;

    this.step();
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
