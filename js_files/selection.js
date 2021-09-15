var arraylist;

function swap(el1, el2) {
	return new Promise((resolve) => {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
    var a = parseInt(transform1);
    var b = parseInt(transform2);
    if(a>=b){
      el1.style.height = transform2;
      el2.style.height = transform1;
			window.requestAnimationFrame(function() {
				setTimeout(() => {
					resolve();
				}, 1000);
			});
    }else{
			window.requestAnimationFrame(function() {
				setTimeout(() => {
					resolve();
				}, 10);
			});
		}
	});
}

async function selectionsort(delay = 1000) {

	for (var i = 0; i < arraylist.length; i += 1){
          var hi = window.getComputedStyle(arraylist[i]).getPropertyValue("height");
					hi = parseInt(hi);
          var mn = hi;
          var mn_index = i;
          arraylist[mn_index].classList.add("orange");
          for (var j = i+1; j < arraylist.length; j += 1){
            var hj = window.getComputedStyle(arraylist[j]).getPropertyValue("height");
						hj = parseInt(hj);
            arraylist[j].classList.add("blue");
            if(hj<mn){
              arraylist[mn_index].classList.remove("red");
              mn_index = j;
              mn = hj;
              arraylist[mn_index].classList.add("red");
              await new Promise((resolve) =>
                setTimeout(() => {
                  resolve();
                }, delay)
              );
            }else{
              await new Promise((resolve) =>
                setTimeout(() => {
                  resolve();
                }, delay)
              );
              arraylist[j].classList.remove("blue");
            }
            arraylist[j].classList.remove("blue");
          }
      await swap(arraylist[i],arraylist[mn_index]);
      arraylist[mn_index].classList.remove("red");
      arraylist[i].style.backgroundColor = "#13CE66";
  }

}

selection.addEventListener('click', (event) => {
  arraylist = document.querySelectorAll(".bars");
  var n = arraylist.length;
  selectionsort();
});
