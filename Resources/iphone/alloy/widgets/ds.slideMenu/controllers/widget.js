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
        top: "30px",
        layout: "horizontal",
        height: "95px",
        width: "90%",
        left: "20px",
        id: "titleView"
    });
    $.__views.menuView.add($.__views.titleView);
    $.__views.menuTitle = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "40px",
        left: "10px",
        font: {
            fontFamily: "Helvetica",
            fontSize: "25dp",
            fontStyle: "italic",
            fontWeight: "normal"
        },
        text: "Menu",
        id: "menuTitle"
    });
    $.__views.titleView.add($.__views.menuTitle);
    $.__views.homeView = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Home",
        id: "homeView"
    });
    $.__views.menuView.add($.__views.homeView);
    $.__views.myBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "My Ourchive",
        id: "myBtn"
    });
    $.__views.menuView.add($.__views.myBtn);
    $.__views.addPhoto = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Photo",
        id: "addPhoto"
    });
    $.__views.menuView.add($.__views.addPhoto);
    $.__views.addVideo = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Video",
        id: "addVideo"
    });
    $.__views.menuView.add($.__views.addVideo);
    $.__views.addText = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Text",
        id: "addText"
    });
    $.__views.menuView.add($.__views.addText);
    $.__views.addAudio = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Audio",
        id: "addAudio"
    });
    $.__views.menuView.add($.__views.addAudio);
    $.__views.addEvent = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "New Event",
        id: "addEvent"
    });
    $.__views.menuView.add($.__views.addEvent);
    $.__views.__alloyId0 = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "All Events",
        id: "__alloyId0"
    });
    $.__views.menuView.add($.__views.__alloyId0);
    $.__views.settingsBtn = Ti.UI.createButton({
        height: "95px",
        width: "90%",
        backgroundColor: "white",
        top: "10px",
        title: "Settings",
        id: "settingsBtn"
    });
    $.__views.menuView.add($.__views.settingsBtn);
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
        shadowColor: "black",
        shadowOffset: {
            x: "0",
            y: "0"
        },
        shadowRadius: "2.5",
        id: "shadowview"
    });
    $.__views.movableview.add($.__views.shadowview);
    $.__views.navview = Ti.UI.createView({
        top: 0,
        left: 0,
        right: 0,
        width: 320,
        height: "500px",
        backgroundColor: "gray",
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
        color: "#000",
        left: "180px",
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
        left: 0,
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
            duration: 12
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