/* these are optional special variables which will change the system */
var systemBackgroundColor = "#acf2e7";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */
const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

//colours
const darkBrown = "#362707" //deep cut bone
const midBrown = "#63562D" // deep cut light
const darkBeige = "#97844D" //edge dark
const lightBeige = "#B8A36B" //edge light or yellowbone
const bone1 = "#C0BB9F" //bone1
const bone2 = "#B1B186" //bone2
const bone3 = "#ADAA7B" //bone3

function makeLine(x,y,l,rot){
  push()
  rectMode(CENTER)
  translate(x,y)
  rotate(rot)
  fill(darkBrown)
  stroke(midBrown)
  strokeWeight(2);
  rect(0,0,5,l,5)
  pop()
}
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // determine parameters for second circle
  let size1 = letterData["lineSize"];
  let pos1x = letterData["linex1"];
  let pos1y = letterData["liney1"];
  let rot1 = letterData["rot1"];

  // draw two circles
  rectMode(CENTER)
  rect(50,150,100,100)
  makeLine(pos1x,pos1y,size1,rot1)
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
