class Renderer {
  constructor(ctx, renderables) {
    this.ctx = ctx;
    this.renderables = renderables;
  }

  render() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.renderables.forEach(r => r.render(this.ctx));
  }
}