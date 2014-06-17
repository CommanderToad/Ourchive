function Controller() {
    function openMenu() {
        Alloy.createController("menu").getView().open();
        $.homeWin.close();
    }
    function addText() {
        Alloy.createController("addText").getView().open();
    }
    function addPhoto() {
        Alloy.createController("addPhoto").getView().open();
    }
    function addEvent() {
        Alloy.createController("addEvent").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.homeWin = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "homeWin"
    });
    $.__views.homeWin && $.addTopLevelView($.__views.homeWin);
    $.__views.homeView = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "homeView"
    });
    $.__views.homeWin.add($.__views.homeView);
    $.__views.titleBar = Ti.UI.createView({
        backgroundColor: "gray",
        height: "90px",
        width: "100%",
        layout: "horizontal",
        id: "titleBar"
    });
    $.__views.homeView.add($.__views.titleBar);
    $.__views.menuBtn = Ti.UI.createButton({
        left: "10px",
        top: "40px",
        title: "menu",
        id: "menuBtn"
    });
    $.__views.titleBar.add($.__views.menuBtn);
    openMenu ? $.__views.menuBtn.addEventListener("click", openMenu) : __defers["$.__views.menuBtn!click!openMenu"] = true;
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        left: "100px",
        top: "40px",
        text: "Add a Moment",
        id: "title"
    });
    $.__views.titleBar.add($.__views.title);
    $.__views.addBox = Ti.UI.createView({
        height: "750px",
        layout: "vertical",
        width: "100%",
        backgroundColor: "yellow",
        id: "addBox"
    });
    $.__views.homeView.add($.__views.addBox);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "horizontal",
        height: "250px",
        backgroundColor: "white",
        id: "__alloyId1"
    });
    $.__views.addBox.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createButton({
        top: "100px",
        width: "50%",
        title: "Photo",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    addPhoto ? $.__views.__alloyId2.addEventListener("click", addPhoto) : __defers["$.__views.__alloyId2!click!addPhoto"] = true;
    $.__views.__alloyId3 = Ti.UI.createButton({
        top: "100px",
        width: "50%",
        title: "Video",
        id: "__alloyId3"
    });
    $.__views.__alloyId1.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        layout: "horizontal",
        height: "250px",
        backgroundColor: "white",
        id: "__alloyId4"
    });
    $.__views.addBox.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createButton({
        top: "100px",
        width: "50%",
        title: "Text",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    addText ? $.__views.__alloyId5.addEventListener("click", addText) : __defers["$.__views.__alloyId5!click!addText"] = true;
    $.__views.__alloyId6 = Ti.UI.createButton({
        top: "100px",
        width: "50%",
        title: "Audio",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createView({
        layout: "horizontal",
        height: "250px",
        backgroundColor: "white",
        id: "__alloyId7"
    });
    $.__views.addBox.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createButton({
        top: "100px",
        width: "50%",
        title: "MyStream",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.tableHeader = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "90px",
        backgroundColor: "gray",
        id: "tableHeader"
    });
    $.__views.homeView.add($.__views.tableHeader);
    $.__views.tableTitle = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        left: "10px",
        text: "Events",
        id: "tableTitle"
    });
    $.__views.tableHeader.add($.__views.tableTitle);
    $.__views.addEvent = Ti.UI.createButton({
        left: "400px",
        title: "New +",
        id: "addEvent"
    });
    $.__views.tableHeader.add($.__views.addEvent);
    addEvent ? $.__views.addEvent.addEventListener("click", addEvent) : __defers["$.__views.addEvent!click!addEvent"] = true;
    $.__views.events = Ti.UI.createTableView({
        bottom: 0,
        height: "286px",
        width: Ti.UI.FILL,
        backgroundColor: "gray",
        id: "events"
    });
    $.__views.homeView.add($.__views.events);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.homeWin.open();
    Alloy.Globals.homeWin = $.homeWin;
    Alloy.Globals.previous = $.homeWin;
    __defers["$.__views.menuBtn!click!openMenu"] && $.__views.menuBtn.addEventListener("click", openMenu);
    __defers["$.__views.__alloyId2!click!addPhoto"] && $.__views.__alloyId2.addEventListener("click", addPhoto);
    __defers["$.__views.__alloyId5!click!addText"] && $.__views.__alloyId5.addEventListener("click", addText);
    __defers["$.__views.addEvent!click!addEvent"] && $.__views.addEvent.addEventListener("click", addEvent);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;