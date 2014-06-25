var args = arguments[0] || {};


var api = require('api');
api.user.login('test2@test.com', 'testtest', function(data){
	console.log('got success', data);
}, function(){
	console.log('got error', arguments);
});


function openMenu() {
	Alloy.createController("menu").getView().open();
}
function addText() {
	Alloy.createController("addText").getView().open();
}
function addPhoto() {
	Alloy.createController("addPhoto").getView().open();
}
function addEvent() {
var currentView= Alloy.createController("addEvent").getView();
$.ds.contentview.add(currentView);
}
function addVideo() {
	Alloy.createController("addVideo").getView().open();
}
function myOurchive() {
	Alloy.createController("myOurchive").getView().open();
}
function addAudio() {
	Alloy.createController("addAudio").getView().open();
}

