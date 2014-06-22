function Controller() {
    function openCamera() {
        var cameraOptions = {
            success: function(event) {
                var takenPicture = event.media;
                $.photo.image = takenPicture;
            },
            cancel: function() {
                Alloy.Globals.contentview.remove(Alloy.Globals.currentView);
                var currentView = Alloy.createController("homeView").getView();
                Alloy.Globals.contentview.add(currentView);
                Alloy.Globals.title.setText("Add a Moment");
            },
            error: function(error) {
                var a = Ti.UI.createAlertDialog({
                    title: "Camera Error"
                });
                error.code == Ti.Media.NO_CAMERA ? a.setMessage("MISSING CAMERA") : a.setMessage("Unexpected error: " + error.code);
                a.show();
            },
            saveToPhotoGallery: true,
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ]
        };
        Ti.Media.isCameraSupported ? Ti.Media.showCamera(cameraOptions) : Ti.Media.openPhotoGallery(cameraOptions);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addPhoto";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addPhoto = Ti.UI.createView({
        id: "addPhoto"
    });
    $.__views.addPhoto && $.addTopLevelView($.__views.addPhoto);
    openCamera ? $.__views.addPhoto.addEventListener("open", openCamera) : __defers["$.__views.addPhoto!open!openCamera"] = true;
    $.__views.addPhotoView = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "gray",
        width: "100%",
        height: "1046px",
        id: "addPhotoView"
    });
    $.__views.addPhoto.add($.__views.addPhotoView);
    $.__views.photo = Ti.UI.createImageView({
        left: "20px",
        height: "40%",
        width: "40%",
        id: "photo"
    });
    $.__views.addPhotoView.add($.__views.photo);
    $.__views.eventDescription = Ti.UI.createTextArea({
        height: "180px",
        width: "86%",
        backgroundColor: "white",
        top: "10px",
        id: "eventDescription",
        hintText: "Description"
    });
    $.__views.addPhotoView.add($.__views.eventDescription);
    $.__views.tagView = Ti.UI.createView({
        layout: "horizontal",
        height: "40px",
        width: "86%",
        id: "tagView"
    });
    $.__views.addPhotoView.add($.__views.tagView);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        text: "Tags",
        id: "__alloyId11"
    });
    $.__views.tagView.add($.__views.__alloyId11);
    $.__views.tagsDescription = Ti.UI.createLabel({
        left: "250px",
        font: {
            fontFamily: "Helvetica",
            fontSize: "8dp",
            fontStyle: "italic",
            fontWeight: "normal"
        },
        text: "Photo Description",
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
    $.__views.addPhotoView.add($.__views.eventTags);
    $.__views.submitBtnView = Ti.UI.createView({
        top: "20px",
        width: "87%",
        layout: "horizontal",
        id: "submitBtnView"
    });
    $.__views.addPhotoView.add($.__views.submitBtnView);
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
    openCamera();
    __defers["$.__views.addPhoto!open!openCamera"] && $.__views.addPhoto.addEventListener("open", openCamera);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;