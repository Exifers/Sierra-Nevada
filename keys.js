function keyPressed() {
	addKey();
	doKeyPressedEvents();
}

function addKey() {
	var index = keysPressed.indexOf(keyCode);
	if (index==-1) {
		keysPressed.push(keyCode);
	}
}

function doKeyPressedEvents() {
	if (keyCode == SHIFT) {
		hero.run=true;
	}
	if (keyCode == CONTROL) {
		hero.lr=true;
	}
	if (keyCode == 69) {
		if (inventory.open) {
			inventory.close();
		}
		else {
			inventory.open = true;
		}
	}
	if (keyCode == 27 || keyCode == 13) {
		if (inventory.open) {
			inventory.close();
		}
	}
	if (keyCode == RIGHT_ARROW) {
		if (inventory.open && !inventory.sliding) {
			inventory.sliding = true;
			inventory.dir = 1;
		}
	}
	if (keyCode == LEFT_ARROW) {
		if (inventory.open && !inventory.sliding) {
			inventory.sliding = true;
			inventory.dir = -1;
		}
	}
}

function keyReleased() {
	removeKey();
	doKeyReleasedEvents();
}

function removeKey() {
	var index = keysPressed.indexOf(keyCode);
	if (index!=-1) {
		keysPressed.splice(index,1);
	}
}

function doKeyReleasedEvents() {
	if (keyCode == SHIFT) {
		hero.run=false;
	}
	if (keyCode == CONTROL) {
		hero.lr=false;
	}
}

function isInKeysPressed(key) {
	for (var i=0 ; i<keysPressed.length ; i++) {
		if (keysPressed[i] == key) {
			return true;
		}
	}
	return false;
}