let clickcount =0;

var resultclass = document.getElementsByClassName('result');
var introclass = document.getElementsByClassName('description');
let resulttext = [
    `배는 항구에 있을때 가장 안전하지만, 배는 항구에 머물기 위해 만들어 진 게 아닙니다.<br><br>- 파올로 코엘료 <순례자>`,
    '완성된 인생을 가진 사람은 어디에도 없어. 모든 사람은 언제까지나 미완성이야.<br><br>- 무라카미 하루키 <기사단장 죽이기>',
    '인생의 봄날은 언제나 지금이다. 행동하는 날 그날이 바로 길일이다.<br><br>- 류시화 <새는 날아가면서 뒤돌아보지않는다>',
    '그대의 눈에 비치는 것이 순간마다 새롭기를. 현자란 모든것에 경탄하는 자이다.<br><br>- 앙드레 지드 <지상의 양식>',
    '새는 알에서 나오려고 투쟁한다. 알은 세계다. 태어나려는 자는 한 세계를 파괴해야만 한다.<br><br>- 헤르만 헤세 <데미안>',
    '너희들 하고 싶은 대로 하라. 하고픈 일을 신나게 해내는 것이야말로 우리가 태어난 이유기도 하다.<br><br>- 황석영 <개밥바라기별>',
    '여행은 그런 우리를 이미 지나가버린 과거와 아직 오지않은 미래로부터 끌어내 현재로 데려다 놓는다.<br><br>- 김영하 <여행의 이유>',
    '행복은 늘 작고 단순한 것 속에 있다<br><br>- 장석주 <우리를 행복하게 하는 것들>',
    '모든 일은 눈 앞의 한 걸음을 떼는 것에서 시작된단다<br><br>- 우쥔 <어떻게 살아야 할지 막막한 너에게>',
    '삶이란 모든 이유를 하나씩 알아가는 여정이다. 애써 빨리 정답을 찾으려 할 필요도 없다<br><br>- 김가희<이제, 당신이 떠날 차례>'
    ];

let message = [
    '새로운 도전을 하는 한해가 되시겠군요. 항상 응원합니다.<br>새해 복 많이 받으세요!<br>승기 드림',
    '완벽하지 않아도 완성을 향해 나아가는 멋진 한해가 될 거에요.<br>새해 복 많이 받으세요!<br>승기 드림',
    '2022년은 당신의 봄날이고 길일일 거에요.<br>새해 복 많이 받으세요!<br>승기 드림',
    '매 순간 새롭고 경탄할 일이 넘쳐나는 2022년이 되시길.<br>새해 복 많이 받으세요!<br>승기 드림',
    '알에서 나오려는 당신을 응원합니다!<br>새해 복 많이 받으세요!<br>승기 드림',
    '하고싶은대로 움직일 수 있는 용기 있는 한 해가 되기를.<br>새해 복 많이 받으세요!<br>승기 드림',
    '2022년이 현재에 충실할 수 있는 행복한 여행같은 한 해이기를.<br>새해 복 많이 받으세요!<br>승기 드림',
    '작고 단순한 행복을 찾고 즐길 수 있는 2022년 되시기를<br>새해 복 많이 받으세요!<br>승기 드림',
    '눈 앞의 한걸음을 떼려는 당신의 큰 용기에 박수!<br>새해 복 많이 받으세요!<br>승기 드림',
    '조급하지 않고 천천히 여유를 가질 수 있는 한해가 되시기를<br>새해 복 많이 받으세요!<br>승기 드림'
    
    
    ];
let randomindex = Math.floor(Math.random() * (resulttext.length));
console.log(randomindex);
document.getElementById('result_text').innerHTML = resulttext[randomindex];
document.getElementById('message').innerHTML = message[randomindex];





anime.timeline({loop: false})
  .add({
        targets: '#line',
        height: ['0vh', '20vh'],
        easing: 'easeInQuad',
        duration: 500,
        delay:300
  })
  .add({
    targets: '#circle',
    scale: [5, 1],
    opacity: [0,1],
    duration: 600,
    easing: 'easeOutQuad',
    delay: 100
    })
  .add({
    targets: '#destext, #counter',
    translateZ: 0,
    opacity: [0,1],
    easing: 'easeOutExpo',
    duration: 3000
  });


document.getElementsByClassName("background")[0].addEventListener("click", clickevent);
function clickevent() {
    
   // window.navigator.vibrate([500]);
    clickcount ++;
    document.getElementById("counter").innerHTML = `${clickcount}/3`;
    console.log(clickcount);
        if(clickcount==3)
        {
            document.getElementsByClassName("background")[0].removeEventListener("click",clickevent);

            anime.timeline({loop: false})
            .add({
                targets: '.description',
                translateZ: 0,
                opacity: [1,0],
                easing: "easeOutExpo",
                duration: 1000,

                complete: function(anim) {
                    for(let i =0 ; i<introclass.length;i++)
                    {
                    introclass[i].style.display = 'none';
                    }
                }
            })
            .add({
                targets: '.progress_circle',
                scale: [0, 2],
                opacity: [0,1,0],
                duration: 2000,
                easing: 'easeInOutQuad',
                rotateZ: [0,360],
                offset: '-=400'
            })
            .add({
                targets: '.progress_circle',
                scale: [0, 3],
                opacity: [0,1,0],
                duration: 2000,
                easing: 'easeInOutQuad',
                rotateZ: [0,360]
            })
            .add({
                targets: '.progress_circle',
                scale: [0, 4],
                opacity: [0,1,0],
                duration: 2000,
                easing: 'easeInOutQuad',
                rotateZ: [0,360],

                complete: function(anim) {

                    for(let i =0 ; i<resultclass.length;i++)
                    {
                        resultclass[i].style.display = 'inline-block';
                    }
          


                    anime.timeline({loop: false})
                    .add({
                        targets: '.result',
                        opacity: [0,1],
                        easing: "easeOutExpo",
                        duration: 4000,

                    });
                }

            });

                
              
        }

  }
