
function focusTextField() {
	$.textDesc.focus();
}
focusTextField();


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
