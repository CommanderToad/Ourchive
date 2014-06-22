function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "view1";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.view1 = Ti.UI.createView({
        layout: "vertical",
        id: "view1"
    });
    $.__views.view1 && $.addTopLevelView($.__views.view1);
    $.__views.ds = Alloy.createWidget("ds.slideMenu", "widget", {
        id: "ds",
        __parentSymbol: $.__views.view1
    });
    $.__views.ds.setParent($.__views.view1);
    $.__views.iphoneStatusBar = Ti.UI.createView({
        backgroundColor: "gray",
        height: "40px",
        width: "100%",
        id: "iphoneStatusBar"
    });
    $.__views.view1.add($.__views.iphoneStatusBar);
    $.__views.homeView = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "homeView"
    });
    $.__views.view1.add($.__views.homeView);
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
        top: "30px",
        font: {
            fontFamily: "Helvetica",
            fontSize: "20dp",
            fontStyle: "italic",
            fontWeight: "normal"
        },
        text: "Add a Moment",
        id: "title"
    });
    $.__views.titleBar.add($.__views.title);
    $.__views.addView = Ti.UI.createView({
        height: "706px",
        layout: "vertical",
        width: "100%",
        backgroundColor: "white",
        id: "addView"
    });
    $.__views.homeView.add($.__views.addView);
    $.__views.row1 = Ti.UI.createView({
        layout: "horizontal",
        height: "236px",
        backgroundColor: "white",
        id: "row1"
    });
    $.__views.addView.add($.__views.row1);
    $.__views.__alloyId12 = Ti.UI.createImageView({
        top: "30px",
        left: "96px",
        height: "176px",
        width: "176px",
        image: "images/icon-photos.png",
        id: "__alloyId12"
    });
    $.__views.row1.add($.__views.__alloyId12);
    addPhoto ? $.__views.__alloyId12.addEventListener("click", addPhoto) : __defers["$.__views.__alloyId12!click!addPhoto"] = true;
    $.__views.__alloyId13 = Ti.UI.createImageView({
        top: "30px",
        left: "96px",
        height: "176px",
        width: "176px",
        image: "images/icon-video.png",
        id: "__alloyId13"
    });
    $.__views.row1.add($.__views.__alloyId13);
    addVideo ? $.__views.__alloyId13.addEventListener("click", addVideo) : __defers["$.__views.__alloyId13!click!addVideo"] = true;
    $.__views.row2 = Ti.UI.createView({
        layout: "horizontal",
        height: "236px",
        backgroundColor: "white",
        id: "row2"
    });
    $.__views.addView.add($.__views.row2);
    $.__views.__alloyId14 = Ti.UI.createImageView({
        top: "30px",
        left: "96px",
        height: "176px",
        width: "176px",
        image: "images/icon-text.png",
        id: "__alloyId14"
    });
    $.__views.row2.add($.__views.__alloyId14);
    addText ? $.__views.__alloyId14.addEventListener("click", addText) : __defers["$.__views.__alloyId14!click!addText"] = true;
    $.__views.__alloyId15 = Ti.UI.createImageView({
        top: "30px",
        left: "96px",
        height: "176px",
        width: "176px",
        image: "images/icon-audio.png",
        id: "__alloyId15"
    });
    $.__views.row2.add($.__views.__alloyId15);
    $.__views.row3 = Ti.UI.createView({
        layout: "horizontal",
        height: "236px",
        backgroundColor: "white",
        id: "row3"
    });
    $.__views.addView.add($.__views.row3);
    $.__views.__alloyId16 = Ti.UI.createView({
        id: "__alloyId16"
    });
    $.__views.row3.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createButton({
        top: "30px",
        left: "96px",
        height: "176px",
        width: "176px",
        title: "MyStream",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    myOurchive ? $.__views.__alloyId17.addEventListener("click", myOurchive) : __defers["$.__views.__alloyId17!click!myOurchive"] = true;
    $.__views.tableHeader = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "70px",
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
        bottom: "4px",
        height: "224px",
        width: Ti.UI.FILL,
        backgroundColor: "gray",
        id: "events"
    });
    $.__views.homeView.add($.__views.events);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menuBtn!click!openMenu"] && $.__views.menuBtn.addEventListener("click", openMenu);
    __defers["$.__views.__alloyId12!click!addPhoto"] && $.__views.__alloyId12.addEventListener("click", addPhoto);
    __defers["$.__views.__alloyId13!click!addVideo"] && $.__views.__alloyId13.addEventListener("click", addVideo);
    __defers["$.__views.__alloyId14!click!addText"] && $.__views.__alloyId14.addEventListener("click", addText);
    __defers["$.__views.__alloyId17!click!myOurchive"] && $.__views.__alloyId17.addEventListener("click", myOurchive);
    __defers["$.__views.addEvent!click!addEvent"] && $.__views.addEvent.addEventListener("click", addEvent);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;