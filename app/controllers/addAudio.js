//var currentSessionMode = Titanium.Media.audioSessionMode;
Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_RECORD;
 
var recording = Ti.Media.createAudioRecorder();
recording.compression = Ti.Media.AUDIO_FORMAT_ULAW;
recording.format = Ti.Media.AUDIO_FILEFORMAT_WAVE;

var timer;
var duration = 0;
var recordDuration = 0;
  
var isRecording = false; 

function recordLength() {
	duration ++;
	$.durationLabel.text = "Duration: " + duration + " seconds";
}

function record(e) {
	if (!isRecording) {
		recording.start();
    	Ti.Media.startMicrophoneMonitor();
    	e.source.image = "images/record-stop.png";	
    	isRecording = true;
    	duration = 0;
    	timer = setInterval(recordLength, 1000);
	}
	else {
    	clearInterval(timer);
    	isRecording = false;
		e.source.image = "images/record-start.png";
		// here it stops recording
		recording.stop();
		Ti.Media.stopMicrophoneMonitor();
    	var recordedFile = recording.stop(); 
    	// if it doesn't exist I create a directory containing recorded audio files
    	var audioDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'recorded_audio_files');
    	if (!audioDir.exists()) {
    		audioDir.createDirectory();
    	};
    	// I write the most recent recording into a file
    	var rec = Titanium.Filesystem.getFile(audioDir.resolve(), 'key.wav');
    	// error check
    	if (rec.write(recordedFile) === false) {
    		alert("writing issue");
    	};
    	var currentKey = 'key.wav';
    	// the corresponding value is the nativePath of the saved sound
    	var currentValue = rec.nativePath; 
    	// I get the object sounds and I create an empty object if it doen't exist
    	var obj = Ti.App.Properties.getObject("sounds") || {};
    	// I assign to tempObj the current value of obj
    	var tempObj = obj;
    	// I add a key/value pair to my object
    	tempObj[currentKey] = currentValue;
    	// I store the object in sounds
    	Ti.App.Properties.setObject("sounds", tempObj);
	}
};

var playing = false;

function playRecording(e) {
	Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;
   	var sounds = Titanium.App.Properties.getObject("sounds");
	var currentKey = 'key.wav';
	var soundPath = sounds[currentKey];
	var fileToPlay = Titanium.Filesystem.getFile(soundPath);
	var sound = Titanium.Media.createSound({
    	url : fileToPlay
	});
	/*
	var pb=Titanium.UI.createProgressBar({
    	top:"225px",
    	width:"86%",
    	height:'auto',
    	min:0,
    	max: duration,
    	value:0,
    	color:'#fff',
    	message:'Downloading 0 of 10',
    	font:{fontSize:14, fontWeight:'bold'},
    	style:Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
	});
	$.addAudio.add(pb);
	pb.show();
	playRecording.addEventListener('progress', function(e) {
		pb.value = Math.round(e.progress)/1000;
	});
	*/
	if (!playing) {
		e.source.image = "images/record-pause.png";
		sound.play();
		playing = true;
		$.durationLabel.text = "";
	}
	else {
		e.source.image = "images/record-play.png";
		sound.pause();
		playing = false;
	}
};