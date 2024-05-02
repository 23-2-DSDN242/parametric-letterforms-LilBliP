/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FFF1CD";
var systemLineColor = "#ADAA7B";
var systemBoxColor = "#C73869";

/* internal constants */
const strokeColor = "#0a2d27";

//colours
const darkBrown = "#594211" //deep cut bone
const midBrown = "#63562D" // deep cut light
const darkBeige = "#97844D" //edge dark
const lightBeige = "#B8A36B" //edge light or yellowbone
// bone1 = "#C0BB9F" 
// bone2 = "#B1B186" 
// bone3 = "#ADAA7B" 
// bone4 = "#FFF1CD"

function makeLine(x, y, l, rot) {
  push()
  let seriflength = (l / 10)
  let width = 2
  let serifpos = (l / 2)
  rectMode(CENTER)
  translate(x, y)
  rotate(rot)
  fill(darkBrown)
  stroke(darkBeige)
  strokeWeight(1);
  rect(0, 0, width, l - seriflength, 1)//mainline
  //
  noFill()
  noStroke()
  fill(darkBrown)
  //line ends
  triangle(0, serifpos + seriflength, 1, serifpos - seriflength, -1, serifpos - seriflength)
  triangle(0, -serifpos - seriflength, 1, -serifpos + seriflength, -1, -serifpos + seriflength)
  stroke(darkBeige)
  line(0, serifpos + seriflength + .5, 1, serifpos - seriflength)
  line(0, serifpos + seriflength + .5, -1, serifpos - seriflength)
  stroke(darkBeige)
  line(0, -serifpos - seriflength + 1.5, 1, -serifpos + seriflength)
  line(0, -serifpos - seriflength + 1.5, -1, -serifpos + seriflength)
  pop()
}

function makeArc(x, y, w, h, start, stop) {
  fill(0, 0)
  strokeWeight(1.5);
  stroke(darkBrown)//inner arc colour
  arc(x, y, w, h, start, stop)
  stroke(darkBeige)//outer arc colour
  arc(x, y, w + 2, h + 2, start, stop)
  arc(x, y, w - 2, h - 2, start, stop)
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

  angleMode(DEGREES)
//get line data
  let size1 = letterData["lineSize1"];
  let pos1x = letterData["linex1"];
  let pos1y = letterData["liney1"];
  let rot1 = letterData["rot1"];
//line 2
  let size2 = letterData["lineSize2"];
  let pos2x = letterData["linex2"];
  let pos2y = letterData["liney2"];
  let rot2 = letterData["rot2"];
//line3
  let pos3x = letterData["linex3"];
  let pos3y = letterData["liney3"];
  let rot3 = letterData["rot3"];
//line4
  let pos4x = letterData["linex4"];
  let pos4y = letterData["liney4"];
//arc 1
  let arcpos1 = letterData["arcy1"];
  let arcW1 = letterData["arcW1"];
  let arcH1 = letterData["arcH1"];
  let start1 = letterData["start1"];
  let stop1 = letterData["stop1"];
  let arcx1 = letterData["arcx1"];
//arc 2
  let arcpos2 = letterData["arcy2"];
  let arcW2 = letterData["arcW2"];
  let arcH2 = letterData["arcH2"];
  let start2 = letterData["start2"];
  let stop2 = letterData["stop2"];
  let arcx2 = letterData["arcx2"];

  push()
  rectMode(CENTER)
  ellipseMode(CENTER)
  //rect(50,150,100,100)
  makeLine(pos1x, pos1y, size1, rot1)
  makeLine(pos2x, pos2y, size1, rot2)
  makeLine(pos3x, pos3y, size2, rot3)
  makeLine(pos4x, pos4y, size2, rot3)
  makeArc(arcx1, arcpos1, arcW1, arcH1, start1, stop1)
  makeArc(arcx2, arcpos2, arcW2, arcH2, start2, stop2)
  pop()
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["lineSize1"] = map(percent, 0, 100, oldObj["lineSize1"], newObj["lineSize1"]);
  new_letter["linex1"] = map(percent, 0, 100, oldObj["linex1"], newObj["linex1"]);
  new_letter["liney1"] = map(percent, 0, 100, oldObj["liney1"], newObj["liney1"]);
  new_letter["rot1"] = map(percent, 0, 100, oldObj["rot1"], newObj["rot1"]);
  new_letter["lineSize2"] = map(percent, 0, 100, oldObj["lineSize2"], newObj["lineSize2"]);
  new_letter["linex2"] = map(percent, 0, 100, oldObj["linex2"], newObj["linex2"]);
  new_letter["liney2"] = map(percent, 0, 100, oldObj["liney2"], newObj["liney2"]);
  new_letter["rot2"] = map(percent, 0, 100, oldObj["rot2"], newObj["rot2"]);
  new_letter["linex3"] = map(percent, 0, 100, oldObj["linex3"], newObj["linex3"]);
  new_letter["liney3"] = map(percent, 0, 100, oldObj["liney3"], newObj["liney3"]);
  new_letter["rot3"] = map(percent, 0, 100, oldObj["rot3"], newObj["rot3"]);
  new_letter["linex4"] = map(percent, 0, 100, oldObj["linex4"], newObj["linex4"]);
  new_letter["liney4"] = map(percent, 0, 100, oldObj["liney4"], newObj["liney4"]);
  new_letter["arcy1"] = map(percent, 0, 100, oldObj["arcy1"], newObj["arcy1"]);
  new_letter["arcW1"] = map(percent, 0, 100, oldObj["arcW1"], newObj["arcW1"]);
  new_letter["arcH1"] = map(percent, 0, 100, oldObj["arcH1"], newObj["arcH1"]);
  new_letter["start1"] = map(percent, 0, 100, oldObj["start1"], newObj["start1"]);
  new_letter["stop1"] = map(percent, 0, 100, oldObj["stop1"], newObj["stop1"]);
  new_letter["arcy2"] = map(percent, 0, 100, oldObj["arcy2"], newObj["arcy2"]);
  new_letter["arcW2"] = map(percent, 0, 100, oldObj["arcW2"], newObj["arcW2"]);
  new_letter["arcH2"] = map(percent, 0, 100, oldObj["arcH2"], newObj["arcH2"]);
  new_letter["start2"] = map(percent, 0, 100, oldObj["start2"], newObj["start2"]);
  new_letter["stop2"] = map(percent, 0, 100, oldObj["stop2"], newObj["stop2"]);
  new_letter["arcx1"] = map(percent, 0, 100, oldObj["arcx1"], newObj["arcx1"]);
  new_letter["arcx2"] = map(percent, 0, 100, oldObj["arcx2"], newObj["arcx2"]);
  return new_letter;
}

var swapWords = [
  "PARLUXST",
  "TUNAKTXT",
  "?NGHVHN?",
  "??GTHR??",
  "ABRACADB",
  "CAB?CAB?",
  "NOT?LANG",
  "?012345?",
  "?HABHAB?"
]