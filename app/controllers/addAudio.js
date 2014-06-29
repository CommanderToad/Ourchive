var currentSessionMode = Titanium.Media.audioSessionMode;
Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD;
 
var recording = Ti.Media.createAudioRecorder();
recording.compression = Ti.Media.AUDIO_FORMAT_ULAW;
recording.format = Ti.Media.AUDIO_FILEFORMAT_WAVE;  
 
$.record.addEventListener('click', function(e) {
    recording.start();
    $.record.setText("Recording");
});