function openVideoCamera() {
	Titanium.Media.showCamera( {
		mediaTypes: 			Titanium.Media.MEDIA_TYPE_VIDEO,
		videoMaximumDuration: 	10000, //Keep it short for now.
		videoQuality: 			Titanium.Media.QUALITY_HIGH,
		saveToPhotoGallery: 	true,
		allowEditing: 			true,
		success:function(e) {
			Ti.Media.setCameraFlashMode(Ti.Media.CAMERA_FLASH_OFF);
			Ti.Media.saveToPhotoGallery(e.media, {
				success: function(event) {
				},
				error: function(evt) {
					alert("Failed to save video to gallery");
				},
			});
		},
		error:function(error) {alert("Error: " + error);},
	});
}

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
