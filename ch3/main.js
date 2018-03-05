/*  global GWIndow, GLabel, GWindow, GRect, GOval, GLine  */


function hellWorld() {
  console.log("Hello, World!");
}

const GWIDTH = 500;
const GHEIGHT = 200;

function graphicsHelloWorld() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let msg = GLabel("Hello, World!", 50, 100);
  msg.setFont("36px 'Papyrus'");
  msg.setColor("dodgerblue");
  gw.add(msg);
}

function blueRectangle() {
  let gw = GWindow(GWIDTH, GHEIGHT);

  let rect = GRect(150, 50, 200, 100);
  rect.setColor("cornflowerblue");
  rect.setFilled(true);
  gw.add(rect);

  let oval = GOval(150, 50, 200, 100);
  oval.setColor("red");
  oval.setFilled(true);
  gw.add(oval);
}

function drawDiagonals() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  gw.add(GLine(0,0, GWIDTH, GHEIGHT));
  gw.add(GLine(GWIDTH, 0, 0, GHEIGHT));
}

function target(){
  let gw = GWindow(GWIDTH, GHEIGHT);
  let xc = GWIDTH / 2;
  let yc = GHEIGHT /2;
  let startY = 400;

  gw.add(createFilledCircle(xc, 500, 395, "dodgerblue"));
  gw.add(createFilledCircle(xc, startY, 375, "red"));
  gw.add(createFilledCircle(xc, startY -5, 355, "orange"));
  gw.add(createFilledCircle(xc, startY -10, 335, "yellow"));
  gw.add(createFilledCircle(xc, startY -15, 315, "green"));
  gw.add(createFilledCircle(xc, startY -20, 295, "blue"));
  gw.add(createFilledCircle(xc, startY -25, 275, "indigo"));
  gw.add(createFilledCircle(xc, startY -30, 255, "pink"));

  // gw.add(createFilledCircle(xc, yc, 5, "white"));
}

function createFilledCircle(x,y,r,color) {
  let circle = GOval(x - r, y - r, 2 * r, 2 * r);
  circle.setFilled(true);
  circle.setColor(color);
  return circle;
}
