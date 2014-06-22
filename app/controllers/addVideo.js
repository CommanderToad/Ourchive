function openVideoCamera(e) {
	Titanium.Media.showCamera({
		success: function(e) {
			if(e.mediaType=== Titanium.Media.MEDIA_TYPE_VIDEO) {
				//it's a video & set on window
				var takenVideo = e.media;
                movieFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'mymovie.mov');
                movieFile.write(takenVideo);
			}
		},
		error: function() {
			alert("There was an error");
			Alloy.Globals.homeWin.open();
			$.addVideoWin.close();
		},
		cancel: function() {
			Alloy.Globals.homeWin.open();
			$.addVideoWin.close();
		},
		allowEditing:true,
		saveToPhotoGallery:true,
		mediaTypes:[Titanium.Media.MEDIA_TYPE_VIDEO],
		videoQuality:Titanium.Media.QUALITY_HIGH
	});
}
openVideoCamera(e);
