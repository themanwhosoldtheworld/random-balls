var delta = 1;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var width = 500;
var height = 500;
var gap = .5;
var circles = [];
for(var i=0;i<10;i++){
	var cx = Math.floor((Math.random() * 90) + 10);
	var cy = Math.floor((Math.random() * 90) + 10);
	var dx = Math.floor((Math.random() * 5));
	var dy = Math.floor((Math.random() * 5));
	circles.push(new Circle(i,cx,cy,10,dx,dy));
}
//var c1 = new Circle(20,20,10,delta,delta);
//var c2 = new Circle(100,100,10,-delta,-delta);
function draw(){
ctx.fillRect(0,0,width,height);
for(var i in circles){
	BadStrategy(circles);
	circles[i].draw(ctx);
}
}
animate();
function animate(){
draw();
window.requestAnimationFrame(animate);
}