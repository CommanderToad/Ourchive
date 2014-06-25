var animation = require('alloy/animation');

$.homeWin.open();
Alloy.Globals.contentview = $.ds.contentview;
Alloy.Globals.title = $.ds.title;

function openFunction() {
	Alloy.Globals.homeWin = $.homeWin;
	Alloy.Globals.previous = $.homeWin;
}
function rowSelect(e) {
	var obj = e.source;
	var views = ["homeView", "addText", "addPhoto", "addEvent", "addVideo", "settings", "addAudio"];
	var viewTitleText = ["Add a Moment", "Add Text Moment", "Edit Details", "New Event", "Edit Details", "Settings", "Add Audio Moment"];
	if (Alloy.Globals.currentView.id != obj.id) {
		for (var i=0; i < 7 ; i++){
			if (obj.id == views[i]) {
				currentView = Alloy.createController(obj.id).getView();
				$.ds.contentview.remove(Alloy.Globals.currentView);
				// if homescreen icon then animate else menu and don't animate
				if (obj.parent.id == "row1" || obj.parent.id =="row2") {
					//$.ds.contentview.add(currentView);
					
				$.ds.contentview.add(currentView);
				//	$.ds.contentview.animate({
           			// view: currentView,
        		//	    transition: animation.fadeIn(Alloy.Globals.currentView, 500)
   				  //   });
				} else {
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
