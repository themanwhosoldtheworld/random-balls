function Circle(id,x,y,rad,deltaX,deltaY){
this.id = id;
this.x = x;
this.y = y;
this.origX = x;
this.origY = y;
this.rad = rad;
this.deltaX = deltaX;
this.deltaY = deltaY;

this.draw = function(ctx){
ctx.save();
ctx.translate(this.x,this.y);
ctx.beginPath();
ctx.arc(0 , 0 ,this.rad,0,2*Math.PI);
ctx.fillStyle = 'white';
ctx.fill();
ctx.stroke();
var xBorder = ((this.x+this.rad) >= (width + gap)) || ((this.x-this.rad) <= gap);
var yBorder = ((this.y+this.rad) >= (height + gap)) || ((this.y-this.rad) <= gap);
if(xBorder && yBorder){
	this.deltaX = (-1)*this.deltaX;
	this.deltaY = (-1)*this.deltaY;
}else if(xBorder){
	this.deltaX = (-1)*this.deltaX;
}else if( yBorder){
	this.deltaY = (-1)*this.deltaY;
}
var newX = (this.x + this.deltaX);
if((this.x + this.deltaX) <=0){
	newX = this.rad + gap;
}else if((this.x + this.deltaX)>=width){
	newX = width - this.rad - gap;
}
//var newX= (this.x + this.deltaX)>0?(this.x + this.deltaX):(this.rad + gap);
//newX= (this.x + this.deltaX)<width?(this.x + this.deltaX):(width - this.rad - gap);
this.x = newX;

var newY = (this.y + this.deltaY);
if((this.y + this.deltaY) <=0){
	newY = this.rad + gap;
}else if((this.y + this.deltaY)>=height){
	newY = height - this.rad - gap;
}
//var newY= (this.y + this.deltaY)>0?(this.y + this.deltaY):(this.rad + gap);
//newY= (this.y + this.deltaY)<height?(this.y + this.deltaY):(height - this.rad - gap);
this.y = newY;
ctx.restore();
}
}