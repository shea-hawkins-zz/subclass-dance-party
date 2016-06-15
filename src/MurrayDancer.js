class MurrayDancer extends ImageDancer {
  constructor(top, left, timeBetweenSteps, width, height) {
    var width = Math.floor(Math.random() * 200 + 50);
    var height = width;
    var src = `http://fillmurray.com/${width}/${height}`;
    super(top, left, timeBetweenSteps, src);
  }
  step() {
    this.left = this.left + (Math.random() * 10 - 5);
  }
}

window['MurrayDancer'] = MurrayDancer;