class Hero {
	constructor(x,y,r) {
		this.x=x;
		this.y=y;
		this.vx=0;
		this.vy=0;
		this.r=r; // rotation (rad)
		this.rv=0; // rotation velocity
		this.rd=0; // desired rotation
		this.hr=0 // head rotation
		this.run=false;
		this.lr=false; // lock rotation
		this.moving = false;
		this.lf = new Foot(-1, this);
		this.rf = new Foot(+1, this);
		this.img = loadImage("data/hero.png");
		this.light = loadImage("data/light.png");
	}
	display() {
		var w = this.img.width;
		var h = this.img.height;
		var dx_img = -0.5*w*0.7;
		var dy_img = -0.5*h*0.7;
		push();
		translate(this.x, this.y);
		rotate(this.r);
		if (inventory.currentToolIndex == 1) {
			image(this.light,-3*w,-3*w,6*w,6*w);
			//fill(0);
			//ellipse(0,0,6*w,6*w);
		}
		this.lf.display();
		this.rf.display();
		image(this.img, dx_img, dy_img, w*0.7, h*0.7);
		pop();
	}
	update(t) {
		var force = 1.3;
		if (this.run) {
			force = 2.7;
		}
		var friction = 0.7;
		var r_friction = 0.4;
		for (var i=keysPressed.length-1 ; i>=0 ; i--) {
			if (keysPressed[i] == LEFT_ARROW) {
				this.vx-=force;
				this.vy=0;
				this.rd = Math.PI;
				break;
			}
			else if (keysPressed[i] == UP_ARROW) {
				this.vy-=force;
				this.vx=0;
				this.rd = -Math.PI/2;
				break;
			}
			else if (keysPressed[i] == RIGHT_ARROW) {
				this.vx+=force;
				this.vy=0;
				this.rd = 0;
				break;
			}
			else if (keysPressed[i] == DOWN_ARROW) {
				this.vy+=force;
				this.vx=0;
				this.rd = Math.PI/2;
				break;
			}
		}
		this.x+=this.vx;
		this.y+=this.vy;
		this.x = constrain(this.x,disp_x,disp_x+disp_width);
		this.y = constrain(this.y,disp_y,disp_y+disp_height);
		this.vx*=friction;
		this.vy*=friction;

		if (abs(dist(0,0,this.vx,this.vy))<0.2) {
			this.moving = false;
		}
		else {
			this.moving = true;
		}
		if(this.moving && !this.lr) {
			this.r+=0.05*Math.cos(0.3*t);
		}

		if (!this.lr) {
			var torque = 0.3*Math.sin(this.rd-this.r);
			if (torque<0.05 && Math.cos(this.rd-this.r)>-1.1 && Math.cos(this.rd-this.r)<-0.9 ) {
				torque=1;
			}
			this.rv+=torque;
			this.r+=this.rv;
			this.rv*=r_friction;
		}

		this.lf.update(t);
		this.rf.update(t);
	}
/*	events(t){
		if(this.moving && !this.run) {
			if (t%100==0) {
				print("no run");
			}
		}
		if(this.moving && this.run) {
			if (t%5==0) {		
				print("run");
			}
		}
	}*/
}