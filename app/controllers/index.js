
$.homeWin.open();
Alloy.Globals.homeWin = $.homeWin;
Alloy.Globals.previous = $.homeWin;
function openMenu() {
	Alloy.createController("menu").getView().open();
	$.homeWin.close();
	
}
function addText() {
	Alloy.createController("addText").getView().open();
}
function addPhoto() {
	Alloy.createController("addPhoto").getView().open();
}
function addEvent() {
	Alloy.createController("addEvent").getView().open();
}