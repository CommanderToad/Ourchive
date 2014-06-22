function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menurow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.menuView = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "gray",
        id: "menuView"
    });
    $.__views.menuView && $.addTopLevelView($.__views.menuView);
    $.__views.titleView = Ti.UI.createView({
        top: "30px",
        layout: "horizontal",
        height: "95px",
        width: "90%",
        left: "20px",
        id: "titleView"
    });
    $.__views.menuView.add($.__views.titleView);
    $.__views.menuTitle = Ti.UI.createLabel({
        left: "10px",
        text: "Menu",
        id: "menuTitle"
    });
    $.__views.titleView.add($.__views.menuTitle);
    $.__views.homeBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Home",
        id: "homeBtn"
    });
    $.__views.menuView.add($.__views.homeBtn);
    $.__views.myBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "My Ourchive",
        id: "myBtn"
    });
    $.__views.menuView.add($.__views.myBtn);
    $.__views.photoBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Photo",
        id: "photoBtn"
    });
    $.__views.menuView.add($.__views.photoBtn);
    $.__views.videoBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Video",
        id: "videoBtn"
    });
    $.__views.menuView.add($.__views.videoBtn);
    $.__views.textBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Text",
        id: "textBtn"
    });
    $.__views.menuView.add($.__views.textBtn);
    $.__views.audioBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Audio",
        id: "audioBtn"
    });
    $.__views.menuView.add($.__views.audioBtn);
    $.__views.eventBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "New Event",
        id: "eventBtn"
    });
    $.__views.menuView.add($.__views.eventBtn);
    $.__views.__alloyId6 = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "All Events",
        id: "__alloyId6"
    });
    $.__views.menuView.add($.__views.__alloyId6);
    $.__views.settingsBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Settings",
        id: "settingsBtn"
    });
    $.__views.menuView.add($.__views.settingsBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.icon.image = args.image;
    $.title.text = args.title || "";
    $.row.customView = args.customView || "";
    $.row.customTitle = $.title;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;