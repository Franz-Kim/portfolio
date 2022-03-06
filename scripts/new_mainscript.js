function DropdownFunction() {
    document.getElementById("myDropdown").classList.toggle("show_list");
    anime({
        targets: '#myDropdown',
        scaleY: [0,1],
        opacity: [0,1],
        duration: 500,
        easing: "easeOutExpo"
      });
  }
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show_list')) {
        anime({
            targets: '#myDropdown',
            scaleY: [1,0],
            opacity: [1,0],
            duration: 500,
            easing: "easeOutExpo",
            complete: function(anim) {
                myDropdown.classList.remove('show_list');
              }
          });
      }
    }
  }





filterSelection("Works▼")
function filterSelection(c) {
    var filter_name = document.getElementById("dropbtnid");
    filter_name.innerHTML = c;
    var x, i;
    x = document.getElementsByClassName("contents");
   
    if (c == "Works▼") c = "";

    var targetobjectgroup =[];
    for (i = 0; i < x.length; i++) {
        var targetobj = x[i];
    
      if (x[i].className.indexOf(c) <= -1 && x[i].className.indexOf("contents_show") > -1) {
        
         targetobjectgroup.push(targetobj);
        anime({
            targets: targetobj,
            height: '0px',
            opacity: [1,0],
            duration: 600,
            easing: "easeOutExpo",
            marginBottom: '0rem',
            complete: function(anim) {
                for(j =0; j<targetobjectgroup.length;j++)
                RemoveClass(targetobjectgroup[j], "contents_show");
               
                }
            });
        }
      if (x[i].className.indexOf(c) > -1 && x[i].className.indexOf("contents_show") <= -1) {
            AddClass(x[i], "contents_show");
            anime({
                targets: targetobj,
                height: ['0px','100%'],
                opacity: [0,1],
                duration: 600,
                marginBottom: '8rem',
                easing: "easeOutExpo"
            });
  
          
        }
    }
}




//modal popup



function modalpopup(c) {
  let targetobj = document.getElementById(c);
  document.getElementById("modal_back").style.display = 'block';
  targetobj.style.display ='block';
  document.body.style.overflow = 'hidden';
  showSlides(c,1);

  anime({
    targets: '.modalback',
    opacity: [0,1],
    duration: 1000,
    easing: "easeOutExpo",
  });
  anime({
    targets: targetobj,
    translateX: ['100%',0],
    opacity:1,
    duration: 1000,
    easing: "easeOutExpo",
  });


}

function modalremove(c){
  let targetobj = document.getElementById(c);
  document.body.style.overflow = 'auto';
  anime({
    targets: '.modalback',
    opacity: [1,0],
    duration: 700,
    easing: "easeOutExpo",
  });
  anime({
    targets: targetobj,
    translateX: [0,'130%'],
    opacity:0,
    duration: 700,
    easing: "easeOutExpo",
    complete: function(anim) {
      document.getElementById("modal_back").style.display = 'none';
      targetobj.style.display ='none';
    }

  });

  slideIndex=1;

   var iframe = document.getElementsByTagName( 'iframe');
  // var video = document.querySelector( 'video' );
    for(let i =0 ; i<iframe.length;i++){  
      var iframeSrc = iframe[i].src;
      iframe[i].src = iframeSrc;}
    /*if ( video ) {
      video.pause();
    }*/
  

}


//slide code
var slideIndex = 1;

function plusSlides(k,n) {
  showSlides(k,slideIndex += n);
}

function currentSlide(k,n) {
  showSlides(k,slideIndex = n);
}

function showSlides(k,n) {
  var i;

  var slides = document.getElementsByClassName(`${k}Slide mySlides`);
  var dots = document.getElementsByClassName(`${k}Slide dot`);

  if(slides.length!=0){
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

  }
}






function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}



