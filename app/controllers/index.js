var animation = require('alloy/animation');

$.homeWin.open();
Alloy.Globals.contentview = $.ds.contentview;
Alloy.Globals.title = $.ds.title;

function rowSelect(e) {
	var obj = e.source;
	var views = ["homeView", "addText", "addPhoto", "addEvent", "addVideo", "settings", "addAudio"];
	var viewTitleText = ["Add a Moment", "Add Text Moment", "Add Photo Moment", "New Event", "Add Video Moment", "Settings", "Add Audio Moment"];
	if (Alloy.Globals.currentView.id != obj.id) {
		for (var i=0; i < 7 ; i++){
			if (obj.id == views[i]) {
				$.ds.contentview.remove(currentView);
				currentView = Alloy.createController(obj.id).getView();
				if (obj.parent.id == "row1" || obj.parent.id =="row2") {
					$.ds.contentview.animate({
           			 view: currentView,
        			    transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
   				     });
				} else {
					$.ds.contentview.add(currentView);
				}
				$.ds.title.setText(viewTitleText[i]);
				Alloy.Globals.currentView = currentView;
			}
		}
	}
}
//manage menu views
$.ds.menuView.addEventListener('click', function selectRow(e) {
	rowSelect(e);
	$.ds.toggleLeftSlider();
});
//manage views on home
$.ds.contentview.addEventListener('click', function selectView(e) {
	rowSelect(e);
});

var leftData = [];
var rightData = [];


var currentView = Alloy.createController("homeView").getView();
Alloy.Globals.currentView = currentView;
$.ds.contentview.add(currentView);
