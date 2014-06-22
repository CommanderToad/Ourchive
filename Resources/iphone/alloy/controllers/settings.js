function Controller() {
    function openMenu() {
        Alloy.createController("menu").getView().open();
        $.settingsWin.close();
    }
    function focusTextField() {
        $.itemField.focus();
    }
    function closeWindow() {
        Alloy.Globals.homeWin.open();
        $.settingsWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.settingsWin = Ti.UI.createWindow({
        id: "settingsWin"
    });
    $.__views.settingsWin && $.addTopLevelView($.__views.settingsWin);
    focusTextField ? $.__views.settingsWin.addEventListener("open", focusTextField) : __defers["$.__views.settingsWin!open!focusTextField"] = true;
    $.__views.settingsView = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "settingsView"
    });
    $.__views.settingsWin.add($.__views.settingsView);
    $.__views.titleBar = Ti.UI.createView({
        backgroundColor: "gray",
        height: "90px",
        width: "100%",
        layout: "horizontal",
        id: "titleBar"
    });
    $.__views.settingsView.add($.__views.titleBar);
    $.__views.menuBtn = Ti.UI.createButton({
        left: "10px",
        top: "40px",
        title: "menu",
        id: "menuBtn"
    });
    $.__views.titleBar.add($.__views.menuBtn);
    openMenu ? $.__views.menuBtn.addEventListener("click", openMenu) : __defers["$.__views.menuBtn!click!openMenu"] = true;
    $.__views.title = Ti.UI.createLabel({
        left: "100px",
        top: "40px",
        text: "Add a Moment",
        id: "title"
    });
    $.__views.titleBar.add($.__views.title);
    $.__views.centerView = Ti.UI.createView({
        layout: "horizontal",
        backgroundColor: "gray",
        height: "1046px",
        width: "100%",
        id: "centerView"
    });
    $.__views.settingsView.add($.__views.centerView);
    $.__views.itemField = Ti.UI.createTextArea({
        left: "10px",
        right: "10px",
        top: "10px",
        width: "620px",
        height: "300px",
        id: "itemField",
        hintText: "New Moment"
    });
    $.__views.centerView.add($.__views.itemField);
    $.__views.submitBtn = Ti.UI.createButton({
        top: "50px",
        width: "50%",
        backgroundColor: "green",
        title: "Submit",
        id: "submitBtn"
    });
    $.__views.centerView.add($.__views.submitBtn);
    $.__views.cancelBtn = Ti.UI.createButton({
        top: "50px",
        width: "50%",
        backgroundColor: "red",
        title: "Cancel",
        id: "cancelBtn"
    });
    $.__views.centerView.add($.__views.cancelBtn);
    closeWindow ? $.__views.cancelBtn.addEventListener("click", closeWindow) : __defers["$.__views.cancelBtn!click!closeWindow"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.previous = $.settingsWin;
    __defers["$.__views.settingsWin!open!focusTextField"] && $.__views.settingsWin.addEventListener("open", focusTextField);
    __defers["$.__views.menuBtn!click!openMenu"] && $.__views.menuBtn.addEventListener("click", openMenu);
    __defers["$.__views.cancelBtn!click!closeWindow"] && $.__views.cancelBtn.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;