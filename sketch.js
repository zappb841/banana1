let fonte;
let points = [];
let r = 2; let angle = 0;

function preload() {
  fonte = loadFont("BowlbyOne-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
  background(10,50,0);
  angleMode(DEGREES);
  points = fonte.textToPoints("Banana", 20, 220,80, {
                              sampleFactor:0.2,
                              simplifyThreshold: 0
                              });
  for (let i=0; i<15; i++){
    fill(255,200,0) 
    circle(i+random(0,width),random(0,height),random(10,50));
  }  
}

function draw() {
  for (let i=0; i<points.length; i++){
    fill(255,200,0)
    circle(points[i].x+r*sin(angle + i*10),points[i].y,5);
  }
  angle += 4; 
}

function mousePressed() {
  background(10,50,0);
  for (let i=0; i<15; i++){
    fill(255,200,0) 
    circle(i+random(0,width),random(0,height),random(10,50));
  }  
}
