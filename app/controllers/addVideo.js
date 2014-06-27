function openVideoCamera(e) {
	Titanium.Media.showCamera({
		success: function(e) {
			//it's a video & set on window
			var takenVideo = e.media;
            movieFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'mymovie.mov');
            movieFile.write(takenVideo);
		},
		error: function() {
			alert("There was an error");
			Alloy.Globals.contentview.remove(Alloy.Globals.currentView);
			var	currentView = Alloy.createController("homeView").getView();
			Alloy.Globals.contentview.add(currentView);
        	Alloy.Globals.title.setText("Add a Moment");
        	Alloy.Globals.currentView = currentView;
		},
		cancel: function() {
			Alloy.Globals.contentview.remove(Alloy.Globals.currentView);
			var	currentView = Alloy.createController("homeView").getView();
			Alloy.Globals.contentview.add(currentView);
        	Alloy.Globals.title.setText("Add a Moment");
        	Alloy.Globals.currentView = currentView;
		},
		//saveToPhotoGallery:true,
		//mediaTypes:[Titanium.Media.MEDIA_TYPE_VIDEO],
		
		mediaTypes:   Titanium.Media.MEDIA_TYPE_VIDEO,   //I don't think we need "[]".
		videoMaximumDuration: 1000000,
		videoQuality: Titanium.Media.QUALITY_HIGH,
	});
}

//Run dat shit.
openVideoCamera();


//HintText for the TextArea field.
if ($.videoDesc.value.length > 0) {
	$.textAreaHint.hide();
}

$.videoDesc.addEventListener('change', function(e){
	if (e.source.value.length > 0) {
		$.textAreaHint.hide();
	}
	else {
		$.textAreaHint.show();
	}
});

$.textAreaHint.addEventListener('click', function(e){
	$.videoDesc.focus();
});
