$(document).ready(function() {
  let ctx = $('#danceCanvas')[0].getContext('2d');
  fitToContainer();
  let entities = [];
  let renderer = new Renderer(ctx, entities);
  let stepper = new Stepper(entities);
  requestAnimationFrame(function rec() {
    stepper.step(entities);
    renderer.render();
    requestAnimationFrame(rec);
  });

  ctx.canvas.addEventListener('mousedown', function(evt) {
    var mousePos = getMousePos(ctx.canvas, evt);
    entities.forEach((entity) => {
      if (entity instanceof GhostHunter) {
        entity.setDestination(mousePos.x, mousePos.y);
      }
    });    
  });

  $('#lineUp').on('click', function(event) {
    _(entities).chain().filter(function(entity) {
      return entity instanceof Ghost;
    }).each(function(entity, i, collection) {
      entity.setDestination((ctx.canvas.width / collection.length) * i, ctx.canvas.height - (ctx.canvas.height - 300));
    });
    _(entities).chain().filter(function(entity) {
      return entity instanceof GhostHunter;
    }).each(function(entity, i, collection) {
      entity.setDestination((ctx.canvas.width / collection.length) * i, ctx.canvas.height - 300);
    });
  });

  $('.addDancerButton').on('click', function(event) {
    var dancerClass = $(this).data('dancer-maker-function-name');
    var dancerArgs = $(this).data('dancer-maker-function-arguments') || [];
    var dancerCount = Number($(this).data('dancer-spawn-count')) || 1;
    // make a dancer with a random position    
    for (var i = 0; i < dancerCount; i++) {
      var dancer = new window[dancerClass](
        ctx.canvas.height * Math.random(),
        ctx.canvas.width * Math.random(),
        Math.random() * 1000,
        ...dancerArgs
      );
      entities.push(dancer); 
    }
    
    
  });
});

function fitToContainer() {
  let canvas = $('#danceCanvas')[0];
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  window['canvas'] = canvas;
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}
