
var scanner = Titanium.UI.createView({
	width : 260,
	height : 200,
	borderColor : 'red',
	borderWidth : 5,
	borderRadius : 15
});
 
var button = Titanium.UI.createButton({
	color : '#fff',
	//backgroundImage : '../images/BUTT_grn_on.png',
	//backgroundSelectedImage : '../images/BUTT_grn_off.png',
	//backgroundDisabledImage : '../images/BUTT_gry_on.png',
	bottom : 10,
	width : 301,
	height : 57,
	font : {
		fontSize : 20,
		fontWeight : 'bold',
		fontFamily : 'Helvetica Neue'
	},
	title : 'Take Picture'
});
 
var messageView = Titanium.UI.createView({
	height : 30,
	width : 250,
	visible : false
});
 
var indView = Titanium.UI.createView({
	height : 30,
	width : 250,
	backgroundColor : '#000',
	borderRadius : 10,
	opacity : 0.7
});
messageView.add(indView);
 
// message
var message = Titanium.UI.createLabel({
	text : 'Picture Taken',
	color : '#fff',
	font : {
		fontSize : 20,
		fontWeight : 'bold',
		fontFamily : 'Helvetica Neue'
	},
	width : 'auto',
	height : 'auto'
});
messageView.add(message);
 
var overlay = Titanium.UI.createView();
overlay.add(scanner);
overlay.add(button);
overlay.add(messageView);
 
button.addEventListener('click', function() {
	scanner.borderColor = 'blue';
	Ti.Media.takePicture();
	messageView.animate({
		visible : true
	});
	setTimeout(function() {
		scanner.borderColor = 'red';
		messageView.animate({
			visible : false
		});
	}, 500);
});
 
Titanium.Media.showCamera({
	saveToPhotoGallery : true,
	success : function(event) {
 
		// place our picture into our window
		var imageView = Ti.UI.createImageView({
			image : event.media,
			width : 320,
			height : 480
		});
		win.add(imageView);
 
		win.open();
		alert("picture was taken");
		//alert(event);
		// programatically hide the camera
		//Ti.Media.hideCamera();
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
	mediaTypes : Ti.Media.MEDIA_TYPE_PHOTO,
	autohide : false // tell the system not to auto-hide and we'll do it ourself
});

/*	
var overlayImage = Titanium.UI.createView({
	width: "100%",
	height: "20%",
	bottom: "0px",
	backgroundColor: 'blue',
	touchEnabled:true,	
});

var btn = Titanium.UI.createButton({
	height:"90%",
	borderRadius:"20px",
	width:"50%",
	backgroundColor:"red",
	touchEnabled:true,		
});
Alloy.Globals.myOverlay = Titanium.UI.createView({
	width:"100%",
	height:"100%",
	touchEnabled: true
});	
overlayImage.add(btn);
Alloy.Globals.myOverlay.add(overlayImage);

btn.addEventListener('click', function(e){
	console.log("something happened");
	Titanium.Media.takePicture();
	 Ti.API.info('click');
});

Titanium.Media.showCamera({
	success: function(event) {
		 var takenPicture = event.media;

        // set image on window
        $.photo.image = takenPicture;
	},
	error: function(e) {},
	cancel: function(e) {},
	overlay: Alloy.Globals.myOverlay,
	showControls: false,
	saveToPhotoGallery: true,
	allowEditing: true,
});
	/*

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





