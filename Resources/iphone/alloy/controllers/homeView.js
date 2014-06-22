function Controller() {
    function addText() {
        Alloy.createController("addText").getView().open();
    }
    function addPhoto() {
        Alloy.createController("addPhoto").getView().open();
    }
    function addVideo() {
        Alloy.createController("addVideo").getView().open();
    }
    function myOurchive() {
        Alloy.createController("myOurchive").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homeView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.homeView = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "homeView"
    });
    $.__views.homeView && $.addTopLevelView($.__views.homeView);
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
    $.__views.__alloyId4 = Ti.UI.createImageView({
        top: "30px",
        left: "96px",
        height: "176px",
        width: "176px",
        image: "images/icon-photos.png",
        id: "__alloyId4"
    });
    $.__views.row1.add($.__views.__alloyId4);
    addPhoto ? $.__views.__alloyId4.addEventListener("click", addPhoto) : __defers["$.__views.__alloyId4!click!addPhoto"] = true;
    $.__views.__alloyId5 = Ti.UI.createImageView({
        top: "30px",
        left: "96px",
        height: "176px",
        width: "176px",
        image: "images/icon-video.png",
        id: "__alloyId5"
    });
    $.__views.row1.add($.__views.__alloyId5);
    addVideo ? $.__views.__alloyId5.addEventListener("click", addVideo) : __defers["$.__views.__alloyId5!click!addVideo"] = true;
    $.__views.row2 = Ti.UI.createView({
        layout: "horizontal",
        height: "236px",
        backgroundColor: "white",
        id: "row2"
    });
    $.__views.addView.add($.__views.row2);
    $.__views.__alloyId6 = Ti.UI.createImageView({
        top: "30px",
        left: "96px",
        height: "176px",
        width: "176px",
        image: "images/icon-text.png",
        id: "__alloyId6"
    });
    $.__views.row2.add($.__views.__alloyId6);
    addText ? $.__views.__alloyId6.addEventListener("click", addText) : __defers["$.__views.__alloyId6!click!addText"] = true;
    $.__views.__alloyId7 = Ti.UI.createImageView({
        top: "30px",
        left: "96px",
        height: "176px",
        width: "176px",
        image: "images/icon-audio.png",
        id: "__alloyId7"
    });
    $.__views.row2.add($.__views.__alloyId7);
    $.__views.row3 = Ti.UI.createView({
        layout: "horizontal",
        height: "236px",
        backgroundColor: "white",
        id: "row3"
    });
    $.__views.addView.add($.__views.row3);
    $.__views.myOurchiveBtn = Ti.UI.createButton({
        left: "96px",
        top: "40px",
        borderRadius: "5px",
        height: "100px",
        width: "448px",
        backgroundColor: "gray",
        title: "MyStream",
        id: "myOurchiveBtn"
    });
    $.__views.row3.add($.__views.myOurchiveBtn);
    myOurchive ? $.__views.myOurchiveBtn.addEventListener("click", myOurchive) : __defers["$.__views.myOurchiveBtn!click!myOurchive"] = true;
    $.__views.tableHeader = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "70px",
        backgroundColor: "gray",
        id: "tableHeader"
    });
    $.__views.homeView.add($.__views.tableHeader);
    $.__views.tableTitle = Ti.UI.createLabel({
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
    arguments[0] || {};
    __defers["$.__views.__alloyId4!click!addPhoto"] && $.__views.__alloyId4.addEventListener("click", addPhoto);
    __defers["$.__views.__alloyId5!click!addVideo"] && $.__views.__alloyId5.addEventListener("click", addVideo);
    __defers["$.__views.__alloyId6!click!addText"] && $.__views.__alloyId6.addEventListener("click", addText);
    __defers["$.__views.myOurchiveBtn!click!myOurchive"] && $.__views.myOurchiveBtn.addEventListener("click", myOurchive);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;