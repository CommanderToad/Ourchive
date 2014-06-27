function openVideoCamera() {
	Titanium.Media.showCamera( {
		success:function(event) {
			var video = event.media;
			movieFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'mymovie.mov');
			movieFile.write(video);
		},
		cancel:function() {
			
		},
		error:function(error) {
			//Figure out what the fuck is wrong.
			var a = Titanium.UI.createAlertDialog({title:'Video'});
			//Write out what the fuck is wrong.
			if (error.code == Titanium.Media.NO_VIDEO) {
				a.setMessage('This device does not have video recording capabilities.');
			}
			else {
				a.setMessage('Unexpected error: ' + error.code);
			}
			//Print what the fuck is wrong.
			a.show();
		},
		mediaTypes: Titanium.Media.MEDIA_TYPE_VIDEO,
		videoMaximumDuration: 10000, //Keep it short for now.
		videoQuality: Titanium.Media.QUALITY_HIGH,
	});
}

//Run the motherfucker.
openVideoCamera();

/* 
Roses are red,
Violets are blue,
Jordan's musical taste sucks,
and he plays everything on repeat.
Motherfucker. . .  
*/

/*
function openVideoCamera(e) {
	Titanium.Media.showCamera({
		success: function(e) {
			//it's a video & set on window
			var takenVideo = e.media;
            movieFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'mymovie.mov');
            movieFile.write(takenVideo);
		},
		error: function() {
			alert("There was an error");
			Alloy.Globals.contentview.remove(Alloy.Globals.currentView);
			var	currentView = Alloy.createController("homeView").getView();
			Alloy.Globals.contentview.add(currentView);
        	Alloy.Globals.title.setText("Add a Moment");
        	Alloy.Globals.currentView = currentView;
		},
		cancel: function() {
			Alloy.Globals.contentview.remove(Alloy.Globals.currentView);
			var	currentView = Alloy.createController("homeView").getView();
			Alloy.Globals.contentview.add(currentView);
        	Alloy.Globals.title.setText("Add a Moment");
        	Alloy.Globals.currentView = currentView;
		},
		//saveToPhotoGallery:true,
		//mediaTypes:[Titanium.Media.MEDIA_TYPE_VIDEO],
		
		mediaTypes:Titanium.Media.MEDIA_TYPE_VIDEO,   //I don't think we need "[]".
		videoMaximumDuration:1000000,
		videoQuality:Titanium.Media.QUALITY_HIGH,
	});
}

//Run dat shit.
openVideoCamera();
*/

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
