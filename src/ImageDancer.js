class ImageDancer extends Dancer {
  constructor(ctx, top, left, timeToWait, src, className) {
    super(ctx, top, left, timeToWait, className);
    this.$node = $(`<img src="${src}" class="dancer ${className}" />`);
    // this.setPosition(top, left);
    this.imageObj = new Image();
    this.imageObj.src = src;
  }
  step() {
    super.step();
    this.imageObj && this.ctx.drawImage(this.imageObj, this.left, this.top);
  }
}

window['ImageDancer'] = ImageDancer;
