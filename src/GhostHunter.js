var hunterImages = ['assets/bill.png', 'assets/darthvader.png', 'assets/genie.png', 'assets/luigi.png'];
class GhostHunter extends ImageDancer {
  constructor(top, left, timeBetweenSteps, width, height) {
    var src = hunterImages.shift();
    hunterImages.push(src);
    super(top, left, timeBetweenSteps, src);
    this.beamTarget = [];
    this.beamOn = false;
  }
  step(entities) {
    super.step();
    if (this.isBusy) { return; }
    var closest = _(entities).chain().filter(e => e instanceof Ghost).reduce(findClosest.bind(this)).value();
    if (closest) {
      this.setDestination(closest.left, closest.top);
      if (this.computeDistance(closest) < 200 && !this.beamOn) {
        this.toggleBeam();
        setTimeout(this.toggleBeam.bind(this), 500);
        this.setBeamTarget(closest);
        this.killTarget(entities, closest);
      }
    }

    function findClosest(mem, entity) {
      return this.computeDistance(entity) < this.computeDistance(mem) ? entity : mem;
    }
  }
  setBeamTarget(entity) {
    this.beamTarget = [entity.left, entity.top];
  }
  killTarget(entities, target) {
    var index = entities.indexOf(target);
    entities.splice(index, 1);
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
      var gradient = ctx.createLinearGradient(this.left + 50, this.top + 50, tx + 50, ty + 50);
      gradient.addColorStop(0, 'white');
      gradient.addColorStop(1, 'blue');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';
      ctx.moveTo(this.left + 50, this.top + 50);
      ctx.lineTo(tx + 50, ty + 50);
      ctx.stroke();
    }
  }
}

window['GhostHunter'] = GhostHunter;
