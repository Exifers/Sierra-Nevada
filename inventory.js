class Inventory {
	constructor(tools) {
		this.tools = tools;
		this.open = false;
		this.currentToolIndex  = 0;
		this.vel = 0;
		this.pos = 0;
		this.sliding = false;
		this.slideStage = 0;
		this.dir = 1;
		this.toolWidth = 12*disp_height/25;
	}
	display() {
		push();
		fill(10, 10, 10, 110);
		rect(disp_x, disp_y + disp_height/5, disp_width, 3*disp_height/5);
		for (var i=0 ; i<this.tools.length ; i++) {
			var x = disp_x + disp_width/2 - 9*disp_height/50 + i*12*disp_height/25 - this.pos;
			var y = disp_y + disp_height/5 + 3*disp_height/25;
			var dx = 9*disp_height/25;
			var dy = dx;
			image(this.tools[i].img, x, y, dx, dy);
		}
		pop();
	}
	update() {
		if (this.sliding) {
			this.pos += this.vel;
			var deltaPos = abs(this.pos - this.currentToolIndex*this.toolWidth);
			if (this.slideStage == 0) {
				this.vel += 5*this.dir;
				if (deltaPos >= 0.2*this.toolWidth) {
					this.slideStage = 1;
				}
			}
			else if (this.slideStage == 1) {	
				if (deltaPos >=0.8*this.toolWidth) {
					this.slideStage = 2;
				}
			}
			else if (this.slideStage == 2) {
				this.vel -= 5*this.dir;
				if (deltaPos >= this.toolWidth) {
					this.endSliding();
				}
			}
		}
	}
	endSliding() {
		this.sliding = false;
		this.vel = 0;
		this.slideStage = 0;
		this.currentToolIndex += this.dir;
		this.pos = this.currentToolIndex*this.toolWidth;
	}
	close() {
		this.open = false;
		if (this.sliding) {
			this.endSliding();
		}
	}
}

class Tool {
	constructor(img) {
		this.img = img;
	}
}