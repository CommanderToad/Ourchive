function Controller() {
    function rowSelect(e) {
        var obj = e.source;
        if (currentView.id != obj.id) {
            $.ds.contentview.remove(currentView);
            currentView = Alloy.createController(obj.id).getView();
            $.ds.contentview.add(currentView);
            Alloy.Globals.currentView = currentView;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.homeWin = Ti.UI.createWindow({
        layout: "vertical",
        id: "homeWin"
    });
    $.__views.homeWin && $.addTopLevelView($.__views.homeWin);
    $.__views.ds = Alloy.createWidget("ds.slideMenu", "widget", {
        id: "ds",
        __parentSymbol: $.__views.homeWin
    });
    $.__views.ds.setParent($.__views.homeWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("alloy/animation");
    $.homeWin.open();
    Alloy.Globals.contentview = $.ds.contentview;
    $.ds.menuView.addEventListener("click", function(e) {
        rowSelect(e);
        $.ds.toggleLeftSlider();
    });
    $.ds.contentview.addEventListener("click", function(e) {
        rowSelect(e);
    });
    var currentView = Alloy.createController("homeView").getView();
    $.ds.contentview.add(currentView);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;