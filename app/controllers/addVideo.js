
var cameraTransform = Ti.UI.create2DMatrix();
cameraTransform = cameraTransform.scale(1.325);
var recording = 0;
var overlay = Titanium.UI.createView();
var bottomOverlay = Titanium.UI.createView({
	width: "100%",
	height: "180px",
	bottom: "0px",
	backgroundColor: '#BDBDBD',
});
var button = Titanium.UI.createView({
	height:"170px",
	borderRadius:"85px",
	width:"170px",
	backgroundColor:"#555555",
});
var cancelBtn = Titanium.UI.createButton({
	color:"white",
	right:"5%",
	height:"120px",
	borderRadius:"60px",
	width:"120px",
	backgroundColor:"blue",
	title:"Cancel"
});
var redBtn = Titanium.UI.createButton({
	height:"100px",
	borderRadius:"50px",
	width:"100px",
	backgroundColor:"red",
	touchEnabled:false,
});
button.add(redBtn);
redBtn.hide();
bottomOverlay.add(cancelBtn);
overlay.add(bottomOverlay);
bottomOverlay.add(button);
button.addEventListener('click', function() {
	if (recording==0) {
		Titanium.Media.startVideoCapture();
		button.title = "Recording...";
		recording = 1;
		redBtn.show();
	} else {
		redBtn.hide();
		Titanium.Media.stopVideoCapture();
		recording = 0;
	}
});
cancelBtn.addEventListener('click', function() {
	Ti.Media.hideCamera();
	Alloy.Globals.transition("homeView");
	Alloy.Globals.title.setText("Add a Moment");
});

Titanium.Media.showCamera( {
	mediaTypes: 			Titanium.Media.MEDIA_TYPE_VIDEO,
	videoMaximumDuration: 	10000, //Keep it short for now.
	videoQuality: 			Titanium.Media.QUALITY_HIGH,
	saveToPhotoGallery: 	true,
	showControls : false,
	overlay : overlay,
	autohide:false,
	transform:cameraTransform,
	success:function(event) {
		Ti.Media.hideCamera();
		var video = event.media;
		Ti.Media.setCameraFlashMode(Ti.Media.CAMERA_FLASH_OFF);
		Ti.Media.saveToPhotoGallery(event.media, {
			success: function(event) {
						 //create the video player and add it to our window
						var my_movie = Titanium.Media.createVideoPlayer({
						 media:video,
						 movieControlMode:Titanium.Media.VIDEO_CONTROL_DEFAULT,
						 scalingMode:Titanium.Media.VIDEO_SCALING_ASPECT_FILL,
						 width: "250px",
						 height: "250px",
						 backgroundColor:'#000',
						 autoplay : false,
					 });
				 $.video.add(my_movie);
				 $.video.addEventListener('click', function(e){
					my_movie.play();
				});
			},
			error: function(evt) {
				alert("Failed to save video to gallery");
			},
		});
	},
	error:function(error) {alert("Error: " + error);},
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

// Edit Details Buttons
$.cancelBtn.addEventListener('click', function(e){
	Alloy.Globals.transition("homeView");
	Alloy.Globals.title.setText("Add a Moment");
});