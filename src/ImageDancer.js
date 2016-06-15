class ImageDancer extends Dancer {
  constructor(top, left, timeToWait, src, size) {
    super(top, left, timeToWait);
    this.size = size;

    this.imageObj = new Image(this.size, this.size);
    this.imageObj.src = src;
    this.imageLoaded = false;
    this.imageObj.onload = () => this.imageLoaded = true;
  }
  render(ctx) {
    this.imageLoaded && ctx.drawImage(this.imageObj, this.left, this.top, this.size, this.size);
  }
}

window['ImageDancer'] = ImageDancer;
