function Controller() {
    function openVideoCamera() {
        Titanium.Media.showCamera({
            success: function(e) {
                if (e.mediaType === Titanium.Media.MEDIA_TYPE_VIDEO) {
                    var takenVideo = e.media;
                    movieFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, "mymovie.mov");
                    movieFile.write(takenVideo);
                }
            },
            error: function() {
                alert("There was an error");
                Alloy.Globals.homeWin.open();
                $.addVideoWin.close();
            },
            cancel: function() {
                Alloy.Globals.homeWin.open();
                $.addVideoWin.close();
            },
            allowEditing: true,
            saveToPhotoGallery: true,
            mediaTypes: [ Titanium.Media.MEDIA_TYPE_VIDEO ],
            videoQuality: Titanium.Media.QUALITY_HIGH
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addVideo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.addVideo = Ti.UI.createView({
        id: "addVideo"
    });
    $.__views.addVideo && $.addTopLevelView($.__views.addVideo);
    $.__views.addVideoView = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "gray",
        width: "100%",
        height: "1046px",
        id: "addVideoView"
    });
    $.__views.addVideo.add($.__views.addVideoView);
    $.__views.videoThumbnail = Ti.UI.createImageView({
        id: "videoThumbnail"
    });
    $.__views.addVideoView.add($.__views.videoThumbnail);
    $.__views.eventDescription = Ti.UI.createTextArea({
        height: "180px",
        width: "86%",
        backgroundColor: "white",
        top: "10px",
        id: "eventDescription",
        hintText: "Description"
    });
    $.__views.addVideoView.add($.__views.eventDescription);
    $.__views.tagView = Ti.UI.createView({
        layout: "horizontal",
        height: "40px",
        width: "86%",
        id: "tagView"
    });
    $.__views.addVideoView.add($.__views.tagView);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        text: "Tags",
        id: "__alloyId12"
    });
    $.__views.tagView.add($.__views.__alloyId12);
    $.__views.tagsDescription = Ti.UI.createLabel({
        left: "250px",
        font: {
            fontFamily: "Helvetica",
            fontSize: "8dp",
            fontStyle: "italic",
            fontWeight: "normal"
        },
        text: "Video Description",
        id: "tagsDescription"
    });
    $.__views.tagView.add($.__views.tagsDescription);
    $.__views.eventTags = Ti.UI.createTextField({
        height: "90px",
        width: "86%",
        backgroundColor: "white",
        top: "10px",
        id: "eventTags"
    });
    $.__views.addVideoView.add($.__views.eventTags);
    $.__views.submitBtnView = Ti.UI.createView({
        top: "20px",
        width: "87%",
        layout: "horizontal",
        id: "submitBtnView"
    });
    $.__views.addVideoView.add($.__views.submitBtnView);
    $.__views.submitBtn = Ti.UI.createButton({
        width: "50%",
        backgroundColor: "green",
        title: "Submit",
        id: "submitBtn"
    });
    $.__views.submitBtnView.add($.__views.submitBtn);
    $.__views.cancelBtn = Ti.UI.createButton({
        width: "50%",
        backgroundColor: "red",
        title: "Cancel",
        id: "cancelBtn"
    });
    $.__views.submitBtnView.add($.__views.cancelBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    openVideoCamera();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;