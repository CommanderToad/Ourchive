function openCamera() {
	
	var overlayImage = Titanium.UI.createImageView({
    	width: "100%",
   		height: "20%",
   		bottom: "0px",
    	backgroundColor: 'blue',
	});
	var btn = Titanium.UI.createButton({
		height:"90%",
		borderRadius:"20px",
		width:"50%",
		backgroundColor:"red"
	});
	var myOverlay = Titanium.UI.createView();
	overlayImage.add(btn);
	myOverlay.add(overlayImage);
	Titanium.Media.showCamera({
    	success: function(e) {},
    	error: function(e) {},
    	cancel: function(e) {},
    	overlay: myOverlay,
    	showControls: false,
    	saveToPhotoGallery: true,
    	allowEditing: true,
	});
	
	/*
	var overlay = Titanium.UI.createView({
		backgroundColor: 'blue',
		bottom:0,
		height: "20%",
		width: "100%",
		
	});

	overlay.add(btn);
    var cameraOptions = {
    */
        /*success : function(event) {
            var takenPicture = event.media;

            // set image on window
            $.photo.image = takenPicture;

        },
        cancel : function() {
        	Alloy.Globals.contentview.remove(Alloy.Globals.currentView);
			var	currentView = Alloy.createController("homeView").getView();
			Alloy.Globals.contentview.add(currentView);
        	Alloy.Globals.title.setText("Add a Moment");
            // cancel and close window
        },*/
        //overlay: overlay,
        /*error : function(error) {
            var a = Ti.UI.createAlertDialog({
                title : "Camera Error"
            });
            if (error.code == Ti.Media.NO_CAMERA) {
                a.setMessage("MISSING CAMERA");
            } else {
                a.setMessage('Unexpected error: ' + error.code);
            }
            a.show();
        },
        showControls: false
    };
    
    // display camera OR gallery
    if (Ti.Media.isCameraSupported) {
        Ti.Media.showCamera(cameraOptions);
    } else {
        Ti.Media.openPhotoGallery(cameraOptions);
    }
*/
};

openCamera();


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