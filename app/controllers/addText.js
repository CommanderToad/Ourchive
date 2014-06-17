Alloy.Globals.previous = $.addTextWin;
function openMenu() {
	Alloy.createController("menu").getView().open();
	$.addTextWin.close();
}
function focusTextField() {
	$.itemField.focus();
}
function closeWindow() {
	Alloy.Globals.previous.open();
	$.addTextWin.close();
}