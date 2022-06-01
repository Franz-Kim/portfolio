var Balls = [];
var gx = 0;
var gy = 0.1;
var elastic =0.9;

function setup() {
  let canvas = createCanvas(displayWidth, displayHeight);
  background(0);
	colorMode(HSB, 360, 255, 255);
  noStroke();
  frameRate(60);
}

function draw() {
  background(0,0.5);
 

  for (i = 0; i < Balls.length; i++) {
    Balls[i].accelBall();
    Balls[i].moveBall();
    push()
    //fill(Balls[i].c[0],Balls[i].c[1],Balls[i].c[2])
    blendMode(SCREEN);
	  fill(Balls[i].c, 150, 50);
    ellipse(Balls[i].x, Balls[i].y, Balls[i].r*(Balls[i].life/300));
    /*textSize(Balls[i].r*(300/500)*(Balls[i].life/300));
    text("T",Balls[i].x, Balls[i].y)*/
    pop()
    Balls[i].life --;
    if(Balls[i].life<0)
    {
      Balls.splice(i,1);
    }
  }
  turnBall();

  if(touches.length > 0 )
  {
    Balls.push(new Ball(mouseX, mouseY,random(100,500),[random(50),random(150),random(255)]));
  }
}

class Ball { //라이프 넣기, 페이드 넣기, 
  constructor(x, y, r, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = Math.floor(random(0,359));
    this.vx = random(1, 10)*random(-1,1);
    this.vy = random(1, 10)*random(-1,1);
    this.life = 300;
  }
  accelBall() {
    this.vx = this.vx + gx;
    this.vy = this.vy + gy;
  }
  moveBall() {
    this.x += this.vx;
    this.y += this.vy;
  }
}

function turnBall() {
  for (i = 0; i < Balls.length; i++) {
    if (Balls[i].x > width | Balls[i].x < 0) {
     // Balls.splice(i,1);
     Balls[i].vx = -Balls[i].vx*elastic

    }
    if (Balls[i].y > height | Balls[i].y < 0) {
     // Balls.splice(i,1);
     Balls[i].vy = -Balls[i].vy*elastic


    }
  }
}

function mouseMoved() {
  Balls.push(new Ball(mouseX, mouseY,random(100,500),[random(50),random(150),random(255)]));
}

function touchMoved() {
  Balls.push(new Ball(mouseX, mouseY,random(100,500),[random(50),random(150),random(255)]));
}