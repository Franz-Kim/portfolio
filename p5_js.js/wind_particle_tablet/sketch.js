let bg;
const COL = createCols("https://coolors.co/d9ed92-b5e48c-99d98c-76c893-52b69a");
let velocity=0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	bg = createGraphics(width, height);
	bg.background(0,1);
  bg.noStroke();

}

function draw() {
	randomSeed(0);
	noStroke();
	for(let i = 0; i < 300; i++){
		fill(COL[int(random(COL.length))]);
  	let s = random(10,20);
		let x = (random(width)+frameCount*random(1,4))%(width+2*s)-s;
		let y = (random(height)+sin(frameCount/200+i/200.0)*random(20,130))%(height+2*s)-s;
		ellipse(x,y, s, s);

	}
  fill(0,0,0,3);
  rect(0,0,width,height);

}

function createCols(_url)
{
  let slash_index = _url.lastIndexOf('/');
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = '#' + arr[i];
  }
  return arr;
}

/*
let bg;
const COL = createCols("https://coolors.co/d9ed92-b5e48c-99d98c-76c893-52b69a-34a0a4-168aad-1a759f-1e6091-184e77");

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	bg = createGraphics(width, height);
	bg.background(255,20);
  bg.noStroke();
  for (let i = 0; i < 300000; i++) {
    let x = random(width);
    let y = random(height);
    let s = noise(x*0.01, y*0.01)*2;
    //bg.fill(255, 50);
    //bg.rect(x, y, s, s);
  } 
}

function draw() {
	randomSeed(0);
	noStroke();
	for(let i = 0; i < 30; i++){
		fill(COL[int(random(COL.length))]);
  	let s = random(30,90);
		let x = (random(width)+frameCount*random(1,10))%(width+s)-s;
		let y = (random(height)+sin(frameCount/80)*random(300,600))%(height+s)-s;
		ellipse(x,y, s, s);

	}
	image(bg,0,0);
}

function createCols(_url)
{
  let slash_index = _url.lastIndexOf('/');
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = '#' + arr[i];
  }
  return arr;
}

*/