Alloy.Globals.previous = $.homeWin;
function openCamera() {
    var cameraOptions = {
        success : function(event) {
            var image = event.media;

            // set image on window
            $.image.image = image;

            //save for future use
            var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'photo' + args.data.get("id") + '.png');
            f.write(image);

            // update the model and save
            var fugitiveModel = args.data;
            fugitiveModel.set("url", f.nativePath);
            fugitiveModel.save();

            // force tables to update
            Alloy.Collections.Fugitive.fetch();

        },
        cancel : function() {
        	$.addPhotoWin.close();
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
