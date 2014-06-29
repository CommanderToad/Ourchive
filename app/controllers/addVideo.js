var videoFile = 'video/video-test.mp4';
var recording = 0;
var overlay = Titanium.UI.createView();
var topOverlay = Titanium.UI.createView({
	width:"100%",
	height:"110px",
	top:0,
	layout:"horizontal",
	backgroundColor:"white"
});
var bottomOverlay = Titanium.UI.createView({
	width: "100%",
	height: "150px",
	bottom: "0px",
	backgroundColor: 'white',
});
var button = Titanium.UI.createButton({
	height:"90%",
	borderRadius:"20px",
	width:"30%",
	backgroundColor:"red",
	title : 'Record',
});
var cancelBtn = Titanium.UI.createButton({
	right:"5%",
	height:"90%",
	borderRadius:"30px",
	width:"30%",
	backgroundColor:"gray",
	title:"Cancel"
});
bottomOverlay.add(cancelBtn);
overlay.add(bottomOverlay);
bottomOverlay.add(button);
button.addEventListener('click', function() {
	if (recording==0) {
		Titanium.Media.startVideoCapture();
		button.title = "Recording...";
		recording = 1;
	} else {
		Titanium.Media.stopVideoCapture();
		button.title = "Record";
		recording = 0;
	}
});

Titanium.Media.showCamera( {
	mediaTypes: 			Titanium.Media.MEDIA_TYPE_VIDEO,
	videoMaximumDuration: 	10000, //Keep it short for now.
	videoQuality: 			Titanium.Media.QUALITY_HIGH,
	saveToPhotoGallery: 	true,
	showControls : false,
	overlay : overlay,
	autohide:false,
	success:function(event) {
		Ti.Media.setCameraFlashMode(Ti.Media.CAMERA_FLASH_OFF);
		Ti.Media.saveToPhotoGallery(event.media, {
			success: function(event) {
				var video = event.media;
				 var movieFile = Titanium.Filesystem.getFile(
						 Titanium.Filesystem.applicationDataDirectory, 
						 mymovie.mov');
						 movieFile.write(video);
 						videoFile = movieFile.nativePath;
						Ti.Media.hideCamera();
						 //create the video player and add it to our window
						 //note the url property can be a remote url or a local file
						 var my_movie = Titanium.Media.createVideoPlayer({
						 url: videoFile,
						 width: "250px",
						 height: "250px",
						 backgroundColor:'#000'
					 });
					 $.video.addEventListener('click', function(e){
						Alloy.Globals.my_movie.play();
						});
			 	$.video.add(my_movie);
			},
			error: function(evt) {
				alert("Failed to save video to gallery");
			},
		});
	},
	error:function(error) {alert("Error: " + error);},
});


cancelBtn.addEventListener('click', function() {
	Ti.Media.hideCamera();
	Alloy.Globals.contentview.remove(Alloy.Globals.currentView);
	var currentView = Alloy.createController("homeView").getView();
	Alloy.Globals.currentView = currentView;
	Alloy.Globals.contentview.add(currentView);
	Alloy.Globals.title.setText("Add a Moment");
});

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
