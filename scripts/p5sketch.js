
var mycontainer = document.getElementById('canvascontainer');

nx = 0;
ny = 0;
nz = 0;
color_v =[];
i_ =0;
j_=0;
mousex_=0;
mousedelta=0;

function setup() {
    
  var canvas = createCanvas(mycontainer.offsetWidth, mycontainer.clientHeight);
  canvas.parent(mycontainer);
  colorMode (HSB);
  for ( i=0; i<width+22; i += 25) { // 포스터용 10
    for ( j=0; j<height+22; j += 25) {

      }
  }
}



function draw() {

  
  background (255); //30,255,22 //포스터용 : 30,0,255
  colorMode(RGB);
  stroke(10,100,50,30); //130,50,100,0.5 //포스터용 110,50,50,0.2
  strokeWeight(1)
 
   drawStream ();
   mousex_=mouseX;

}


function drawStream () {
  nx = 0;
  for ( i=0; i<width+22; i += mycontainer.offsetWidth/40) { // 포스터용 10, 일반 30
    ny = 0;
    i_++;
    for ( j=0; j<height+22; j += mycontainer.offsetWidth/40) { //포스터용 10, 일반 30
      let displacement =0;
      
      angle = map (noise (nx, ny, nz), 0, 1.0, 0, 4* Math.PI);
       x = mycontainer.offsetWidth/4 * cos (angle); //180
       y = mycontainer.offsetWidth/4 * sin (angle);//180
      // stroke(color_v[i_*(int)(((height+22))/25)+j_],50,100,0.5); //일반일땐 주석 풀기 포스터가 
     
      line (i+displacement, j, i+x+displacement, j+y);
      ny += 0.02;
      j_++;
    }
    j_=0;
    nx += 0.02;
  }
  i_=0;
  mousedelta=mouseX-mousex_;
  nz +=(0.0015+(mousedelta*mousedelta/100000.0));

}

function windowResized() {
 
    resizeCanvas(mycontainer.offsetWidth, mycontainer.clientHeight);
    
  }
