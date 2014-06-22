function startRecording() {
	Titanium.Media.createAudioRecorder();
	Titanium.Media.AudioRecorder.start();
		var addAudio = Alloy.createController('addAudio');
	addAudio.addClass(addAudio.recordBtn, 'tiny_win', {backgroundColor:'red'});
}
function openMenu() {
	Alloy.createController("menu").getView().open();
}
	
