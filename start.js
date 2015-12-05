var delta = 1;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var width = 500;
var height = 500;
var gap = .5;
function Circle(x,y,rad,deltaX,deltaY){
this.x = x;
this.y = y;
this.origX = x;
this.origY = y;
this.rad = rad;
this.deltaX = deltaX;
this.deltaY = deltaY;

this.draw = function(){
ctx.save();
ctx.translate(this.x,this.y);
ctx.beginPath();
ctx.arc(0 , 0 ,this.rad,0,2*Math.PI);
ctx.stroke();
var xBorder = ((this.x+this.rad) >= (width + gap)) || ((this.x-this.rad) <= gap);
var yBorder = ((this.y+this.rad) >= (height + gap)) || ((this.y-this.rad) <= gap);
if(xBorder && yBorder){
	this.deltaX = (-1)*this.deltaX;
	this.deltaY = (-1)*this.deltaY;
}else if( xBorder){
	this.deltaX = (-1)*this.deltaX;
}else if( yBorder){
	this.deltaY = (-1)*this.deltaY;
}
this.x= this.x + this.deltaX;
this.y= this.y + this.deltaY;
ctx.restore();
}
}
var circles = [];
for(var i=0;i<100;i++){
	var cx = Math.floor((Math.random() * 90) + 10);
	var cy = Math.floor((Math.random() * 90) + 10);
	var dx = Math.floor((Math.random() * 5));
	var dy = Math.floor((Math.random() * 5));
	circles.push(new Circle(cx,cy,10,dx,dy));
}
//var c1 = new Circle(20,20,10,delta,delta);
//var c2 = new Circle(100,100,10,-delta,-delta);
function draw(){
ctx.clearRect(0,0,500,500);
//c1.draw();
//c2.draw();
for(var i in circles){
	circles[i].draw();
}
}
animate();
function animate(){
draw();
window.requestAnimationFrame(animate);
}