let test;

var emotion=[[],[],[],[],[],[],[],[]];
var emotionvector =[[3,2],[-2,2],[0,-2],[3,-3],[-3,1],[2,3],[-2,1],[-3,-3]];
var selectedfiles =[[],[],[],[],[],[]];
var choosenfiles = [];
var choosenemotions =[];
//amusement, anger, awe, contentment, disgust, excitement, fear, sadness
var currentemotionvector =[0,0];


let counter = 0;
let currentvector=[0,0];
let totalemotion = [0,0,0,0,0,0,0,0];
let filename1, filename2, filename3, filename4;
let currenthue = 0;
let currnetbrightness =100;
let currentsaturation =0;
let changehue =0;
let changebrightness = 85;
let changesaturation = 40;
let startanimation = 0;

$.ajax({url: "multiimg_serial_big_full.csv", success: function(result){
    
    test =Papa.parse(result, {
      delimiter: ',',
      escapeChar: '\\',
      header: true,
      delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
    });

    
     for(i = 0 ; i<test.data.length-1; i++){
      var valuearray = Object.keys(test.data[i]).map(function(x){ return test.data[i][x] });
      valuearray.shift();
      let filename = valuearray[0];
      valuearray.shift();
      var max = Math.max.apply(null,valuearray);
      var maxstring = Object.keys(test.data[i]).filter(function(x){ return test.data[i][x] == max; })[0];
      

      if(maxstring == "amusement"){emotion[0].push(filename);}      // max가 amusement인거 번호 모으기
      if(maxstring == "anger"){emotion[1].push(filename);}
      if(maxstring == "awe"){emotion[2].push(filename);}
      if(maxstring == "contentment"){emotion[3].push(filename);}
      if(maxstring == "disgust"){emotion[4].push(filename);}
      if(maxstring == "excitement"){emotion[5].push(filename);}
      if(maxstring == "fear"){emotion[6].push(filename);}
      if(maxstring == "sadness"){emotion[7].push(filename);}
      
    }

    
    for(j=0;j<6;j++){
      let k= j;
      if(j>=1)k++;
      if(j>=3)k++;
      console.log(k);
      selectedfiles[j][0] = emotion[k][getRndInteger(0,emotion[k].length)];
      do{
        selectedfiles[j][1]= emotion[k][getRndInteger(0,emotion[k].length)];
      }while(selectedfiles[j][1]==selectedfiles[j][0])
      do{
        selectedfiles[j][2]= emotion[k][getRndInteger(0,emotion[k].length)];
      }while(selectedfiles[j][2]==selectedfiles[j][0]||selectedfiles[j][2]==selectedfiles[j][1])
    }

    filename1 = selectedfiles[0][0];
    filename2 = selectedfiles[1][0];
    filename3 = selectedfiles[2][0];
   
    document.getElementById("image1").src = "famousepainting_big_full/"+filename1;
    document.getElementById("image2").src = "famousepainting_big_full/"+filename2;
    document.getElementById("image3").src = "famousepainting_big_full/"+filename3;
    


    var animation = anime.timeline();
    animation.add({
      targets: '.intro',
      opacity:[0,1],
      loop: false,
      autoplay: false,
      easing: 'easeInOutSine',
      duration: 2000
    }).add({
      targets: '.intro',
      loop: false,
      translateY: -350,
      autoplay: false,
      easing: 'easeInOutSine',
      duration: 1500
    }).add({
      targets: '.column1',
      opacity:[0,1],
      loop: false,
      autoplay: false,
      easing: 'easeInOutSine',
      duration: 2000
    });
    animation.play();



    document.getElementById("image1").addEventListener("click", image1click);
    document.getElementById("image2").addEventListener("click", image2click); 
    document.getElementById("image3").addEventListener("click", image3click);
    document.getElementsByClassName("button")[0].addEventListener("click",sortingevent);
  


//    document.getElementById("image4").src = "famousepainting/"+filename4;
  /*
    //random하게 각 이모션에서 번호 추출해서 표기
     filename1 = emotion[0][getRndInteger(0,emotion[0].length)]
     filename2 = emotion[3][getRndInteger(0,emotion[3].length)]
     filename3 = emotion[5][getRndInteger(0,emotion[5].length)]
     filename4 = emotion[7][getRndInteger(0,emotion[7].length)]

    document.getElementById("image1").src = "famousepainting/"+filename1;
    document.getElementById("image2").src = "famousepainting/"+filename2;
    document.getElementById("image3").src = "famousepainting/"+filename3;
    document.getElementById("image4").src = "famousepainting/"+filename4;
    

    document.getElementById("image1").addEventListener("click", image1click);
    document.getElementById("image2").addEventListener("click", image2click);
    document.getElementById("image3").addEventListener("click", image3click);
    document.getElementById("image4").addEventListener("click", image4click);
  */

  }});






    


  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function image1click() {
  console.log(filename1);
  clickevent(filename1,1);
}
function image2click() {
  console.log(filename2);
  clickevent(filename2,2);
}
function image3click() {
  console.log(filename3);
  clickevent(filename3,3);
}
function image4click() {
  currentvector[0] += emotionvector[7][0];
  currentvector[1] += emotionvector[7][1];
  console.log(filename4);
  clickevent(filename4,4);
}

