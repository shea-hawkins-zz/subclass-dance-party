var hunterImages = ['assets/bill.png', 'assets/darthvader.png', 'assets/genie.png', 'assets/luigi.png'];
class GhostHunter extends ImageDancer {
  constructor(top, left, timeBetweenSteps, width, height) {
    var width = Math.floor(Math.random() * 200 + 50);
    var height = width;
    var src = hunterImages.shift();
    hunterImages.push(src);
    super(top, left, timeBetweenSteps, src);
    this.beamTarget = [];
  }
  step() {
    super.step();
  }
  setBeamTarget(x, y) {
    // do stuff
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
