Alloy.Globals.previous = $.addEventWin;
function openMenu() {
	Alloy.createController("menu").getView().open();
	$.addEventWin.close();
}
function focusTextField() {
	$.eventTitle.focus();
}
function closeWindow() {
	Alloy.Globals.previous.open();
	$.addEventWin.close();
}