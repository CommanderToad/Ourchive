Alloy.Globals.previous = $.addPhotoWin;
function openCamera() {
    var cameraOptions = {
        success : function(event) {
            var takenPicture = event.media;

            // set image on window
            $.photo.image = takenPicture;

        },
        cancel : function() {
        	$.addPhotoWin.close();
        	Alloy.Globals.homeWin.open();
            // cancel and close window
        },
        error : function(error) {
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
        saveToPhotoGallery : true,
        allowEditing : true,
        mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
    };

    // display camera OR gallery
    if (Ti.Media.isCameraSupported) {
        Ti.Media.showCamera(cameraOptions);
    } else {
        Ti.Media.openPhotoGallery(cameraOptions);
    }

};
function openMenu() {
	Alloy.createController("menu").getView().open();
}
function closeWindow() {
	Alloy.Globals.homeWin.open();
	$.addPhotoWin.close();
}