
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
button.addEventListener('click', function() {
	Ti.Media.startVideoCapture();
});
overlay.add(bottomOverlay);
bottomOverlay.add(button);

Titanium.Media.showCamera( {
	mediaTypes: 			Titanium.Media.MEDIA_TYPE_VIDEO,
	videoMaximumDuration: 	10000, //Keep it short for now.
	videoQuality: 			Titanium.Media.QUALITY_HIGH,
	saveToPhotoGallery: 	true,
	allowEditing: 			true,
	showControls : false,
	overlay : overlay,
	success:function(e) {
		Ti.Media.setCameraFlashMode(Ti.Media.CAMERA_FLASH_OFF);
		Ti.Media.saveToPhotoGallery(e.media, {
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
