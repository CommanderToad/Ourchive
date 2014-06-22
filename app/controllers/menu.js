
Alloy.Globals.menuWin = $.menuWin;

function closeWindow() {
	if(Alloy.Globals.previous != $.addPhotoWin) {
		Alloy.Globals.previous.open();
		$.menuWin.close();
	}
	else {
		$.menuWin.close();
	}
}
function homeWindow() {
	if(Alloy.Globals.previous == Alloy.Globals.homeWin){
		$.menuWin.close();
	}
	else {
		Alloy.Globals.homeWin.open();
		$.menuWin.close();
	}
}
function addText() {
	Alloy.createController("addText").getView().open();
	$.menuWin.close();
}
function addPhoto() {
	Alloy.createController("addPhoto").getView().open();
	$.menuWin.close();
}
function addEvent() {
	Alloy.createController("addEvent").getView().open();
	$.menuWin.close();
}
function addVideo() {
	Alloy.createController("addVideo").getView().open();
	$.menuWin.close();
}
function myOurchive() {
	Alloy.createController("myOurchive").getView().open();
	$.menuWin.close();
}
function settings() {
	Alloy.createController("settings").getView().open();
	$.menuWin.close();
}