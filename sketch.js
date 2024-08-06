function setup() {
    createCanvas(400, 400);
    background('lightgreen');
  }
  
  function draw() {
   stroke('pink');
    fill('lightblue');
    //console.log(mouseIsPressed);
    if(mouseIsPressed) {
      rect(mouseX,mouseY,20,35)
    }
