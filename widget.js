class Widget {
	constructor(x, y, dx, dy, r, img, color, actionIndex) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.r = r;
		this.img = img;
		this.img2 = null;
		this.currentImg = img;
		this.color = color;
		this.vx=0;
		this.vy=0;
		this.fx=0;
		this.fy=0;
		this.actionIndex=actionIndex;
	}
	display() {
		if(this.color != null) {
			fill(this.color);
			noStroke();
			rect(this.x,this.y,this.dx,this.dy,this.r);
		}
		if (this.currentImg!=null) {
			image(this.currentImg,this.x,this.y,this.dx,this.dy);
		}
	}
	update() {
		this.physics();
		this.updateImg();
	}
	updateImg() {
		if (this.img2 != null) {
			if (this.mouseOnIt() && this.currentImg==this.img) { 
				this.currentImg=this.img2;
			}
			else if (!this.mouseOnIt() && this.currentImg==this.img2) {
				this.currentImg=this.img;	
			}
		}
	}
	mouseOnIt() {
		if (mouseX>=this.x && mouseX<=this.x+this.dx) {
			if (mouseY>=this.y && mouseY<=this.y+this.dy) {
				return true;
			}
		}
		return false;
	}
	physics() {
		this.vx+=this.fx;
		this.vy+=this.fy;
		this.x+=this.vx;
		this.y+=this.vy;
	}
}