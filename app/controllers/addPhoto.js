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
	title : 'Take Picture',
});
var galleryBtn = Titanium.UI.createButton({
	left:"5%",
	height:"70%",
	borderRadius:"30px",
	width:"20%",
	backgroundColor:"blue",
	title:"Gallery"
});
var cancelBtn = Titanium.UI.createButton({
	right:"5%",
	height:"90%",
	borderRadius:"30px",
	width:"30%",
	backgroundColor:"gray",
	title:"Cancel"
});
/*
var flashBtn = Titanium.UI.createButton({
	height:"70%",
	borderRadius:"20px",
	width:"20%",
	backgroundColor:"red",
});
 */


var overlay = Titanium.UI.createView();
overlay.add(bottomOverlay);
bottomOverlay.add(button);
bottomOverlay.add(galleryBtn);
bottomOverlay.add(cancelBtn);
button.addEventListener('click', function() {
	Ti.Media.takePicture();
});
galleryBtn.addEventListener('click', function() {
	Titanium.Media.showCamera({
	success:function(event) {
		// called when media returned from the camera
		
	},
	cancel:function() {
		// called when user cancels taking a picture
	},
	error:function(error) {
		// called when there's an error
		var a = Titanium.UI.createAlertDialog({title:'Camera'});
		if (error.code == Titanium.Media.NO_CAMERA) {
			a.setMessage('Please run this test on device');
		} else {
			a.setMessage('Unexpected error: ' + error.code);
		}
		a.show();
	},
	saveToPhotoGallery:true,
	allowEditing:true,
	mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
});
});
cancelBtn.addEventListener('click', function() {
	Ti.Media.hideCamera();
	Alloy.Globals.contentview.remove(Alloy.Globals.currentView);
	var currentView = Alloy.createController("homeView").getView();
	Alloy.Globals.currentView = currentView;
	Alloy.Globals.contentview.add(currentView);
	Alloy.Globals.title.setText("Add a Moment");
});
/*flashBtn.addEventListener('click', function() {
	Ti.Media.cameraFlashMode = !Ti.Media.getCameraFlashMode();
	if(Ti.Media.cameraFlashMode){
    	flashBtn.setTitle("On");
    }else{
    	flashBtn.setTitle("Off");
    }
	return;
	
	
	alert(Ti.Media.cameraFlashMode);
	if (Ti.Media.cameraFlashMode == 1) {
		Ti.Media.setCameraFlashMode(0);
		alert('got here');
		flashBtn.setTitle("Off");
	} else {
		alert('before' + Ti.Media.getCameraFlashMode());
		Ti.Media.setCameraFlashMode(1);
		alert('after' + Ti.Media.getCameraFlashMode());
		Ti.Media.setCameraFlashMode(Ti.Media.CAMERA_FLASH_ON);
		console.log('again', Ti.Media.getCameraFlashMode());
		alert('got here again');
		flashBtn.setTitle("On");
	};
});
 */
var cameraTransform = Ti.UI.create2DMatrix();
cameraTransform = cameraTransform.scale(1.325);
var pics = [];
var thumbnails =[];
Titanium.Media.showCamera({
	saveToPhotoGallery : true,
	success : function(event) {
 	 var takenPicture = event.media;
            // set image on window
            $.photo.image = takenPicture;
            overlay.add(topOverlay);
            pics.push(takenPicture);
           		var view = Titanium.UI.createImageView({
					width:"100px",
					height:"100px",
					left:"25px",
					top:"5px",
					image: pics[pics.length-1]
				    });
				view.addEventListener('click', function() {
					//set image on addPhoto View as thumbnail
					$.photo.image = pics[pics.length-1];
					Ti.Media.hideCamera();
				});
				thumbnails.push(view);
				topOverlay.add(view);
				
	},
	cancel : function() {
		
	},
	error : function(error) {
		var a = Titanium.UI.createAlertDialog({
			title : 'Camera'
		});
		if (error.code == Titanium.Media.NO_CAMERA) {
			a.setMessage('Please run this test on device');
		} else {
			a.setMessage('Unexpected error: ' + error.code);
		}
		a.show();
	},
	overlay : overlay,
	showControls : false, // don't show system controls
	transform:cameraTransform,
	mediaTypes : Ti.Media.MEDIA_TYPE_PHOTO,
	autohide : false // tell the system not to auto-hide and we'll do it ourself
});
/*function openCamera() {
	
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
});*/