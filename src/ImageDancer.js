class ImageDancer extends Dancer {
  constructor(top, left, timeToWait, src, className) {
    super(top, left, timeToWait, className);
    this.$node = $(`<img src="${src}" class="dancer ${className}" />`);
    this.setPosition(top, left);
  }
}

window['ImageDancer'] = ImageDancer;

