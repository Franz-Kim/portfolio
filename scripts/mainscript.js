var textWrapper = document.querySelector('.title-text .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

var tl = anime.timeline({loop: false})
  .add({
    targets: '.title-text .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700, autoplay:false
  })
  .add({
    targets: '.title-text .line',
    translateX: [0, document.querySelector('.title-text .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.title-text .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.title-text .line',
    scaleY: [1,0],
    opacity: [1,0.5],
    easing: "easeOutExpo",
    duration: 700
  });



var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#F0EBDB','#F0EBDB','#F0EBDB','#F0EBDB'],
    anchors: ['SeungkiKim', 'bibilography', 'works'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First page', 'Second page', 'Third and last page'],
    afterLoad: function (origin, destination, direction) {
        if (destination.index == 0) {
            tl.restart();
        }
        if(destination.index == 2)
        {
            document.getElementById("firstvideo").play();
        }
    }
});
