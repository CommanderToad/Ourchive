function Controller() {
    function closeWindow() {
        Alloy.Globals.previous.open();
        $.menuWin.close();
    }
    function homeWindow() {
        Alloy.Globals.homeWin.open();
        $.menuWin.close();
    }
    function addText() {
        Alloy.createController("addText").getView().open();
        menuWin.close();
    }
    function addPhoto() {
        Alloy.createController("addPhoto").getView().open();
        menuWin.close();
    }
    function addEvent() {
        Alloy.createController("addEvent").getView().open();
        menuWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.menuWin = Ti.UI.createWindow({
        id: "menuWin"
    });
    $.__views.menuWin && $.addTopLevelView($.__views.menuWin);
    $.__views.menuView = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "gray",
        id: "menuView"
    });
    $.__views.menuWin.add($.__views.menuView);
    $.__views.titleView = Ti.UI.createView({
        top: "30px",
        layout: "horizontal",
        height: "95px",
        width: "90%",
        left: "20px",
        id: "titleView"
    });
    $.__views.menuView.add($.__views.titleView);
    $.__views.title = Ti.UI.createLabel({
        left: "10px",
        text: "Menu",
        id: "title"
    });
    $.__views.titleView.add($.__views.title);
    $.__views.closeBtn = Ti.UI.createButton({
        right: "0px",
        title: "X",
        id: "closeBtn"
    });
    $.__views.titleView.add($.__views.closeBtn);
    closeWindow ? $.__views.closeBtn.addEventListener("click", closeWindow) : __defers["$.__views.closeBtn!click!closeWindow"] = true;
    $.__views.homeBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Home",
        id: "homeBtn"
    });
    $.__views.menuView.add($.__views.homeBtn);
    homeWindow ? $.__views.homeBtn.addEventListener("click", homeWindow) : __defers["$.__views.homeBtn!click!homeWindow"] = true;
    $.__views.__alloyId9 = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "My Ourchive",
        id: "__alloyId9"
    });
    $.__views.menuView.add($.__views.__alloyId9);
    $.__views.photoBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Photo",
        id: "photoBtn"
    });
    $.__views.menuView.add($.__views.photoBtn);
    addPhoto ? $.__views.photoBtn.addEventListener("click", addPhoto) : __defers["$.__views.photoBtn!click!addPhoto"] = true;
    $.__views.__alloyId10 = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Video",
        id: "__alloyId10"
    });
    $.__views.menuView.add($.__views.__alloyId10);
    $.__views.textBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Text",
        id: "textBtn"
    });
    $.__views.menuView.add($.__views.textBtn);
    addText ? $.__views.textBtn.addEventListener("click", addText) : __defers["$.__views.textBtn!click!addText"] = true;
    $.__views.__alloyId11 = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Audio",
        id: "__alloyId11"
    });
    $.__views.menuView.add($.__views.__alloyId11);
    $.__views.eventBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "New Event",
        id: "eventBtn"
    });
    $.__views.menuView.add($.__views.eventBtn);
    addEvent ? $.__views.eventBtn.addEventListener("click", addEvent) : __defers["$.__views.eventBtn!click!addEvent"] = true;
    $.__views.__alloyId12 = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Settings",
        id: "__alloyId12"
    });
    $.__views.menuView.add($.__views.__alloyId12);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var menuWin = Alloy.Globals.menuWin = $.menuWin;
    __defers["$.__views.closeBtn!click!closeWindow"] && $.__views.closeBtn.addEventListener("click", closeWindow);
    __defers["$.__views.homeBtn!click!homeWindow"] && $.__views.homeBtn.addEventListener("click", homeWindow);
    __defers["$.__views.photoBtn!click!addPhoto"] && $.__views.photoBtn.addEventListener("click", addPhoto);
    __defers["$.__views.textBtn!click!addText"] && $.__views.textBtn.addEventListener("click", addText);
    __defers["$.__views.eventBtn!click!addEvent"] && $.__views.eventBtn.addEventListener("click", addEvent);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;