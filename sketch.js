var q = 180;
var w = 180;
var qspeed = 25;
var wspeed = 50;

var colour = 60;
var value = 255;
var obama;
var trump;
var hillary;

var smallPoint, largePoint;

function preload() {
  obama = loadImage("obama.jpg");
}

function preload() {
  trump = loadImage("trump.jpg");
}
  
  function preload() {
  hillary = loadImage("hillary.jpg");
}

function setup() {
  createCanvas(800,500);
  smallPoint = 5;
  largePoint = 50;
  imageMode(center);
  noStroke();
  obama.loadPixels();
}

function draw() {
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var a = floor(random(obama.width));
  var b = floor(random(obama.height));
  var pix = obama.get(a ,b);
  fill(pix, 128);
  ellipse(a, b, pointillize, pointillize)
  background(obama,0,0);
  
if (keyIsPressed === true) {
  background(trump,0,0);
} else {
  background(hillary,0,0);
}


for(var x=20; x<=windowWidth; x+=30) {
    for(var y = 10; y <= windowHeight; y += 30) {
      fill(random(150, 40, 150), random(100, 150, 200), random(90, 50, 20));
      ellipse(x, y, random(5,15));
    }
  }
  
  textSize(100);
  text("michelle 2020", 30,100);
  fill(0,102,153); //have the text appear after something is done.. or have it wiggle off the screen
  
  	var d = dist(800/2, 500/2, mouseX, mouseY);

  	fill (colour, random(50,20,10), random(50,40,10));
  	ellipse (q, w, 50,50);

  	//bouncing horizontally
 	 q = q + qspeed;
  	
  	 if (q > 800 || q < 10)  {
     	qspeed = -qspeed;
  	}

  	//bouncing veritcally
  	w = w + wspeed;

  	if (w > 500 || w < 0) {
	 	  wspeed = -wspeed;
  	}
}