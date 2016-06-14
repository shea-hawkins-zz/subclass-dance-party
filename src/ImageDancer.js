class ImageDancer extends Dancer {
  constructor(top, left, timeToWait, src) {
    super(top, left, timeToWait);

    this.imageObj = new Image();
    this.imageObj.src = src;
    this.imageLoaded = false;
    this.imageObj.onload = () => this.imageLoaded = true;
  }
  render(ctx) {
    this.imageLoaded && ctx.drawImage(this.imageObj, this.left, this.top);
  }
}

window['ImageDancer'] = ImageDancer;
