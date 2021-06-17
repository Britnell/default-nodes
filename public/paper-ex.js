/*
 *    Template for paper.js - global implementation
 */

paper.install(window);

window.onload = function() {
  
    // * Setup

  paper.setup('papercanvas');
  var tool = new Tool();

  view.onFrame = function(event){   
      // * Loop
  }

  tool.onMouseDown = function(event){
    // if(event.event.button==0)
  }

  tool.onMouseDrag = function (event){
  }


  tool.onKeyDown = function(event) {
    // event.key
  }

  paper.view.draw();

  // * Eo window.onload
}

