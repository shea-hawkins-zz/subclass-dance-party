class BlinkyDancer extends Dancer {
  constructor(ctx, top, left, timeBetweenSteps) {
    super(ctx, top, left, timeBetweenSteps);
  }
  step() {
    super.step();
    this.$node.toggle();
  }
}

window['BlinkyDancer'] = BlinkyDancer;
