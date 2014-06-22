Alloy.Globals.previous = $.addTextWin;
function openMenu() {
	Alloy.createController("menu").getView().open();
	$.addTextWin.close();
}
function focusTextField() {
	$.itemField.focus();
}
function closeWindow() {
	Alloy.Globals.homeWin.open();
	$.addTextWin.close();
}
$.submitBtn.addEventListener('click', function(_e) {

    var textModel = Alloy.createModel("text", {
        text : $.textMoment.value,
    });

    // save model
    textModel.save();

    // force tables to update
    Alloy.Collections.Moments.fetch();

    // close window
    $.addTextWin.close();
});