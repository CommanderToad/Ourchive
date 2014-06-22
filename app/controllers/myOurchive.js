Alloy.Globals.previous = $.myOurchiveWin;
function openMenu() {
	Alloy.createController("menu").getView().open();
	$.myOurchiveWin.close();
}
function focusTextField() {
	$.eventTitle.focus();
}
function closeWindow() {
	Alloy.Globals.homeWin.open();
	$.myOurchiveWin.close();
}