function sortingevent(){
  var sortedlist = document.getElementsByClassName("column2");
  var sortedresult=[];
  for(i =0; i<sortedlist.length;i++)
  {
    if(sortedlist[i].children[0].id=="choosen1")
    sortedresult[i]=0;
    if(sortedlist[i].children[0].id=="choosen2")
    sortedresult[i]=1;
    if(sortedlist[i].children[0].id=="choosen3")
    sortedresult[i]=2;
    if(sortedlist[i].children[0].id=="choosen4")
    sortedresult[i]=3;
    if(sortedlist[i].children[0].id=="choosen5")
    sortedresult[i]=4;
    if(sortedlist[i].children[0].id=="choosen6")
    sortedresult[i]=5;
  }
    document.getElementById("emotionline").innerHTML = choosenemotions[sortedresult[0]]+choosenemotions[sortedresult[1]]+choosenemotions[sortedresult[2]]+choosenemotions[sortedresult[3]]+choosenemotions[sortedresult[4]]+choosenemotions[sortedresult[5]];
    let p5canvas = document.getElementsByClassName("p5Canvas")[0];
    p5canvas.style.display="block";
    p5canvas.style.position = "absolute";
    p5canvas.style.top="0";
    startanimation =1;
    angle=0;

    anime({
      targets: '.p5Canvas',
      opacity:[0,1],
      loop: false,
      autoplay: true,
      easing: 'easeInOutSine',
    });


  }

//amusement, awe, contentment, excitement, fear, sadness
function clickevent(filename,selectnumber)
{



  var emotionlist=["am","aw","co","ex","fe","sa"];
  choosenfiles[counter]=filename;
  counter++;



  changehue+= counter*10;
  /*anime({
    targets: '.body',
    background: [`linear-gradient(hsl(${currenthue},${currentsaturation}%,${currnetbrightness}%),white)`, `linear-gradient(hsl(${changehue}, ${changesaturation}%, ${changebrightness}%),white)`],
    easing: 'easeInOutQuad'
  });*/
  currenthue = changehue;
  currentsaturation=changesaturation;
  currnetbrightness = changebrightness;



  
  if(counter ==1)
  { choosenemotions[counter-1]=emotionlist[selectnumber-1];
    filename1 = selectedfiles[3][0];
    filename2 = selectedfiles[4][0];
    filename3 = selectedfiles[5][0];
  }
  if(counter ==2)
  { choosenemotions[counter-1]=emotionlist[selectnumber+2];
    filename1 = selectedfiles[0][1];
    filename2 = selectedfiles[1][1];
    filename3 = selectedfiles[5][1];
  }
  if(counter ==3)
  {
    if(selectnumber ==1)
    choosenemotions[counter-1]=emotionlist[0];
    if(selectnumber ==2)
    choosenemotions[counter-1]=emotionlist[1];
    if(selectnumber ==3)
    choosenemotions[counter-1]=emotionlist[5];
    filename1 = selectedfiles[3][1];
    filename2 = selectedfiles[4][1];
    filename3 = selectedfiles[2][1];
  }
  if(counter ==4)
  {
    if(selectnumber ==1)
    choosenemotions[counter-1]=emotionlist[3];
    if(selectnumber ==2)
    choosenemotions[counter-1]=emotionlist[4];
    if(selectnumber ==3)
    choosenemotions[counter-1]=emotionlist[2];
    filename1 = selectedfiles[0][2];
    filename2 = selectedfiles[4][2];
    filename3 = selectedfiles[2][2];
  }
  if(counter ==5)
  {
    if(selectnumber ==1)
    choosenemotions[counter-1]=emotionlist[0];
    if(selectnumber ==2)
    choosenemotions[counter-1]=emotionlist[4];
    if(selectnumber ==3)
    choosenemotions[counter-1]=emotionlist[2];
    filename1 = selectedfiles[3][2];
    filename2 = selectedfiles[1][2];
    filename3 = selectedfiles[5][2];
  }
  if(counter==6)
  {
    if(selectnumber ==1)
    choosenemotions[counter-1]=emotionlist[3];
    if(selectnumber ==2)
    choosenemotions[counter-1]=emotionlist[1];
    if(selectnumber ==3)
    choosenemotions[counter-1]=emotionlist[5];
  }
  if( counter <6){


  var animation = anime({
    targets: '.column1',
    opacity:[1,0],
    loop: false,
    autoplay: false,
    easing: 'easeInOutSine',
    complete: function(anim) {
      document.getElementById("image1").src = "famousepainting_big_full/"+filename1;
      document.getElementById("image2").src = "famousepainting_big_full/"+filename2;
      document.getElementById("image3").src = "famousepainting_big_full/"+filename3;    
      animation2.play();
    }
  });
  animation.play();
  var animation2 = anime({
    targets: '.column1',
    opacity:[0,1],
    loop: false,
    autoplay: false,
    easing: 'easeInOutSine'
  });
  

  }
  else{ //To-Do. choosen 으로 6개 리스트업, 위에 리스트는 display none으로 변경
    var animation3 = anime({
      targets: '.column1, .intro',
      opacity:[1,0],
      loop: false,
      autoplay: false,
      easing: 'easeInOutSine',
      complete: function(anim) {
        animation4.play();

      }
    });
    animation3.play();
    var animation4 = anime({
      targets: '.column2, .outro',
      opacity:[0,1],
      loop: false,
      autoplay: false,
      easing: 'easeInOutSine',
      begin: function(anim){
        document.getElementsByClassName("row1")[0].style.display ="none";
        document.getElementsByClassName("row2")[0].style.display="flex";
        document.getElementsByClassName("button")[0].style.display="inline-block";
        document.getElementById("choosen1").src ="famousepainting/"+choosenfiles[0];
        document.getElementById("choosen2").src ="famousepainting/"+choosenfiles[1];
        document.getElementById("choosen3").src ="famousepainting/"+choosenfiles[2];
        document.getElementById("choosen4").src ="famousepainting/"+choosenfiles[3];
        document.getElementById("choosen5").src ="famousepainting/"+choosenfiles[4];
        document.getElementById("choosen6").src ="famousepainting/"+choosenfiles[5];
      }
    });




    new Sortable(document.getElementById("sortinglist"), {
      animation: 350,
      });
      
  }






/*  for(i = 0 ; i<test.data.length-1; i++){
    var valuearray = Object.keys(test.data[i]).map(function(x){ return test.data[i][x] }); 
    if(valuearray[1] == filename)
    {

      for(j =2;j<10;j++){
        totalemotion[j-2] += Math.round( parseFloat(valuearray[j])*100) ;
      }
    

      document.getElementById("emotionline").innerHTML = totalemotion;
      console.log(currentvector[0]/counter +" , "+ currentvector[1]/counter );

      filename1 = emotion[0][getRndInteger(0,emotion[0].length)]
      filename2 = emotion[3][getRndInteger(0,emotion[3].length)]
      filename3 = emotion[5][getRndInteger(0,emotion[5].length)]
      filename4 = emotion[7][getRndInteger(0,emotion[7].length)]
 
     document.getElementById("image1").src = "famousepainting/"+filename1;
     document.getElementById("image2").src = "famousepainting/"+filename2;
     document.getElementById("image3").src = "famousepainting/"+filename3;
     document.getElementById("image4").src = "famousepainting/"+filename4;

      break;
    }
  }*/
}


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  stroke(20, 150);
  colorMode (HSB);
  document.getElementsByClassName("p5Canvas")[0].style.display = "none";
  document.getElementsByClassName("p5Canvas")[0].style.opacity = "0";
}

