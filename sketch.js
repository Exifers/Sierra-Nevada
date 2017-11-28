var img_width = 1937;
var img_height = 1417;
var disp_width;
var disp_height;
var disp_x;
var disp_y;

var screens = [];
var currentScreenIndex;
var currentScreen;

var t;

var keysPressed = [];
var hero;
var inventory;


function setup() {
	createCanvas(screen.width,screen.height);
	computeSizeVariables();

	loadScreens();
	currentScreenIndex = 0;

	t=0;
	hero = new Hero(0,0,0);
	inventory = new Inventory([new Tool(loadImage("data/bow.png")), new Tool(loadImage("data/lantern.png"))]);
}

function draw() {
	background(0);

	currentScreen = screens[currentScreenIndex];
	currentScreen.display();
	if (!(currentScreenIndex!=0 && inventory.open)) {
		currentScreen.update();
	}

	if (currentScreenIndex!=0) {
		hero.display();
		if (!inventory.open) {
			hero.update(t);
		}
		else {
			inventory.display();
			inventory.update();
		}
	}

	displayMask();

	if (t%100 == 0) {
		print(keysPressed);
	}
	t++;
}

function loadScreens() {
	screens.push(getHomePage());
	screens.push(getForest());
}

function getHomePage() {
	var widget = new Widget(disp_x+disp_width*0.5-disp_width*0.1,disp_y+disp_height*0.35,disp_width*0.2,disp_height*0.1,5,loadImage("data/playButton.png"),color(80,150,170),0);
	widget.img2=loadImage("data/playButtonMouseOnIt.png");
	var optionswid = new Widget(disp_x+disp_width-70,0,70,70,0,loadImage("data/optionsButton.png"),null,1);
	optionswid.img2=loadImage("data/optionsButtonMouseOnIt.png");
	var snow = new Rain(loadImage("data/drop.png"),30,2);
	return new Screen(loadImage("data/screen.png"), [snow,widget,optionswid], null);
}

function getForest() {
	var bckgrd = loadImage("data/leaves.png");
	return new Screen(bckgrd, [], song_sound);
}

function executeAction(i) {
	if (i==0) {
		currentScreenIndex = 1;
		hero.x = 660;
		hero.y = 210;
	}
}