
var menuWin = Alloy.Globals.menuWin = $.menuWin;

function closeWindow() {
	Alloy.Globals.previous.open();
	$.menuWin.close();
}
function homeWindow() {
	Alloy.Globals.homeWin.open();
	$.menuWin.close();
}
function addText() {
	Alloy.createController("addText").getView().open();
	menuWin.close();
}
function addPhoto() {
	Alloy.createController("addPhoto").getView().open();
	menuWin.close();
}
function addEvent() {
	Alloy.createController("addEvent").getView().open();
	menuWin.close();
}