let radius = 50.0;
let radiusmode =0;
let radiusmode2 =0;
let bar = 60.0;
let step = 6;
let angle =0.0;
let radius2= 80.0;
let bar2 = 50.0;
let counterforanimation =0;


function draw() {

  if(startanimation ==1){
    counterforanimation ++;
    if(radius >80)
    radiusmode =1;
    if(radius <50)
    radiusmode=0;
    
    if(radiusmode ==0)
    radius +=0.3;
    if(radiusmode ==1)
    radius -=0.3;
    background(255);
    translate(width / 2, height / 2);
    rotate(angle);
    angle +=0.03;
    for(let angle = 0; angle < 360; angle += 0.3){
      let radian = radians(angle);
      push();
      translate(radius * cos(radian), radius * sin(radian));
      rotate(radian + counterforanimation * map(sin(radian * step * 0.5), -1, 1, -0.02, 0.02));
      colorMode(HSB);
      stroke(angle,30,100);
      strokeWeight(0.25);
      line(-bar / 2, 0, bar / 2, 0);
      pop();
    }
    
    
      if(radius2 >80)
    radiusmode2 =1;
    if(radius2 <50)
    radiusmode2=0;
    
    if(radiusmode2 ==0)
    radius2 +=0.3;
    if(radiusmode2 ==1)
    radius2 -=0.3;
    rotate(-angle*2);
      for(let angle = 0; angle < 360; angle += 0.3){
      let radian = radians(angle);
      push();
      translate(radius2 * cos(radian), radius2 * sin(radian));
      rotate(radian + counterforanimation * map(sin(radian * step * 0.5), -1, 1, -0.02, 0.02));
      colorMode(HSB);
      stroke(angle,30,100);
      strokeWeight(0.25);
      line(-bar2 / 2, 0, bar2 / 2, 0);
      pop();
    }
  }

}