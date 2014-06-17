function Controller() {
    function openCamera() {
        var cameraOptions = {
            success: function(event) {
                var image = event.media;
                $.image.image = image;
                var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "photo" + args.data.get("id") + ".png");
                f.write(image);
                var fugitiveModel = args.data;
                fugitiveModel.set("url", f.nativePath);
                fugitiveModel.save();
                Alloy.Collections.Fugitive.fetch();
            },
            cancel: function() {
                $.addPhotoWin.close();
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
    $.__views.addPhotoWin = Ti.UI.createWindow({
        id: "addPhotoWin"
    });
    $.__views.addPhotoWin && $.addTopLevelView($.__views.addPhotoWin);
    openCamera ? $.__views.addPhotoWin.addEventListener("open", openCamera) : __defers["$.__views.addPhotoWin!open!openCamera"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.previous = $.homeWin;
    __defers["$.__views.addPhotoWin!open!openCamera"] && $.__views.addPhotoWin.addEventListener("open", openCamera);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;