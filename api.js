function computeSizeVariables() {
	var r_img = img_width/img_height;
	var r_screen = screen.width/screen.height;

	if (r_img>r_screen) {
		disp_width = screen.width;
		disp_height = screen.width/r_img;
		disp_x = 0;
		disp_y = (screen.height-disp_height)/2;
		r = img_width/screen.width;
	}
	else {
		disp_width = screen.height*r_img;
		disp_height = screen.height;
		disp_x = (screen.width-disp_width)/2;
		disp_y = 0;
		r = img_height/screen.height;
	}
}