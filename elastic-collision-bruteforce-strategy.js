function CollisionStrategy(circles){
for(var j=0;j<circles.length;j++){
	var c = circles[j];
for(var i=j+1;i<circles.length;i++){
	if(c.id == circles[i].id){
	continue;
	}
	var cx = circles[i].x;
	var cy = circles[i].y;
	var xDiff = Math.abs(cx - c.x);
	var yDiff = Math.abs(cy - c.y);
	var c2cDist = Math.sqrt(Math.pow(xDiff,2) + Math.pow(yDiff,2))
	if((c2cDist + gap) > (circles[i].rad + c.rad)){
	}else{
		var cDeltaX = circles[i].deltaX;
		var cDeltaY = circles[i].deltaY;
		//headon collision
		//if((cDeltaX/cDeltaY) == (c.deltaX/c.deltaY)){
		//circles[i].deltaX = (-1)*circles[i].deltaX;
		//circles[i].deltaY = (-1)*circles[i].deltaY;
		//c.deltaX = (-1)*c.deltaX;
		//c.deltaY = (-1)*c.deltaY;
		//}
		var tx = c.deltaX;
		c.deltaX = circles[i].deltaX;
		circles[i].deltaX = tx;
		
		var ty = c.deltaY;
		c.deltaY = circles[i].deltaY;
		circles[i].deltaY = ty;
	}
}
}
}