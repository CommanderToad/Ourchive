Alloy.Globals.previous = $.settingsWin;
function openMenu() {
	Alloy.createController("menu").getView().open();
	$.settingsWin.close();
}
function focusTextField() {
	$.itemField.focus();
}
function closeWindow() {
	Alloy.Globals.homeWin.open();
	$.settingsWin.close();
}