class Foot {
	constructor(side, hero) {
		this.x = 0;
		this.dx_mov=0;
		this.hero = hero;
		this.side = side;
		this.img = loadImage("data/foot.png");
	}
	display() {
		var hw = this.hero.img.width;
		var hh = this.hero.img.height;
		var w = this.img.width;
		var h = this.img.height;
		var dx_img = -0.5*w*0.7;
		var dy_img = -0.5*h*0.7;
		push();
		translate(dx_img,dy_img);
		var d_x = hw*0.2+this.x*this.side+this.dx_mov;
		var d_y = this.side*hh*0.12;
		image(this.img, d_x, d_y, w*0.7, h*0.7);
		pop();
	}
	update(t) {
		if (this.hero.moving) {
			this.x=18*Math.cos(0.3*t);
			this.dx_mov=-14;
		}
		else {
			this.x = 0;
			this.dx_mov=0;
		}
	}
}