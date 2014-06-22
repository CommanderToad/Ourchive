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
    $.__views.__alloyId22 = Ti.UI.createView({
        top: "15px",
        layout: "horizontal",
        height: "50px",
        id: "__alloyId22"
    });
    $.__views.addText.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createButton({
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
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createButton({
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
        id: "__alloyId24"
    });
    $.__views.__alloyId22.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createButton({
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
        id: "__alloyId25"
    });
    $.__views.__alloyId22.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createView({
        top: "15px",
        layout: "horizontal",
        height: "50px",
        id: "__alloyId26"
    });
    $.__views.addText.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createButton({
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
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createButton({
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
        id: "__alloyId28"
    });
    $.__views.__alloyId26.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createButton({
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
        id: "__alloyId29"
    });
    $.__views.__alloyId26.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        top: "10px",
        layout: "horizontal",
        height: "236px",
        id: "__alloyId30"
    });
    $.__views.addText.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createImageView({
        top: "20px",
        left: "96px",
        height: "176px",
        width: "176px",
        image: "images/icon-check.png",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createImageView({
        top: "30px",
        left: "96px",
        height: "176px",
        width: "176px",
        image: "images/icon-x.png",
        id: "__alloyId32"
    });
    $.__views.__alloyId30.add($.__views.__alloyId32);
    exports.destroy = function() {};
    _.extend($, $.__views);
    focusTextField();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;