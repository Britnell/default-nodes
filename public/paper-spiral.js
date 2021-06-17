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

  // *********************************

  void linearSpiral(){

  }

  void staticDraw({radBegin=4}){
    linearSpiral()

    let ang = 0;
    let rad = radbegin;


    //
  }

  staticDraw({
    
  });
  paper.view.draw();

  // * Eo window.onload
}

