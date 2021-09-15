let sizeofarray = 20;
let widthOfBar = 10;
let makearrayOn = false;
var heightOfArray = [];

const makearray =  document.querySelector("#makearry");
const bubble = document.querySelector("#bubble");
const insertion = document.querySelector("#insertion");
const merge = document.querySelector("#merge");
const quick = document.querySelector("#quick");
const selection = document.querySelector("#selection");

makearray.addEventListener('click', (event)=>{
  document.querySelector("#barlist").innerHTML = '';
  heightOfArray = [];
  if(makearrayOn==false){
    for(var i=0; i<10; i++){
       heightOfArray.push(Math.floor(400*Math.random())+20);
       var bar = document.createElement("DIV");
       bar.classList.add("bars");
       document.querySelector("#barlist").appendChild(bar);
       document.querySelector("#barlist").lastChild.style.height = heightOfArray[i]+"px";
    }
  }
});
