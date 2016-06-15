
let speedX = 10;
let speedY = 5;
let alphaDecay = 200;

class Particle {
  constructor(parent, x, y, r) {
    this.parent = parent;
    this.baseline = y;
    this.x = x;
    this.y = y;
    this.r = r;
  }
  step() {
    this.x += (Math.random() - 0.5) * speedX;
    this.y -= Math.random() * speedY;
    if (this.y < this.baseline - alphaDecay) {
      this.parent.destroy(this);
    }
  }
  render(ctx) {
    ctx.beginPath();
    let oldGlobalAlpha = ctx.globalAlpha;
    ctx.globalAlpha = (alphaDecay - this.baseline + this.y) / alphaDecay;
    ctx.fillStyle = 'white';
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.globalAlpha = oldGlobalAlpha;
  }
}

class ParticleEffect {
  constructor(x, y, width, height, numParticles) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.particles = [];
    _(_.range(numParticles)).each(__ => {
      let rx = Math.random() * this.width + this.x;
      let ry = Math.random() * this.height + this.y;
      let rr = Math.random() * 15;
      this.particles.push(new Particle(this, rx, ry, rr));
    });
  }

  step(entities) {
    _(this.particles).each(p => p.step());
    if (this.particles.length === 0) {
      let ix = entities.indexOf(this);
      entities.splice(ix, 1);
    }
  }

  render(ctx) {
    _(this.particles).each(p => p.render(ctx));
  }

  destroy(particle) {
    this.particles = _(this.particles).reject(p => p === particle);
  }

}