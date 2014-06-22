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

/*
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