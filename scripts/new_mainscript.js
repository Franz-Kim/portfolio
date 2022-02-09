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


