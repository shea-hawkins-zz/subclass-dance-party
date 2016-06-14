(function(){

var images = ['assets/boo.png', 'assets/gasmask.png'];


class Ghost extends ImageDancer {

  constructor(top, left, timeBetweenSteps, width, height) {
    var src = images[Math.random() > .5 ? 1 : 0];
    super(top, left, timeBetweenSteps, src);
  }
  step() {
    this.left = this.left + (Math.random() * 10 - 5);
  }
}

window['Ghost'] = Ghost;
})();
