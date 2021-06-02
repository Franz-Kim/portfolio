function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  smooth();
  noStroke();
  noiseDetail(4);
}

 a = 0;
 s = Math.PI*2/500;

function draw() {
  
  doLines();
  a+=s;
}


function doLines() {
  background(0);
  fill(255,255,255,10)
   for(var j=50;j<450;j+=25) {
     for(var i=50;i<450;i+=25) {
      { //grid
        var step = sin(a)*(sin((450-i)*PI/400.0));
        var swing = step*(360.0*noise(a+i/300.0, a+j/300.0,a/10.0)-90.0);
        dx = randomC()/2;
        dy = randomC()/2;
        x = i*(window.innerWidth/450);
        y = swing+j*window.innerHeight/450;

       ellipse(x,y,300-swing*2,300-swing*2);
    }
  }
 }

}

//pseudo
function randomC() {
   r = random(0,1);
   ang = sin(Math.PI*2*random(0,1));
  return r*ang;
}