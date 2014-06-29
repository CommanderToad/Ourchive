var cameraTransform = Ti.UI.create2DMatrix();
cameraTransform = cameraTransform.scale(1.325);
var pics = [];
var thumbnails =[];
var topOverlay = Titanium.UI.createView({
	width:"100%",
	height:"110px",
	top:0,
	layout:"horizontal",
	backgroundColor:"#BDBDBD"
});
var bottomOverlay = Titanium.UI.createView({
	width: "100%",
	height: "180px",
	bottom: "0px",
	backgroundColor: '#BDBDBD',
});
 
var button = Titanium.UI.createButton({
	height:"170px",
	borderRadius:"85px",
	width:"170px",
	backgroundColor:"#555555",
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
galleryBtn.addEventListener('click', function(e) {
	Titanium.Media.openPhotoGallery({
		success:function(event) {
			// called when media returned from the camera
			var image = event.media;
			if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				var imageView = Titanium.UI.createImageView({
					height:"100%",
					width:"100%",
					image: image
				});
				$.photo.add(imageView);
			}
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

Titanium.Media.showCamera({
	saveToPhotoGallery : true,
	success : function(event) {
 	 var takenPicture = event.media;
            // set image on window
            overlay.add(topOverlay);
            pics.push(takenPicture);
           		var view = Titanium.UI.createImageView({
					width:"100px",
					height:"100px",
					left:"25px",
					top:"5px",
					image: pics[pics.length-1]
				    });
				thumbnails.push(view);
				topOverlay.add(view);

				view.addEventListener('click', function() {
					//set image on photoSelection View as 
					Ti.Media.hideCamera();
				});
				var picture = Titanium.UI.createImageView({
					width:"90%",
					height:"900px",
					top:"20px",
					image:pics[pics.length-1],
					});
				$.photoSelection.add(picture);
				
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

