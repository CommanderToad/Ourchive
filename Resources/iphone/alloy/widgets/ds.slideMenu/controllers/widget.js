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
<<<<<<< HEAD
    $.__views.__alloyId0 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.homeView = Ti.UI.createView({
=======
    $.__views.__alloyId0 = Ti.UI.createImageView({
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/close.png",
        id: "__alloyId0"
    });
    $.__views.titleView.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
<<<<<<< HEAD
        top: "1%",
        id: "homeView"
    });
    $.__views.menuView.add($.__views.homeView);
    $.__views.__alloyId0 = Ti.UI.createImageView({
=======
        top: "3px",
        id: "__alloyId0"
    });
<<<<<<< HEAD
    $.__views.menuView.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createImageView({
=======
    $.__views.menuView.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/home.png",
<<<<<<< HEAD
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId0"
    });
    $.__views.homeView.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
=======
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId2"
=======
<<<<<<< HEAD
        id: "__alloyId1"
    });
    $.__views.homeView.add($.__views.__alloyId1);
    $.__views.myBtn = Ti.UI.createView({
=======
        id: "__alloyId3"
>>>>>>> FETCH_HEAD
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        height: "2%",
        width: "100%",
        id: "__alloyId3"
    });
<<<<<<< HEAD
    $.__views.menuView.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
=======
    $.__views.menuView.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
<<<<<<< HEAD
        top: "1%",
        id: "myBtn"
    });
    $.__views.menuView.add($.__views.myBtn);
    $.__views.__alloyId2 = Ti.UI.createImageView({
=======
        top: "3px",
        id: "__alloyId4"
    });
<<<<<<< HEAD
    $.__views.menuView.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createImageView({
=======
    $.__views.menuView.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/myourchive.png",
<<<<<<< HEAD
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId2"
    });
    $.__views.myBtn.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
=======
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId6"
=======
<<<<<<< HEAD
        id: "__alloyId3"
    });
    $.__views.myBtn.add($.__views.__alloyId3);
    $.__views.addPhoto = Ti.UI.createView({
=======
        id: "__alloyId7"
>>>>>>> FETCH_HEAD
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createView({
        height: "2%",
        width: "100%",
        id: "__alloyId7"
    });
<<<<<<< HEAD
    $.__views.menuView.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
=======
    $.__views.menuView.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
<<<<<<< HEAD
        top: "1%",
        id: "addPhoto"
    });
    $.__views.menuView.add($.__views.addPhoto);
    $.__views.__alloyId4 = Ti.UI.createImageView({
=======
        top: "3px",
        id: "__alloyId8"
    });
<<<<<<< HEAD
    $.__views.menuView.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createImageView({
=======
    $.__views.menuView.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/photo.png",
<<<<<<< HEAD
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId4"
    });
    $.__views.addPhoto.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
=======
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId10"
    });
    $.__views.__alloyId8.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId5"
    });
    $.__views.addPhoto.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createImageView({
=======
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        right: "5%",
        height: "50px",
        width: "50px",
        image: "images/menu/add.png",
<<<<<<< HEAD
        id: "__alloyId11"
    });
    $.__views.__alloyId8.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId6"
    });
    $.__views.addPhoto.add($.__views.__alloyId6);
    $.__views.addVideo = Ti.UI.createView({
=======
        id: "__alloyId12"
    });
    $.__views.__alloyId9.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
<<<<<<< HEAD
        top: "1%",
        id: "addVideo"
    });
    $.__views.menuView.add($.__views.addVideo);
    $.__views.__alloyId7 = Ti.UI.createImageView({
=======
        top: "3px",
        id: "__alloyId12"
    });
<<<<<<< HEAD
    $.__views.menuView.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createImageView({
=======
    $.__views.menuView.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/video.png",
<<<<<<< HEAD
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId7"
    });
    $.__views.addVideo.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
=======
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId14"
    });
    $.__views.__alloyId12.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId8"
    });
    $.__views.addVideo.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createImageView({
=======
        id: "__alloyId15"
    });
    $.__views.__alloyId13.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        right: "5%",
        height: "50px",
        width: "50px",
        image: "images/menu/add.png",
<<<<<<< HEAD
        id: "__alloyId15"
    });
    $.__views.__alloyId12.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId9"
    });
    $.__views.addVideo.add($.__views.__alloyId9);
    $.__views.addText = Ti.UI.createView({
=======
        id: "__alloyId16"
    });
    $.__views.__alloyId13.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
<<<<<<< HEAD
        top: "1%",
        id: "addText"
    });
    $.__views.menuView.add($.__views.addText);
    $.__views.__alloyId10 = Ti.UI.createImageView({
=======
        top: "3px",
        id: "__alloyId16"
    });
<<<<<<< HEAD
    $.__views.menuView.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createImageView({
=======
    $.__views.menuView.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/text.png",
<<<<<<< HEAD
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId10"
    });
    $.__views.addText.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
=======
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId18"
    });
    $.__views.__alloyId16.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId11"
    });
    $.__views.addText.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createImageView({
=======
        id: "__alloyId19"
    });
    $.__views.__alloyId17.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        right: "5%",
        height: "50px",
        width: "50px",
        image: "images/menu/add.png",
