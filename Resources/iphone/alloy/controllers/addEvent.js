function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addEvent";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.addEvent = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: "100%",
        backgroundColor: "gray",
        id: "addEvent"
    });
    $.__views.addEvent && $.addTopLevelView($.__views.addEvent);
    $.__views.addEventView = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "gray",
        width: "100%",
        height: "1046px",
        id: "addEventView"
    });
    $.__views.addEvent.add($.__views.addEventView);
    $.__views.__alloyId10 = Ti.UI.createTextField({
        height: "90px",
        width: "86%",
        backgroundColor: "white",
        top: "15px",
        hintText: "Title",
        id: "__alloyId10"
    });
    $.__views.addEventView.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createTextField({
        height: "90px",
        width: "86%",
        backgroundColor: "white",
        top: "15px",
        hintText: "Location",
        id: "__alloyId11"
    });
    $.__views.addEventView.add($.__views.__alloyId11);
    $.__views.eventDescription = Ti.UI.createTextArea({
        height: "220px",
        width: "86%",
        backgroundColor: "white",
        top: "15px",
        bottom: "15px",
        id: "eventDescription"
    });
    $.__views.addEventView.add($.__views.eventDescription);
    $.__views.tagLabel = Ti.UI.createView({
        layout: "horizontal",
        height: "40px",
        width: "86%",
        id: "tagLabel"
    });
    $.__views.addEventView.add($.__views.tagLabel);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        text: "Tags",
        id: "__alloyId12"
    });
    $.__views.tagLabel.add($.__views.__alloyId12);
    $.__views.tagDesc = Ti.UI.createLabel({
        left: "200px",
        font: {
            fontFamily: "Helvetica",
            fontSize: "9dp",
            fontStyle: "italic",
            fontWeight: "normal"
        },
        text: "For all moments in this event",
        id: "tagDesc"
    });
    $.__views.tagLabel.add($.__views.tagDesc);
    $.__views.__alloyId13 = Ti.UI.createTextField({
        height: "90px",
        width: "86%",
        backgroundColor: "white",
        top: "15px",
        id: "__alloyId13"
    });
    $.__views.addEventView.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        top: "15px",
        layout: "horizontal",
        height: "50px",
        width: "86%",
        id: "__alloyId14"
    });
    $.__views.addEventView.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createButton({
        left: "4%",
        height: "50px",
        width: "28%",
        backgroundColor: "#7A6F30",
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "12px",
            fontWeight: "normal"
        },
        title: "Tag",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createButton({
        left: "4%",
        height: "50px",
        width: "28%",
        backgroundColor: "#7A6F30",
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "12px",
            fontWeight: "normal"
        },
        title: "Tag",
        id: "__alloyId16"
    });
    $.__views.__alloyId14.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createButton({
        left: "4%",
        height: "50px",
        width: "28%",
        backgroundColor: "#545451",
        color: "white",
        font: {
            fontFamily: "Helvetica",
            fontSize: "12px",
            fontWeight: "normal"
        },
        title: "Tag",
        id: "__alloyId17"
    });
    $.__views.__alloyId14.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        top: "10px",
        layout: "absolute",
        height: "236px",
        width: "100%",
        id: "__alloyId18"
    });
    $.__views.addEventView.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createImageView({
        top: "10px",
        left: "15%",
        height: "176px",
        width: "176px",
        image: "images/icon-check.png",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createImageView({
        top: "10px",
        right: "15%",
        height: "176px",
        width: "176px",
        image: "images/icon-x.png",
        id: "__alloyId20"
    });
    $.__views.__alloyId18.add($.__views.__alloyId20);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.previous = $.addEventWin;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;