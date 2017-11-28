class Screen {
	constructor(img, objects, music) {
		this.img = img;
		this.objects = objects;
		this.music = music;
		this.musicPlaying = false;
	}
	display() {
		this.displayBackground();
		this.displayObjects();
	}
	displayObjects() {
		for (var i=0 ; i<this.objects.length ; i++) {
			this.objects[i].display();
		}
	}
	displayBackground() {
		image(this.img,disp_x,disp_y, disp_width, disp_height);
	}
	update() {
		for (var i=0 ; i<this.objects.length ; i++) {
			this.objects[i].update();
		}
		if (this.music != null) {
			if (!this.musicPlaying) {
				//this.music.play();
				this.musicPlaying = true;
			}
		}
	}
	playMusic() {
		this.music.play();
	} 
}

function displayMask() {
	push();
	noStroke();
	fill(0);
	rect(0,0,disp_x,height);
	//rect(disp_x,0,disp_width,disp_y);
	//rect(disp_x,disp_y+disp_height,disp_width,disp_y);
	rect(disp_x+disp_width,0,disp_x,height);
	pop();
}