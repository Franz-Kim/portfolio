let clickcount =0;

var resultclass = document.getElementsByClassName('result');
var introclass = document.getElementsByClassName('description');
let resulttext = [
    `배는 항구에 있을때 가장 안전하지만, 배는 항구에 머물기 위해 만들어 진 게 아닙니다.<br><br>- 파올로 코엘료 <순례자>`,
    '완성된 인생을 가진 사람은 어디에도 없어. 모든 사람은 언제까지나 미완성이야.<br><br>- 무라카미 하루키 <기사단장 죽이기>',
    ];

let message = [
    '새로운 도전을 하는 한해가 되시겠군요. 항상 응원합니다.<br>새해 복 많이 받으세요!<br>승기 드림',
    '완벽하지 않아도 완성을 향해 나아가는 멋진 한해가 될 거에요.<br>새해 복 많이 받으세요!<br>승기 드림',
    
    ];
let randomindex = Math.floor(Math.random() * (resulttext.length));
console.log(randomindex);
document.getElementById('result_text').innerHTML = resulttext[randomindex];
document.getElementById('message').innerHTML = message[randomindex];


var clickEvent = (function() {
    if ('ontouchstart' in document.documentElement === true) {
      return 'touchstart';
    } else {
      return 'click';
    }
  })();




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


document.body.addEventListener("touchend", clickevent);

function clickevent() {
    
    window.navigator.vibrate([500]);
    clickcount ++;
    document.getElementById("counter").innerHTML = `${clickcount}/3`;
    console.log(clickcount);
        if(clickcount==3)
        {
            document.body.removeEventListener('click',clickevent);
            anime.timeline({loop: false})
            .add({
                targets: '.description',
                translateZ: 0,
                opacity: [1,0],
                easing: "easeOutExpo",
                duration: 1000
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
                    for(let i =0 ; i<introclass.length;i++)
                    {
                      introclass[i].style.display = 'none';
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
