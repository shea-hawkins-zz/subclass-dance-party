$(document).ready(function() {
  let ctx = $('#danceCanvas')[0].getContext('2d');
  fitToContainer();
  let entities = [];
  let renderer = new Renderer(ctx, entities);
  let stepper = new Stepper(entities);
  requestAnimationFrame(function rec() {
    stepper.step();
    renderer.render();
    requestAnimationFrame(rec);
  });

  $('.lineUpButton').on('click', function(event) {
    entities.forEach(function(e, i, entities) {
      e.setDestination((ctx.canvas.width / entities.length) * i, ctx.canvas.height - (ctx.canvas.height - 300));
    });
  });

  $('.addDancerButton').on('click', function(event) {
    var dancerClass = $(this).data('dancer-maker-function-name');
    var dancerArgs = $(this).data('dancer-maker-function-arguments') || [];

    // make a dancer with a random position    
    var dancer = new window[dancerClass](
      ctx.canvas.height * Math.random(),
      ctx.canvas.width * Math.random(),
      Math.random() * 1000,
      ...dancerArgs
    );
    entities.push(dancer);
  });
});

function fitToContainer() {
  let canvas = $('#danceCanvas')[0];
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
};
