var recording = 0;
var overlay = Titanium.UI.createView();
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
				Ti.Media.hideCamera();

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
