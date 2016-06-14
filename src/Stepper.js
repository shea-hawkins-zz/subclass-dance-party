class Stepper {
  constructor(steppables) {
    this.steppables = steppables;
  }

  step() {
    this.steppables.forEach(r => r.step && r.step());
  }
}