<<<<<<< HEAD
        id: "__alloyId19"
    });
    $.__views.__alloyId16.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId12"
    });
    $.__views.addText.add($.__views.__alloyId12);
    $.__views.addAudio = Ti.UI.createView({
=======
        id: "__alloyId20"
    });
    $.__views.__alloyId17.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
<<<<<<< HEAD
        top: "1%",
        id: "addAudio"
    });
    $.__views.menuView.add($.__views.addAudio);
    $.__views.__alloyId13 = Ti.UI.createImageView({
=======
        top: "3px",
        id: "__alloyId20"
    });
<<<<<<< HEAD
    $.__views.menuView.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createImageView({
=======
    $.__views.menuView.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/audio.png",
<<<<<<< HEAD
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId13"
    });
    $.__views.addAudio.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
=======
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId22"
    });
    $.__views.__alloyId20.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId14"
    });
    $.__views.addAudio.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createImageView({
=======
        id: "__alloyId23"
    });
    $.__views.__alloyId21.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        right: "5%",
        height: "50px",
        width: "50px",
        image: "images/menu/add.png",
<<<<<<< HEAD
        id: "__alloyId23"
=======
<<<<<<< HEAD
        id: "__alloyId15"
    });
    $.__views.addAudio.add($.__views.__alloyId15);
    $.__views.addEvent = Ti.UI.createView({
=======
        id: "__alloyId24"
>>>>>>> FETCH_HEAD
    });
    $.__views.__alloyId20.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        height: "2%",
        width: "100%",
        id: "__alloyId24"
    });
<<<<<<< HEAD
    $.__views.menuView.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
=======
    $.__views.menuView.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
<<<<<<< HEAD
        top: "1%",
        id: "addEvent"
    });
    $.__views.menuView.add($.__views.addEvent);
    $.__views.__alloyId16 = Ti.UI.createImageView({
=======
        top: "3px",
        id: "__alloyId25"
    });
<<<<<<< HEAD
    $.__views.menuView.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createImageView({
=======
    $.__views.menuView.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/newevent.png",
<<<<<<< HEAD
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId16"
    });
    $.__views.addEvent.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
=======
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId27"
    });
    $.__views.__alloyId25.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "__alloyId17"
    });
    $.__views.addEvent.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createImageView({
=======
        id: "__alloyId28"
    });
    $.__views.__alloyId26.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        right: "5%",
        height: "50px",
        width: "50px",
        image: "images/menu/add.png",
<<<<<<< HEAD
        id: "__alloyId28"
    });
    $.__views.__alloyId25.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
=======
<<<<<<< HEAD
        id: "__alloyId18"
    });
    $.__views.addEvent.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
=======
        id: "__alloyId29"
    });
    $.__views.__alloyId26.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
<<<<<<< HEAD
        top: "1%",
        id: "__alloyId19"
    });
    $.__views.menuView.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createImageView({
=======
        top: "3px",
        id: "__alloyId29"
    });
<<<<<<< HEAD
    $.__views.menuView.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createImageView({
=======
    $.__views.menuView.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/allevents.png",
<<<<<<< HEAD
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
=======
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId31"
=======
<<<<<<< HEAD
        id: "__alloyId21"
    });
    $.__views.__alloyId19.add($.__views.__alloyId21);
    $.__views.settings = Ti.UI.createView({
=======
        id: "__alloyId32"
>>>>>>> FETCH_HEAD
    });
    $.__views.__alloyId29.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        height: "2%",
        width: "100%",
        id: "__alloyId32"
    });
    $.__views.menuView.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createView({
        layout: "absolute",
        width: "100%",
        height: "7%",
        backgroundColor: "#424242",
        top: "3px",
<<<<<<< HEAD
        id: "__alloyId33"
    });
    $.__views.menuView.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createImageView({
=======
        id: "__alloyId34"
=======
<<<<<<< HEAD
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.settingsBtn = Ti.UI.createButton({
=======
    $.__views.__alloyId26.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
        layout: "absolute",
        height: "7%",
        right: 0,
        width: "95%",
        backgroundColor: "#424242",
        top: "1%",
<<<<<<< HEAD
        id: "settings"
    });
    $.__views.menuView.add($.__views.settings);
    $.__views.__alloyId22 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
        id: "settingsBtn"
    });
    $.__views.menuView.add($.__views.settingsBtn);
    $.__views.__alloyId9 = Ti.UI.createLabel({
=======
        id: "__alloyId29"
>>>>>>> FETCH_HEAD
    });
    $.__views.menuView.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        left: "3%",
        height: "50px",
        width: "50px",
        image: "images/menu/settings.png",
<<<<<<< HEAD
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
        id: "__alloyId22"
    });
    $.__views.settings.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
=======
        id: "__alloyId35"
    });
<<<<<<< HEAD
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
=======
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
        id: "__alloyId35"
    });
    $.__views.__alloyId33.add($.__views.__alloyId35);
=======
<<<<<<< HEAD
        id: "__alloyId23"
    });
    $.__views.settings.add($.__views.__alloyId23);
=======
        id: "__alloyId36"
    });
<<<<<<< HEAD
    $.__views.__alloyId34.add($.__views.__alloyId36);
=======
<<<<<<< HEAD
    $.__views.settingsBtn.add($.__views.__alloyId9);
=======
    $.__views.__alloyId29.add($.__views.__alloyId31);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
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