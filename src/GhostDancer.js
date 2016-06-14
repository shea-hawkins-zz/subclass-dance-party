(function(){

var images = ['assets/boo.png', 'assets/gasmask.png'];


class Ghost extends ImageDancer {

  constructor(top, left, timeBetweenSteps, width, height) {
    var src = images[Math.random() > .5 ? 1 : 0];
    super(top, left, timeBetweenSteps, src);
  }
  step() {
    super.step();
    this.left = this.left + (Math.random() * 5 - 2.5);
  }
}

window['Ghost'] = Ghost;
})();
