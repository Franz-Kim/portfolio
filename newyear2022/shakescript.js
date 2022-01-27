let clickcount =0;

var resultclass = document.getElementsByClassName('result');
var introclass = document.getElementsByClassName('intro');
let resulttext = [`배는 항구에 있을때 가장 안전하지만, 배는 항구에 머물기 위해 만들어 진 게 아닙니다.<br>-파올로 코엘료 <순례자>`,'완성된 인생을 가진 사람은 어디에도 없어. 모든 사람은 언제까지나 미완성이야.<br>-무라카미 하루키<기사단장 죽이기>','sample3','sample4'];
let randomindex = Math.floor(Math.random() * (resulttext.length));
console.log(randomindex);
document.getElementById('result_text').innerHTML = resulttext[randomindex];

var textWrapper = document.querySelector('.intro');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.intro .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  });


document.body.addEventListener('click', clickevent);

function clickevent() {
    
    window.navigator.vibrate([500]);
    clickcount ++;
    console.log(clickcount);
        if(clickcount==10)
        {
                    for(let i =0 ; i<resultclass.length;i++)
                    {
                        resultclass[i].style.display = 'flex';
                    }
                    for(let i =0 ; i<introclass.length;i++)
                    {
                    //  introclass[i].style.display = 'none';
                    }

                
                    anime.timeline({loop: false})
                    .add({
                        targets: '.result',
                        opacity: [0,1],
                        easing: "easeInOutQuad",
                        duration: 2250,
                        delay: 100
                    });
                    document.body.removeEventListener('click',clickevent);
        }

  }
