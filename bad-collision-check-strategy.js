function BadStrategy(c, circles){
for(var i in circles){
	var cx = circles[i].x;
	var cy = circles[i].y;
	var xDiff = Math.abs(cx - c.x);
	var yDiff = Math.abs(cy - c.y);
	var c2cDist = Math.sqrt(Math.pow(xDiff,2) + Math.pow(yDiff,2))
	if((c2cDist + gap) > (circles[i].rad + c.rad)){
	}else{
		circles[i].deltaX = (-1)*circles[i].deltaX;
		circles[i].deltaY = (-1)*circles[i].deltaY;
		c.deltaX = (-1)*c.deltaX;
		c.deltaY = (-1)*c.deltaY;
	}
}
}