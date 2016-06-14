class Stepper {
  constructor(steppables) {
    this.steppables = steppables;
  }

  step(entities) {
    this.steppables.forEach(r => r.step && r.step(entities));
  }
}