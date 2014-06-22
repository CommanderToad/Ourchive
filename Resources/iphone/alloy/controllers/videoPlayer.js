function Controller() {
    function playVideo() {
        $.videoPlayer.video = Alloy.Globals.takenVideo;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "videoPlayer";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.videoPlayer = Ti.Media.createVideoPlayer({
        backgroundColor: "black",
        height: "100%",
        width: "100%",
        id: "videoPlayer"
    });
    $.__views.videoPlayer && $.addTopLevelView($.__views.videoPlayer);
    playVideo ? $.__views.videoPlayer.addEventListener("open", playVideo) : __defers["$.__views.videoPlayer!open!playVideo"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.videoPlayer!open!playVideo"] && $.__views.videoPlayer.addEventListener("open", playVideo);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;