(function(){

var images = ['assets/boo.png', 'assets/gasmask.png'];
var distToRandomlyWalk = 1000;


class Ghost extends ImageDancer {

  constructor(top, left, timeBetweenSteps, width, height) {
    var src = images[Math.random() > .5 ? 1 : 0];
    super(top, left, timeBetweenSteps, src);
    setInterval(this.setRandomDestination.bind(this), 1000);
  }
  step() {
    super.step();
    this.left = this.left + (Math.random() * 5 - 2.5);
  }
  setRandomDestination() {
    if (this.isBusy) { return; }
    let x = this.left + Math.random() * distToRandomlyWalk - distToRandomlyWalk / 2;
    let y = this.top + Math.random() * distToRandomlyWalk - distToRandomlyWalk / 2;
    this.setDestination(x, y);
  }
}

window['Ghost'] = Ghost;
})();
