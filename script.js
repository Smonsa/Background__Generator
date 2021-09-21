var css = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.getElementById("BD");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");

css.textContent=window.getComputedStyle( document.body ,null).getPropertyValue('background'); 

function Change(){
	body.style.background= "Linear-gradient(to right, " + color1.value + ", " + color2.value +")";
	css.textContent= body.style.background;
}
function random(){
	color1.value = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
	Change();
}
function random2(){
	color2.value = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
	Change();
}

color1.addEventListener("input",Change);
color2.addEventListener("input",Change);
btn1.onclick=random;
btn2.onclick=random2;