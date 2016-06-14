var hunterImages = ['assets/bill.png', 'assets/darthvader.png', 'assets/genie.png', 'assets/luigi.png'];
class GhostHunter extends ImageDancer {
  constructor(top, left, timeBetweenSteps, width, height) {
    var width = Math.floor(Math.random() * 200 + 50);
    var height = width;
    var src = hunterImages.shift();
    hunterImages.push(src);
    super(top, left, timeBetweenSteps, src);
    this.beamTarget = [];
    this.beamOn = false;
  }
  computeDistance(entity) {
      return Math.sqrt(Math.pow(entity.left - this.left, 2) + Math.pow(entity.top - this.top, 2)); 
  }
  step(entities) {
    super.step();
    var closest = _(entities).chain().filter(e => e instanceof Ghost).reduce(findClosest.bind(this)).value();
    closest !== null && this.setDestination(closest.left, closest.top);
    function findClosest(mem, entity) {
      return this.computeDistance(entity) < this.computeDistance(mem) ? entity : mem;
    }
  }
  setBeamTarget(x, y) {
    this.beamTarget = [x, y];
  }
  toggleBeam() {
    this.beamOn = !this.beamOn;
  }
  render(ctx) {
    super.render(ctx);
    // render beam if on
    if (this.beamTarget.length === 2) {
      let [tx, ty] = this.beamTarget;
      ctx.beginPath();
      ctx.strokeStyle = '#f00';
      ctx.moveTo(this.left, this.top);
      ctx.lineTo(tx, ty);
      ctx.stroke();
    }
  }
}

window['GhostHunter'] = GhostHunter;
