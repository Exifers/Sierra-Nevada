function mouseClicked() {
	triggerWidget();
}

function mousePressed() {

}

function triggerWidget () {
	var widgets = currentScreen.objects;
	for (var i=0 ; i<widgets.length ; i++) {
		var widget = widgets[i];
		if(widget instanceof Widget) {
			if (widget.mouseOnIt()) {
				executeAction(widget.actionIndex);
			}	
		}
	}
}