var currentSessionMode = Titanium.Media.audioSessionMode;
Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD;
 
var recording = Ti.Media.createAudioRecorder();
recording.compression = Ti.Media.AUDIO_FORMAT_ULAW;
recording.format = Ti.Media.AUDIO_FILEFORMAT_WAVE;  
 
$.record.addEventListener('click', function(e) {
	if (e.source.image === "images/record-start.png") {
		recording.start();
    	Ti.Media.startMicrophoneMonitor();
    	e.source.image = "images/record-stop.png";	
	}
	else {
		e.source.image = "images/record-start.png";
		// here it stops recording
    	var recordedFile = recording.stop(); 
    	// if it doesn't exist I create a directory containing recorded audio files
    	var audioDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'recorded_audio_files');
    	if (!audioDir.exists()) {
    		audioDir.createDirectory();
    	};       
    	// I write the most recent recording into a file
    	// getScrollableViewStatus() creates a UNIQUE name for that file
    	var rec = Titanium.Filesystem.getFile(audioDir.resolve(),'key.wav');
    	// error check
    	if (rec.write(recordedFile)===false) {
    		alert("writing issue");
    	};
    	// currentKey contains the same value as getScrollableViewStatus() above
    	// and it becomes a unique key for a Property (it CAN be a key as it is a character sequence 'ABCDEF')
    	var currentKey = 'key.wav';
    	// the corresponding value is the nativePath of the saved sound
    	var currentValue = rec.nativePath; 
    	// I get the object sounds and I create an empty object if it doen't exist
    	var obj = Ti.App.Properties.getObject("sounds")||{};
    	// I assign to tempObj the current value of obj
    	var tempObj = obj;
    	// I add a key/value pair to my object
    	tempObj[currentKey] = currentValue;
    	// I store the object in sounds
    	Ti.App.Properties.setObject("sounds", tempObj);
	}   
});

$.play.addEventListener('click', function(e) {
	Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;
   	var sounds = Titanium.App.Properties.getObject("sounds");
	var currentKey = 'key.wav';
	var soundPath = sounds[currentKey];
	var fileToPlay = Titanium.Filesystem.getFile(soundPath);
	var sound = Titanium.Media.createSound({
    	url : fileToPlay
	});
	if (e.source.image = "images/record-play.png") {
		e.source.image = "images/record-pause.png";
		sound.play();
	}
	else {
		e.source.image = "images/record-play.png";
		sound.pause();
	}
});
