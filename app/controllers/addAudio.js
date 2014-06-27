Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD;

var recording = Ti.Media.createAudioRecorder();

recording.compression = Ti.Media.AUDIO_FORMAT_AAC;
recording.format = Ti.Media.AUDIO_FILEFORMAT_MP4A;

Ti.Media.addEventListener('linechange', function(e) {
	linetype.text = "Audio line type: " + lineTypeToStr();
});

Ti.Media.addEventListener('volume', function(e) {
	volume.text = "Volume: " + e.volume;
});

function lineTypeToStr() {
	var lineType = Ti.Media.audioLineType;
	switch(lineType) {
		case Ti.Media.AUDIO_HEADSET_INPUT:
			return "headset";
		case Ti.Media.AUDIO_RECIEVER_AND_MIC:
			return "receiver/mic";
		case Ti.Media.AUDIO_HEADPHONES_AND_MIC:
			return "headphones/mic";
		case Ti.Media.HEADPHONES:
			return "headphones";
		case Ti.Media.AUDIO_LINEOUT:
			return "lineout";
		case Ti.Media.AUDIO_SPEAKER:
			return "speaker";
		case Ti.Media.AUDIO_MICROPHONE:
			return "microphone";
		case Ti.Media.AUDIO_MUTED:
			return "silence switch on";
		case Ti.Media.AUDIO_UNAVAILABLE:
			return "unavailable";
		case Ti.Media.AUDIO_UNKNOWN:
			return "unknown";
	}
}

$.startRecording.addEventListener('click', function() {
	if (!Ti.Media.canRecord) {
		alert("No audio recording hardware is currently connected.");
	}
	else {
		recording.start();
		Ti.Media.startMicrophoneMonitor();
	}
});

$.stopRecording.addEventListener('click', function() {
	file = recording.stop();
	Ti.Media.stopMicrophoneMonitor();
});

$.playback.addEventListener('click', function() {
	if (sound && sound.playing) {
		sound.stop();
		sound.release();
		sound = null;
	}
	else {
		Ti.API.info("Recording file size: " + file.size);
		sound = Titanium.Media.createSound({sound: file});
	}
});
