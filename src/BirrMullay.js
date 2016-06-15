class BirrMullay extends GhostHunter {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps * 2, 'assets/birrmullay.png', 200);
  }
  step(entities) {
    super.step();
    if (this.isBusy) { return; }
    var closest = _(entities).chain().filter(e => e instanceof Ghost).reduce(findClosest.bind(this)).value();
    if (closest) {
      this.setDestination(closest.left, closest.top);
      if (this.computeDistance(closest) < 200 && !this.beamOn) {
        this.toggleBeam();
        setTimeout(this.toggleBeam.bind(this), 30);
        this.setBeamTarget(closest);
        this.killTarget(entities, closest);
      }
    }

    function findClosest(mem, entity) {
      return this.computeDistance(entity) < this.computeDistance(mem) ? entity : mem;
    }
  }
}

window['BirrMullay'] = BirrMullay;
