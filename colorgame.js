var square=document.getElementsByClassName("square");
var colorvalue=document.querySelector("#colorvalue");
var result=document.querySelector("#result");
var newgame=document.querySelector("#reset");
var mode=document.querySelectorAll(".mode");
var head=document.querySelector("h1")

var numcolors=9;

reset();
for(var i=0; i<square.length; i++){
	square[i].addEventListener("click",function(){
		var clickedcolor=this.style.background;
		if(clickedcolor===truecolor){
			result.textContent="correct!";
			colorchange(clickedcolor);
			newgame.textContent="play again?"
		}
		else{
			this.style.background="#232323";
			result.textContent="Try Again";
		}
	});
}
for(var i=0; i<mode.length; i++){
	mode[i].addEventListener("click",function(){
		if(this==mode[0]){
			hard();
		}
		else if(this==mode[1]){
			medium();
		}
		else{
			easy();

		}
	});
}
newgame.addEventListener("click",reset);
function reset(){
	color=[]
	assignrandomcolor(color);
	for(var i=0; i<square.length; i++){
		square[i].style.background=color[i];
	}
	truecolor=color[Math.floor(Math.random()*numcolors)];
	colorvalue.textContent=truecolor;
	head.style.background="steelblue";
	newgame.textContent="new colors"
	result.textContent="";
}

function generaterandomcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+ ")"
}
function assignrandomcolor(array){
	for(var i=0;i<numcolors;i++){
		square[i].style.background=generaterandomcolor();
		array.push(square[i].style.background);
	}
}
function colorchange(color){
	for(var i=0; i<square.length; i++){
		square[i].style.background=color;
		head.style.background=color;
	}
}
function easy(){
	numcolors=3;
	mode[2].classList.add("selected");
	mode[0].classList.remove("selected");
	mode[1].classList.remove("selected");
	for(var i=0; i<square.length; i++){
		if(color[i]){
			reset();
		}
		else{
			square[i].style.display="none";
		}
	}
}
function medium(){
	numcolors=6;
	mode[1].classList.add("selected");
	mode[0].classList.remove("selected");
	mode[2].classList.remove("selected");
	for(var i=0; i<square.length; i++){
		if(color[i]){
			square[i].style.display="block";
			reset();
		}
		else{
			square[i].style.display="none";
		}
	}
}
function hard(){
	numcolors=9;
	mode[0].classList.add("selected");
	mode[1].classList.remove("selected");
	mode[2].classList.remove("selected");
	reset();
	for(var i=0; i<square.length; i++){
		square[i].style.display="block";
	}
}
