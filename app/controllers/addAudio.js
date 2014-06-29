Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD;

var recorder = Ti.Media.createAudioRecorder({
	compression:  	Ti.Media.AUDIO_FORMAT_AAC, 
	format:       	Ti.Media.AUDIO_FILEFORMAT_MP4A,
});      
 
$.recordStartBtn.addEventListener('click', function(e) {
    if (recorder.recording) {           
        var recordedFile = recorder.stop();
        var voiceFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'test.m4a');
        voiceFile.write(recordedFile);
    } else {
        recorder.start();
    }
});