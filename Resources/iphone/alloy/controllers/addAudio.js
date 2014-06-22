function Controller() {
    function startRecording() {
        Titanium.Media.createAudioRecorder();
        Titanium.Media.AudioRecorder.start();
        var addAudio = Alloy.createController("addAudio");
        addAudio.addClass(addAudio.recordBtn, "tiny_win", {
            backgroundColor: "red"
        });
    }
    function openMenu() {
        Alloy.createController("menu").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addAudio";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addAudioWin = Ti.UI.createWindow({
        id: "addAudioWin"
    });
    $.__views.addAudioWin && $.addTopLevelView($.__views.addAudioWin);
    $.__views.iphoneStatusBar = Ti.UI.createView({
        backgroundColor: "gray",
        height: "40px",
        width: "100%",
        id: "iphoneStatusBar"
    });
    $.__views.addAudioWin.add($.__views.iphoneStatusBar);
    $.__views.addAudioView = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "addAudioView"
    });
    $.__views.addAudioWin.add($.__views.addAudioView);
    $.__views.titleBar = Ti.UI.createView({
        backgroundColor: "gray",
        height: "90px",
        width: "100%",
        layout: "horizontal",
        id: "titleBar"
    });
    $.__views.addAudioView.add($.__views.titleBar);
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
        top: "30px",
        font: {
            fontFamily: "Helvetica",
            fontSize: "20dp",
            fontStyle: "italic",
            fontWeight: "normal"
        },
        text: "Add Audio Moment",
        id: "title"
    });
    $.__views.titleBar.add($.__views.title);
    $.__views.audioPlayerView = Ti.UI.createView({
        height: "700px",
        width: "100%",
        backgroundColor: "white",
        id: "audioPlayerView"
    });
    $.__views.addAudioView.add($.__views.audioPlayerView);
    $.__views.recordBtn = Ti.UI.createButtton({
        height: "300px",
        width: "300px",
        left: "200px",
        id: "recordBtn"
    });
    $.__views.audioPlayerView.add($.__views.recordBtn);
    startRecording ? $.__views.recordBtn.addEventListener("click", startRecording) : __defers["$.__views.recordBtn!click!startRecording"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menuBtn!click!openMenu"] && $.__views.menuBtn.addEventListener("click", openMenu);
    __defers["$.__views.recordBtn!click!startRecording"] && $.__views.recordBtn.addEventListener("click", startRecording);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;