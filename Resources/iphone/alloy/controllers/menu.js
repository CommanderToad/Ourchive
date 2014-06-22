function Controller() {
    function closeWindow() {
        if (Alloy.Globals.previous != $.addPhotoWin) {
            Alloy.Globals.previous.open();
            $.menuWin.close();
        } else $.menuWin.close();
    }
    function homeWindow() {
        if (Alloy.Globals.previous == Alloy.Globals.homeWin) $.menuWin.close(); else {
            Alloy.Globals.homeWin.open();
            $.menuWin.close();
        }
    }
    function addText() {
        Alloy.createController("addText").getView().open();
        $.menuWin.close();
    }
    function addPhoto() {
        Alloy.createController("addPhoto").getView().open();
        $.menuWin.close();
    }
    function addEvent() {
        Alloy.createController("addEvent").getView().open();
        $.menuWin.close();
    }
    function addVideo() {
        Alloy.createController("addVideo").getView().open();
        $.menuWin.close();
    }
    function myOurchive() {
        Alloy.createController("myOurchive").getView().open();
        $.menuWin.close();
    }
    function settings() {
        Alloy.createController("settings").getView().open();
        $.menuWin.close();
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
        left: "400px",
        color: "red",
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
    $.__views.myBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "My Ourchive",
        id: "myBtn"
    });
    $.__views.menuView.add($.__views.myBtn);
    myOurchive ? $.__views.myBtn.addEventListener("click", myOurchive) : __defers["$.__views.myBtn!click!myOurchive"] = true;
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
    $.__views.videoBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Video",
        id: "videoBtn"
    });
    $.__views.menuView.add($.__views.videoBtn);
    addVideo ? $.__views.videoBtn.addEventListener("click", addVideo) : __defers["$.__views.videoBtn!click!addVideo"] = true;
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
    addEvent ? $.__views.eventBtn.addEventListener("click", addEvent) : __defers["$.__views.eventBtn!click!addEvent"] = true;
    $.__views.__alloyId35 = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "All Events",
        id: "__alloyId35"
    });
    $.__views.menuView.add($.__views.__alloyId35);
    $.__views.settingsBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Settings",
        id: "settingsBtn"
    });
    $.__views.menuView.add($.__views.settingsBtn);
    settings ? $.__views.settingsBtn.addEventListener("click", settings) : __defers["$.__views.settingsBtn!click!settings"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.menuWin = $.menuWin;
    __defers["$.__views.closeBtn!click!closeWindow"] && $.__views.closeBtn.addEventListener("click", closeWindow);
    __defers["$.__views.homeBtn!click!homeWindow"] && $.__views.homeBtn.addEventListener("click", homeWindow);
    __defers["$.__views.myBtn!click!myOurchive"] && $.__views.myBtn.addEventListener("click", myOurchive);
    __defers["$.__views.photoBtn!click!addPhoto"] && $.__views.photoBtn.addEventListener("click", addPhoto);
    __defers["$.__views.videoBtn!click!addVideo"] && $.__views.videoBtn.addEventListener("click", addVideo);
    __defers["$.__views.textBtn!click!addText"] && $.__views.textBtn.addEventListener("click", addText);
    __defers["$.__views.eventBtn!click!addEvent"] && $.__views.eventBtn.addEventListener("click", addEvent);
    __defers["$.__views.settingsBtn!click!settings"] && $.__views.settingsBtn.addEventListener("click", settings);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;