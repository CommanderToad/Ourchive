function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "ds.slideMenu/" + s : s.substring(0, index) + "/ds.slideMenu/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("ds.slideMenu");
    this.__widgetId = "ds.slideMenu";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.containerview = Ti.UI.createView({
        id: "containerview"
    });
    $.__views.containerview && $.addTopLevelView($.__views.containerview);
    $.__views.leftMenu = Ti.UI.createView({
        layout: "vertical",
        top: 0,
        left: 0,
        width: 270,
        zIndex: "2",
        backgroundColor: "#FFF",
        id: "leftMenu"
    });
    $.__views.containerview.add($.__views.leftMenu);
    $.__views.menuView = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "gray",
        id: "menuView"
    });
    $.__views.leftMenu.add($.__views.menuView);
    $.__views.titleView = Ti.UI.createView({
        layout: "absolute",
        height: "135px",
        width: "100%",
        id: "titleView"
    });
    $.__views.menuView.add($.__views.titleView);
    $.__views.menuTitle = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        left: "3%",
        font: {
            fontSize: "18dp"
        },
        top: "60px",
        text: "Menu",
        id: "menuTitle"
    });
    $.__views.titleView.add($.__views.menuTitle);
    $.__views.homeView = Ti.UI.createView({
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
        top: "3px",
        id: "homeView"
    });
    $.__views.menuView.add($.__views.homeView);
    $.__views.__alloyId0 = Ti.UI.createImageView({
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/home.png",
        id: "__alloyId0"
    });
    $.__views.homeView.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        left: "17%",
        font: {
            fontFamily: "Helvetica",
            fontSize: "16dp",
            fontWeight: "normal"
        },
        text: "Home",
        id: "__alloyId1"
    });
    $.__views.homeView.add($.__views.__alloyId1);
    $.__views.myBtn = Ti.UI.createView({
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
        top: "3px",
        id: "myBtn"
    });
    $.__views.menuView.add($.__views.myBtn);
    $.__views.__alloyId2 = Ti.UI.createImageView({
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/myourchive.png",
        id: "__alloyId2"
    });
    $.__views.myBtn.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        left: "17%",
        font: {
            fontFamily: "Helvetica",
            fontSize: "16dp",
            fontWeight: "normal"
        },
        text: "My Ourchive",
        id: "__alloyId3"
    });
    $.__views.myBtn.add($.__views.__alloyId3);
    $.__views.addPhoto = Ti.UI.createView({
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
        top: "3px",
        id: "addPhoto"
    });
    $.__views.menuView.add($.__views.addPhoto);
    $.__views.__alloyId4 = Ti.UI.createImageView({
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/photo.png",
        id: "__alloyId4"
    });
    $.__views.addPhoto.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        left: "17%",
        font: {
            fontFamily: "Helvetica",
            fontSize: "16dp",
            fontWeight: "normal"
        },
        text: "Photos",
        id: "__alloyId5"
    });
    $.__views.addPhoto.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createImageView({
        right: "5%",
        height: "50px",
        width: "50px",
        image: "images/menu/add.png",
        id: "__alloyId6"
    });
    $.__views.addPhoto.add($.__views.__alloyId6);
    $.__views.addVideo = Ti.UI.createView({
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
        top: "3px",
        id: "addVideo"
    });
    $.__views.menuView.add($.__views.addVideo);
    $.__views.__alloyId7 = Ti.UI.createImageView({
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/video.png",
        id: "__alloyId7"
    });
    $.__views.addVideo.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        left: "17%",
        font: {
            fontFamily: "Helvetica",
            fontSize: "16dp",
            fontWeight: "normal"
        },
        text: "Videos",
        id: "__alloyId8"
    });
    $.__views.addVideo.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createImageView({
        right: "5%",
        height: "50px",
        width: "50px",
        image: "images/menu/add.png",
        id: "__alloyId9"
    });
    $.__views.addVideo.add($.__views.__alloyId9);
    $.__views.addText = Ti.UI.createView({
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
        top: "3px",
        id: "addText"
    });
    $.__views.menuView.add($.__views.addText);
    $.__views.__alloyId10 = Ti.UI.createImageView({
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/text.png",
        id: "__alloyId10"
    });
    $.__views.addText.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        left: "17%",
        font: {
            fontFamily: "Helvetica",
            fontSize: "16dp",
            fontWeight: "normal"
        },
        text: "Text",
        id: "__alloyId11"
    });
    $.__views.addText.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createImageView({
        right: "5%",
        height: "50px",
        width: "50px",
        image: "images/menu/add.png",
        id: "__alloyId12"
    });
    $.__views.addText.add($.__views.__alloyId12);
    $.__views.addAudio = Ti.UI.createView({
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
        top: "3px",
        id: "addAudio"
    });
    $.__views.menuView.add($.__views.addAudio);
    $.__views.__alloyId13 = Ti.UI.createImageView({
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/audio.png",
        id: "__alloyId13"
    });
    $.__views.addAudio.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        left: "17%",
        font: {
            fontFamily: "Helvetica",
            fontSize: "16dp",
            fontWeight: "normal"
        },
        text: "Audio",
        id: "__alloyId14"
    });
    $.__views.addAudio.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createImageView({
        right: "5%",
        height: "50px",
        width: "50px",
        image: "images/menu/add.png",
        id: "__alloyId15"
    });
    $.__views.addAudio.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        height: "2%",
        width: "100%",
        id: "__alloyId16"
    });
    $.__views.menuView.add($.__views.__alloyId16);
    $.__views.addEvent = Ti.UI.createView({
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
        top: "3px",
        id: "addEvent"
    });
    $.__views.menuView.add($.__views.addEvent);
    $.__views.__alloyId17 = Ti.UI.createImageView({
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/newevent.png",
        id: "__alloyId17"
    });
    $.__views.addEvent.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        left: "17%",
        font: {
            fontFamily: "Helvetica",
            fontSize: "16dp",
            fontWeight: "normal"
        },
        text: "New Event",
        id: "__alloyId18"
    });
    $.__views.addEvent.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createImageView({
        right: "5%",
        height: "50px",
        width: "50px",
        image: "images/menu/add.png",
        id: "__alloyId19"
    });
    $.__views.addEvent.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
        top: "3px",
        id: "__alloyId20"
    });
    $.__views.menuView.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createImageView({
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/allevents.png",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        left: "17%",
        font: {
            fontFamily: "Helvetica",
            fontSize: "16dp",
            fontWeight: "normal"
        },
        text: "All Events",
        id: "__alloyId22"
    });
    $.__views.__alloyId20.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        height: "2%",
        width: "100%",
        id: "__alloyId23"
    });
    $.__views.menuView.add($.__views.__alloyId23);
    $.__views.settings = Ti.UI.createView({
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
        top: "3px",
        id: "settings"
    });
    $.__views.menuView.add($.__views.settings);
    $.__views.__alloyId24 = Ti.UI.createImageView({
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/settings.png",
        id: "__alloyId24"
    });
    $.__views.settings.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        left: "17%",
        font: {
            fontFamily: "Helvetica",
            fontSize: "16dp",
            fontWeight: "normal"
        },
        text: "Settings",
        id: "__alloyId25"
    });
    $.__views.settings.add($.__views.__alloyId25);
    $.__views.movableview = Ti.UI.createView({
        top: 0,
        left: 0,
        right: 0,
        width: 320,
        zIndex: "3",
        id: "movableview"
    });
    $.__views.containerview.add($.__views.movableview);
    $.__views.shadowview = Ti.UI.createView({
        backgroundColor: "white",
        id: "shadowview"
    });
    $.__views.movableview.add($.__views.shadowview);
    $.__views.navview = Ti.UI.createView({
        top: 0,
        left: 0,
        right: 0,
        width: 320,
        height: "135px",
        backgroundColor: "#BDBDBD",
        id: "navview"
    });
    $.__views.shadowview.add($.__views.navview);
    $.__views.leftButton = Ti.UI.createButton({
        backgroundImage: "none",
        image: "/ds.slideMenu/ButtonMenu.png",
        left: 0,
        top: "40px",
        width: 44,
        height: 44,
        style: "none",
        id: "leftButton"
    });
    $.__views.navview.add($.__views.leftButton);
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#555555",
        textAlign: "center",
        top: "60px",
        font: {
            fontFamily: "Helvetica",
            fontSize: "25dp",
            fontStyle: "italic",
            fontWeight: "normal"
        },
        text: "Add a Moment",
        id: "title"
    });
    $.__views.navview.add($.__views.title);
    $.__views.contentview = Ti.UI.createView({
        top: "135px",
        right: 0,
        width: 320,
        height: Ti.UI.Fill,
        backgroundColor: "white",
        id: "contentview"
    });
    $.__views.shadowview.add($.__views.contentview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var animateRight = Ti.UI.createAnimation({
        left: 270,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var animateReset = Ti.UI.createAnimation({
        left: 0,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var touchStartX = 0;
    var touchRightStarted = false;
    var touchLeftStarted = false;
    var buttonPressed = false;
    var hasSlided = false;
    var direction = "reset";
    $.movableview.addEventListener("touchstart", function(e) {
        touchStartX = e.x;
    });
    $.movableview.addEventListener("touchend", function() {
        if (buttonPressed) {
            buttonPressed = false;
            return;
        }
        if ($.movableview.left >= 180 && touchRightStarted) {
            direction = "right";
            $.leftButton.touchEnabled = false;
            $.movableview.animate(animateRight);
            hasSlided = true;
        } else if (-180 >= $.movableview.left && touchLeftStarted) {
            direction = "left";
            hasSlided = true;
        } else {
            direction = "reset";
            $.leftButton.touchEnabled = true;
            $.movableview.animate(animateReset);
            hasSlided = false;
        }
        Ti.App.fireEvent("sliderToggled", {
            hasSlided: hasSlided,
            direction: direction
        });
        touchRightStarted = false;
        touchLeftStarted = false;
    });
    $.movableview.addEventListener("touchmove", function(e) {
        var coords = $.movableview.convertPointToView({
            x: e.x,
            y: e.y
        }, $.containerview);
        var newLeft = coords.x - touchStartX;
        touchRightStarted && 180 >= newLeft && newLeft >= 0 || touchLeftStarted && 0 >= newLeft && newLeft >= -180 ? $.movableview.animate({
            left: newLeft,
            duration: 7
        }) : touchRightStarted && 0 > newLeft || touchLeftStarted && newLeft > 0 ? $.movableview.left = 0 : touchRightStarted && newLeft > 180 ? $.movableview.left = 180 : touchLeftStarted && -180 > newLeft && ($.movableview.left = -180);
        if (newLeft > 5 && !touchLeftStarted && !touchRightStarted) {
            touchRightStarted = true;
            Ti.App.fireEvent("sliderToggled", {
                hasSlided: false,
                direction: "right"
            });
        } else -5 > newLeft && !touchRightStarted && !touchLeftStarted;
    });
    $.leftButton.addEventListener("touchend", function() {
        if (!touchRightStarted && !touchLeftStarted) {
            buttonPressed = true;
            $.toggleLeftSlider();
        }
    });
    exports.toggleLeftSlider = function() {
        if (hasSlided) {
            direction = "reset";
            $.leftButton.touchEnabled = true;
            $.movableview.animate(animateReset);
            hasSlided = false;
        } else {
            direction = "right";
            $.leftButton.touchEnabled = false;
            $.movableview.animate(animateRight);
            hasSlided = true;
        }
        Ti.App.fireEvent("sliderToggled", {
            hasSlided: hasSlided,
            direction: direction
        });
    };
    exports.handleRotation = function() {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;