
function focusTextField() {
	$.textDesc.focus();
}
focusTextField();

$.cancelBtn.addEventListener('click', function(e){
	Alloy.Globals.title.setText("Add a Moment");
	Alloy.Globals.transition("homeView");
});
//HintText for the TextArea field.
if ($.textDesc.value.length > 0) {
	$.textAreaHint.hide();
}

$.textDesc.addEventListener('change', function(e){
	if (e.source.value.length > 0) {
		$.textAreaHint.hide();
	}
	else {
		$.textAreaHint.show();
	}
});

$.textAreaHint.addEventListener('click', function(e){
	$.textDesc.focus();
});
