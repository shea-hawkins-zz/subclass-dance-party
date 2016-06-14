$(document).ready(function() {
  let ctx = $('#danceCanvas')[0].getContext('2d');
  let entities = [];
  let renderer = new Renderer(ctx, entities);
  let stepper = new Stepper(entities);
  requestAnimationFrame(function rec() {
    stepper.step();
    renderer.render();
    requestAnimationFrame(rec);
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    // Get the dancer constructor name and arguments for it
    var dancerClass = $(this).data('dancer-maker-function-name');
    var dancerArgs = $(this).data('dancer-maker-function-arguments') || [];

    // make a dancer with a random position    
    var dancer = new window[dancerClass](
      ctx.canvas.width * Math.random(),
      ctx.canvas.height * Math.random(),
      Math.random() * 1000,
      ...dancerArgs
    );
    entities.push(dancer);
  });
});

