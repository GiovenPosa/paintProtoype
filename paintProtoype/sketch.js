let slider;
let blueSlider, greenSlider, redSlider;
let colString = "black";

function setup() {
  createCanvas(650, 800);
  background("white");

  
  

  textSize(10);
  text("change brush size", 20, 10);
  changeSize();

  text("change color", 190, 10);
  changeColor();

  stroke(0);
  strokeWeight(4);
  noFill();

  rect(0, 85, width, height-85);

}

function draw() {

  addDraw();
  
  
}

function changeSize() {

  slider = createSlider(1, 100, 10, 2);
  slider.position(0, 20);

}

function changeColor() {

  redSlider = createSlider(0, 256, 0, 2);
  redSlider.position(150, 20);
  greenSlider = createSlider(0, 256, 0, 2);
  greenSlider.position(150, 40);
  blueSlider = createSlider(0, 256, 0, 2);
  blueSlider.position(150, 60);

  
}

function addDraw() {

  let val = slider.value();
  let redCol = redSlider.value(), greenCol = greenSlider.value(), blueCol = blueSlider.value();


  if(mouseY > 85) {
    if (mouseIsPressed) {
      noStroke();
      fill(redCol, greenCol, blueCol);
      ellipse(mouseX, mouseY, val, val);
    }
  } 

}


