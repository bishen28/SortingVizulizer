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

async function insertionsort(delay = 1000) {

	for (var i = 0; i < arraylist.length; i += 1){
          var hi = window.getComputedStyle(arraylist[i]).getPropertyValue("height");
					hi = parseInt(hi);
          var j = i-1;
          arraylist[i].classList.add("red");
          while(j>=0){
            arraylist[j+1].classList.add("red");
            var hj = window.getComputedStyle(arraylist[j]).getPropertyValue("height");
						hj = parseInt(hj);
            if(hj>hi){
              await new Promise((resolve) =>
                setTimeout(() => {
                  resolve();
                }, delay)
              );
                await swap(arraylist[j],arraylist[j+1]);
            }
						j--;
          }
      arraylist[j+1].classList.remove("red");
      arraylist[i].style.backgroundColor = "#13CE66";
  }

}

insertion.addEventListener('click', (event) => {
  arraylist = document.querySelectorAll(".bars");
  var n = arraylist.length;
  insertionsort();
});
