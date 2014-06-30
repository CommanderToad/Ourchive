for (var i=0; i<Alloy.Globals.selectedPics.length;i++){
	var view = Titanium.UI.createImageView({
		width:"73px",
		height:"73px",
		left:"10px",
		top:"10px",
		image: Alloy.Globals.selectedPics[i]
	    });
	 $.photo.add(view);
}

$.cancelBtn.addEventListener('click', function() {
	Alloy.Globals.contentview.remove(Alloy.Globals.currentView);
	var currentView = Alloy.createController("homeView").getView();
	Alloy.Globals.currentView = currentView;
	Alloy.Globals.contentview.add(currentView);
	Alloy.Globals.title.setText("Add a Moment");
});

//HintText for the TextArea field.
if ($.photoDesc.value.length > 0) {
	$.textAreaHint.hide();
}

$.photoDesc.addEventListener('change', function(e){
	if (e.source.value.length > 0) {
		$.textAreaHint.hide();
	}
	else {
		$.textAreaHint.show();
	}
});

$.textAreaHint.addEventListener('click', function(e){
	$.photoDesc.focus();
});
