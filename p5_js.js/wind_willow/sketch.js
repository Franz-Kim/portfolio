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
  for ( i=0; i<width+22; i += 25) { // 포스터용 10
    for ( j=0; j<height+22; j += 25) {
      append(color_v, map(random(),0,1,7,14)*10);
      //append(color_v, 50+i/28.0);
      }
  }
}



///////// 포스터
/*
function draw() {

 background (30,0,255); 
 stroke(110,50,50,0.2); 


  drawStream ();

}


function drawStream () {
  nx = 0;
  for ( i=0; i<width+22; i += 10) { // 포스터용 10, 일반 30
    ny = 0;
    i_++;
    for ( j=0; j<height+22; j += 10) { //포스터용 10, 일반 30
      let displacement =0;
      if(i%20 ==0) //포스터 20, 일반 60
       displacement = 5; //포스터 5, 일반 15

      angle = map (noise (nx, ny, nz), 0, 1.0, 0, 4* Math.PI);
       x = 250 * cos (angle); //180
       y = 250 * sin (angle);//180
       //stroke(color_v[i_*(int)(((height+22))/30)+j_],50,100,0.5); //일반일땐 주석 풀기 포스터가 
     
      line (i, j+displacement, i+x, j+y+displacement);
      ny += 0.01;
      j_++;
    }
    j_=0;
    nx += 0.01;
  }
  i_=0;
  nz +=0.001;

} 
*/

////일반 


function draw() {
  
  background (30,0,22); //30,255,22 //포스터용 : 30,0,255
 // stroke(130,50,100,0.5); //130,50,100,0.5 //포스터용 110,50,50,0.2
 
   drawStream ();

}


function drawStream () {
  nx = 0;
  for ( i=0; i<width+22; i += 25) { // 포스터용 10, 일반 30
    ny = 0;
    i_++;
    for ( j=0; j<height+22; j += 25) { //포스터용 10, 일반 30
      let displacement =0;
      if(j%50 ==0) //포스터 20, 일반 60
       displacement = 17; //포스터 5, 일반 15

      angle = map (noise (nx, ny, nz), 0, 1.0, 0, 4* Math.PI);
       x = 250 * cos (angle); //180
       y = 250 * sin (angle);//180
       stroke(color_v[i_*(int)(((height+22))/25)+j_],50,100,0.5); //일반일땐 주석 풀기 포스터가 
     
      line (i+displacement, j, i+x+displacement, j+y);
      ny += 0.028;
      j_++;
    }
    j_=0;
    nx += 0.025;
  }
  i_=0;
  nz +=0.0015;

}