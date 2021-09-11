bubble.addEventListener('click', (event) => {
  const arraylist = document.querySelectorAll(".bars");
  const n = arraylist.length;
 var x = n;
  for (var i = 0; i < n; i++) {
    for (var j = 1; j < n; j++) {
        arraylist[j].classList.add("red");
        arraylist[j-1].classList.add("red");
         setTimeout(function(){swap(arraylist[j-1],arraylist[j]);},1000);
        arraylist[j].classList.remove("red");
        arraylist[j-1].classList.remove("red");
    }
    x--;
    arraylist[x].classList.add("green");
    console.log(arraylist[x]);
  }
});

function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);
  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");
  var a = parseInt(transform1);
  var b = parseInt(transform2);
  if(a>=b){
    el1.style.height = transform2;
    el2.style.height = transform1;
  }
}
