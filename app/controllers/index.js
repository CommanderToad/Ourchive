
$.homeWin.open();
Alloy.Globals.homeWin = $.homeWin;
Alloy.Globals.previous = $.homeWin;


function openFunction() {
	Alloy.Globals.homeWin = $.homeWin;
	Alloy.Globals.previous = $.homeWin;
}
function rowSelect(e) {
	var obj = e.source;
	if (currentView.id != obj.id) {
		$.ds.contentview.remove(currentView);
		currentView = Alloy.createController(obj.id).getView();
		$.ds.contentview.add(currentView);
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
$.ds.contentview.add(currentView);
