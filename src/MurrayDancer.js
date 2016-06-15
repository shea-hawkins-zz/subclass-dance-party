class MurrayDancer extends ImageDancer {
  constructor(top, left, timeBetweenSteps, width, height) {
    var width = Math.floor(Math.random() * 200 + 50);
    var height = width;
    var src = `http://fillmurray.com/${width}/${height}`;
    super(top, left, timeBetweenSteps, src, 200);
  }
  step() {
    this.left = this.left + (Math.random() * 5 - 2.5);
  }
  render(ctx) {
    let oldAlpha = ctx.globalAlpha;
    ctx.globalAlpha = 0.2;
    this.imageLoaded && ctx.drawImage(this.imageObj, this.left, this.top, this.size, this.size);
    ctx.globalAlpha = oldAlpha;
  }
}

window['MurrayDancer'] = MurrayDancer;