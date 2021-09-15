var arraylist;
// function swap(el1, el2){
//     const style1 = window.getComputedStyle(el1);
//     const style2 = window.getComputedStyle(el2);
//     const transform1 = style1.getPropertyValue("height");
//     const transform2 = style2.getPropertyValue("height");
//     var a = parseInt(transform1);
//     var b = parseInt(transform2);
//     if(a>=b){
//       el1.style.height = transform2;
//       el2.style.height = transform1;
//     }
// }

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
      window.requestAnimationFrame(function() {setTimeout(() => {
	      resolve();}, 1000);});
    }else{
       window.requestAnimationFrame(function() {
	 setTimeout(() => {
	  resolve();
	}, 10);
	});
	}
	});
}


async function BubbleSort(delay = 1000) {
	for (var i = 0; i < arraylist.length; i += 1) {
		for (var j = 0; j < arraylist.length - i - 1; j += 1) {

			arraylist[j].classList.add("red");
      arraylist[j+1].classList.add("red");

			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
				await swap(arraylist[j], arraylist[j + 1]);
        arraylist[j].classList.remove("red");
        arraylist[j+1].classList.remove("red");
		}
    arraylist[arraylist.length - i - 1].style.backgroundColor = "#13CE66";
	}
}

bubble.addEventListener('click', (event) => {
  arraylist = document.querySelectorAll(".bars");
  var n = arraylist.length;
  BubbleSort();
});
