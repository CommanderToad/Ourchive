function Controller() {
    function focusTextField() {
        $.itemField.focus();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addText";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.addText = Ti.UI.createView({
        layout: "vertical",
        height: "100%",
        backgroundColor: "gray",
        id: "addText"
    });
    $.__views.addText && $.addTopLevelView($.__views.addText);
    $.__views.itemField = Ti.UI.createTextArea({
        left: "10px",
        right: "10px",
        top: "10px",
        width: "620px",
        height: "300px",
        id: "itemField",
        hintText: "New Moment"
    });
    $.__views.addText.add($.__views.itemField);
    $.__views.__alloyId3 = Ti.UI.createView({
        top: "15px",
        layout: "horizontal",
        height: "50px",
        id: "__alloyId3"
    });
    $.__views.addText.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createButton({
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
        title: "Event",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createButton({
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
        title: "Event",
        id: "__alloyId5"
    });
    $.__views.__alloyId3.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createButton({
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
        title: "Event",
        id: "__alloyId6"
    });
    $.__views.__alloyId3.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createView({
        top: "15px",
        layout: "horizontal",
        height: "50px",
        id: "__alloyId7"
    });
    $.__views.addText.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createButton({
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
        title: "Event",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createButton({
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
        title: "Event",
        id: "__alloyId9"
    });
    $.__views.__alloyId7.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createButton({
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
        title: "Event",
        id: "__alloyId10"
    });
    $.__views.__alloyId7.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createView({
        top: "10px",
        layout: "horizontal",
        height: "236px",
        id: "__alloyId11"
    });
    $.__views.addText.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createImageView({
        top: "20px",
        left: "96px",
        height: "176px",
        width: "176px",
        image: "images/icon-check.png",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createImageView({
        top: "30px",
        left: "96px",
        height: "176px",
        width: "176px",
        image: "images/icon-x.png",
        id: "__alloyId13"
    });
    $.__views.__alloyId11.add($.__views.__alloyId13);
    exports.destroy = function() {};
    _.extend($, $.__views);
    focusTextField();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;