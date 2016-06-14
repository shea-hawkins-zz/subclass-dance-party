var hunterImages = ['assets/bill.png', 'assets/darthvader.png', 'assets/genie.png', 'assets/luigi.png'];
class GhostHunter extends ImageDancer {
  constructor(top, left, timeBetweenSteps, width, height) {
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
    if (closest) {
      this.setDestination(closest.left, closest.top);
      if (this.computeDistance(closest) < 50 && !this.beamOn) {
        this.toggleBeam();
        setTimeout(this.toggleBeam.bind(this), 100);
        this.setBeamTarget(closest.left, closest.top);
      }
    }

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
    if (this.beamOn) {
      let [tx, ty] = this.beamTarget;
      ctx.beginPath();
      ctx.strokeStyle = '#f00';
      ctx.moveTo(this.left + 50, this.top + 50);
      ctx.lineTo(tx + 50, ty + 50);
      ctx.stroke();
    }
  }
}

window['GhostHunter'] = GhostHunter;
