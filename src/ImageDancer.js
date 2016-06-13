class ImageDancer extends Dancer {
  constructor(top, left, timeToWait, src) {
    super(top, left, timeToWait);
    this.$node = $(`<img src="${src}" class="dancer" />`);
    this.setPosition(top, left);
  }
}

window['ImageDancer'] = ImageDancer;

