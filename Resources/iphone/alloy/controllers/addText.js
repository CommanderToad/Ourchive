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
<<<<<<< HEAD
    $.__views.__alloyId12 = Ti.UI.createView({
        top: "15px",
        layout: "horizontal",
        height: "50px",
        id: "__alloyId12"
    });
    $.__views.addText.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createButton({
=======
    $.__views.__alloyId22 = Ti.UI.createView({
        top: "15px",
        layout: "horizontal",
        height: "50px",
        id: "__alloyId22"
    });
    $.__views.addText.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createButton({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createButton({
=======
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createButton({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId14"
    });
    $.__views.__alloyId12.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createButton({
=======
        id: "__alloyId24"
    });
    $.__views.__alloyId22.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createButton({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId15"
    });
    $.__views.__alloyId12.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        top: "15px",
        layout: "horizontal",
        height: "50px",
        id: "__alloyId16"
    });
    $.__views.addText.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createButton({
=======
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
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createButton({
=======
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createButton({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId18"
    });
    $.__views.__alloyId16.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createButton({
=======
        id: "__alloyId28"
    });
    $.__views.__alloyId26.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createButton({
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId19"
    });
    $.__views.__alloyId16.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        top: "10px",
        layout: "horizontal",
        height: "236px",
        id: "__alloyId20"
    });
    $.__views.addText.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createImageView({
=======
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
>>>>>>> FETCH_HEAD
        top: "20px",
        left: "96px",
        height: "176px",
        width: "176px",
        image: "images/icon-check.png",
<<<<<<< HEAD
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createImageView({
=======
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
        top: "30px",
        left: "96px",
        height: "176px",
        width: "176px",
        image: "images/icon-x.png",
<<<<<<< HEAD
        id: "__alloyId22"
    });
    $.__views.__alloyId20.add($.__views.__alloyId22);
=======
        id: "__alloyId32"
    });
    $.__views.__alloyId30.add($.__views.__alloyId32);
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    focusTextField();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;