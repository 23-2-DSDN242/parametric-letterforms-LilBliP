const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 200,
  "size2": 25,
  "size3": 200,
  "offsetx": 50,
  "y2-1": -85,
  "y2-2": 20,
  "y3-1": 0,
  "y3-2": 0

}

const letterB = {
  "size": 200,
  "size2": 50,
  "size3": 25,
  "offsetx": 50,
  "y2-1": 50,
  "y2-2": -50,
  "y3-1": 50,
  "y3-2": -50
}

const letterC = {
  "size": 200,
  "size2": 50,
  "size3": 50,
  "offsetx": 50,
  "y2-1": 75,
  "y2-2": -75,
  "y3-1": 75,
  "y3-2": -75
}

const backgroundColor  = "#acf2e7";

const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  angleMode(DEGREES)
  rectMode(CENTER)
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  //draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size1 = letterData["size"];
  let size2 = letterData["size2"];
  let size3 = letterData["size3"];
  let line2offset = posx + letterData["offsetx"];
  let line3offset = posx + (letterData["offsetx"]*2);
  let y2_1 = posy + letterData["y2-1"];
  let y2_2 = posy + letterData["y2-2"];
  let y3_1 = posy + letterData["y3-1"];
  let y3_2 = posy + letterData["y3-2"];


  // rects
  fill(darkGreen);
  //L1
  rect(posx, posy, 20, size1);
  fill(lightGreen);
  //L2
  rect(line2offset,y2_1,20,size2)
  rect(line2offset,y2_2,20,size2)
  //L3
  rect(line3offset,y3_1,20,size3)
  rect(line3offset,y3_2,20,size3)

  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }


}
