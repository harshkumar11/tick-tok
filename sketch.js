//create the variable
var hours;
var minutes;
var seconds;



function setup() {
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second();
  drawSprites();

}

function draw() {
  background(255,255,255);  
  
}
function hour(){
  text('Current hour:\n' + h, 5, 50);
  angleMode(DEGREES);
  function map();{
    hrAngle = map(hr,0,60,0,360)
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0)
  }
}

function minute(){
  text('Current minute: \n' + m, 5, 50);
  angleMode(DEGREES);
  function map();{
    mnAngle = map(mn,0,60,0,360)
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0)
  }
}

function second(){
  text('Current second: \n' + s, 5, 50);
  angleMode(DEGREES);
  function map();{
    ScAngle = map(sc,0,60,0,360)
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0)
  }
}