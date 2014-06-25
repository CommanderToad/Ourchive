Alloy.Globals.previous = $.addEventWin;
function openMenu() {
	Alloy.createController("menu").getView().open();
	$.addEventWin.close();
}
function focusTextField() {
	$.eventTitle.focus();
}
function closeWindow() {
	Alloy.Globals.homeWin.open();
	$.addEventWin.close();
}

var hintText = "TEST THIS";

















/*
$.eventDescription.addEventListener('focus', function(_e) {
	if ($.eventDescription.focus()) {
		$.textAreaHint.visible = false;
	}
});

$.eventDescription.addEventListener('blur', function(_e) {
	if ($.eventDescription.blur() && $.eventDescription.value() === '') {
		$.textAreaHint.visible = false;
	}
});





/*
function textAreaHint() {	
	if ($.eventDescription.focus()) {
		$.textAreaHint.visible = false;
	}
	if ($.eventDescription.blur() && $.eventDescription.value() === '') {
		$.textAreaHint.visible = false;
	}
}


$.submitBtn.addEventListener('click', function(_e) {

    var eventModel = Alloy.createModel("event", {
        title : $.eventTitle.value,
        location: $.eventLocation.value,
        description: $.eventDescription.value,
        tags: $.eventTags.value
    });

    // save model
    eventModel.save();

    // force tables to update
    Alloy.Collections.Moments.fetch();

    // close window
    $.addEventWin.close();
});*/