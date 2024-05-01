/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FFF1CD";
var systemLineColor = "#ADAA7B";
var systemBoxColor = "#C73869";

/* internal constants */
const strokeColor  = "#0a2d27";

//colours
const darkBrown = "#362707" //deep cut bone
const midBrown = "#63562D" // deep cut light
const darkBeige = "#97844D" //edge dark
const lightBeige = "#B8A36B" //edge light or yellowbone
const bone1 = "#C0BB9F" //bone1
const bone2 = "#B1B186" //bone2
const bone3 = "#ADAA7B" //bone3
const bone4 = "#FFF1CD"

function makeLine(x,y,l,rot){
  push()
  let seriflength=(l/10)
  let width=2
  let serifpos=(l/2)
  rectMode(CENTER)
  translate(x,y)
  rotate(rot)
  fill(darkBrown)
  stroke(darkBeige)
  strokeWeight(1);
  rect(0,0,width,l-seriflength,1)
  noFill()
  noStroke()
  fill(darkBrown)
  triangle(0,serifpos+seriflength,1,serifpos-seriflength,-1,serifpos-seriflength)
  triangle(0,-serifpos-seriflength,1,-serifpos+seriflength,-1,-serifpos+seriflength)
  stroke(darkBeige)
  line(0,serifpos+seriflength+.5,1,serifpos-seriflength)
  line(0,serifpos+seriflength+.5,-1,serifpos-seriflength)
  stroke(darkBeige)
  line(0,-serifpos-seriflength+1.5,1,-serifpos+seriflength)
  line(0,-serifpos-seriflength+1.5,-1,-serifpos+seriflength)
   pop()
}
function makeArc(x,y,w,h,start,stop){
  fill(0,0)
  strokeWeight(1.5);
stroke(darkBrown)
arc(x,y,w,h,start,stop)
stroke(darkBeige)
arc(x,y,w+2,h+2,start,stop)
arc(x,y,w-2,h-2,start,stop)
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

  // determine parameters for second circle
  let size1 = letterData["lineSize1"];
  let pos1x = letterData["linex1"];
  let pos1y = letterData["liney1"];
  let rot1 = letterData["rot1"];

  let size2 = letterData["lineSize2"];
  let pos2x = letterData["linex2"];
  let pos2y = letterData["liney2"];
  let rot2 = letterData["rot2"];

  let pos3x = letterData["linex3"];
  let pos3y = letterData["liney3"];
  let rot3 = letterData["rot3"];

  let pos4x = letterData["linex4"];
  let pos4y = letterData["liney4"];

  let arcpos1 = letterData["arcy1"];
  let arcW1 = letterData["arcW1"];
  let arcH1 = letterData["arcH1"];
  let start1 = letterData["start1"];
  let stop1 = letterData["stop1"];

  let arcpos2 = letterData["arcy2"];
  let arcW2 = letterData["arcW2"];
  let arcH2 = letterData["arcH2"];
  let start2 = letterData["start2"];
  let stop2 = letterData["stop2"];

  let arcx1 = letterData["arcx1"];
  let arcx2 = letterData["arcx2"];

  // draw two circles
  push()
  rectMode(CENTER)
  ellipseMode(CENTER)
  //rect(50,150,100,100)
  makeLine(pos1x,pos1y,size1,rot1)
  makeLine(pos2x,pos2y,size1,rot2)
  makeLine(pos3x,pos3y,size2,rot3)
  makeLine(pos4x,pos4y,size2,rot3)
  makeArc(arcx1,arcpos1,arcW1,arcH1,start1,stop1)
  makeArc(arcx2,arcpos2,arcW2,arcH2,start2,stop2)
pop()
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
  "BAAAAAAA",
  "TUNAKTXT"
]
