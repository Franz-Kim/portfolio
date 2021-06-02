/*
author:  lisper <leyapin@gmail.com> 2015
desc:    noise 2d line
This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License.
*/

nx = 0;
ny = 0;
nz = 0;
color_v =[];
i_ =0;
j_=0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode (HSB);
  for ( i=0; i<width+22; i += 30) { // 포스터용 10
    for ( j=0; j<height+22; j += 30) {
      append(color_v, map(random(),0,1,5,14)*10);
      }
  }
}

function draw() {
  background (30,0,22); //30,255,22 //포스터용 : 30,0,255
 // stroke(130,50,100,0.5); //130,50,100,0.5 //포스터용 110,50,50,0.2
  drawStream ();

}


function drawStream () {
  nx = 0;
  for ( i=0; i<width+22; i += 30) { // 포스터용 10
    ny = 0;
    i_++;
    for ( j=0; j<height+22; j += 30) { //포스터용 10
      let displacement =0;
      if(i%60 ==0)
       displacement = 15;

      angle = map (noise (nx, ny, nz), 0, 1.0, 0, 4* Math.PI);
       x = 180 * cos (angle); //180
       y = 180 * sin (angle);//180
       stroke(color_v[i_*(int)(((width+22))/30)+j_],50,100,0.5);
       //    console.log(i_*(int)(((width+22))/20)+j_);
     
      line (i, j+displacement, i+x, j+y+displacement);
      ny += 0.03;
      j_++;
    }
    j_=0;
    nx += 0.03;
  }
  i_=0;
  nz +=0.001;

}