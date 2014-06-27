function addAudio() {
		
	var currentSessionMode = Titanium.Media.audioSessionMode;
	Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD;
	var recording = Ti.Media.createAudioRecorder();

	// default compression is Ti.Media.AUDIO_FORMAT_LINEAR_PCM
	// default format is Ti.Media.AUDIO_FILEFORMAT_CAF

	// this will give us a wave file with µLaw compression which
	// is a generally small size and suitable for telephony recording
	// for high end quality, you'll want LINEAR PCM - however, that
	// will result in uncompressed audio and will be very large in size
	recording.compression = Ti.Media.AUDIO_FORMAT_ULAW;
	recording.format = Ti.Media.AUDIO_FILEFORMAT_WAVE;

	Ti.Media.addEventListener('recordinginput', function(e) {
		Ti.API.info('Input availability changed: '+e.available);
		if (!e.available && recording.recording) {
			$.b1.fireEvent('click', {});
		}
	});

	$.addAudio.addEventListener('close',function(e) {
		Titanium.Media.audioSessionMode = currentSessionMode;
	});

	var file;
	var timer;
	var sound;


	var label = Titanium.UI.createLabel({
		text:'',
		top:150,
		color:'#999',
		textAlign:'center',
		width:'auto',
		height:'auto'
	});

	$.addAudio.add(label);

	function lineTypeToStr()
	{
		var type = Ti.Media.audioLineType;
		switch(type)
		{
			case Ti.Media.AUDIO_HEADSET_INOUT:
				return "headset";
			case Ti.Media.AUDIO_RECEIVER_AND_MIC:
				return "receiver/mic";
			case Ti.Media.AUDIO_HEADPHONES_AND_MIC:
				return "headphones/mic";
			case Ti.Media.AUDIO_HEADPHONES:
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

	var linetype = Titanium.UI.createLabel({
		text: "audio line type: "+lineTypeToStr(),
		bottom:20,
		color:'#999',
		textAlign:'center',
		width:'auto',
		height:'auto'
	});

	$.addAudio.add(linetype);

	var volume = Titanium.UI.createLabel({
		text: "volume: "+Ti.Media.volume,
		bottom:50,
		color:'#999',
		textAlign:'center',
		width:'auto',
		height:'auto'
	});

	$.addAudio.add(volume);

	Ti.Media.addEventListener('linechange',function(e)
	{
		linetype.text = "audio line type: "+lineTypeToStr();
	});

	Ti.Media.addEventListener('volume',function(e)
	{
		volume.text = "volume: "+e.volume;
	});

	var duration = 0;

	function showLevels()
	{
		var peak = Ti.Media.peakMicrophonePower;
		var avg = Ti.Media.averageMicrophonePower;
		duration++;
		label.text = 'duration: '+duration+' seconds\npeak power: '+peak+'\navg power: '+avg;
	}

	/*
	var b1 = Titanium.UI.createButton({
		title:'Start Recording',
		width:200,
		height:40,
		top:20
	});
	*/
	
	$.b1.addEventListener('click', function()
	{
		if (recording.recording)
		{
			file = recording.stop();
			$.b1.title = "Start Recording";
			$.b2.show();
			$.pause.hide();
			clearInterval(timer);
			Ti.Media.stopMicrophoneMonitor();
		}
		else
		{
			if (!Ti.Media.canRecord) {
				Ti.UI.createAlertDialog({
					title:'Error!',
					message:'No audio recording hardware is currently connected.'
				}).show();
				return;
			}
			$.b1.title = "Stop Recording";
			recording.start();
			$.b2.hide();
			$.pause.show();
			Ti.Media.startMicrophoneMonitor();
			duration = 0;
			timer = setInterval(showLevels,1000);
		}
	});
	
	//$.addAudio.add(b1);
	
	/*
	var pause = Titanium.UI.createButton({
		title:'Pause recording',
		width:200,
		height:40,
		top:80
	});
	*/
	//$.addAudio.add(pause);
	$.pause.hide();

	$.pause.addEventListener('click', function() {
		if (recording.paused) {
			$.pause.title = 'Pause recording';
			recording.resume();
			timer = setInterval(showLevels,1000);
		}
		else {
			$.pause.title = 'Unpause recording';
			recording.pause();
			clearInterval(timer);
		}
	});

	/*
	var b2 = Titanium.UI.createButton({
		title:'Playback Recording',
		width:200,
		height:40,
		top:80
	});
	*/

	//$.addAudio.add(b2);
	$.b2.hide();
	$.b2.addEventListener('click', function()
	{
		if (sound && sound.playing)
		{
			sound.stop();
			sound.release();
			sound = null;
			$.b2.title = 'Playback Recording';
		}
		else
		{
			Ti.API.info("recording file size: "+file.size);
			sound = Titanium.Media.createSound({url:file});
			sound.addEventListener('complete', function()
			{
				$.b2.title = 'Playback Recording';
			});
			sound.play();
			$.b2.title = 'Stop Playback';
		}
	});

	var switchLabel = Titanium.UI.createLabel({
		text:'Hi-fidelity:',
		width:'auto',
		height:'auto',
		textAlign:'center',
		color:'#999',
		bottom:115
	});
	var switcher = Titanium.UI.createSwitch({
		value:false,
		bottom:80
	});

	switcher.addEventListener('change',function(e)
	{
		if (!switcher.value)
		{
			recording.compression = Ti.Media.AUDIO_FORMAT_ULAW;
		}
		else
		{
			recording.compression = Ti.Media.AUDIO_FORMAT_LINEAR_PCM;
		}
	});
	$.addAudio.add(switchLabel);
	$.addAudio.add(switcher);
	return $.addAudio;
};




/*
function addAudio(_args) {
	
	var addAudioView = Titanium.UI.createWindow({
		title:_args.title
	});
	
	var currentSessionMode = Titanium.Media.audioSessionMode;
	Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD;
	var recording = Ti.Media.createAudioRecorder();
	
	recording.compression = Ti.Media.AUDIO_FORMAT_ULAW;
	recording.format = Ti.Media.AUDIO_FILEFORMAT_WAVE;
	
	Ti.Media.addEventListener ('recordinginput', function(e) {
		Ti.API.info('Input availability changed: ' + e.available);
		if (!e.available && recording.recording) {
			b1.fireEvent('click', {});
		}
	});
	
	addAudioView.addEventListener('close', function(e) {
		Titanium.Media.audioSessionMode = currentSessionMode;
	});
	
	var file;
	var timer;
	var sound;
	var label = Titanium.UI.createLabel({
		text:'',
		top:150,
		color:'#999',
		textAlign:'center',
		width:'auto',
		height:'auto'
	});
	
	addAudioView.add(label);
	
	function lineTypeToStr() {
		var type = Ti.Media.audioLineType;
		switch(type) {
			case Ti.Media.AUDIO_HEADSET_INOUT:
				return "headset";
			case Ti.Media.AUDIO_RECEIVER_AND_MIC:
				return "receiver/mic";
			case Ti.Media.AUDIO_HEADPHONES_AND_MIC:
				return "headphones/mic";
			case Ti.Media.AUDIO_HEADPHONES:
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
	
	var linetype = Titanium.UI.createLabel({
		text: "audio line type: "+lineTypeToStr(),
		bottom:20,
		color:'#999',
		textAlign:'center',
		width:'auto',
		height:'auto'
	});
	
	addAudioView.add(linetype);
	
	var volume = Titanium.UI.createLabel({
		text: "volume: "+Ti.Media.volume,
		bottom:50,
		color:'#999',
		textAlign:'center',
		width:'auto',
		height:'auto'
	});

	addAudioView.add(volume);
	
	Ti.Media.addEventListener('linechange', function(e) {
		linetype.text = "Audio line type: " + lineTypeToStr();
	});
	
	Ti.Media.addEventListener('volume', function(e) {
		volume.text = "Volume: " + e.volume;
	});
	
	var duration = 0;
	
	function showLevels() {
		var peak = Ti.Media.peakMicrophonePower;
		var avg = Ti.Media.averageMicrophonePower;
		duration++;
		label.text = "Duration: " + duration + " Seconds\npeak Power: " + peak + "\navg power: " + avg;
	}
	
	var b1 = Titanium.UI.createButton({
		title: "Start Recording",
		width: 200,
		height: 40,
		top: 20,
	});
	
	b1.addEventListener('click', function(e) {
		if (recording.recording) {
			file = recording.stop();
			b1.title = "Start Recording";
			b2.show();
			pause.hide();
			clearInterval(timer);
			Ti.Media.stopMicrophoneMonitor();
		}
		else {
			if (!Ti.Media.canRecord) {
				Ti.UI.createAlertDialog({
					title: 'Error!',
					message: 'No recording hardware is available on this device.',
				}).show();
				return;
			}
			b1.title = "Stop Recording";
			recording.start();
			b2.hide();
			pause.show();
			Ti.Media.startMicrophoneMonitor();
			duration = 0;
			timer = setInterval(showLevels, 1000);
		}
	});
	
	addAudioView.add(b1);
	
	var pause = Titanium.UI.createButton({
		title: 'Pause Recording',
		width: 200,
		height: 40,
		top: 80,
	});
	
	addAudioView.add(pause);
	pause.hide();
	
	pause.addEventListener('click', function() {
		if (recording.paused) {
			pause.title = 'Pause Recording';
			recording.resume();
			timer = setInterval(showLevels, 1000);
		}
		else {
			pause.title = 'Resume Recording';
			recording.pause();
			clearInterval(timer);
		}
	});
	
	var b2 = Titanium.UI.createButton({
		title: 'Playback Recording',
		width: 200,
		height: 40,
		top: 80,
	});
	
	addAudioView.add(b2);
	b2.hide();
	
	b2.addEventListener('click', function() {
		if (sound && sound.playing) {
			sound.stop();
			sound.release();
			sound = null;
			b2.title = "Playback Recording";
		}
		else {
			Ti.API.info("Recording file size: " + file.size);
			sound = Titanium.Media.createSound({url:file});
			sound.addEventListener('complete', function () {
				b2.title = 'Playback Recording';
			});
			sound.play();
			b2.title = 'Stop Playback';
		}
	});
	
	return addAudioView;

}
*/










/*
Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD;

var recording = Ti.Media.createAudioRecorder();
var temp;
var sound;
var file;

recording.compression = Ti.Media.AUDIO_FORMAT_AAC;
recording.format = Ti.Media.AUDIO_FILEFORMAT_MP4A;

$.startRecording.addEventListener('click', function() {
	if (!Ti.Media.canRecord) {
		alert("No audio recording hardware is currently connected.");
	}
	else {
		recording.start();
	}
});

$.stopRecording.addEventListener('click', function () {
	temp = recording.stop();
	file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'preview.mp3');
	file.write(temp);
});

$.playback.addEventListener('click', function() {
	if (sound && sound.playing) {
		sound.stop();
	}
	else {
		Ti.API.info("Recording file size: " + file.size);
		sound = Titanium.Media.createSound({sound: file});
	}
});
*/









/*
Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD;

var file;
var sound;
var recording = Ti.Media.createAudioRecorder();

recording.compression = Ti.Media.AUDIO_FORMAT_AAC;
recording.format = Ti.Media.AUDIO_FILEFORMAT_MP4A;

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
*/
