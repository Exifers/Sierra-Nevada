class Rain {
	constructor(img, number, vel) {
		this.img = img;
		this.number = number;
		this.vel = vel;
		this.drops = [];
		this.dx=15;
		this.dy=15;

		for(var i=0 ; i<this.number ; i++) {
			this.drops.push(new Drop(random(disp_x,disp_x+disp_width-this.dx),random(disp_y,disp_y+disp_height),this.vel,this.dx,this.dy,this.img));
		}

	}
	update() {
		for (var i=this.drops.length-1 ; i>=0 ; i--) {	
			var drop = this.drops[i];
			drop.y += drop.vy;
			if (drop.y>disp_y+disp_height) {
				this.drops.splice(i,1);
				this.drops.push(new Drop(random(disp_x,disp_x+disp_width-this.dx),0,this.vel,this.dx,this.dy,this.img));
			}
		}
	}
	display() {
		for(var i=0; i<this.drops.length ; i++) {
			this.drops[i].display();
		}
	}
}

class Drop {
	constructor(x,y,vy,dx,dy,img) {
		this.x = x;
		this.y = y;
		this.vy=vy;
		this.dx=dx;
		this.dy=dy;
		this.img=img;
	}
	display() {
		image(this.img,this.x,this.y,this.dx,this.dy);
	}
}