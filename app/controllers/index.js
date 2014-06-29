var animation = require('alloy/animation');

$.homeWin.open();
Alloy.Globals.contentview = $.ds.contentview;
Alloy.Globals.title = $.ds.title;


function rowSelect(e) {
	var obj = e.source;
	var views = ["homeView", "addText", "photoSelection", "addEvent", "addVideo", "settings", "addAudio"];
	var viewTitleText = ["Add a Moment", "Add Text Moment", "Select Photos", "New Event", "Edit Details", "Settings", "Add Audio Moment"];
	if (Alloy.Globals.currentView.id != obj.id) {
		for (var i=0; i < 7 ; i++){
			if (obj.id == views[i]) {
				currentView = Alloy.createController(obj.id).getView();
				
				// if homescreen icon then animate else menu and don't animate
				if (obj.parent.id == "row1" || obj.parent.id =="row2") {
					animation.fadeAndRemove(Alloy.Globals.currentView,500,$.ds.contentview);
					setTimeout(function(){$.ds.contentview.add(currentView);
						$.ds.contentview.setOpacity(0);
						$.ds.contentview.animate({
						opacity:1,
						duation:500
					});},501);
					
				} else {
					$.ds.contentview.remove(Alloy.Globals.currentView);
					$.ds.contentview.add(currentView);
				}
				// set title text
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
